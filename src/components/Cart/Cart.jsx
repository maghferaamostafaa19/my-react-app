import ActionButtons from "./ActionButtons";
import Items from "./Items";

const Cart = ({ products, increment, decrement, removeProduct, emptyCart, resetCart }) => {
  const total = products.reduce((sum, product) => sum + product.price * product.items, 0);

  return (
    <section className="cart" aria-label="Shopping cart">
      <h2>Your products</h2>
      <ActionButtons emptyCart={emptyCart} resetCart={resetCart} />
      {products.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {products.map((product) => (
            <Items
              key={product.id}
              product={product}
              increment={increment}
              decrement={decrement}
              removeProduct={removeProduct}
            />
          ))}
        </div>
      )}
      <div className="cart-total"><span>Total</span><strong>{total} EGP</strong></div>
    </section>
  );
};

export default Cart;
