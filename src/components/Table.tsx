import { ResetBtn } from "./ResetBtn";

interface TableProps {
  pr1Price: number;
  pr2Price: number;
  pr3Price: number;
  pr5Price: number;
  pr1Quantity: number;
  pr2Quantity: number;
  pr3Quantity: number;
  pr4Quantity: number;
  pr5Quantity: number;
  setPr1Price: (price: number) => void;
  setPr2Price: (price: number) => void;
  setPr3Price: (price: number) => void;
  setPr4Price: (price: number) => void;
  setPr5Price: (price: number) => void;
  setPr1Quantity: (quantity: number) => void;
  setPr2Quantity: (quantity: number) => void;
  setPr3Quantity: (quantity: number) => void;
  setPr4Quantity: (quantity: number) => void;
  setPr5Quantity: (quantity: number) => void;
}

export function Table({
  pr1Price,
  pr2Price,
  pr3Price,
  pr5Price,
  pr1Quantity,
  pr2Quantity,
  pr3Quantity,
  pr4Quantity,
  setPr1Price,
  setPr2Price,
  setPr3Price,
  setPr4Price,
  setPr5Price,
  setPr1Quantity,
  setPr2Quantity,
  setPr3Quantity,
  setPr4Quantity,
  setPr5Quantity,
}: TableProps) {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
          <th scope="col" className="px-5 py-3">
            Name
          </th>
          <th scope="col" className="px-5 py-3">
            Qty
          </th>
          <th scope="col" className="px-5 py-3">
            Price
          </th>
          <th scope="col" className="px-5 py-3">
            Reset
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <th
            scope="row"
            className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Double Switch
          </th>
          <td className="px-5 py-4 text-center">{pr1Quantity}</td>
          <td className="px-5 py-4 text-center">₹{pr1Price * pr1Quantity}</td>
          <td className="px-5 py-4 flex justify-center item-center">
            <ResetBtn setPrice={setPr1Price} setQuantity={setPr1Quantity} />
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <th
            scope="row"
            className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Marlboro Light
          </th>
          <td className="px-5 py-4 text-center">{pr2Quantity}</td>
          <td className="px-5 py-4 text-center">₹{pr2Price * pr2Quantity}</td>
          <td className="px-5 py-4 flex justify-center item-center">
            <ResetBtn setPrice={setPr2Price} setQuantity={setPr2Quantity} />
          </td>
        </tr>
        <tr className="bg-white border-b dark:border-gray-700 dark:bg-gray-900">
          <th
            scope="row"
            className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Marlboro Adv
          </th>
          <td className="px-5 py-4 text-center">{pr3Quantity}</td>
          <td className="px-5 py-4 text-center">₹{pr3Price * pr3Quantity}</td>
          <td className="px-5 py-4 flex justify-center item-center">
            <ResetBtn setPrice={setPr3Price} setQuantity={setPr3Quantity} />
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <th
            scope="row"
            className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Cold Drink
          </th>
          <td className="px-5 py-4 text-center">-</td>
          <td className="px-5 py-4 text-center">₹{pr4Quantity}</td>
          <td className="pr-1 py-4 flex justify-center item-center">
            <ResetBtn setPrice={setPr4Price} setQuantity={setPr4Quantity} />
          </td>
        </tr>
        <tr className="bg-white  dark:bg-gray-900 dark:border-gray-700">
          <th
            scope="row"
            className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Chips/ Others
          </th>
          <td className="px-5 py-4 text-center">-</td>
          <td className="px-5 py-4 text-center">₹{pr5Price}</td>
          <td className="px-5 py-4 flex justify-center item-center">
            {/* reset button with logo */}
            <ResetBtn setPrice={setPr5Price} setQuantity={setPr5Quantity} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
