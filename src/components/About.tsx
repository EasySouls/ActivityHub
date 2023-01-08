import React from "react";
import Header from "./Header";
import ModernFooter from "./ModernFooter";

export default function About() {
  return (
    <div className='w-screen h-screen'>
      <Header />
      <div className='w-full'>
        <div className='bg-[url("./assets/campfire-in-the-desert.jpg")] bg-cover bg-center h-[37rem] flex justify-center items-start'>
          <h1 className='text-6xl m-20 text-white uppercase font-bold'>
            Tedd szabadidőd érdekesebbé!
          </h1>
        </div>
        <div className="w-full h-fit bg-slate-200 flex items-center flex-col justify-center py-20 text-center">
          <h1 className="text-[7rem] uppercase font-bold">hi<span className="text-red-600">!</span></h1>
          <h2 className="font-semibold text-lg">Here's who we are and what we do</h2>
          <div className="flex m-4 gap-4">
            <button className="border border-sky-600 text-base uppercase rounded-3xl px-2 py-1 w-28 font-semibold my-2 bg-sky-600 transition ease-in-out duration-500 text-white hover:bg-transparent hover:text-black">Resume</button>
            <button className="border border-black text-base uppercase rounded-3xl px-2 py-1 w-28 font-semibold my-2 transition ease-in-out duration-500 hover:bg-sky-600 hover:border-sky-600 hover:text-white">Projects</button>
          </div>
          <div className="font-light p-2 opacity-80 w-2/3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              imperdiet enim eros, eget pulvinar eros posuere a. Fusce pharetra
              malesuada turpis nec porttitor. Morbi cursus eu arcu ut aliquam.
              Pellentesque quis odio ut ligula facilisis egestas et a mi.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat modi ratione veritatis nostrum, eum autem!</p>
          </div>
        </div>
        <div className='w-full h-[20rem] flex flex-row items-center justify-center gap-8 bg-slate-200'>
          <MovingContainer
            title='kreativitás'
            desc='Kreativitás, okosan kidolgozott ötletek'
          />
          <MovingContainer
            title='stílusos'
            desc='Stílusos, funkcionális és innovatív tervezés'
          />
          <MovingContainer
            title='precizitás'
            desc='Precíz, mindenre kiterjedő megoldások és kivitelezés'
          />
        </div>
      </div>
      <ModernFooter />
    </div>
  );
}

function MovingContainer({ title, desc }: { title: string; desc: string }) {
  return (
    <div className='flex flex-col text-center justify-center items-center w-[90%] md:w-[300px] h-[200px] bg-white text-black transition hover:translate-y-4 duration-600 delay-75 ease-in-out drop-shadow-xl p-4'>
      <h2 className='uppercase font-semibold text-lg mb-2'>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
