import React from 'react'
import { Link } from 'react-router-dom'

export default function Buttons() {
  return (

    <div id='buttonsDiv'>
      <Link to={'/'}><label className='item' >Home Page</label></Link>
      <Link to={'/favorite'}><label className='item'>Favorites</label></Link>

    </div>



  )
}
