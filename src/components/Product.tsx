import { useState } from "react";

interface ProductProps {
  defaultPrice: number;
  price: number;
  name: string;
  color: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
  step?: number;
  setPrice: (price: number) => void;
  hidePrice?: boolean;
  hideQuantity?: boolean;
}

export function Product({
  defaultPrice,
  price,
  name,
  color,
  quantity,
  setQuantity,
  step = 0,
  setPrice,
  hidePrice = false,
  hideQuantity = false,
}: ProductProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   const [price, setPrice] = useState(defaultPrice);
  console.log("price", price, name, color);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleIncrement = () => {
    setQuantity(quantity + step);
    setPrice(defaultPrice * quantity);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - step);
      setPrice(defaultPrice * quantity);
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="flex flex-col items-center focus:outline-none"
        type="button"
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
          <div className={`h-full w-full ${color} transform rotate-0`}></div>
          <div className="h-full w-full bg-white transform -rotate-0"></div>
        </div>
        <p className="text-center text-xs mt-2 w-12">
          <span className="inline-block">{name}</span>
        </p>
      </button>

      {/* Main modal */}
      {isModalOpen && (
        <div
          aria-hidden="true"
          className="fixed px-8 inset-0 flex items-center justify-center z-50 bg-opacity-90 bg-black"
          onClick={toggleModal}
        >
          <div
            className="relative w-full max-w-md p-4 overflow-x-hidden overflow-y-auto bg-white rounded-lg shadow dark:bg-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-6 lg:px-8">
              <form className="space-y-6" action="#">
                {/* Quantity */}
                {!hideQuantity && (
                  <div className="flex items-start justify-between mt-2">
                    <label
                      htmlFor="quantity"
                      className="mr-2 text-gray-100 font-medium"
                    >
                      {hidePrice ? "Price" : "Quantity"}
                    </label>
                    <span className="flex items-center justify-evenly">
                      <button
                        onClick={handleDecrement}
                        className="w-8 h-8 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-full text-white"
                        type="button"
                      >
                        -
                      </button>
                      <span className="mx-2 text-gray-100 font-medium">
                        {quantity}
                      </span>
                      <button
                        onClick={handleIncrement}
                        className="w-8 h-8 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-full text-white"
                        type="button"
                      >
                        +
                      </button>
                    </span>
                  </div>
                )}

                {/* Price */}
                {!hidePrice && (
                  <div className="flex items-start justify-between">
                    <label
                      htmlFor="price"
                      className="text-gray-100 font-medium mt-2"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      className="w-[90px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 mt-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                    />
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
