import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Contact() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  function onEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function onTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setText(e.target.value);
  }

  function submitForm(): void {
    // do something with the submitted value
  }

  return (
    <div className='w-screen h-screen'>
      <Header />
      <div className='relative flex flex-col lg:flex-row w-full h-[40%]'>
        <div className='w-full lg:w-1/2 bg-slate-200 text-center p-4 flex flex-col justify-center text-sm md:text-base'>
          <Logo />
          <h1 className='font-semibold text-sky-600 text-xl md:text-4xl mb-4 md:mb-12'>
            ActivityHub
          </h1>
          <a
            href='https://goo.gl/maps/draWPFcTtiA32M5dA'
            className='text-sky-400 underline'
          >
            1188 Budapest, Kalász u. 27a
          </a>
          <br />
          <span>Telefon: </span>
          <a href='tel:06304327752' className='text-sky-400 underline'>
            +36 60 432 7752
          </a>
          <br />
          <span>Email: </span>
          <a
            href='mailto:tarjanyicsanad@gmail.com'
            className='text-sky-400 underline'
          >
            tarjanyicsanad@gmail.com
          </a>
          <p className='mt-4'>Egyéb információs szöveg:</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Donec imperdiet enim eros, eget pulvinar eros posuere a.</p>
        </div>
        <div className='w-full lg:w-1/2 h-[30%] lg:h-full'>
          <iframe
            className='w-full h-full'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43186.28627174238!2d19.166237889257797!3d47.428657018077566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741e9fec3ce8263%3A0xe842a383303fd102!2sPestszentimrei%20Sportkast%C3%A9ly!5e0!3m2!1shu!2shu!4v1672857539423!5m2!1shu!2shu'
            width='600'
            height='450'
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
      <div className='w-full'>
        <input
          type='email'
          placeholder='Email címed'
          value={email}
          onChange={onEmailChange}
        ></input>
        <input
          type='text'
          placeholder='Üzeneted'
          value={text}
          onChange={onTextChange}
        ></input>
      </div>
      <Footer />
    </div>
  );
}

const Logo = () => {
  return (
    <img
      src='src/assets/stellar.png'
      className='absolute top-2 left-2 w-6 aspect-square'
    ></img>
  );
};
