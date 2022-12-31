import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

type Program = {
  programs: {
    title: string
    description: string
  }
}

export default function Programs({programs}:Program) {
  const { programName } = useParams()

  let mainPage = (
    <div>
      <h1>Programok</h1>
      <p>Itt van felsorolva a sok program</p>
    </div>
  )

  let programPage = (
    <div>
      <h1>{programs.title}</h1>
      <p>{programs.description}</p>
    </div>
  )

  return (
    <div className='w-screen h-screen'>
      <Header />
      {programName ? mainPage : programPage}
    </div>
  );
}
