import React from "react";
import Header from "./Header";
import ModernFooter from "./ModernFooter";
import { useNavigate } from "react-router-dom";

export default function Current() {
  return (
    <div className='w-screen h-screen'>
      <Header />
      <main className="bg-[url(./assets/dalle.png)] bg-cover h-fit py-4">
        <div className="w-4/5 bg-slate-200 mx-auto rounded-lg text-black">
          <h1 className="p-2 mb-8 text-center text-3xl font-bold uppercase">Aktuális programjaink</h1>
          <div className="flex flex-col gap-8 mx-8">
            {posts.map((post, id) => (
              <BlogPost key={id} title={post.title} text={post.text} href={post.href} />
            ))}
          </div>
        </div>
      </main>
      <ModernFooter />
    </div>
  );
}

function BlogPost({ title, text, href } : { title:string, text:string, href:string }) {
  const navigate = useNavigate()

  return (
    <div className="w-full flex flex-row gap-4">
      <div className="w-1/4 rounded-md">
        <img className="w-full aspect-square rounded-lg" src="https://source.unsplash.com/800x800/?nature" alt="post image" />
      </div>
      <div className="w-3/4">
        <h2 className="text-lg text-sky-600 font-semibold">{title}</h2>
        <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas inventore maxime esse? Fuga eveniet enim ullam eum repellendus deserunt voluptatum? Quo temporibus atque commodi quas illo corporis fuga, tenetur incidunt mollitia. Fugiat earum exercitationem similique amet dolore repellat ullam, omnis enim at a non, veritatis delectus excepturi ipsum voluptate nesciunt repudiandae quam? Corrupti, assumenda. Assumenda fuga rerum quibusdam maiores voluptatem. Repellendus assumenda distinctio omnis vel, ipsa delectus dolorum neque placeat facilis esse reprehenderit dignissimos quasi culpa nostrum non fuga cupiditate!</p>
        <p className="text-sm">{text}</p>
        <button className="text-sm mt-4 px-2 py-1 border border-sky-600 rounded-lg transition duration-500 ease-in-out hover:text-white hover:bg-sky-600" onClick={() => navigate(href)}>Olvass tovább</button>
      </div>
    </div>
  )
}

const posts = [
  {title: "Title", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas inventore maxime esse? Fuga eveniet enim ullam eum repellendus deserunt voluptatum? Quo temporibus atque commodi quas illo corporis fuga, tenetur incidunt mollitia. Fugiat earum exercitationem similique amet dolore repellat ullam, omnis enim at a non, veritatis delectus excepturi ipsum voluptate nesciunt repudiandae quam? Corrupti, assumenda. Assumenda fuga rerum quibusdam maiores voluptatem. Repellendus assumenda distinctio omnis vel, ipsa delectus dolorum neque placeat facilis esse reprehenderit dignissimos quasi culpa nostrum non fuga cupiditate!", href: "/"},
  {title: "Another title", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas inventore maxime esse? Fuga eveniet enim ullam eum repellendus deserunt voluptatum? Quo temporibus atque commodi quas illo corporis fuga, tenetur incidunt mollitia. Fugiat earum exercitationem similique amet dolore repellat ullam, omnis enim at a non, veritatis delectus excepturi ipsum voluptate nesciunt repudiandae quam? Corrupti, assumenda. Assumenda fuga rerum quibusdam maiores voluptatem. Repellendus assumenda distinctio omnis vel, ipsa delectus dolorum neque placeat facilis esse reprehenderit dignissimos quasi culpa nostrum non fuga cupiditate!", href: "/"},
  {title: "The next title", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas inventore maxime esse? Fuga eveniet enim ullam eum repellendus deserunt voluptatum? Quo temporibus atque commodi quas illo corporis fuga, tenetur incidunt mollitia. Fugiat earum exercitationem similique amet dolore repellat ullam, omnis enim at a non, veritatis delectus excepturi ipsum voluptate nesciunt repudiandae quam? Corrupti, assumenda. Assumenda fuga rerum quibusdam maiores voluptatem. Repellendus assumenda distinctio omnis vel, ipsa delectus dolorum neque placeat facilis esse reprehenderit dignissimos quasi culpa nostrum non fuga cupiditate!", href: "/"},
  {title: "Another next title", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas inventore maxime esse? Fuga eveniet enim ullam eum repellendus deserunt voluptatum? Quo temporibus atque commodi quas illo corporis fuga, tenetur incidunt mollitia. Fugiat earum exercitationem similique amet dolore repellat ullam, omnis enim at a non, veritatis delectus excepturi ipsum voluptate nesciunt repudiandae quam? Corrupti, assumenda. Assumenda fuga rerum quibusdam maiores voluptatem. Repellendus assumenda distinctio omnis vel, ipsa delectus dolorum neque placeat facilis esse reprehenderit dignissimos quasi culpa nostrum non fuga cupiditate!", href: "/"},
  {title: "The last title", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas inventore maxime esse? Fuga eveniet enim ullam eum repellendus deserunt voluptatum? Quo temporibus atque commodi quas illo corporis fuga, tenetur incidunt mollitia. Fugiat earum exercitationem similique amet dolore repellat ullam, omnis enim at a non, veritatis delectus excepturi ipsum voluptate nesciunt repudiandae quam? Corrupti, assumenda. Assumenda fuga rerum quibusdam maiores voluptatem. Repellendus assumenda distinctio omnis vel, ipsa delectus dolorum neque placeat facilis esse reprehenderit dignissimos quasi culpa nostrum non fuga cupiditate!", href: "/"},
]