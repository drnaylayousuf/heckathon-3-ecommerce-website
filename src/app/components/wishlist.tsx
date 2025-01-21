// components/Wishlist.js
import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import heart icons

const Wishlist = () => {
  // State to store the wishlist items
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [items, setItems] = useState<string[]>(["Item 1", "Item 2", "Item 3"]); // Example items

  // Load wishlist from localStorage on component mount (if any)
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (savedWishlist) {
      setWishlist(savedWishlist);
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]);

  // Function to add or remove an item from the wishlist
  const toggleWishlistItem = (item: string) => {
    if (wishlist.includes(item)) {
      setWishlist((prevWishlist) => prevWishlist.filter((wish) => wish !== item)); // Remove from wishlist
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, item]); // Add to wishlist
    }
  };

  return (
    <div>
      <h2>Wishlist</h2>

      <h3>Items List:</h3>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            {/* Button to toggle item in the wishlist */}
            <button
              onClick={() => toggleWishlistItem(item)}
              style={{
                padding: "10px",
                backgroundColor: "transparent",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {/* Display the heart icon dynamically */}
              {wishlist.includes(item) ? (
                <FaHeart style={{ color: "red", marginRight: "8px" }} />
              ) : (
                <FaRegHeart style={{ color: "gray", marginRight: "8px" }} />
              )}
              {item}
            </button>
          </div>
        ))}
      </div>

      <h3>Your Wishlist:</h3>
      <ul>
        {wishlist.length === 0 ? (
          <li>No items in your wishlist.</li>
        ) : (
          wishlist.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <button onClick={() => toggleWishlistItem(item)}>Remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Wishlist;
