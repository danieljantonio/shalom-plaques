import { Carousel } from "flowbite-react";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MetaTag from "~/components/common/meta.common";

const Home: NextPage = () => {
  const imgString = [
    "machine-1.JPG",
    "machine-2.JPG",
    "working-1.JPG",
    "working-2.JPG",
    "working-3.JPG",
    "working-4.JPG",
    "working-5.JPG",
    "working-6.JPG",
    "working-7.JPG",
  ];
  return (
    <div>
      <MetaTag />
      <div style={{ height: 500 }} className="relative">
        <div className="absolute z-10 h-full w-full bg-black opacity-50"></div>
        <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center font-serif  text-white">
          <div className="space-y-3 text-center">
            <span className="text-2xl">Est. 1989</span>
            <h1 className="text-7xl font-semibold">Shalom Plaques</h1>
            <h3 className="text-2xl">
              Bringing the Word to the ends of the World
            </h3>
          </div>
        </div>
        <Carousel
          indicators={false}
          leftControl=" "
          rightControl=" "
          slideInterval={5000}
        >
          {imgString.map((img) => (
            <img
              key={img}
              src={`/images/carousel/${img}`}
              alt="Shalom Plaques"
              className="w-full object-cover"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
