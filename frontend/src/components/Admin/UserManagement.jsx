import { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      _id: 12345,
      name: "John Doe",
      email: "john@gmail.com",
      role: "admin",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", //Default Role
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      //e.target.name and e.target.value will be replaced by the name=" " and value={} the user has entered
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //reset the form after submit button is clicked
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer", //Default Role
    });
  };

  const handleRoleChange = (userId, newRole) => {
    console.log({ id: userId, newRole: newRole });
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      console.log("Deleting user with id: ", userId);
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="inline-block mb-2">
        <h1 className="text-3xl font-bold ">User Management</h1>
        <div className="w-full h-1 bg-red-600 mt-3 rounded-full"></div>
      </div>

      {/*New  User Form*/}
      <div className="p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4 ">Add New User</h3>
        <form onSubmit={handleSubmit}>
          {/*Name Field*/}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded "
              required
            />
          </div>

          {/*Email Field*/}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/*Password Field*/}
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/*Role Field*/}
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add User
          </button>
        </form>
      </div>

      {/*User List Management */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-sm uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-red-50">
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-4 ">{user.email}</td>
                <td className="p-4 ">
                  <select
                    value={user.role}
                    onChange={(e) => {
                      handleRoleChange(user._id, e.target.value);
                    }}
                    className="p-2 border rounded"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="p-4 ">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
