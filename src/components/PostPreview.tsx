import React from "react";

type Props = {
  title: string
  text: string
}

export default function PostPreview({ title, text }: Props) {
  return (
    <div className='bg-gray-600 text-white rounded p-2'>
      <h2 className='font-bold text-lg'>{title}</h2>
      <p>{text}</p>
      <a href='#' className='text-amber-500 underline'>
        Continue reading
      </a>
    </div>
  );
}
