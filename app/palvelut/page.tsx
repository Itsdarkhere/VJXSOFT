

export default function Palvelut() {

    // <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    //                     Asiantuntevat SEO-ratkaisut Liiketoimintasi Kasvuun
    // </p>
    // <p className="mt-6 text-lg leading-8 text-gray-600">
    // Tutustu kattaviin SEO-strategioihimme, jotka parantavat verkkosivustosi näkyvyyttä, houkuttelevat orgaanista liikennettä ja vahvistavat online-autoriteettiasi. Optimoidaan yhdessä digitaalinen jalanjälkesi kestävään menestykseen.
    // </p>

    return (
        <div className="relative bg-gray-100 py-10 gap-10 lg:py-16 flex justify-center items-center flex-col">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-4 lg:space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Let us help you improve your search engine rankings and drive traffic to your website.
                    </p>
                </div>
            </div>
            <div className="container grid items-start gap-4 px-4 md:gap-8 md:px-6 lg:gap-12">
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:gap-8">
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-2xl font-bold text-gray-900">SEO Strategy</h3>
                        <p className="mt-2 text-base leading-7 text-gray-600">
                        Our SEO experts will work with you to develop a custom strategy to improve your search engine rankings.
                        We'll conduct a thorough audit of your website and identify opportunities for improvement. Our team will
                        help you optimize your site's on-page elements, create high-quality content, and build high-quality
                        backlinks. We'll also monitor your progress and make adjustments to your strategy as needed to ensure that
                        you get the best possible results.
                        </p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-2xl font-bold text-gray-900">Local SEO</h3>
                        <p className="mt-2 text-base leading-7 text-gray-600">
                        If you have a local business, it's essential to ensure that your website appears in local search results.
                        Our team will help you optimize your site for local search by creating and optimizing your Google My
                        Business profile, ensuring that your NAP (name, address, phone number) information is consistent across
                        the web, and generating positive reviews from your customers. We'll also help you create locally focused
                        content and build citations to improve your visibility in local search results.
                        </p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-2xl font-bold text-gray-900">On-Page SEO</h3>
                        <p className="mt-2 text-base leading-7 text-gray-600">
                        On-page SEO is the process of optimizing the content and structure of your website to improve its
                        visibility in search engines. Our team will conduct a comprehensive review of your site's on-page
                        elements, including your title tags, meta descriptions, heading tags, and internal linking structure. We
                        will then make recommendations for improvement and help you implement best practices to ensure that your
                        site is well-optimized for search engines.
                        </p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-2xl font-bold text-gray-900">Link Building</h3>
                        <p className="mt-2 text-base leading-7 text-gray-600">
                        Building high-quality backlinks is an essential part of any SEO strategy. Our team will help you earn
                        links from authoritative and relevant websites through a variety of tactics, including creating compelling
                        content that naturally attracts links, reaching out to website owners to request links, and participating
                        in industry-specific communities and forums. We will also conduct a thorough analysis of your existing
                        backlink profile and help you identify and remove any low-quality or spammy links that could be harming
                        your site's reputation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}