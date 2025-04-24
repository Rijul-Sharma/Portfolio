import React, { useState } from 'react';
import AnimatedContent from './AnimatedContent';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Basic validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const payload = {
      name,
      email,
      message,
      _subject: 'New message from portfolio!',
      _template: 'table',
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/rijul.sharma117@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success === 'true') {
        setSubmitted(true);
        form.reset(); // optional: reset fields
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Form error:', err);
      setError('Failed to send. Please check your internet connection.');
    }
  };

  return (
    <div className="min-h-screen text-white flex items-center flex-col" id='contactme'>
      <div className="w-[85vw] sm:w-[75vw] xl:w-[70vw]">
      <AnimatedContent
                distance={200}
                direction="horizontal"
                reverse={true}
                config={{ tension: 45, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1}
                threshold={0.2}
            >
                <div className="text-[clamp(3rem,9vw,4.5rem)] lg:text-7xl leading-tight font-bold mb-10 text-center w-full lg:text-start inline-block">Contact Me</div>
            </AnimatedContent>
        

        <div className="p-6 xs500:p-8 sm:p-10 bg-[rgb(36,36,49)] rounded-xl pb-20">
          <div className="mb-10 text-2xl sm:text-3xl font-semibold text-center">Feel free to get in touch :)</div>
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Info */}
            <div className="flex-1">
              <div className="text-xl sm:text-2xl mb-10">Contact Information</div>
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex flex-col bg-zinc-800 border-zinc-700 border-[1px] p-4 text-base sm:text-lg rounded-lg">
                  <span className="text-sm text-zinc-300 mb-1">Phone</span>
                  +91 8448662756
                </div>
                <div className="flex flex-col bg-zinc-800 border-zinc-700 border-[1px] p-4 text-base sm:text-lg rounded-lg">
                  <span className="text-sm text-zinc-300 mb-1">Email</span>
                  rijul.sharma117@gmail.com
                </div>
                <div className="flex flex-col bg-zinc-800 border-zinc-700 border-[1px] p-4 text-base sm:text-lg rounded-lg">
                  <span className="text-sm text-zinc-300 mb-1">Location</span>
                  New Delhi, India
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block h-full bg-white w-[1px] opacity-20"></div>

            {/* Form or Thank You */}
            <div className="flex-1">
              <div className="text-xl sm:text-2xl mb-10">Send me a message!</div>
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
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    className="p-4 bg-zinc-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="p-4 h-40 bg-zinc-600 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>

                  {error && <div className="text-red-400 font-medium">{error}</div>}

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
  );
};

export default Contact;
