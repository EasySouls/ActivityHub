import React from "react";
import { useParams } from "react-router-dom";
import ProgramPreview from "./ProgramPreview";
import Header from "./Header";
import Footer from "./Footer";

const programs = [
  {
    title: "Túrázás",
    image: "hiking-img",
    url: "programok",
  },
  { title: "Társasjátékozás", image: "board-game-img", url: "programok" },
  { title: "Főzés", image: "cooking-img", url: "programok" },
  { title: "Geocaching", image: "geocaching-img", url: "programok" },
  { title: "Videojátékozás", image: "videogames-img", url: "programok" },
  { title: "Dungeons and Dragons", image: "dnd-img", url: "programok" },
];

export default function Programs() {
  const { programName } = useParams();
  // grid-cols-1 md:grid-cols-2 lg:grid-cols-3

  return (
    <div className='w-screen h-screen'>
      <Header />
      <div className='flex bg-gray-100 min-h-fit m-auto flex-wrap justify-center py-8 gap-8'>
        {programs.map((program, id) => (
          <ProgramPreview
            title={program.title}
            image={program.image}
            url={program.url}
            key={id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
