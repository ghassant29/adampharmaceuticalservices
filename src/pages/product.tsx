import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useParams } from "react-router-dom";
import Page from "../layouts/page";
import { productsDetails } from "../utils/constants";
import NotFoundPage from "./not_found";

const ProductPage = () => {
  const { productId } = useParams();
  const product = productsDetails.find(
    (product) => product.productId === productId
  );

  if (!productId || !product) return <NotFoundPage />;

  return (
    <Page onlyHome title={product.name}>
      <div className="md:mt-36 flex items-center justify-center bg-secondary w-full py-8">
        <h1 className="text-4xl font-bold text-center text-white md:ml-16">
          {product.name}
        </h1>
      </div>
      <div className="hidden md:block h-[50px]"></div>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 h-fit">
        <div className="bg-white border-2  overflow-hidden rounded-xl flex flex-col-reverse md:flex-row items-center h-fit">
          <div className=" border-gray-200 w-full md:w-[70%] md:border-r-2">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                <dt className="text-sm font-medium text-gray-500">Product</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="font-medium">{product.name}: </span>
                  <span> {product.subName}</span>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <dd
                  className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
              {product.brochure && product.brochure.length > 0 && (
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t-2">
                  <dt className="text-sm font-medium text-gray-500">
                    More Info
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <PhotoProvider>
                      <div className="flex flex-wrap items-center gap-2">
                        {product.brochure.map((brochure) => (
                          <PhotoView src={brochure}>
                            <img
                              src={brochure}
                              className="h-44 cursor-pointer"
                            />
                          </PhotoView>
                        ))}
                      </div>
                    </PhotoProvider>
                  </dd>
                </div>
              )}
            </dl>
          </div>
          <div className="md:w-[30%] w-full h-full border-b-2 md:border-b-0">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain sm:max-h-72 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </Page>
  );
};

export default ProductPage;
