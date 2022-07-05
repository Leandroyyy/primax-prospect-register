import { useState } from 'react';
import {AiOutlineCheckCircle} from 'react-icons/ai'

interface TriggerProps{
    trigger:boolean
    setTrigger:(close:boolean) => void
}

export function ProspectFinished(props:TriggerProps):any{

    return props.trigger ? (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
            <div className="bg-[#2196F3] px-2 rounded-md w-72 flex flex-col items-center justify-center border-white border-2">
                <h1 className='text-white font-extrabold py-10'>Pré-Cadastro feito com Sucesso !!</h1>
                <AiOutlineCheckCircle className='text-white text-[10rem] animate-pulse'/>
                <h2 className='text-white my-5 px-4 py-2 border-2'>Agora passe na <u><strong>recepção</strong></u> da
                <u><strong> Primax</strong></u> para finalizarmos o seu cadastro!!</h2>
                <button onClick={() => props.setTrigger(false)} 
                className='bg-white my-5 py-2 px-9 rounded-3xl text-[#2196f3] 
                hover:bg-[#2196f3] hover:text-white hover:border-white hover:border-2'>
                    Ok!
                </button>
            </div>
        </div>
    ) : (
        ""
    );
}