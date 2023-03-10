import React from "react";
import { useParams } from "react-router-dom";
import ProgramPreview from "./ProgramPreview";
import Header from "./Header";
import ModernFooter from "./ModernFooter";

const programs = [
  { title: "Túrázás", image: "hiking-img", url: "programok" },
  { title: "Társasjátékozás", image: "board-game-img", url: "/programok" },
  { title: "Főzés", image: "cooking-img", url: "/programok" },
  { title: "Geocaching", image: "geocaching-img", url: "/programok" },
  { title: "Videojátékozás", image: "videogames-img", url: "/programok" },
  { title: "Dungeons and Dragons", image: "dnd-img", url: "/programok" },
  { title: "Sziklamászás", image: "climbing-img", url: "/programok" },
  { title: "Gokartozás", image: "gokart-img", url: "/programok" },
  { title: "Táncolás", image: "dancing-img", url: "/programok" },
];

export default function Programs() {
  const { programName } = useParams();

  return (
    <div className='w-screen h-fit bg-gray-100 font-open-sans'>
      <Header />
      <div className='w-full h-1/6 bg-black text-white p-6'>
        <h1 className='font-bold text-2xl mb-2'>Motivációs szöveg</h1>
        <p>A szöveg kifejtése: sok sok töltelék szöveg</p>
      </div>
      <div className='flex bg-gray-100 w-full lg:w-[80%] 2xl:w-[60%] m-auto flex-wrap justify-center py-10 gap-16'>
        {programs.map((program, id) => (
          <ProgramPreview
            title={program.title}
            image={program.image}
            url={program.url}
            key={id}
          />
        ))}
      </div>
      <ModernFooter />
    </div>
  );
}
