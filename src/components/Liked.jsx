import React, { useContext } from "react";
import { LikedSneaksContext } from "../context/LikedSneaksContext";
import products from "../data/products.json";
import { Heart } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";


const Liked = () => {
 const navigate = useNavigate();


  const { likedItems, toggleLike } = useContext(LikedSneaksContext);

  // Convert likedItem keys to numbers (to match product.id type)
 const likedProductIds = likedItems;

  // Filter products using matched numeric ids
  const likedProducts = products.filter((product) =>
    likedProductIds.includes(product.id)
  );

  return (
    <div className="likedpage-container">
      <div className="likedproduct-grid3">
        {likedProducts.length === 0 ? (
           <div className="no-products-container">
  <p className="no-products">
    <span><FaHeart /></span> 
    No Sneakx liked yet! <a href='/collection'>Give some love.</a>
  </p>
</div>
        ) : (
          likedProducts.map((product) => (
            <div key={product.id} className="product-card3">
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

              <img src={product.img} alt={product.name} className="product-img3" onClick={() => navigate(`/cartitem/${product.id}`)} />
             <div className='product-info' onClick={() => navigate(`/cartitem/${product.id}`)}>
              <h4 className="product-name">{product.name}</h4>
               <h4 className='category'>{product.category}</h4>

              {/* <div className="rating">{product.rating}</div> */}
              <div className="price">
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                <span className="new-price">{product.price}</span>
              </div>
              </div>
               <button className="buy-btn" onClick={() => navigate(`/cartitem/${product.id}`)}>Buy</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Liked;
