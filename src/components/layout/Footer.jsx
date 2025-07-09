import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-md p-10 mx-15'>
      <div className='flex justify-between px-5'>
        <div className='space-y-6'>
          <img src="./images/logo.png" alt="logo" />
          <p>
            Welcome to Faraz EcomStore, your ultimate destination for
            cutting-edge gadgets!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" className='my-4' />
        </div>
        <div className='flex gap-50'>
          <div className='flex flex-col gap-6 mt-2 '>
          <h4 className='font-bold text-2xl '>SHOPPING</h4>
          <a href="#">Computer Store</a>
          <a href="#">Laptop Store</a>
          <a href="#">Accessories</a>
          <a href="#">Sales & Discount</a>
        </div>
        <div className='flex flex-col gap-6 mt-2 '>
          <h4 className='font-bold text-2xl'>Experience</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="" target="_blank">
            Payment Method
          </a>
          <a href="" target="_blank">
            Delivery
          </a>
          <a href="" target="_blank">
            Return and Exchange
          </a>
        </div>
        <div className='flex flex-col gap-4 mt-2'>
          <h4 className='font-bold text-2xl'>NEWSLETTER</h4>
          <p>
            Be the first to know about new
            <br />
            arrivals, sales & promos!
          </p>
          <div>
            <input type="email" placeholder="Your Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
        </div>
      </div>
      <br />
        <div className='border-1 border-gray-900'></div>
        <div className='mt-5 flex items-center justify-center'>
          <p>Design and Code by Faraz</p>
        </div>
    </footer>
  );
}

export default Footer
