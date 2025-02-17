import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Datacontext } from '../context/Datacontext'
import { List_navbar } from './List_navbar'


export const Home = () => {

  const{id,setid,log,setlog,mnav,setmnav}=useContext(Datacontext)

 

  const statushandler=()=>{
    if(log){
      setlog(!log)
      Cookies.remove("data")
      Cookies.remove("token")
      window.location.reload();
    }
   
  }


  return (
    
    
<div className='flex w-screen h-screen justify-center items-center'>Home</div>
    
  )
}
