import Image from "next/image";
import sss from '../public/sss.svg';

export default function Home() {

  const features = [
    {
      name: 'Push to deploy',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      // icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL certificates',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      // icon: LockClosedIcon,
    },
    {
      name: 'Simple queues',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      // icon: ArrowPathIcon,
    },
    {
      name: 'Advanced security',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      // icon: FingerPrintIcon,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <section className="px-6 w-full flex justify-center mb-24">
        <div className="w-full py-10 flex flex-col lg:flex-row justify-between max-w-7xl bg-white rounded-lg px-6">
          <div className="flex flex-col gap-2 justify-center items-start max-w-3xl">
            <h3 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hoidetaanko yrityksesi digitaalinen läsnäolo kuntoon?</h3>
            <h6 className=" mt-4 text-xl text-gray-500">Löydä asiakkaasi siellä, missä he ovat – hyödynnä dataohjautuvaa markkinointia ja innovatiivisia digistrategioita, jotka vievät yrityksesi seuraavalle tasolle.</h6>
            <button className=" mt-8 inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Ota yhteyttä</button>
          </div>
          <Image className=" hidden lg:block" src={sss} alt="VJXSOFT" />
        </div>
      </section>

      <section className=" w-full">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to deploy your app
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                pulvinar et feugiat blandit at. In mi viverra elit nunc.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex bg-white flex-row justify-center p-6">
        <div className="w-full max-w-7xl bg-black rounded-lg p-10 py-10 flex flex-col gap-8 lg:flex-row justify-between items-start">
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

      <section className="pt-10 w-full bg-white flex justify-center p-6">
        <div className="w-full max-w-7xl py-20 flex flex-col gap-8">
          <h5 className=" font-bold text-2xl text-indigo-400 leading-tight">Miksi VJXSOFT?</h5>
          <h6 className=" text-zinc-600 leading-snug text-3xl">
            VJXSOFT tarjoaa kaiken osaamisen mitä pienyritys kaipaa digitaalisessa markkinoinnissa. 
            Palvelemme kerralla vain muutamaa asiakasta, jotta voimme keskittyä laatuun ja asiakkaan tarpeisiin.
          </h6>
        </div>
      </section>

      <section className="mt-10 w-full flex justify-center p-6">
        <div className="w-full max-w-7xl py-20 flex flex-col gap-8">
          <h4 className=" text-4xl font-semibold">Viimeaikaiset blogit</h4>
          <div className="w-full flex flex-row justify-start gap-6 flex-wrap">
            <div className="card w-96 bg-base-100 shadow-xl text-zinc-950">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Paikallinen SEO
                  <div className="badge badge-secondary">Uusi</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl text-zinc-950">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Pienyrittäjän SEO opas
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl text-zinc-950">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Hakukoneoptimointi eli SEO
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
