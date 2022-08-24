import ItemCount from './ItemCount';
import {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {CartContext} from '../context/CartContext.jsx';


function ItemDetail(props) {
    const {title, price, filename, stock, series} = props;
    const [cant, setCant] = useState(0);
    const { addItem } = useContext(CartContext);

    const onAdd = (cant)=>{
        setCant(cant)
        addItem( props , cant)
    }
    const navigate = useNavigate();

    function aCarrito(){ navigate("/cart") }

  return (
    <section className="body py-10">
        <div className="w-2/4 bg-neutral-300 m-auto rounded-md">
            <h2 className="font-bold text-2xl text-center p-4">{title}</h2>
            <div className="flex justify-around my-4">
                <img src={filename} alt={title} className="m-4 h-4/6 w-2/6"/>
                <div className="">
                   
                    <div>
                        <h3 className="text-gray-800 text-end text-xl">Precio: ${price}</h3>
                        <h4 className="text-gray-700">Unidades Disponibles {stock}</h4>
                       
                        <div className='text-center'>
                        {cant == 0 ?(<ItemCount stock={stock} initial={0} onAdd={onAdd} />):
                        (<><p className='text-gray-900 text-center  '>Agregaste {cant} {cant == 1 ?("Item"):("Items")}</p>
                        <button className='rounded border bg-violet-500 p-2 m-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300' onClick={aCarrito}>Ir al Carrito</button></>)}
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default ItemDetail;