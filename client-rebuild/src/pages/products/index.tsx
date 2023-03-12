import { Button, Sidebar, Spinner } from "flowbite-react";
import { type NextPage } from "next";
import MetaTag from "~/components/common/meta.common";
import { api } from "~/utils/api";

const Products: NextPage = () => {
  const { isLoading, data } = api.product.getSidebarData.useQuery();

  const mapData = () => {
    if (!data) return;
    for (const entries of data.entries()) {
      console.log(entries[0]);
    }
  };

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
      <div className="mx-6 my-10 flex ">
        <div className="w-1/4">
          <div className="w-fit rounded border">
            <Sidebar>
              <Sidebar.Items>
                {isLoading ? (
                  <div className="flex h-20 w-full items-center justify-center">
                    <Spinner />
                  </div>
                ) : (
                  <Sidebar.ItemGroup>
                    <Sidebar.Collapse label={`Test`}>
                      <Sidebar.Item>Content 1</Sidebar.Item>
                      <Sidebar.Item>Content 2</Sidebar.Item>
                      <Sidebar.Item>Content 3</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse label={`Test`}>
                      <Sidebar.Item>Content 1</Sidebar.Item>
                      <Sidebar.Item>Content 2</Sidebar.Item>
                      <Sidebar.Item>Content 3</Sidebar.Item>
                    </Sidebar.Collapse>
                  </Sidebar.ItemGroup>
                )}
              </Sidebar.Items>
            </Sidebar>
          </div>
        </div>
        <div className="w-3/4">
          <Button onClick={mapData}>Log</Button>
        </div>
      </div>
    </>
  );
};

export default Products;
