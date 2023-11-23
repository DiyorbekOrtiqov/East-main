import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Index = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      fullName,
      email,
      subject,
      message,
    };
  
    console.log(data); 
  };

  return (
    <>
      <div className="h-full[+50px] bg-primary/50">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full sms:pt-[130px]">
          <div className="flex flex-col w-full max-w-[700px] ">
            <h2 className="h2 text-center mb-12">Contact</h2>

            <form
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="gap-x-6 w-full sms:flex-cold lg:flex">
                <input
                  type="text"
                  placeholder="Full name"
                  className="input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="input mt-6 lg:mt-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="input"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />

              <textarea
                placeholder="Message"
                className="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                <span>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;