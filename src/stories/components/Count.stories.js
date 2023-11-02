import React, { useState } from "react";
import { Count } from "../../components/Count";

export default {
  title: "components/Count",
  component: Count,
  tags: ["autodocs"],
  argTypes: {
  },
};

export const Default = (args) => (
  <>
    <Count {...args}>
      {args.children}
    </Count>
  </>
);

//  데이터 값 넘어가는지 확인 중
// export const AppCart = (args) => {
//   const [cartItems, setCartItems] = useState(0);

//   const handleItemQuantity = (id, value) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: Math.max(1, item.quantity + value) } : item
//     );
//     setCartItems(updatedCart);
//   };

//   const item = args.item || { id: 0, quantity: 0 }; // 예시

//   return (
//     <>
//       <Count
//         onClick={(value) => handleItemQuantity(item.id, value)}
//         count={item.quantity}
//         size="small"
//         {...args}
//       >
//         {args.children}
//       </Count>
//     </>
//   );
// };