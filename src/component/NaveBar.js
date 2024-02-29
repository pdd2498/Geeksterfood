import React from 'react'

export default function NaveBar() {
  return (
    <div className='nave'>
        <div className='flex'>
            <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
            <p id="logo">GeekFoods</p>
        </div>
        <div className='flex gapes'>
            <p>Home</p>
            <p>Quote</p>
            <p>Resturants</p>
            <p>Foods</p>
            <p>Contact</p>
        </div>
        <div className='flex'>
            <button>Get Started</button>
        </div>
    </div>
  )
}
