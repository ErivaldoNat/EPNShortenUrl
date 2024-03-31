
import { useEffect, useState } from 'react';
import { GoArrowLeft, GoLink } from "react-icons/go";
import { RiDeleteBin7Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

import LinkItem from '../../components/LinkItem';
import Footer from '../../components/footer';
import Menu from '../../components/menu/menu';

import { deleteLinks, getlinksSave } from '../../services/storelinks';
import './Links.css';
 
export default function Links(){
  
  const [myLinks, setMyLinks] = useState([]);

  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [emptyList, setEmpyList] = useState(false)


  useEffect(() =>{
    async function getLinks(){
      const result= await getlinksSave('@allLinks');
      console.log(result);
      if(result.length === 0){
        setEmpyList(true);
      }
      setMyLinks(result);
    }

    getLinks();
  }, [])
  
  function show(link)
  {
    setData(link);
    setShowModal(true);
  }

  async function deleteLink(id)
  {
    const result = await deleteLinks(myLinks, id);
    if(result.length === 0){
      setEmpyList(true);
    }

    setMyLinks(result);
  }

  return(
    <div className="all">
      <div className="first">
        <Link className="back" to='/'>
          <GoArrowLeft size={30} color="white"/>
        </Link>
        <h1>My links </h1>
      </div>
      
      {emptyList && (
        <div className='EmptyList'>
          <h2 className='empty-list'>Your list is empty... </h2>
        </div>
      )}
      {myLinks.map(link => (
       
        <div key={link.id} className="area">

          <button className="links" onClick={ () => show(link)}>
            <GoLink className="golink" size={12} color="white"/>
            <span className='link-list'>
              {link.long_url};
            </span>
          </button>

          <button className="Trash" onClick={ () => deleteLink(link.id)}>
            <RiDeleteBin7Line className="Trash" size={13}/> 
          </button>

        </div>
      ) )}
      
      {showModal && (
        <LinkItem
          closeModal={ () => setShowModal(false)}
          content={data}
        />
      )}
      <Menu/>
      <Footer/>;
    </div>
    
  )
}