import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()
  
  function returnToHomepage(e: React.MouseEvent) {
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
      <div className='h-[15%] w-full bg-[url("./assets/golden-forest.jpg")] bg-cover flex items-center justify-center'>
        <button className="bg-black rounded-full h-1/2 aspect-square flex items-center" onClick={returnToHomepage}>
          <img src="/stellar.png" alt="logo" className="h-3/5 m-auto"/>
        </button>
      </div>
      <Navbar />
    </>
  );
}
