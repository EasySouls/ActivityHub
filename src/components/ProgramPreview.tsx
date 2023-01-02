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

  return (
    <div
      className={`bg-${image} bg-red-200 bg-cover border border-black hover:border-2 hover:border-white transition-all ease-in duration-100 delay-75`}
    >
      <button onClick={link}>{title}</button>
    </div>
  );
}
