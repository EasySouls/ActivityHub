import React from "react";
import { useNavigate } from "react-router-dom";
import hiking_img from "../assets/hiking-img.jpg"
import cooking_img from "../assets/cooking-img.jpg"
import videogames_img from "../assets/videogames-img.jpg"
import board_game_img from "../assets/board-game-img.jpg"
import geocaching_img from "../assets/geocaching-img.jpg"
import dnd_img from "../assets/dnd-img.jpg"

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
      _image = hiking_img;
      break;

    case "cooking-img":
      _image = cooking_img;
      break;

    case "videogames-img":
      _image = videogames_img;
      break;

    case "board-game-img":
      _image = board_game_img;
      break;

    case "geocaching-img":
      _image = geocaching_img;
      break;

    case "dnd-img":
      _image = dnd_img;
      break;
  }

  return (
    <div
      className='h-[200px] w-[350px] bg-red-200 bg-cover outline outline-4 outline-sky-200 hover:outline-sky-600 transition-all ease-in duration-100 delay-75 text-white flex items-center justify-center'
      style={{ backgroundImage: `url(${_image})` }}
    >
      <button onClick={link} className='bg-sky-600 p-2 rounded-lg'>
        {title}
      </button>
    </div>
  );
}
