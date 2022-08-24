import icon from '../../img/Cart.png';
import {useContext} from 'react';
import {CartContext} from '../context/CartContext.jsx';


function IconWidget(){
    const {itemCount} = useContext(CartContext);
   
    return(
        <>
        <div className='flex'>
            <img src="https://assets.stickpng.com/images/5a02cb3018e87004f1ca43e5.png" alt="CartIcon" className='iconCart' />
            <p className='mx-1'>{itemCount}</p>
        </div>
        </>
    )
}
export default IconWidget