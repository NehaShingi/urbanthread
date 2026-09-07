const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const router = express.Router();

require("dotenv").config();

//Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Multer setup using memory storage
//We are telling multer to directly upload the images in RAM. This is done to avoid saving images in the server's local storage and directly upload them to Cloudinary.
const storage = multer.memoryStorage();

//upload is used as middleware to handle file uploads. It will process the incoming files and make them available in req.file or req.files.
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    //Check if req contains a file
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    //Function to handle stream upload to cloudinary
    const streamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });

        //Use streamifier to convert file buffer to stream
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });
    };

    //Call the streamUpload function
    const result = await streamUpload(req.file.buffer);

    //Respon with the uploaded image url
    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
