import React from "react";
import { Form } from "react-router-dom";

export const ContactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.error("Error in Contact component:", error);
  }
};

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] bg-gradient-to-br from-gray-100 to-gray-300 p-10">
      <div className="flex-1 flex flex-col items-start justify-center bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full mb-10 md:mb-0">
        <h1 className="font-bold text-3xl mb-2 text-blue-700">Contact Us</h1>
        <p className="text-gray-800 mb-6">
          For any inquiries, please reach out to us at:
        </p>
        <Form method="post" action="/contact" className="w-full">
          <div className="mb-4">
            <h1 className="font-bold text-2xl">Full Name</h1>
            <label htmlFor="username" className="block">
              <input
                type="text"
                placeholder="Enter your full name"
                name="username"
                id="name"
                required
                className="border-2 border-gray-300 rounded-lg p-2 w-full mt-2 mb-4 outline-none "
              />
            </label>
          </div>
          <div className="mb-4">
            <h1 className="font-bold text-2xl">Email</h1>
            <label htmlFor="email" className="block">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                id="email"
                required
                className="border-2 border-gray-300 rounded-lg p-2 w-full mt-2 mb-4 outline-none "
              />
            </label>
          </div>
          <div className="mb-4">
            <h1 className="font-bold text-2xl">Message</h1>
            <label htmlFor="message" className="block">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="6"
                placeholder="We are always here to help you."
                className="border-2 border-gray-300 rounded-lg p-2 w-full mt-2 mb-4 outline-none h-[120px]"
              />
            </label>
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 w-full text-lg font-semibold">
            Send Message
          </button>
        </Form>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/contact.png"
          alt="Contact"
          className="w-full  max-w-2xl rounded-2xl shadow-2xl border-4 border-blue-500"
        />
      </div>
    </section>
  );
};

export default Contact;
