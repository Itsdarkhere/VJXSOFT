

export default function Contact() {

    return (
        <section className="w-full border-t border-b flex bg-white flex-row justify-center lg:px-6">
            <div className="w-full max-w-7xl lg:rounded-3xl p-6 py-24 flex flex-col gap-8 lg:flex-row justify-between items-start">
                <div className="w-full max-w-xl flex flex-col">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Ota Yhteyttä</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ota Yhteyttä</p>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                        iste dolor cupiditate blanditiis ratione.
                    </p>
                </div>
                <form className=" p-8 w-full border max-w-xl flex flex-col rounded-lg bg-base-100 shadow-md">

                    {/* <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Nimi</span>
                    </div>
                    <input type="fname" name="fname" placeholder="Seppo Taalasmaa" className="input input-bordered w-full" />
                    </label> */}

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