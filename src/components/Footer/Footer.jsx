import '../main.css'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.png'


export default function Footer() {
  return (
    <footer className=' pie flex flex-col'>
	<h4 className='pie__titulo--md'>CONTACTO</h4>
	<nav className='footer_nav flex justify-center'>
		<a href="https://www.instagram.com" className="pie__enlace--sm flex" target="_blank"><img src={instagram} alt="instagram"/><p>Instagram</p></a>
		<a href="https://www.facebook.com/franco.pipieri.56/" className="pie__enlace--sm flex" target="_blank"><img src={facebook} alt="facebook"/><p>Facebook</p></a>
		<a href="https://walink.co/40fcba" className="pie__enlace--sm flex" target="_blank"><img src="https://w7.pngwing.com/pngs/10/271/png-transparent-iphone-whatsapp-logo-whatsapp-call-icon-grass-mobile-phones-instant-messaging.png" alt="whatsapp" width={30}/><p>whatsapp</p></a>
	</nav>
    </footer>
  )
}
