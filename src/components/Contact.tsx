import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ModernFooter from "./ModernFooter";

export default function Contact() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function onTextChange(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setText(e.currentTarget.value);
  }

  function submitForm(): void {
    // do something with the submitted value
    if (text === "" || email === "") return;

    setSent(true);
  }

  return (
    <div className='w-screen h-screen'>
      <Header />
      <div className='relative flex flex-col lg:flex-row w-full h-[40%]'>
        <div className='relative w-full lg:w-1/2 bg-slate-300 text-center p-4 flex flex-col justify-center text-sm md:text-base'>
          <Logo />
          <h1 className='font-semibold text-sky-600 text-xl md:text-4xl mb-4 md:mb-12'>
            ActivityHub
          </h1>
          <a
            href='https://goo.gl/maps/draWPFcTtiA32M5dA'
            className='text-sky-400 underline'
          >
            Budapest, Kisfaludy u. 33/c, 1188
          </a>
          <br />
          <span>Telefon: </span>
          <a href='tel:06305542345' className='text-sky-400 underline'>
            +36 60 555 4235
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
          <div className='absolute bottom-0 left-0 h-2 w-full bg-sky-600'></div>
        </div>
        <div className='w-full lg:w-1/2 h-full'>
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
      <div className='w-full h-[30%] text-sm lg:text-base flex flex-col items-center justify-center gap-4 bg-slate-300'>
        <h2>Ha van valami meglátásod, írj egy emailt számunkra!</h2>
        <input
          required
          type='email'
          placeholder='Email címed'
          value={email}
          onChange={onEmailChange}
          className='w-1/3 lg:w-1/4 p-2 border border-b-sky-600 m-2'
        ></input>
        <input
          required
          type='text'
          placeholder='Üzeneted'
          value={text}
          onChange={onTextChange}
          className='p-2 w-2/4 lg:w-1/4 h-1/6 border border-b-sky-600 m-2'
        ></input>
        <button
          type='button'
          onClick={submitForm}
          className='border-2 border-sky-600 p-1 rounded-md hover:border-sky-300'
        >
          Küldés
        </button>
        {sent && <p>Email elküldve</p>}
      </div>
      <ModernFooter />
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
