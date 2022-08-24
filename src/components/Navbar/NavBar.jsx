import imagen from '../../img/tobinstumentos.png';
import '../main.css';  
import Icon from './CartWidget.jsx';
import logo from '../../img/tobinstumentos.png';
import { Disclosure} from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useContext} from "react";
import { CartContext } from '../context/CartContext.jsx';


function NavBar() {
  const {cartItems} = useContext(CartContext);

  const navigation = [
    { name: 'piano', href: '#'},
    { name: 'guitarra electrica', href: '#'},
    { name: 'guitarra acustica', href: '#'},
    { name: 'bajo', href: '#'},
   
  ]
  
  const navigate = useNavigate();
      
  function aCarrito(){ navigate("/cart") }
  function aCompras(){navigate("/compras")}

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Disclosure as="nav" className="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 block items-center">
                  <Link to={"/"}>
                  <img 
                    className="block lg:hidden h-50 w-auto"
                    src={imagen}
                    alt="logo"
                  />
                  
                  <img width={60}
                    className="hidden lg:block h-20  w-auto"
                    src={logo}
                    alt="logo2"
                  />
                  </Link>
                 
                
                </div>
                <div className=" dropdown flex invisible sm:visible sm:ml-6 self-center absolute sm:relative">
                  <button class="dropbtn rounded">Productos</button>
                  <div className="dropdown-content flex  justify-end">
                    {navigation.map((item) => (
                      <Link to={`Category/${item.name}`}>
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900' : 'enlaces hover:bg-gray-700',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                      </Link>
                    ))}
                  </div>
                </div>
               
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {cartItems =="" ? ("") : (
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" onClick={aCarrito}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </button>)}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link to={`Category/${item.name}`}>
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button></Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


export default NavBar;
