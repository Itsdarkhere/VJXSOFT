
export default function Process() {

    const features = [
        {
          name: 'Avainsanojen Tutkimus',
          description:
            'Syvällinen analyysi tunnistaakseen korkean suorituskyvyn avainsanat, jotka on räätälöity kohdeyleisöllesi ja alallesi, varmistaen sisältösi paremman sijoittumisen hakutuloksissa.',
        },
        {
          name: 'Sivukohtainen Optimointi',
          description:
            'Yksittäisten verkkosivujen optimointi saavuttaakseen korkeammat sijoitukset ja houkutellakseen merkityksellisempää liikennettä, keskittyen sisällön laatuun, HTML-tageihin ja URL-rakenteeseen.',
        },
        {
          name: 'Sisällöntuotanto',
          description:
            'Koukuttavan, SEO-ystävällisen sisällön kehittäminen, joka houkuttelee liikennettä ja vahvistaa brändiäsi alan auktoriteettina.',
        },
        {
          name: 'Takaisinlinkkien Strategiat',
          description:
            'Vahvan takaisinlinkkiprofiilin rakentaminen korkealaatuisilla linkeillä parantamaan verkkosivustosi auktoriteettia ja hakukoneiden sijoituksia.',
        },
    ];

    return (
        <section className=" w-full">
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Nosta Verkkonäkyvyytesi Uudelle Tasolle</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Asiantuntevat SEO-ratkaisut Liiketoimintasi Kasvuun
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Tutustu kattaviin SEO-strategioihimme, jotka parantavat verkkosivustosi näkyvyyttä, houkuttelevat orgaanista liikennettä ja vahvistavat online-autoriteettiasi. Optimoidaan yhdessä digitaalinen jalanjälkesi kestävään menestykseen.
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
    )
}