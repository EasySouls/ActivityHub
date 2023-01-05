import React, { useState } from "react";

export default function ModernFooter() {
  const [email, setEmail] = useState("");

  function handleEmailChange(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  }

  function subscribe(): void {
    //* Do something
    setEmail("");
  }

  return (
    <div className='w-screen h-fit bg-slate-800 text-white p-4'>
      <div className='w-full'>
        <h1 className='text-2xl uppercase mb-2'>ActivityHub</h1>
      </div>
      <div className='w-full h-4/5 flex flex-row justify-between'>
        <div className=''>
          <h2 className='text-sm'>
            Az emberek ösztönzése és összehozása a szabadidős tevékenységekre
          </h2>
        </div>
        <div className='uppercase text-sm'>
          <h2 className='text-xs mb-1'>Iratkozz fel a hírlevelünkre</h2>
          <input
            type='text'
            value={email}
            placeholder='Email'
            onChange={handleEmailChange}
            className='border border-white p-1 bg-slate-800'
          ></input>
          <button className='bg-sky-600 p-1 ml-2' onClick={subscribe}>
            Feliratkozás
          </button>
        </div>
        <div className='uppercase'>
          <h2 className='text-xs mb-1'>Kövess minket!</h2>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            className='w-6 aspect-square inline'
          >
            <path d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z' />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className='w-6 aspect-square inline'
          >
            <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className='w-6 aspect-square inline'
          >
            <path d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z' />
          </svg>
        </div>
        <div className='uppercase'>
          <h2 className='text-xs mb-1'>Hívj minket!</h2>
          <a href='tel:+36608654728'>+36 60 865 4728</a>
        </div>
      </div>
      <div className='w-full h-1/5 mt-3'>
        <hr className='w-full'></hr>
        <h2 className='text-xs mt-2'>Designed by Tarjányi Csanád</h2>
      </div>
    </div>
  );
}
