import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    //Simulate fetching orders from an API
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "34567",
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">My Orders</h2>
      <div className="w-24 h-1 bg-red-600  rounded-full mb-6"></div>

      {/* Mobile Order Cards */}
      <div className="space-y-4 md:hidden">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order._id}
              onClick={() => handleRowClick(order._id)}
              className="bg-white p-4 rounded-lg border border-gray-200 transition-all duration-300 hover:border-red-600 hover:shadow-lg"
            >
              {/* Top Section */}
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <img
                    src={order.orderItems[0].image}
                    alt={order.orderItems[0].name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      #{order._id}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>

                    <p className="text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>
                  </div>
                </div>

                <span
                  className={`h-fit px-3 py-1 rounded-full text-xs font-semibold ${
                    order.isPaid
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.isPaid ? "Paid" : "Pending"}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t my-4"></div>

              {/* Details */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium text-gray-800">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Items</span>
                  <span className="font-medium text-gray-800">
                    {order.orderItems.length}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Total</span>
                  <span className="font-semibold text-gray-900">
                    ${order.totalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-8">
            You have no orders yet. Start shopping to place your first order!
          </div>
        )}
      </div>
      {/*Desktop Table */}
      <div className="hidden md:block relative shadow-md sm:rounded-lg overflow-x-auto">
        <table className="w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  onClick={() => handleRowClick(order._id)}
                  className="border-b hover:bg-red-50 transition-colors duration-200 cursor-pointer"
                >
                  {/*Order Image*/}
                  <td className="py-2 px-2 sm:py-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>
                  {/*Order ID*/}
                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>

                  {/* Order Date & Time */}
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <div className="font-medium text-gray-700">
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>

                    <div className="text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </div>
                  </td>

                  {/*Shipping Address */}
                  <td className="py-2 px-2 sm:py-4 sm:px-4 ">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>

                  {/*Order Items */}
                  <td className="py-2 px-2 sm:py-4 sm:px-4 ">
                    {order.orderItems.length}
                  </td>

                  {/* Order Price */}
                  <td className="py-2 px-2 sm:py-4 sm:px-4 ">
                    ${order.totalPrice}
                  </td>

                  {/* Order Status */}
                  <td className="py-2 px-2 sm:py-4 sm:px-4 ">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                  You have no orders yet. Start shopping to place your first
                  order!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderPage;
