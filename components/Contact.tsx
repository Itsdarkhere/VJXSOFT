import { ClockIcon, DocumentCheckIcon } from '@heroicons/react/16/solid'

export default function Contact() {

    return (
        <section className="w-full flex bg-black flex-row justify-center lg:px-6">
            <div className="w-full max-w-7xl lg:rounded-3xl p-6 py-24 flex flex-col gap-8 lg:flex-row justify-between items-start">
                <div className="w-full max-w-xl flex flex-col">
                    <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ota Yhteyttä</p>
                    <p className="mt-2 text-lg leading-8 text-gray-300">
                        Nopea ja tehokas viestintä on avain liiketoiminnan menestykseen. Älä jää paitsi mahdollisuuksista - ota yhteyttä tänään.
                    </p>
                    <div className="flex flex-row justify-start items-start mt-6">
                        <ClockIcon className="w-6 h-6 text-white" aria-hidden="true" />
                        <p className=" pl-3 text-sm text-gray-400 max-w-lg">
                            Vastaamme viesteihin 24 tunnin kuluessa. Kyselysi on meille tärkeä, ja odotamme innolla yhteistyötä kanssasi.
                        </p>
                    </div>
                    <div className="flex flex-row justify-start items-start mt-4">
                        <DocumentCheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
                        <p className="pl-3 text-sm text-gray-400 max-w-lg">
                            Hyödynnä ilmainen SEO-tarkistuksemme ja paranna verkkosivustosi näkyvyyttä hakukoneissa. Ota ensimmäinen askel digitaalisen läsnäolosi vahvistamiseen.
                        </p>
                    </div>
                </div>
                <form className=" p-4 lg:p-8 w-full border max-w-xl flex flex-col rounded-lg bg-base-100 shadow-md">
                    <label className=" form-control w-full">
                    <div className="label">
                        <span className="label-text">Sähköposti</span>
                    </div>
                    <input type="email" name="email" placeholder="Sähköposti" className="input input-bordered w-full" />
                    </label>

                    <label className="form-control mt-5">
                    <div className="label">
                        <span className="label-text">Viesti</span>
                    </div>
                    <textarea className="textarea textarea-bordered text-black h-24" placeholder="Bio"></textarea>
                    </label>
                    <button className=" mt-6 btn btn-primary">Lähetä viesti</button>
                </form>
            </div>
        </section>
    )
}