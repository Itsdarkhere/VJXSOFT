import Contact from "@/components/Contact";


export default function Palvelut() {

    // <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    //                     Asiantuntevat SEO-ratkaisut Liiketoimintasi Kasvuun
    // </p>
    // <p className="mt-6 text-lg leading-8 text-gray-600">
    // Tutustu kattaviin SEO-strategioihimme, jotka parantavat verkkosivustosi näkyvyyttä, houkuttelevat orgaanista liikennettä ja vahvistavat online-autoriteettiasi. Optimoidaan yhdessä digitaalinen jalanjälkesi kestävään menestykseen.
    // </p>

    return (
        <div className=" w-full bg-gray-50 flex flex-col justify-center items-center">
            <div className="relative max-w-7xl py-10 gap-10 lg:py-16 flex justify-center items-center flex-col">
                <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                    <div className="space-y-4 lg:space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Palvelumme</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Anna meidän auttaa sinua parantamaan hakukoneiden sijoituksiasi ja ohjaamaan liikennettä verkkosivustollesi.
                        </p>
                    </div>
                </div>
                <div className="container grid items-start gap-4 px-4 md:gap-8 md:px-6 lg:gap-12">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                        <div className="flex flex-col gap-1.5 bg-zinc-200 p-4 rounded-md">
                        <h3 className="text-2xl font-bold text-gray-900">SEO-strategia</h3>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                            SEO-asiantuntijamme työskentelevät kanssasi kehittääkseen räätälöidyn strategian hakukoneiden sijoitustesi parantamiseksi.
                            Suoritamme perusteellisen auditoinnin verkkosivustostasi ja tunnistamme parannusmahdollisuudet. Tiimimme auttaa sinua
                            optimoimaan sivustosi on-page-elementit, luomaan laadukasta sisältöä ja rakentamaan laadukkaita
                            takaisinlinkkejä. Seuraamme myös edistymistäsi ja teemme strategiaasi tarvittavia muutoksia varmistaaksemme,
                            että saat parhaat mahdolliset tulokset.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1.5 bg-zinc-200 p-4 rounded-md">
                        <h3 className="text-2xl font-bold text-gray-900">Paikallinen SEO</h3>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                            Jos sinulla on paikallinen liiketoiminta, on välttämätöntä varmistaa, että verkkosivustosi näkyy paikallisissa hakutuloksissa.
                            Tiimimme auttaa sinua optimoimaan sivustosi paikalliseen hakuun luomalla ja optimoimalla Google My
                            Business -profiilisi, varmistamalla, että NAP-tietosi (nimi, osoite, puhelinnumero) ovat johdonmukaisia
                            verkossa, ja saamaan positiivisia arvosteluja asiakkailtasi. Autamme sinua myös luomaan paikallisesti keskittyvää
                            sisältöä ja rakentamaan sitaatteja parantaaksemme näkyvyyttäsi paikallisissa hakutuloksissa.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1.5 bg-zinc-200 p-4 rounded-md">
                            <h3 className="text-2xl font-bold text-gray-900">Sivuston sisäinen SEO</h3>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                            Sivuston sisäinen SEO on prosessi, jossa optimoidaan verkkosivustosi sisältöä ja rakennetta parantamaan sen
                            näkyvyyttä hakukoneissa. Tiimimme suorittaa kattavan arvioinnin sivustosi sivuston sisäisistä elementeistä,
                            mukaan lukien otsikkotagit, metakuvaukset, otsikko-tagit ja sisäinen linkkirakenne. Tämän jälkeen annamme
                            parannusehdotuksia ja autamme sinua toteuttamaan parhaita käytäntöjä varmistaaksemme, että sivustosi on
                            hyvin optimoitu hakukoneille.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1.5 bg-zinc-200 p-4 rounded-md">
                            <h3 className="text-2xl font-bold text-gray-900">Linkkien rakentaminen</h3>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                            Korkealaatuisten takaisinlinkkien luominen on olennainen osa mitä tahansa SEO-strategiaa. Tiimimme auttaa sinua
                            hankkimaan linkkejä auktoriteettisilta ja asiaankuuluvilta verkkosivustoilta monenlaisten taktiikoiden avulla,
                            mukaan lukien houkuttelevan sisällön luominen, joka luonnollisesti houkuttelee linkkejä, verkkosivustojen omistajien
                            lähestyminen linkkipyyntöjen kanssa, ja osallistuminen toimialakohtaisiin yhteisöihin ja foorumeihin. Suoritamme myös
                            perusteellisen analyysin olemassa olevasta takaisinlinkkiprofiilistasi ja autamme sinua tunnistamaan ja poistamaan
                            mahdolliset matalalaatuiset tai roskapostilinkit, jotka voivat vahingoittaa sivustosi mainetta.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}