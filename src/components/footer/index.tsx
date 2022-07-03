import {FaFacebookSquare} from 'react-icons/fa'
import {BsWhatsapp, BsInstagram} from 'react-icons/bs'

export function Footer(){
    return(
        <div className="bg-[#fff] h-14 flex items-center justify-evenly  w-full bottom-0">

            <h1>Sociais</h1>
            <div className="flex items-center justify-between">
                <a href=""><BsWhatsapp/></a>
                <a href=""><BsInstagram/></a>
                <a href=""><FaFacebookSquare/></a>
            </div>
        </div>
    )
}