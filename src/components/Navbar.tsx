import React, { useContext } from "react";
import NavBtn from "./NavBtn";
import { PageContext } from "./App";

const buttons = [
  { text: "Aktuális", route: "/aktualis" },
  { text: "Magunkról", route: "/magunkrol" },
  { text: "Programok", route: "/programok" },
  { text: "Kapcsolat", route: "/kapcsolat" },
];

export default function Navbar() {
  const { currentPage } : any = useContext(PageContext);

  return (
    <div className='w-screen h-12'>
      <div className='h-[10%] bg-sky-300' />
      <div className='h-[90%] bg-sky-700 flex justify-center items-center gap-2'>
        {buttons.map((btn, id) => (
          <NavBtn key={id} text={btn.text} route={btn.route} />
        ))}
      </div>
    </div>
  );
}
