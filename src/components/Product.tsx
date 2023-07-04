import { useState, useEffect } from "react";

interface ProductProps {
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
  price,
  name,
  color,
  quantity,
  setQuantity,
  step = 1,
  setPrice,
  hidePrice = false,
  hideQuantity = false,
}: ProductProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleIncrement = () => {
    setQuantity(
      ((prevQuantity: number) => prevQuantity + step) as unknown as number
    );
  };
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - step);
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
        <p className="text-center text-xs mt-2 w-12 rounded-lg">
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
            className="relative w-full max-w-md p-4 overflow-x-hidden overflow-y-auto bg-white rounded-lg shadow dark:bg-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-6 lg:px-8">
              <div className="space-y-6">
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
                      className="w-[90px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 mt-1 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
