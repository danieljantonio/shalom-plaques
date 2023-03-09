import { Sidebar } from "flowbite-react";
import { type NextPage } from "next";
import Head from "next/head";
import MetaTag from "~/components/common/meta.common";

const Products: NextPage = () => {
  return (
    <>
      <MetaTag
        title="All Woodcrafted Products - High quality woodcraft from locally
          selected woods."
      />
      <div style={{ height: 350 }} className="relative">
        <div className="absolute z-10 h-full w-full bg-gradient-to-r from-pink-500 to-yellow-500 opacity-95"></div>
        <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center font-serif text-white">
          <div className="space-y-3 text-center">
            <span className="text-2xl">Shalom Plaques</span>
            <h1 className="text-7xl font-semibold">Products</h1>
            <h3 className="text-xl italic">
              Specially selected, handcrafted, woodwork
            </h3>
          </div>
        </div>
      </div>
      <div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
};

export default Products;
