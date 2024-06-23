export const showAlert = (message) => {
    alert(message);
  };
  
  export const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  