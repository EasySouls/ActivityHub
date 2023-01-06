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
        <div className='w-full h-[20rem] flex flex-row items-center justify-center gap-8'>
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
