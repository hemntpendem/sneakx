import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify"; {/*react-tostify for added cart item notification */}

const CartItem = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
    const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div className="not-found">Product not found.</div>;
  }

   const handleAddToCart = () => {
    addToCart(product.id);
    toast.success(`${product.name} added to cart 🛒`, {
      icon: "✅",
    });
  };

  return (
   <div className="cartitem-page">
  <div className="cartitem-container">
    <img src={product.img} alt={product.name} className="cartitem-image" />

    <div className="cartitem-info">
      <h2 className="cartitem-name">{product.name}</h2>
      <h4 className='cart-category'>{product.category}</h4>
      <div className="cartitem-price"><span className="text1">MRP : </span>{product.price}<br/><span className="text2">(incl. of all taxes)</span></div>
     
      <div className="cartitem-details">
  {/* Net Quantity */}
  <p className="net-quantity">Net Quantity: 1 Pair</p>

  {/* Size Guide */}
  <a href="#/size-guide" className="size-guide">Size Guide</a>

  {/* Size Table */}
  <div className="size-grid">
    <button>UK 5 / IND 5</button>
    <button>UK 5.5 / IND 5.5</button>
    <button>UK 6 / IND 6</button>
    <button>UK 6.5 / IND 6.5</button>
    <button>UK 7 / IND 7</button>
    <button>UK 7.5 / IND 7.5</button>
    <button>UK 8 / IND 8</button>
    <button>UK 8.5 / IND 8.5</button>
    <button>UK 9 / IND 9</button>
    <button>UK 9.5 / IND 9.5</button>
    <button>UK 10 / IND 10</button>
    <button>UK 10.5 / IND 10.5</button>
  </div>
</div>
  {/* <div className="cartitem-price">MRP:{product.price}</div> */}
      <div className="cartitem-buttons">
        <button className="buy-now">Buy Now</button>
        <button className="add-to-cart" onClick={handleAddToCart}>
          <ShoppingCart size={18} stroke="currentColor" strokeWidth={2.5}  />
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default CartItem;
