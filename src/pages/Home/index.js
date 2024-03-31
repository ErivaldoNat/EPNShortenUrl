
import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import LinkItem from '../../components/LinkItem';
import Footer from '../../components/footer';
import Menu from '../../components/menu/menu';

import './home.css';

import api from '../../services/api';
import { saveLink } from '../../services/storelinks';

export default function Home(){
  const [link, setLink]= useState('');
  const [data, setData]= useState('');
  const [aff, setAff] = useState(false);

   async function click (){
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setAff(true);
      saveLink('@allLinks', response.data);
      setLink('');
    }
    catch {
      alert("Ops, something went wrong");
      setLink('');
    }
  }

  return(
    <div className="all">
      
      <div className='tete'>
        <img src="/logo_link.png" alt="It's site's logo" />
        <h1> EPN Short URL</h1>
        <span>Paste your link to shorten 👇👇</span>
      </div>


      <div className="Input-area">
        <div className="Inp">
          <FiLink size={24} color='white'  />
          <input  
            placeholder='Paste your link here...'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button
        onClick={click}
        >To Shorten the link
        </button>
        
        <div className='description-div'>
          <span className='description'> EPN ShortURL is a free tool to shorten URLs and generate short links <p></p> </span>
          <span className='description'> URL shortener allows to create a shortened link making it easy to share </span>
        </div>
        

      </div>

      <Menu/>
      <Footer/>
      
      {aff && (
        <LinkItem
        closeModal={() => setAff(false)}
        content={data}
        /> 
      )}
       
    </div>
  )
}