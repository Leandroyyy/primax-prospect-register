import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loading() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <AiOutlineLoading3Quarters className="text-primaxBlue text-5xl animate-spin" />
    </div>
  );
}
