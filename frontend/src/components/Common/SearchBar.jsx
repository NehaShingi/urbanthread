import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  {
    /* Function to handle search icon and input field toggle */
  }
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  {
    /* Function to handle search submission */
  }
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    setIsOpen(false);
  };
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? " absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"}`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            ></input>
            {/* Search Icon */}
            <button
              type="submit"
              className="absolute right-2 top-5 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>
          {/* Close Icon */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute right-9 top-4 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <IoClose className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6 " />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
