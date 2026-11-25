import { Button } from "@heroui/react";

const Items = ({ product, increment, decrement, removeProduct }) => (
  <article className="cart-product">
    <div>
      <h3>{product.name}</h3>
      <p>{product.price} EGP each</p>
    </div>
    <div className="cart-quantity" aria-label={`${product.name} quantity`}>
      <Button
        className="quantity-button"
        size="sm"
        aria-label={`Remove one ${product.name}`}
        onPress={() => decrement(product.id)}
      >
        -
      </Button>
      <span>{product.items}</span>
      <Button
        className="quantity-button"
        size="sm"
        aria-label={`Add one ${product.name}`}
        onPress={() => increment(product.id)}
      >
        +
      </Button>
    </div>
    <strong>{product.price * product.items} EGP</strong>
    <Button size="sm" onPress={() => removeProduct(product.id)}>
      Delete
    </Button>
  </article>
);

export default Items;
