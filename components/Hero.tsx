import Image from "next/image";
import sss from '../public/sss.svg';

export default function Hero() {

    return (
        <section className="lg:px-6 w-full flex justify-center my-12">
            <div className="w-full lg:py-10 flex flex-col lg:flex-row justify-between max-w-7xl lg:bg-white lg:rounded-3xl px-6">
                <div className="flex flex-col gap-2 justify-center items-start max-w-3xl">
                    <h3 className=" text-4xl font-bold tracking-tight text-gray-100 lg:text-gray-900 sm:text-6xl">Hoidetaanko yrityksesi digitaalinen läsnäolo kuntoon?</h3>
                    <h6 className=" mt-4 text-xl text-gray-300 lg:text-gray-500">Löydä asiakkaasi siellä, missä he ovat – hyödynnä dataohjautuvaa markkinointia ja innovatiivisia digistrategioita, jotka vievät yrityksesi seuraavalle tasolle.</h6>
                    <button className=" mt-6 inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Ota yhteyttä</button>
                </div>
                <Image className=" hidden lg:block" src={sss} alt="VJXSOFT" />
            </div>
        </section>
    )
}