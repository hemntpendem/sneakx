import React, { useContext } from "react";
import products from "../data/products.json";
import { Heart } from "lucide-react";
import { LikedSneaksContext } from "../context/LikedSneaksContext";
import { useNavigate } from "react-router-dom";

const Homegrid = () => {
  const { likedItems, toggleLike } = useContext(LikedSneaksContext);
  
  const navigate = useNavigate();

  // Show only items from id 30 to 42  (3 rows if each row has 4 products)
  const limitedProducts = products.slice(30, 42);

  return (
    <div className="collection-homepage homegridpage">
      <div className="page-container homegrid-container">
        <div className="product-grid3  homegrid">
          {limitedProducts.length === 0 ? (
            <p className="no-products">No products found.</p>
          ) : (
            limitedProducts.map((product) => {
              const isLiked = likedItems.includes(product.id);
              return (
                <div key={product.id} className="product-card3">
                  <div className="addtofav2">
                    <button
                      className="favbutton2"
                      onClick={() => toggleLike(product.id)}
                    >
                      <Heart
                        className={`heart-icon ${isLiked ? "liked" : ""}`}
                        size={20}
                        fill={isLiked ? "#ff6600" : "none"}
                        stroke={isLiked ? "#ff6600" : "black"}
                      />
                    </button>
                  </div>

                  <img
                    src={product.img}
                    alt={product.name}
                    className="product-img"
                    onClick={() => navigate(`/cartitem/${product.id}`)}
                  />

                  <div
                    className="product-info"
                    onClick={() => navigate(`/cartitem/${product.id}`)}
                  >
                    <h4 className="product-name">{product.name}</h4>
                    <div className="price">
                      {product.oldPrice && (
                        <span className="old-price">{product.oldPrice}</span>
                      )}
                      <span className="new-price">{product.price}</span>
                    </div>
                  </div>

                  <button
                    className="buy-btn"
                    onClick={() => navigate(`/cartitem/${product.id}`)}
                  >
                    Buy
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Homegrid;
