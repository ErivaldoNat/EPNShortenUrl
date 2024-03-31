import { FiClipboard, FiX } from 'react-icons/fi';
import './link-item.css';


export default function LinkItem ({closeModal, content} ){
  
  async function copy(){
    await navigator.clipboard.writeText(content.link)
    alert("Link copied successfully!!");
  }

  return(
    <div className='model-container'>

      <div className='firs'>
        <h2> Link shortened:</h2>
        <button onClick={closeModal}>
          <FiX size={28} color='black'/>
        </button>
      </div>

      <span>
        {content.long_url}
      </span>

      <button className='but-link' onClick={copy}>
        <span>
          {content.link}
        </span>
        <FiClipboard className='clip' size={20} color='white'/>
      </button>

    </div>
  )
}

   