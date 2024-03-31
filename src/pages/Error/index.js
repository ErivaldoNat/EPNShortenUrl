import { Link } from 'react-router-dom';
import Menu from '../../components/menu/menu';
import './error.css';

export default function Error (){
  return(
   
    <div className='container-error'>
      <Menu />
      <img src='err_found.png' alt='Page not found'></img>
      <Link className='back' to='/'>
        Return to main page
      </Link>
    </div>
  )
}