import Image from "next/image";
import sss from '../public/sss.svg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <section className="w-full py-10 flex flex-row justify-between max-w-7xl bg-white rounded-lg p-6">
        <div className="flex flex-col gap-2 justify-center items-start max-w-3xl">
          <h3 className=" font-bold text-5xl text-zinc-900 leading-tight">Hoidetaanko yrityksesi digitaalinen läsnäolo kuntoon?</h3>
          <h6 className=" text-zinc-600 text-xl">Löydä asiakkaasi siellä, missä he ovat – hyödynnä dataohjautuvaa markkinointia ja innovatiivisia digistrategioita, jotka vievät yrityksesi seuraavalle tasolle.</h6>
          <button className=" mt-12 bg-indigo-800 px-12 py-4 text-white font-semibold rounded-md">Ota yhteyttä</button>
        </div>
        <Image src={sss} alt="VJXSOFT" />
      </section>

      <section className="w-full mt-10 flex flex-row justify-center">
        <div className="w-full max-w-7xl py-20 flex flex-row justify-between items-start">
          <div className="w-full max-w-xl flex flex-col gap-4">
            <h4 className=" text-4xl font-semibold">Ota yhteyttä</h4>
            <p className=" text-zinc-400">Varaa täysin veloitukseton strategiapuhelu oheisella lomakkeella. Täytäthän tiedot mahdollisimman tarkasti, sillä perehdymme yrityksesi tilanteeseen perinpohjaisesti.</p>
          </div>
          <form className=" p-8 w-full max-w-xl flex flex-col rounded-lg bg-white shadow-md">

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Sähköposti</span>
              </div>
              <input type="email" name="email" placeholder="Sähköposti" className="input input-bordered w-full max-w-xs" />
            </label>

            {/* <label className="form-control w-full mt-5">
              <div className="label">
                <span className="label-text">Palvelu</span>
              </div>
              <select className="select text-black placeholder:text-zinc-300 select-bordered">
                <option disabled selected>Pick one</option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </label> */}

            <label className="form-control mt-5">
              <div className="label">
                <span className="label-text">Viesti</span>
              </div>
              <textarea className="textarea textarea-bordered text-black h-24" placeholder="Bio"></textarea>
            </label>
            <button className=" mt-6 btn btn-primary">Neutral</button>
          </form>
        </div>
      </section>

      <section className="mt-10 w-full bg-white flex justify-center p-6">
        <div className="w-full max-w-7xl py-20 flex flex-col gap-8">
          <h5 className=" font-bold text-2xl text-indigo-400 leading-tight">Miksi VJXSOFT?</h5>
          <h6 className=" text-zinc-600 leading-snug text-3xl">
            VJXSOFT tarjoaa kaiken osaamisen mitä pienyritys kaipaa digitaalisessa markkinoinnissa. 
            Palvelemme kerralla vain muutamaa asiakasta, jotta voimme keskittyä laatuun ja asiakkaan tarpeisiin.
          </h6>
        </div>
      </section>
    </main>
  );
}
