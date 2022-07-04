import { FaFacebookSquare } from "react-icons/fa";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

export function Footer() {
  return (
    <div className="h-12 w-full flex items-center justify-evenly sm:h-20">
      <div>
        <a
          href="https://www.primaxacademia.com.br"
          target="_blank"
          className="text-white border-white border-2 rounded-md py-0.5 px-2 hover:text-[#2196F3] hover:border-[#2196F3] duration-300
            sm:py-1 sm:pb-2 sm:px-3 sm:text-2xl
          "
        >
          Visite nosso site
        </a>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white mb-1 sm:text-2xl sm:mb-4">Sociais</h1>
        <div className="flex items-center justify-between sm:mb-3">
          <a
            href="https://wa.me/5511938006025?text=Olá Gostaria de saber sobre informações"
            target="_blank"
            className="text-white hover:text-[#2196F3] duration-300 sm:text-xl"
          >
            <BsWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/primax_academia/"
            target="_blank"
            className="text-white px-4 hover:text-[#2196F3] duration-300 sm:text-xl"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.facebook.com/primaxfitnesstraining/"
            target="_blank"
            className="text-white hover:text-[#2196F3] duration-300 sm:text-xl"
          >
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </div>
  );
}
