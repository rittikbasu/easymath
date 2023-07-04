import Image from "next/image";
import resetIcon from "../../public/undo.png";

interface ResetBtnProps {
  setPrice: (price: number) => void;
  setQuantity: (quantity: number) => void;
}

export function ResetBtn({ setPrice, setQuantity }: ResetBtnProps) {
  return (
    <button
      onClick={() => {
        setPrice(0);
        setQuantity(0);
      }}
      className=" text-white font-bold rounded-full"
    >
      <Image
        className="w-4 h-4"
        src={resetIcon}
        alt="reset"
        width={24}
        height={24}
      />
    </button>
  );
}
