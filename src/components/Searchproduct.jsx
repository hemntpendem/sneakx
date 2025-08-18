import React, { useState, useRef, useContext } from 'react';
import { X, Heart } from 'lucide-react';
import products from '../data/products.json';
import { LikedSneaksContext } from '../context/LikedSneaksContext';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';



 

const Searchproduct = () => {
  const { likedItems, toggleLike } = useContext(LikedSneaksContext); 
 // Pulled from context

  const [search, setSearch] = useState('');
  const inputRef = useRef();

  const navigate = useNavigate();

  
const query = search.trim().toLowerCase();
const filteredProducts = query
  ? products.filter((product) =>
      product.name.toLowerCase().includes(query) ||
      product.category?.toLowerCase().includes(query)
    )
  : products;

  // const filteredProducts = search.trim()
  //   ? products.filter((product) =>
  //       product.name.toLowerCase().includes(search.toLowerCase())||
  //    product.category?.toLowerCase().includes(search.toLowerCase())
  //     )
  //   : products;

  return (
    <div className='productsquery'>
      {/* Sticky Search Bar */}
      <div className='search-wrapper'>
        <input
          type='text'
          className='searchbar'
          placeholder='WHAT ARE YOU LOOKING FOR?'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
        />
        <span
          className={`clear-icon ${search ? 'visible' : ''}`}
          onClick={() => {
            setSearch('');
            inputRef.current.blur();
          }}
        >
          <X size={22} strokeWidth={1} />
        </span>
      </div>

      {/* Product Grid */}
   
        <div className='searchpage-container'>
          <div className='searchproduct-grid3'>
            {filteredProducts.length === 0 ? (
             <div className="no-products-container">
  <p className="no-products">
    <span><FaSearch/></span> 
    No products found. Try a different keyword.
  </p>
</div>

            ) : (
              filteredProducts.map((item) => (
                <div className='product-card3' key={item.id}>
                  <div className='addtofav2'>
                    <button className='favbutton2' onClick={() => toggleLike(item.id)}>
                      <Heart
                      
                        size={20}
                        fill={likedItems.includes(item.id) ? '#ff6600' : 'none'}
                        stroke={likedItems.includes(item.id) ? '#ff6600' : 'black'}
                      />
                    </button>
                  </div>

                  <img src={item.img} alt={item.name} className='product-img' onClick={() => navigate(`/cartitem/${item.id}`)} />
                  <div className='product-info' onClick={() => navigate(`/cartitem/${item.id}`)}>
                    <h4 className='product-name'>{item.name}</h4>
                  <h4 className='category'>{item.category}</h4>

                    <div className='price'>
                      {item.oldPrice && <span className='old-price'>{item.oldPrice}</span>}
                      <span className='new-price'>{item.price}</span>
                    </div>
                  </div>
                  <button className="buy-btn"  onClick={() => navigate(`/cartitem/${item.id}`)}>Buy</button>
                </div>
              ))
            )}
          </div>
        </div>
        
      </div>
   
  );
};

export default Searchproduct;
