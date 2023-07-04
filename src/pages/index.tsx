import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { Product } from "../components/Product";
import { Table } from "../components/Table";

export default function App() {
  const [pr1Price, setPr1Price] = useState(18);
  const [pr2Price, setPr2Price] = useState(17);
  const [pr3Price, setPr3Price] = useState(20);
  const [pr4Price, setPr4Price] = useState(0);
  const [pr5Price, setPr5Price] = useState(0);

  const [pr1Quantity, setPr1Quantity] = useState(0);
  const [pr2Quantity, setPr2Quantity] = useState(0);
  const [pr3Quantity, setPr3Quantity] = useState(0);
  const [pr4Quantity, setPr4Quantity] = useState(0);
  const [pr5Quantity, setPr5Quantity] = useState(0);
  return (
    <div className="max-w-md md:mx-auto flex flex-col h-screen antialiased overflow-auto">
      <Head>
        <title>Easy Math ✨</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className="text-3xl text-center mt-8 font-mono">Easy Math ✨</h1>
      <div className="flex justify-center gap-x-6 md:mt-14 mt-8 border border-zinc-700 py-2 rounded-2xl mx-2">
        <Product
          name="Double Switch"
          color="bg-blue-700"
          price={pr1Price}
          quantity={pr1Quantity}
          setQuantity={setPr1Quantity}
          setPrice={setPr1Price}
        ></Product>
        <Product
          name="Marlboro Light"
          color="bg-orange-600"
          price={pr2Price}
          quantity={pr2Quantity}
          setQuantity={setPr2Quantity}
          setPrice={setPr2Price}
        ></Product>
        <Product
          name="Marlboro Advance"
          color="bg-red-600"
          price={pr3Price}
          quantity={pr3Quantity}
          setQuantity={setPr3Quantity}
          setPrice={setPr3Price}
        ></Product>
        <Product
          name="Cold Drink"
          color="bg-yellow-950"
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
          price={pr5Price}
          quantity={pr5Quantity}
          setQuantity={setPr5Quantity}
          setPrice={setPr5Price}
          hideQuantity={true}
        ></Product>
      </div>

      <div className="md:mt-32 mt-12 border border-zinc-700 pt-2 rounded-2xl mx-2 overflow-hidden">
        <Table
          pr1Price={pr1Price}
          pr2Price={pr2Price}
          pr3Price={pr3Price}
          pr5Price={pr5Price}
          pr1Quantity={pr1Quantity}
          pr2Quantity={pr2Quantity}
          pr3Quantity={pr3Quantity}
          pr4Quantity={pr4Quantity}
          pr5Quantity={pr5Quantity}
          setPr1Price={setPr1Price}
          setPr2Price={setPr2Price}
          setPr3Price={setPr3Price}
          setPr4Price={setPr4Price}
          setPr5Price={setPr5Price}
          setPr1Quantity={setPr1Quantity}
          setPr2Quantity={setPr2Quantity}
          setPr3Quantity={setPr3Quantity}
          setPr4Quantity={setPr4Quantity}
          setPr5Quantity={setPr5Quantity}
        ></Table>
      </div>

      {/* Show total */}
      <div className="flex justify-center items-center md:mt-24 mt-12">
        <div className="flex flex-col justify-center items-center space-y-2">
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            Total
          </p>
          <p className="text-4xl font-bold text-gray-800 dark:text-blue-500">
            ₹
            {pr1Price * pr1Quantity +
              pr2Price * pr2Quantity +
              pr3Price * pr3Quantity +
              pr4Quantity +
              pr5Price}
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto px-5 py-4 text-center bg-black">
        <p className="font-mono">
          <Link href="https://rittik.io" className="hover:text-indigo-500">
            Made with ❤️ by Rittik
          </Link>
        </p>
      </footer>
    </div>
  );
}
