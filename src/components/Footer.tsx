import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className='w-screen h-fit lg:h-[15rem] bg-sky-700'>
      <div className='bg-sky-300 h-[2px]' />
      <div className='grid grid-cols-1 lg:grid-cols-4 p-2'>
        <div className='flex flex-col gap-2'>
          <p className='w-10 h-10 bg-white rounded-full text-center'></p>
          <p>Szöveg</p>
          <a
            href='https://goo.gl/maps/draWPFcTtiA32M5dA'
            className='text-amber-600 underline'
          >
            1188 Budapest, Kalász u. 27a
          </a>
          <a href='tel:06304327752' className='text-amber-600 underline'>
            +36 60 432 7752
          </a>
          <a
            href='mailto:tarjanyicsanad@gmail.com'
            className='text-amber-500 underline'
          >
            tarjanyicsanad@gmail.com
          </a>
        </div>
        <div className='flex flex-col gap-2'>
          <Link to='/' className='text-amber-600 underline'>
            Főoldal
          </Link>
          <Link to='/aktualis' className='text-amber-600 underline'>
            Aktuális
          </Link>
          <Link to='/magunkrol' className='text-amber-600 underline'>
            Magunkról
          </Link>
          <Link to='/programok' className='text-amber-600 underline'>
            Programok
          </Link>
          <Link to='/kapcsolat' className='text-amber-600 underline'>
            Kapcsolat
          </Link>
        </div>
        <div>
          <a
            href='https://www.instagram.com/tarjanyi_csanad/'
            className='text-amber-600 underline'
          >
            Kövess minket az Instagram-on!
          </a>
        </div>
        <div>
          <p>
            Ha kérdésed van, vagy bizonytalan vagy valamiben, lépj velünk
            kapcsolatba!
          </p>
          {/* Form */}
        </div>
      </div>
    </div>
  );
}
