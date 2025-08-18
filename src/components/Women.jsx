import React, {  useContext } from 'react';
import womenproducts from '../data/womenproducts.json';
import { Heart } from 'lucide-react';
import { LikedSneaksContext } from "../context/LikedSneaksContext";
import { useNavigate } from 'react-router-dom';
import AboutusFooter from './AboutusFooter';

const SneakerCard = ({ product }) => {
  const { likedItems, toggleLike } = useContext(LikedSneaksContext);
  const isLiked = likedItems.includes(product.id);
  
    const navigate = useNavigate();

  return (
    <div className="product-card3">
      <div className='addtofav2'>
        <button className='favbutton2' onClick={() => toggleLike(product.id)}>
          <Heart
            className={`heart-icon ${isLiked ? 'liked' : ''}`}
            size={20}
            fill={isLiked ? '#ff6600' : 'none'}
            stroke={isLiked ? '#ff6600' : 'black'}
          />
        </button>
      </div>

      <img src={product.img} alt={product.name} className="product-img" onClick={() => navigate(`/cartitem/${product.id}`)} />
      <div className='product-info' onClick={() => navigate(`/cartitem/${product.id}`)}>
        <h4 className="product-name">{product.name}</h4>
          <h4 className='category'>{product.category}</h4>
        <div className="price">
          {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
          <span className="new-price">{product.price}</span>
        </div>
      </div>
      <button className="buy-btn" onClick={() => navigate(`/cartitem/${product.id}`)}>Buy</button>
    </div>
  );
};

const Women = () => {
  

  return (
    <div className="collection-homepage">
      
      <div className="page-container">
        <div className="product-grid3">
          {womenproducts.length === 0 ? (
            <p className="no-products">
              No products found. Try changing filters or check back later.
            </p>
          ) : (
            womenproducts.map((item) => (
              <SneakerCard key={item.id} product={item} />
            ))
          )}
        </div>
      </div>
       <div className='viewproducts'>{/* viewproducts button */}
          <a href='#/collection' className='viewallproducts'>LOAD MORE</a>
         
        </div>
     <AboutusFooter />
    </div>
  );
};

export default Women;
