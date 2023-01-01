import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServerLine} from 'react-icons/ri'
import {BiMessageSquareDots} from 'react-icons/bi'

import { useState } from 'react'
import './Nav.css';

const Nav = () => {

  const [activeNav , setActiveNav]=useState("#");


  return (
    <nav>
      <a onClick={()=>{ setActiveNav('#') }} className={activeNav==="#" ? 'active' : ''} href="#"><AiOutlineHome/></a>
      <a onClick={()=>setActiveNav("#about")} className={activeNav==="#about"? 'active': ''} href="#about"><AiOutlineUser/></a>
      <a onClick={()=>setActiveNav("#experience")} className={activeNav==="#experience"?'active':''} href="#experience"><BiBook/></a>
      <a onClick={()=>setActiveNav('#services')} className={activeNav=='#services'?'active':''} href="#services"><RiServerLine/></a>
      <a onClick={()=>setActiveNav("#contact")} className={activeNav==="#contact"? 'active':''} href="#contact"><BiMessageSquareDots/></a>
    </nav>
  )
}

export default Nav