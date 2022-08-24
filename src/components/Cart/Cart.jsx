import { useContext} from "react";
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import '../main.css';


const Cart = () => {

  const { cartItems, precioTotal , clear , removeUnity, remove, sendOrder } = useContext(CartContext);

  const submit = (e) =>{
    e.preventDefault();
    const input = document.getElementsByTagName("input")
    
    const dataValue = Array.from(input).map((input) => input.value);
    
    sendOrder(precioTotal, {name: dataValue[0], telphone: dataValue[1], email: dataValue[2]});  
    setTimeout(clear,5000)
    
  }

  return (
    <div className="body">
     {cartItems =="" ? ( <div className="text-center py-20 mx-20">
                            <h1 className="underline CARRITO-VACIO text-2xl my-6 font-bold">Carrito vacio :(. </h1>
                            <Link to={"/"}>
                            <button className="m-6 inicio">Volver a empezar</button>
                            </Link>
                        </div>) :( <> 
    <div>
    <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden" id="chec-div">
    <div className="w-full z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
        <div className="flex md:flex-row flex-col justify-end" id="cart">
            <div className="w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-orange-500 overflow-y-auto overflow-x-hidden h-screen" id="scroll">
            <p className="text-5xl  font-black leading-10 text-gray-800 pt-3">Carrito de compras</p>
                {cartItems.map((item) => (
                    <div className="md:flex items-center mt-8 pt-6 border-t border-gray-200">
                    <div className="w-1/4 centroImg">
                        <img src={item.item.filename} alt={item.item.name} className=" w-10/12 object-center object-cover rounded-lg" />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                       
                        <div className="flex items-center justify-between w-full pt-1">
                            <p className="text-lg font-black leading-none text-gray-800">{item.item.title}</p>
                        </div>
                     
                        <p className="w-96 text-sm leading-3 text-gray-600 m-1">Cantidad: {item.quantity}</p>
                        <p className="text-base font-black leading-none text-gray-800 text-end">${item.item.price}</p>
                        <div className="flex w-fit flex-col pt-5 pr-6 ">        
                            <button onClick={() => remove(item.item.id)} className="eliminarArt text-xs text-start leading-3  text-red-500 cursor-pointer"><p className="eliminar-text">Eliminar Producto</p></button>
                            <button onClick={() => removeUnity(item)} className="eliminarArt eliminar-text text-xs text-start mt-1 leading-3 underline text-red-500 cursor-pointer">-1</button>
                        </div>
                       
                    </div>
                </div>
                ))}
                </div>
                <div className="FORMULARIO xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-dark">
                        <form onSubmit={submit} className="FORMULARIO-FIN m-10" >
                            <h2>Ingrese sus Datos:</h2>
                            <label htmlFor="name" className="block text-sm font-medium text-white" >Nombre</label>
                            <input type="text" name="name" id="name" placeholder="nombre completo" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-1 shadow-sm sm:text-sm border-gray-300 rounded-md" />

                            <label htmlFor="tel" className="block text-sm font-medium text-white">Telefono</label>
                            <input type="tel" name="tel" id="tel" placeholder="EJ:11XXXX-XXXX" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-1 shadow-sm sm:text-sm border-gray-300 rounded-md"/>

                            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                            <input type="email" name="email" id="email" placeholder="you@example.com" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-1 shadow-sm sm:text-sm border-gray-300 rounded-md"/>

                            <button type="submit" className="FINALIZAR-COMPRA text-base leading-none w-full my-2 py-5 bg-green-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                    Finalizar Compra
                            </button>
                        </form>
                        <div className="flex flex-col px-14 py-8 justify-between overflow-y-auto">
                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                <p className="text-2xl leading-normal text-white">Total</p>
                                <p className="text-2xl font-bold leading-normal text-right text-white">${precioTotal}</p>
                            </div>
                            <button onClick={clear} className="BORRAR-CARRITO text-base leading-none w-full py-5 bg-red-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                Borrar Carrito
                            </button>
                        </div>
                    </div>
            </div>
        </div>
</div>
</div></>)}
</div>);}

export default Cart;
 
