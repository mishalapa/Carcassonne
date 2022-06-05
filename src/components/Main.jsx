import React from 'react'
import main from '../assets/main.jpg'

const Main = () => {
  return (
    <div className='main'>
      <img className='main__image' src={main} alt="pic" />
    </div>
  )
}

export default Main