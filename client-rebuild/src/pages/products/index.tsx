import { Button, Sidebar, Spinner } from "flowbite-react";
import { type NextPage } from "next";
import Link from "next/link";
import MetaTag from "~/components/common/meta.common";
import { api } from "~/utils/api";

const Products: NextPage = () => {
  const { isLoading, data } = api.product.getSidebarData.useQuery();

  const mapData = () => {
    if (!data) return;
    console.log(data);

    // for (const entries of data.entries()) {
    //   console.log(entries[0]);
    // }
  };

  return (
    <>
      <MetaTag
        title="All Woodcrafted Products - High quality woodcraft from locally
          selected woods."
      />
      <div style={{ height: 350 }} className="relative">
        <div className="absolute z-10 h-full w-full bg-gradient-to-br from-pink-500 to-yellow-500 opacity-95"></div>
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
      <div className="my-12 flex">
        <div className="w-1/4">
          <div className="mx-auto flex min-h-[50] w-4/5 flex-col space-y-2 rounded ">
            <Link
              href="#"
              className="overflow-hidden rounded border bg-yellow-400 px-6 py-4 text-white hover:shadow-md"
            >
              Test (Active)
            </Link>
            <Link href="#" className="rounded border px-6 py-4 hover:shadow-md">
              Test
            </Link>
            <Link href="#" className="border px-6 py-4 hover:shadow-md">
              Test
            </Link>
            <Link href="#" className="border px-6 py-4 hover:shadow-md">
              Test
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Button onClick={mapData}>Log</Button>
        </div>
      </div>
    </>
  );
};

export default Products;
