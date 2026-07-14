import { RiDeleteBin6Line } from "react-icons/ri";
const CartContents = () => {
  const cartItems = [
    {
      productId: "P001",
      name: "Classic White T-Shirt",
      size: "M",
      color: "White",
      quantity: 2,
      price: 799,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: "P002",
      name: "Slim Fit Blue Jeans",
      size: "32",
      color: "Blue",
      quantity: 1,
      price: 1999,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: "P003",
      name: "Running Sneakers",
      size: "9",
      color: "Black",
      quantity: 1,
      price: 3499,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: "P004",
      name: "Hooded Sweatshirt",
      size: "L",
      color: "Grey",
      quantity: 1,
      price: 2499,
      image: "https://picsum.photos/200?random=4",
    },
  ];
  return (
    <div>
      {cartItems.map((product, index) => {
        return (
          <div
            key={index}
            className="flex items-start justify-between  py-4 border-b"
          >
            <div className="flex items-start">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-24 object-cover mr-4 rounded"
              />
              <div>
                <h3>{product.name}</h3>
                <p className="text-sm text-gray-500">
                  size:{product.size} | color:{product.color}
                </p>
                <div className="flex items-center mt-2">
                  <button className="border rounded px-2 py-1 text-xl font-medium">
                    +
                  </button>
                  <span className="mx-4">{product.quantity}</span>
                  <button className="border rounded px-2 py-1 text-xl font-medium">
                    -
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p>${product.price.toLocaleString()}</p>
              <button>
                <RiDeleteBin6Line className="h-6 w-6 mt-2 text-red-600" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartContents;
