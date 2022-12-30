import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PostPreview from "./PostPreview";

const posts = [
  {
    title: "An interesting article",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Another interesting article",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "More great content",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function MainPage() {
  return (
    <div className='w-screen h-screen'>
      <Header />
      <div className='bg-gray-800 text-white p-4'>
        <h1 className='text-xl uppercase mb-8'>
          Töltsd el szabadidődet élvezetesen!
        </h1>
        <div className='main-with-sidebar'>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            imperdiet enim eros, eget pulvinar eros posuere a. Fusce pharetra
            malesuada turpis nec porttitor. Morbi cursus eu arcu ut aliquam.
            Pellentesque quis odio ut ligula facilisis egestas et a mi. Maecenas
            tempus, lacus non auctor blandit, elit nulla blandit enim, ac tempus
            massa orci quis dui. Praesent luctus purus in leo convallis, at
            auctor elit tincidunt. Praesent eget efficitur nulla. Proin porta
            justo velit, non iaculis nisi tempus non. Suspendisse quis enim sed
            neque commodo faucibus. Proin quis justo ut arcu feugiat
            pellentesque vitae sed diam. Vivamus in neque eu ex pulvinar luctus
            at nec turpis. Nunc eu lobortis tortor. Maecenas semper urna nisl,
            non bibendum dolor feugiat a. Aenean dictum magna a nunc laoreet, ut
            ultricies diam suscipit. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Integer id
            porta urna. Nam vel scelerisque elit. Pellentesque posuere porta
            justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Vestibulum sagittis auctor augue, eget viverra velit congue in.
            Curabitur ultricies augue non convallis semper. Etiam commodo sapien
            non dui sagittis finibus. Donec gravida vestibulum sagittis.
            Phasellus eget fermentum justo. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; In quis mi neque. Duis in quam a lorem rutrum porta.
            Morbi tristique leo vitae nibh gravida consectetur. Cras ornare,
            velit id malesuada sagittis, ex lorem lacinia massa, nec varius nunc
            eros quis velit. Maecenas at ultricies libero, non sollicitudin
            nisl. Nullam eu tellus luctus, viverra purus at, mattis risus.
          </div>
          <div>
            <h2 className='text-xl mb-4'>
              Csekkold le a legfrissebb posztokat
            </h2>
            <div className='flex flex-col gap-4'>
              {posts.map((post, id) => (
                <PostPreview key={id} title={post.title} text={post.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
