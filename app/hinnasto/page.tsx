

export default function Hinnasto() {

    return (
        <div className="flex min-h-screen flex-col items-center">
            <section className=" w-full lg:px-6 flex justify-center lg:py-24">
                <div className="max-w-7xl w-full py-24 px-6 bg-white lg:rounded-lg flex flex-col justify-center items-center">
                    <div className="w-full max-w-md">
                        <h1 className="text-4xl text-zinc-950 font-bold text-center">Hinnasto</h1>
                        <p className="text-center text-zinc-600 mt-2">Markkinoiden parhaat hinnat kehtaa näyttää julkisesti</p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center mt-12 gap-10 w-full">
                        <PriceCard title="Pienyritys" price={300} />
                        <PriceCard title="Kasvava yritys" price={499} />
                    </div>
                </div>
            </section>
        </div>
    )
}

function PriceCard({ title, price }: { title: string, price: number }) {
    return (
        <div className="w-full max-w-md p-4 bg-base-100 border border-gray-200 rounded-lg shadow sm:p-8">
            <h5 className="mb-4 text-xl font-medium text-gray-500 ">{title}</h5>
            <div className="flex items-baseline text-gray-900 ">
                <span className="text-3xl font-semibold">€</span>
                <span className="text-5xl font-extrabold tracking-tight">{price}</span>
                <span className="ms-1 text-xl font-normal text-gray-500 ">/kuukaudessa</span>
            </div>
            <ul role="list" className="space-y-5 my-7">
                <li className="flex items-center">
                    <svg className="flex-shrink-0 w-4 h-4 text-blue-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">2 team members</span>
                </li>
                <li className="flex">
                    <svg className="flex-shrink-0 w-4 h-4 text-blue-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">20GB Cloud storage</span>
                </li>
                <li className="flex">
                    <svg className="flex-shrink-0 w-4 h-4 text-blue-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500  ms-3">Integration help</span>
                </li>
            </ul>
        </div>
    )
}