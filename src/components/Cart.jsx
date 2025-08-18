import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { LikedSneaksContext } from "../context/LikedSneaksContext";
import products from "../data/products.json";
import { useNavigate } from "react-router-dom";
import { Heart, X } from "lucide-react";
import {FaShoppingBag} from "react-icons/fa";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);  {/* Cart Context*/}
  const { likedItems, toggleLike } = useContext(LikedSneaksContext);
  const navigate = useNavigate();

  const cartSneakers = products.filter((product) => cartItems.includes(product.id));

  if (cartSneakers.length === 0) {
    return  <div className="no-products-container">
  <p className="no-products">
    <span><FaShoppingBag/></span> 
    No Sneakx added to cart yet!<a href="/collection">Add some.</a> 
  </p>
</div>;
  }

  return (
    <div className="likedpage-container">
      <div className="likedproduct-grid3">
        {cartSneakers.map((product) => (
          <div className="product-card3" key={product.id}>
            <div className="addtofav2">
              <button className="favbutton2" onClick={() => toggleLike(product.id)}>
                <Heart
                  className={`heart-icon ${likedItems.includes(product.id) ? "liked" : ""}`}
                  size={20}
                  fill={likedItems.includes(product.id) ? "#ff6600" : "none"}
                  stroke={likedItems.includes(product.id) ? "#ff6600" : "black"}
                />
              </button>
            </div>

            <div className="product-img3">
              <img src={product.img} alt={product.name} onClick={() => navigate(`/cartitem/${product.id}`)}/>
              <button className="remove-button" onClick={() => removeFromCart(product.id)}>
               <X size={22} strokeWidth={1} />
              </button>
            </div>

            <div className="product-info" onClick={() => navigate(`/cartitem/${product.id}`)}>
              <h4 className="product-name">{product.name}</h4>
               <h4 className='category'>{product.category}</h4>

              <div className="price">
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                <span className="new-price">{product.price}</span>
              </div>
            </div>

            <button className="buy-btn" onClick={() => navigate(`/cartitem/${product.id}`)}>
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
