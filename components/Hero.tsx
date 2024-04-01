import Image from "next/image";
import sss from '../public/sss.svg';
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Hero() {

    return (
        <section className="px-2 lg:px-6 w-full flex justify-center my-6 lg:my-24">
            <div className="w-full py-10 px-6 flex flex-col lg:flex-row justify-between max-w-7xl bg-black lg:bg-white rounded-lg lg:rounded-3xl">
                <div className="flex flex-col gap-2 justify-center items-start max-w-3xl">
                    <h3 className=" font-extrabold text-3xl text-white lg:text-gray-900 sm:text-6xl">Hoidetaanko yrityksesi digitaalinen läsnäolo kuntoon?</h3>
                    <h6 className=" mt-4 text-base lg:text-lg text-gray-300 lg:text-gray-500">Löydä asiakkaasi siellä, missä he ovat – hyödynnä dataohjautuvaa markkinointia ja innovatiivisia digistrategioita, jotka vievät yrityksesi seuraavalle tasolle.</h6>
                    <button className=" mt-6 gap-2 flex flex-row text-white items-center btn btn-primary">
                        Ota yhteyttä
                        <ArrowRightIcon className=" w-4" />
                    </button>
                </div>
                <Image className=" hidden lg:block" src={sss} alt="VJXSOFT" />
            </div>
        </section>
    )
}