import React from 'react'
import { useParams } from 'react-router-dom'

type PostPageProps = {
    post: {text: string; title: string; author: string}
}

export default function PostPage({post}: PostPageProps) {
    const { programName } = useParams()

  return (
    <div>PostPage</div>
  )
}
