import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProgramPreview({
  title,
  image,
  url,
}: {
  title: string;
  image: string;
  url: string;
}) {
  const navigate = useNavigate();
  function link(e: React.MouseEvent) {
    e.preventDefault();
    navigate(url);
  }

  let _image: string = "";
  switch (image) {
    case "hiking-img":
      _image = "url(src/assets/hiking-img.jpg)";
      break;

    case "cooking-img":
      _image = "url(src/assets/cooking-img.jpg)";
      break;

    case "videogames-img":
      _image = "url(src/assets/videogames-img.jpg)";
      break;

    case "board-game-img":
      _image = "url(src/assets/board-game-img.jpg)";
      break;

    case "geocaching-img":
      _image = "url(src/assets/geocaching-img.jpg)";
      break;

    case "dnd-img":
      _image = "url(src/assets/dnd-img.jpg)";
      break;
  }

  return (
    <div
      className='h-[200px] w-[350px] bg-red-200 bg-cover outline outline-4 outline-sky-200 hover:outline-sky-600 transition-all ease-in duration-100 delay-75 text-white flex items-center justify-center'
      style={{ backgroundImage: _image }}
    >
      <button onClick={link} className='bg-sky-600 p-2 rounded-lg'>
        {title}
      </button>
    </div>
  );
}
