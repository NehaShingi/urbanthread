const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const products = require("./data/products");

//Load env file. It allows to read variables from env file using process.env
dotenv.config();

//Connect to mongodb database
mongoose.connect(process.env.MONGO_URI);

//Function to seed data
const seedData = async () => {
  try {
    //Clear existing data
    await Product.deleteMany();
    await User.deleteMany();

    //Create a default admin user
    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });

    //Assign default user ID to each product
    const userID = createdUser._id;

    //Take everything that already exists in this product and additionally add the user field
    //Every product belongs to the admin so add the id of newly created admin
    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });

    //Insert the products in the database
    await Product.insertMany(sampleProducts);
    console.log("Product data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding the data", error);
    process.exit(1);
  }
};

seedData();
