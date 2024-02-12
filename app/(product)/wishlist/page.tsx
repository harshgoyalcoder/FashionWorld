"use client"
import React, { useState } from 'react';
const Wishlist: React.FC = () => {
  // Example wishlist items (replace this with your actual wishlist data)
  const [wishlistItems, setWishlistItems] = useState<string[]>([
    'Product 1',
    'Product 2',
    'Product 3',
  ]);

  // Function to remove an item from the wishlist
  const removeFromWishlist = (index: number) => {
    const updatedWishlist = [...wishlistItems];
    updatedWishlist.splice(index, 1);
    setWishlistItems(updatedWishlist);
  };

  return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <ul className="space-y-4">
            {wishlistItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                <span>{item}</span>
                <button
                  className="text-red-500"
                  onClick={() => removeFromWishlist(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
  );
};

export default Wishlist;
