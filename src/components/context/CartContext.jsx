import React, { createContext, useState , useEffect } from "react";
import {addDoc, collection, doc, getFirestore, updateDoc} from "firebase/firestore";
import swal from 'sweetalert'

export const CartContext = createContext([]);

function CartProvider({children}){
  const [cartItems, setCartItems] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [itemCount , setItemCount] = useState(0);
  
  useEffect(()=>{
    let cantidadItems = 0
    let precio = 0
    let widgetCart = 0
    for(let itemCarrito of cartItems){
      cantidadItems += itemCarrito.quantity;
      precio += itemCarrito.quantity * itemCarrito.item.price;
      widgetCart+= 1;
    }
    setItemCount(cantidadItems);
    setPrecioTotal(precio)
  }, [cartItems]);

  const clear = () =>{
    setCartItems([]);
  };
  const remove = (itemId)=>{
    const cartUpdate = cartItems.filter((i) => i.item.id !== itemId)
    setCartItems(cartUpdate)
  }
  const removeUnity = ({item , quantity}) =>{
    if(quantity > 1){
      const update = cartItems.map(i => {
          if(i.item.id === item.id){
            return {...i, quantity: i.quantity - 1}
          }
          return i;
      })
      setCartItems(update);
    }else{
      setCartItems( cartItems.filter((i) => i.item.id !== item.id) );
    }
  };

  const addItem = (itemUpdate, cantidadUpdate) =>{
    let itemIndex = cartItems.findIndex((i) => i.item.id === itemUpdate.id );
    if(itemIndex === -1){
      setCartItems([...cartItems, {item: itemUpdate, quantity: cantidadUpdate}])
      console.log(cartItems)
    }else if(cartItems.quantity < itemUpdate.stock){
      let carritoModified = [...cartItems];
      carritoModified[itemIndex].quantity += cantidadUpdate;
      setCartItems(carritoModified);
    }else{
      swal({
        title: "¡Error!",
        text: "No es posible agregar esa cantidad de Items a tu carrito",
        icon: "error",
        button: "Cambiar"
      })
      .then((value) =>{
        switch(value){
         default:
          window.location.replace('/'); 
        }
      })
    };
  };
  

  const sendOrder = (precioTotal, dataUser) =>{
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const today  = new Date()
    const buyDate = today.toLocaleDateString("es-ES")

    const orden ={
        compra: cartItems,
        user: dataUser,
        date: buyDate,
        total: precioTotal
    }
    addDoc(orderCollection, orden)
    .then(res => swal({
      title: "¡Compra Confirmada!",
      text: `Tu Numero de Orden es:
                ${res.id}
            Utiliza este codigo para tener la referencia de la compra`,
      icon: "success",
      button: "Cerrar",
    }))
    .catch(err => console.log("error", err))
};


  return (
    <CartContext.Provider value={{cartItems, precioTotal, itemCount, remove, clear, removeUnity, addItem, sendOrder}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;