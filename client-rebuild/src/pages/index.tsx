import { Card, Carousel } from "flowbite-react";
import { type NextPage } from "next";
import ReactCountryFlag from "react-country-flag";
import MetaTag from "~/components/common/meta.common";
import { countries, imgString } from "~/helpers/misc";

const sampleCategories = [
  "Box",
  "Church Supplies",
  "Cross",
  "Magnets",
  "Ornaments",
  "Wall Plaques",
  "Photo Frame",
  "Knock Down Products",
  "Table Plaques",
  "Keyring",
  "Medium Density Fibreboard",
];

const Home: NextPage = () => {
  return (
    <div>
      <MetaTag />
      <div id="hero-carousel" style={{ height: 500 }} className="relative">
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
      <div id="product-categories" className="mx-auto max-w-7xl py-12">
        <h3 className="mx-auto mb-8 text-center text-4xl">
          Product Catalogues
        </h3>
        <div className="flex flex-wrap">
          {sampleCategories.map((categories) => {
            return (
              <div className="w-1/4">
                <div className="m-2 rounded-md border p-5 hover:cursor-pointer hover:shadow-md">
                  {categories}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* TODO: add carousel containing countries that have been clients */}
      <div className="relative mb-12 w-full" style={{ height: 350 }}>
        <div className="absolute h-full w-full bg-gradient-to-r from-pink-500 to-yellow-500 opacity-95">
          <h6 className="mt-6 text-center text-3xl text-white">
            Our <b className="font-bold">{countries.length}</b> International
            Clients
          </h6>
        </div>
        <Carousel slide={false}>
          {countries.map(({ code, label }) => {
            return (
              <div className="flex items-center justify-center gap-6">
                <ReactCountryFlag
                  countryCode={code}
                  svg
                  key={code}
                  style={{ width: 140, height: "auto" }}
                  className="border"
                />
                <h3 className="text-7xl text-white">{label}</h3>
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* TODO: add more fun stuff */}
    </div>
  );
};

export default Home;
