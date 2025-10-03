import React from "react";

const ContactForm = () => {
  return (
    <form className="w-full max-w-md mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white text-center">Contact Me</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-800 placeholder-gray-500 bg-white border-0 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-800 placeholder-gray-500 bg-white border-0 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Your message"
          name="message"
          rows={4}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-800 placeholder-gray-500 bg-white border-0 rounded shadow resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button className="w-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
