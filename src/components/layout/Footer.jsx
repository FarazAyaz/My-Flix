import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-6 md:p-10 ">
      <div className="flex flex-col md:flex-row md:justify-between gap-10 px-2 md:px-5">
        <div className="space-y-6 flex-1 min-w-[220px]">
          <img src="./images/logo.png" alt="logo" />
          <p>
            Welcome to Faraz EcomStore, your ultimate destination for
            cutting-edge gadgets!
          </p>
          <img
            src="https://i.postimg.cc/Nj9dgJ98/cards.png"
            alt="cards"
            className="my-4"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-8 flex-1 min-w-[220px]">
          <div className="flex flex-col gap-4 mt-2 min-w-[150px]">
            <h4 className="font-bold text-2xl ">SHOPPING</h4>
            <a href="#">Computer Store</a>
            <a href="#">Laptop Store</a>
            <a href="#">Accessories</a>
            <a href="#">Sales & Discount</a>
          </div>
          <div className="flex flex-col gap-4 mt-2 min-w-[150px]">
            <h4 className="font-bold text-2xl">Experience</h4>
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
          <div className="flex flex-col gap-4 mt-2 min-w-[150px]">
            <h4 className="font-bold text-2xl">NEWSLETTER</h4>
            <p>
              Be the first to know about new
              <br />
              arrivals, sales & promos!
            </p>
            <div>
              <input type="email" placeholder="Your Email" className="outline-none focus:outline-none"/>
              <i className="bx bx-envelope"></i>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <br />
      <div className="border-1 border-gray-900"></div>
      <div className="mt-5 flex items-center justify-center text-center text-sm md:text-base">
        <p>Design and Code by Faraz</p>
      </div>
    </footer>
  );
};

export default Footer;
