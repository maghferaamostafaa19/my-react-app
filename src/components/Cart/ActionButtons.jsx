import { Button } from "@heroui/react";

const ActionButtons = ({ emptyCart, resetCart }) => (
  <div className="cart-actions">
    <Button size="md" className="bg-red-800 text-white" onPress={emptyCart}>
      Empty
    </Button>
    <Button size="md" className="bg-yellow-800 text-white" onPress={resetCart}>
      Reset
    </Button>
  </div>
);

export default ActionButtons;
