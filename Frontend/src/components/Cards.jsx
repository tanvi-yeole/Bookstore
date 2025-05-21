//// filepath: d:\Programming\tanvi-projects\Bookstore\Frontend\src\components\Cards.jsx
import React, { useState } from "react";

function Cards({ item }) {
  const [showToast, setShowToast] = useState(false);
  const token = localStorage.getItem("token");

  function handleAddToCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("cartUpdated"));

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }

  return (
    <>
      <div className="mt-4 my-3">
        <div className="card w-92 md:w-96 shadow-xl hover:scale-105 duration-200 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              {token ? (
                <>
                  <div className="badge badge-outline">${item.price}</div>
                  <button
                    className="cursor-pointer px-3 py-2 badge badge-outline hover:bg-green-600 hover:text-white duration-200"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </>

              ) : (
                <div className="badge badge-outline">${item.price}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast toast-bottom toast-end z-[9999]">
          <div className="alert alert-success">
            <span>Item added to cart!</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Cards;