import { useState } from "react";
import { Product } from "../components/Product";

export default function App() {
  const [pr1Price, setPr1Price] = useState(0);
  const [pr2Price, setPr2Price] = useState(0);
  const [pr3Price, setPr3Price] = useState(0);
  const [pr4Price, setPr4Price] = useState(0);
  const [pr5Price, setPr5Price] = useState(0);

  const [pr1Quantity, setPr1Quantity] = useState(0);
  const [pr2Quantity, setPr2Quantity] = useState(0);
  const [pr3Quantity, setPr3Quantity] = useState(0);
  const [pr4Quantity, setPr4Quantity] = useState(0);
  const [pr5Quantity, setPr5Quantity] = useState(0);
  return (
    <>
      {/* title: Easy Math */}
      <h1 className="text-3xl text-center mt-8 font-mono">Easy Math ✨</h1>
      <div className="flex justify-center gap-x-6 mt-8 border-2 border-zinc-700 py-2 rounded-2xl mx-2">
        <Product
          name="Double Mint"
          color="bg-blue-700"
          defaultPrice={18}
          price={pr1Price}
          quantity={pr1Quantity}
          setQuantity={setPr1Quantity}
          step={1}
          setPrice={setPr1Price}
        ></Product>
        <Product
          name="Marlboro Light"
          color="bg-orange-600"
          defaultPrice={20}
          price={pr2Price}
          quantity={pr2Quantity}
          setQuantity={setPr2Quantity}
          step={1}
          setPrice={setPr2Price}
        ></Product>
        <Product
          name="Other Cig"
          color="bg-red-600"
          defaultPrice={18}
          price={pr3Price}
          quantity={pr3Quantity}
          setQuantity={setPr3Quantity}
          step={1}
          setPrice={setPr3Price}
        ></Product>
        <Product
          name="Cold Drink"
          color="bg-yellow-950"
          defaultPrice={0}
          price={pr4Price}
          quantity={pr4Quantity}
          setQuantity={setPr4Quantity}
          step={5}
          setPrice={setPr4Price}
          hidePrice={true}
        ></Product>
        <Product
          name="Chips/ Others"
          color="bg-lime-400"
          defaultPrice={0}
          price={pr5Price}
          quantity={pr5Quantity}
          setQuantity={setPr5Quantity}
          setPrice={setPr5Price}
          hideQuantity={true}
        ></Product>
      </div>

      <div className="shadow-md mt-12 border-2 border-zinc-700 py-2 rounded-2xl mx-2">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Double Mint
              </th>
              <td className="px-6 py-4 text-center">{pr1Quantity}</td>
              <td className="px-6 py-4">₹{pr1Price}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Marlboro Light
              </th>
              <td className="px-6 py-4 text-center">{pr2Quantity}</td>
              <td className="px-6 py-4">₹{pr2Price}</td>
            </tr>
            <tr className="bg-white border-b dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Other Cig
              </th>
              <td className="px-6 py-4 text-center">{pr3Quantity}</td>
              <td className="px-6 py-4">₹{pr3Price}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Cold Drink
              </th>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4">₹{pr4Price}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Chips/ Others
              </th>
              <td className="px-6 py-4 text-center">-</td>
              <td className="px-6 py-4">₹{pr5Price}</td>
            </tr>
            <tr className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <th scope="row" className="px-6 py-3">
                Total
              </th>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3 font-bold">₹2999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
