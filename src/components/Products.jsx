import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelegram  } from "react-icons/bs";

const Products = () => {
  return (
    <section className=" text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <a className="block relative h-64 rounded overflow-hidden">
              <img
                alt="products"
                className="object-cover object-center w-full h-full block"
                src="/1.jpg"
              />
            </a>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Колон Клинс
              </h2>
              <p className="mt-1">3450 ₽</p>
              <p className="h-full md:h-24">
                Колон Клинс- бережное очищение организма. Основной состав:
                сенна, крушина, семья подорожника, фенхель, мята, папайя,
                сельдерей, шиповник и барбарис.
              </p>
            </div>
            <div className="flex justify-start mt-2">
              <button className="inline-flex text-black bg-green-400 hover:bg-green-500 duration-500 border-0 py-1 px-2 focus:outline-none  rounded text-sm">
                <a
                  target="_blank"
                  href={`https://wa.me/79637756665?text=Здравствуйте!%20%0AКолон+Клинс+3450₽%20`}
                  className="inline-flex items-center text-xs md:text-base"
                >
                  Заказать по <BsWhatsapp className="m-1 ml-2 text-xs" />
                </a>
              </button>
              <button className="ml-2 inline-flex text-black bg-blue-400 hover:bg-blue-500 duration-500 border-0 py-1 px-2 focus:outline-none  rounded text-sm">
                <a
                  target="_blank"
                  href={`https://t.me/79637756665?text=Здравствуйте!%20%0AКолон+Клинс+3450₽%20`}
                  className="inline-flex items-center text-xs md:text-base"
                >
                  Заказать по <BsTelegram  className="m-1 ml-2 text-xs" />
                </a>
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <a className="block relative h-64 rounded overflow-hidden">
              <img
                alt="products"
                className="object-cover object-center w-full h-full block"
                src="/2.jpg"
              />
            </a>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Фолиевая кислота + Железо
              </h2>
              <p className="mt-1">1980 ₽</p>
              <p className="h-full md:h-24">
                Железо+ фолиевая кислота- повышает уровень железа и ферритина в
                крови.
              </p>
            </div>
            <div className="flex justify-start mt-2">
              <button className="inline-flex text-black bg-green-400 hover:bg-green-500 duration-500 border-0 py-1 px-2 focus:outline-none  rounded text-sm">
                <a
                  target="_blank"
                  href={`https://wa.me/79637756665?text=Здравствуйте!%20%0AФолиевая+кислота+Железо+1980₽%20`}
                  className="inline-flex items-center text-xs md:text-base"
                >
                  Заказать по <BsWhatsapp className="m-1 ml-2 text-xs" />
                </a>
              </button>
              <button className="ml-2 inline-flex text-black bg-blue-400 hover:bg-blue-500 duration-500 border-0 py-1 px-2 focus:outline-none  rounded text-sm">
                <a
                  target="_blank"
                  href={`https://wa.me/79637756665?text=Здравствуйте!%20%0AФолиевая+кислота+Железо+1980₽%20`}
                  className="inline-flex items-center text-xs md:text-base"
                >
                  Заказать по <BsTelegram  className="m-1 ml-2 text-xs" />
                </a>
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <a className="block relative h-64 rounded overflow-hidden">
              <img
                alt="products"
                className="object-cover object-center w-full h-full block"
                src="/3.jpg"
              />
            </a>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">Цинк</h2>
              <p className="mt-1">1980 ₽</p>
              <p className="h-full md:h-24">
                Цинк - незаменимый микроэлемент, который входит в более, чем 300
                энзимов.
              </p>
            </div>
            <div className="flex justify-start mt-2">
              <button className="inline-flex text-black bg-green-400 hover:bg-green-500 duration-500 border-0 py-1 px-2 focus:outline-none  rounded text-sm">
                <a
                  target="_blank"
                  href={`https://wa.me/79637756665?text=Здравствуйте!%20%0AЦинк+1980₽%20`}
                  className="inline-flex items-center text-xs md:text-base"
                >
                  Заказать по <BsWhatsapp className="m-1 ml-2 text-xs" />
                </a>
              </button>
              <button className="ml-2 inline-flex text-black bg-blue-400 hover:bg-blue-500 duration-500 border-0 py-1 px-2 focus:outline-none  rounded text-sm">
                <a
                  target="_blank"
                  href={`https://wa.me/79637756665?text=Здравствуйте!%20%0AЦинк+1980₽%20`}
                  className="inline-flex items-center text-xs md:text-base"
                >
                  Заказать по <BsTelegram  className="m-1 ml-2 text-xs" />
                </a>
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <a className="block relative h-64 rounded overflow-hidden">
              <img
                alt="products"
                className="object-cover object-center w-full h-full block"
                src="/4.jpg"
              />
            </a>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Розовое масло
              </h2>
              <p className="mt-1">4450 ₽</p>
              <p className="h-full md:h-24">
                Роза дамасская - это мощный антиоксидант. Нормализует
                деятельность сердечно- сосудистой системы, работу эндокринных
                желёз.
              </p>
            </div>
            <div className="flex justify-start mt-2">
              <button className="inline-flex text-black bg-green-400 hover:bg-green-500 duration-500 border-0 py-1 px-2 focus:outline-none  rounded text-sm">
                <a
                  target="_blank"
                  href={`https://wa.me/79637756665?text=Здравствуйте!%20%0AРозовое+масло+4450₽%20`}
                  className="inline-flex items-center text-xs md:text-base"
                >
                  Заказать по <BsWhatsapp className="m-1 ml-2 text-xs" />
                </a>
              </button>
              <button className="ml-2 inline-flex text-black bg-blue-400 hover:bg-blue-500 duration-500 border-0 py-1 px-2 focus:outline-none  rounded text-sm">
                <a
                  target="_blank"
                  href={`https://wa.me/79637756665?text=Здравствуйте!%20%0AРозовое+масло+4450₽%20`}
                  className="inline-flex items-center text-xs md:text-base"
                >
                  Заказать по <BsTelegram  className="m-1 ml-2 text-xs" />
                </a>
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <a className="block relative h-64 rounded overflow-hidden">
              <img
                alt="products"
                className="object-cover object-center w-full h-full block"
                src="/5.jpg"
              />
            </a>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Suncella
              </h2>
              <p className="mt-1">2700 ₽</p>
              <p className="h-full md:h-24">
                Suncella- в виде гели, очень удобно для пользования.
                Cостав: 150 видов лекарственных трав, кожура гранаты, розовое
                масло, витамин Е. Твоя находка для женского здоровья.
              </p>
            </div>
            <div className="flex justify-start mt-2">
              <button className="inline-flex text-black bg-green-400 hover:bg-green-500 duration-500 border-0 py-1 px-2 focus:outline-none  rounded text-sm">
                <a
                  target="_blank"
                  href={`https://wa.me/79637756665?text=Здравствуйте!%20%0ASuncella+2700₽%20`}
                  className="inline-flex items-center text-xs md:text-base"
                >
                  Заказать по <BsWhatsapp className="m-1 ml-2 text-xs" />
                </a>
              </button>
              <button className="ml-2 inline-flex text-black bg-blue-400 hover:bg-blue-500 duration-500 border-0 py-1 px-2 focus:outline-none  rounded text-sm">
                <a
                  target="_blank"
                  href={`https://wa.me/79637756665?text=Здравствуйте!%20%0ASuncella+2700₽%20`}
                  className="inline-flex items-center text-xs md:text-base"
                >
                  Заказать по <BsTelegram  className="m-1 ml-2 text-xs" />
                </a>
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <a className="block relative h-64 rounded overflow-hidden">
              <img
                alt="products"
                className="object-cover object-center w-full h-full block"
                src="/5.jpg"
              />
            </a>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Suncella
              </h2>
              <p className="mt-1">1980 ₽</p>
              <p className="h-full md:h-24">
                Sunsella- кун чечек в таблетках. Основной состав: 150 видов
                лекарственных трав, кожура гранаты. Забудь про гинекологические
                проблемы.
              </p>
            </div>
            <div className="flex justify-start mt-2">
              <button className="inline-flex text-black bg-green-400 hover:bg-green-500 duration-500 border-0 py-1 px-2 focus:outline-none  rounded text-sm">
                <a
                  target="_blank"
                  href={`https://wa.me/79637756665?text=Здравствуйте!%20%0ASuncella+1980₽%20`}
                  className="inline-flex items-center text-xs md:text-base"
                >
                  Заказать по <BsWhatsapp className="m-1 ml-2 text-xs" />
                </a>
              </button>
              <button className="ml-2 inline-flex text-black bg-blue-400 hover:bg-blue-500 duration-500 border-0 py-1 px-2 focus:outline-none  rounded text-sm">
                <a
                  target="_blank"
                  href={`https://wa.me/79637756665?text=Здравствуйте!%20%0ASucella+1980₽%20`}
                  className="inline-flex items-center text-xs md:text-base"
                >
                  Заказать по <BsTelegram  className="m-1 ml-2 text-xs" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
