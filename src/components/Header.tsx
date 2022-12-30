import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <div className='h-[15%] w-full bg-[url("./assets/golden-forest.jpg")] bg-cover flex items-center justify-center'>
        <div className="bg-black rounded-full h-1/2 aspect-square flex items-center">
          <img src="src/assets/stellar.png" alt="logo" className="h-3/5 m-auto"/>
        </div>
      </div>
      <Navbar />
    </>
  );
}
