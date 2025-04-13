import React from 'react'
import { useState } from 'react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        fetch('https://formsubmit.co/rijul.sharma117@gmail.com', {
        method: 'POST',
        body: data,
        })
        .then((res) => {
            if (res.ok) {
            setSubmitted(true);
            }
        })
        .catch((err) => console.error('Form error:', err));
    };

  return (
    <div className="h-screen text-white flex items-center flex-col">
      <div className="w-[70vw]">
        <div className="text-7xl font-bold mb-10">Contact Me</div>

        <div className="p-10 bg-[rgb(36,36,49)] rounded-xl pb-20">
          <div className="mb-10 text-3xl font-semibold">Feel free to get in touch :)</div>
          <div className='flex flex-col lg:flex-row gap-10'>
            {/* Contact Info */}
            <div className="flex-1">
              <div className="text-2xl mb-10">Contact Information</div>
              <div className="flex flex-col gap-6">
                
                <div className="flex flex-col bg-zinc-800 border-zinc-700 border-[1px] p-4 text-lg rounded-lg">
                  <span className="text-sm text-zinc-300 mb-1">Phone</span>
                  +91 8448662756
                </div>
                
                <div className="flex flex-col bg-zinc-800 border-zinc-700 border-[1px] p-4 text-lg rounded-lg">
                  <span className="text-sm text-zinc-300 mb-1">Email</span>
                  rijul.sharma117@gmail.com
                </div>
                
                <div className="flex flex-col bg-zinc-800 border-zinc-700 border-[1px] p-4 text-lg rounded-lg">
                  <span className="text-sm text-zinc-300 mb-1">Location</span>
                  New Delhi, India
                </div>
                
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block h-full bg-white w-[1px] opacity-20"></div>

            {/* Form or Thank You */}
            <div className="flex-1">
              <div className="text-2xl mb-10">Send me a message!</div>
              {submitted ? (
                <div className="text-green-400 text-xl font-semibold">
                  ✅ Thank you for reaching out! I’ll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="p-4 bg-zinc-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="p-4 bg-zinc-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="p-4 h-40 bg-zinc-600 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact