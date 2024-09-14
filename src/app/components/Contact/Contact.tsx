/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";

const Contact = () => {
  const [showModal, setShowModal] = useState(false); // State to handle modal visibility
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleModalToggle = () => {
    setShowModal(!showModal); // Toggle modal visibility
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="my-20 py-16 font-sans w-full  bg-gradient-to-r from-[#1a1832] via-[#49274b] to-[#a54657] text-gray-300  flex items-center justify-center">
      <div className="text-center px-4  ">
        <h1 className="text-5xl  font-bold mb-5">Let's Work Together!</h1>
        <p className="text-lg mb-4 opacity-80 max-w-2xl">
          Connect with Me: Reach Out for Collaboration, Questions, or Simply a
          Friendly Conversation - I'm Here to Hear from You
        </p>
        <button
          className="bg-[#a54657] border border-white text-gray-300 text-sm font-semibold py-3 px-5 rounded-md transition-transform duration-300 transform hover:scale-110"
          onClick={handleModalToggle}
        >
          WHY NOT!?
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            style={{ backgroundColor: "#0f192e" }}
            className="bg-white text-black w-full max-w-md p-8 rounded-lg shadow-lg relative"
          >
            {/* Modal Close Button */}
            <button
              className="absolute top-2 right-2 text-white font-bold text-2xl"
              onClick={handleModalToggle}
            >
              &times;
            </button>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-xl text-white font-medium mt-4"
                >
                  01 What's your name?
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-gray-400 outline-none py-2"
                  placeholder="Tasmim Rahman"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-xl text-white font-medium mt-8"
                >
                  02 What's your email?
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-gray-400 outline-none py-2"
                  placeholder="tasmim.tr@gmail.com"
                />
              </div>
              <div className="mt-10">
                <label
                  htmlFor="message"
                  className="block text-xl text-white font-medium mt-5"
                >
                  03 Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-gray-400 outline-none py-2 resize-none"
                  placeholder="Hey Tasmim, can you help me with..."
                ></textarea>
              </div>
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Overlay */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-0"
          onClick={handleModalToggle}
        ></div>
      )}
    </div>
  );
};

export default Contact;
