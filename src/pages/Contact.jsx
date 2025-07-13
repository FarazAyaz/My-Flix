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
    <div className="p-10">
      <h1 className="font-bold text-3xl">Contact Us</h1>
      <p className="text-gray-800 mt-2">
        For any inquiries, please reach out to us at:
      </p>
      <Form method="post" action="/contact">
        <div className="mt-4">
          <h1 className="font-bold text-2xl">Full Name</h1>
          <label htmlFor="username">
            <input
              type="text"
              placeholder="Enter your full name"
              name="username"
              id="name"
              required
              className="border-2 border-gray-300 rounded-lg p-2 w-[50%] mt-2 mb-4 outline-none "
            />
          </label>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Email</h1>
          <label htmlFor="email">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              required
              className="border-2 border-gray-300 rounded-lg p-2 w-[50%] mt-2 mb-4 outline-none "
            />
          </label>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Message</h1>
          <label htmlFor=" message">
            <textarea
              name="message"
              id="message "
              cols="30"
              rows="10"
              placeholder="we are always here to help you."
              className="border-2 border-gray-300 rounded-lg p-2 w-[50%] mt-2 mb-4 outline-none h-[200px]"
            />
          </label>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Send Message
        </button>
      </Form>
    </div>
  );
};

export default Contact;
