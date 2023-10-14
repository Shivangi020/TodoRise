import React from 'react'
import { useGlobalContext } from '../Context';

const Header = () => {

  const {name} = useGlobalContext();
  return (
  
        <h1>Todo Rise</h1>
    
  )
}


export default Header;