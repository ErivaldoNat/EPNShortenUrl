import { BsInstagram, BsTiktok } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './menu.css';

export default function Menu() {
  return(
    <div className='menu'>
        <a className='social' href='https://www.tiktok.com/@erivaldo_devop?is_from_webapp=1&sender_device=pc'>
          <BsTiktok size={24} color='white'/>
        </a>
        <a className='social' href='https://www.instagram.com/epn_epn_epn/?next=%2F'>
          <BsInstagram size={24} color='white'/>
        </a>
        <Link className='lin' to="/links">
          Access your shortened links
        </Link>
    </div> 
  )
}





