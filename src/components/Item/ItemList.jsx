import Item from './Item.jsx';
import '../main.css'
import { useParams } from 'react-router-dom';

function ItemList(props){
  const {serie} = useParams();
    return(
    <div className="body">
    <div className="max-w-2xl mx-auto py-6 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>
      {props.funkos.length >= 103 ? <h5></h5> : <h2 className='text-4xl text-center	text-slate-100 py-3'>{serie}</h2>}
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
        {props.funkos.map((datos) => (
            <Item img={datos.filename} title={datos.title} price={datos.price} id={datos.id} />
        ))}
      </div>
    </div>
  </div>
    )
}
export default ItemList;