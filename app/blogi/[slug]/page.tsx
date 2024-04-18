import Otayhteytta from "@/app/otayhteytta/page";
import Contact from "@/components/Contact";
import { BlogItem } from "@/types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from "contentful";
import Link from "next/link";
import { BLOCKS } from '@contentful/rich-text-types';

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID!,
    accessToken: process.env.CONTENT_DELIVERY_API!,
})

export async function generateStaticParams() {
    const queryOptions = {
        content_type: 'blog',
        select: "fields.slug",
    };
    const articles = await client.getEntries(queryOptions);
    return articles.items.map((article) => ({
        slug: article.fields.slug,
    }));
}

type BlogPageProps = {
    params: {
      slug: string;
    };
};

const fetchBlogPost = async (slug: string): Promise<any> => {
    const queryOptions = {
        content_type: 'blog',
        "fields.slug[match]": slug,
    };
    const queryResult = await client.getEntries(queryOptions);
    return queryResult.items[0]
}

const options = {
    renderNode: {
        [BLOCKS.HEADING_1]: (_: any, children: any) => <h1 className=''>{children}</h1>,
        [BLOCKS.HEADING_2]: (_: any, children: any) => <h2 className=''>{children}</h2>,
        [BLOCKS.HEADING_3]: (_: any, children: any) => <h3 className=' font-extrabold text-zinc-300 text-2xl mb-2 mt-10'>{children}</h3>,
        [BLOCKS.HEADING_4]: (_: any, children: any) => <h4 className=''>{children}</h4>,
        [BLOCKS.HEADING_5]: (_: any, children: any) => <h5 className=''>{children}</h5>,
        [BLOCKS.HEADING_6]: (_: any, children: any) => <h6 className=''>{children}</h6>,
    },
};

export default async function Blogi(props: BlogPageProps) {
    const { params } = props;
    const { slug } = params;
    const article = await fetchBlogPost(slug);
    const { title, date, content } = article.fields;
    return (
        <div className="min-h-screen w-full p-6 lg:py-24 flex flex-col justify-center items-center">
            <div className="max-w-3xl text-white">
                <div className="max-w-2xl">
                    <h1 className="font-extrabold text-3xl mb-2">{title}</h1>
                    <p className="mb-6 text-slate-400 ">
                        Posted on{" "}
                        {new Date(date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </div>
                <div className="[&>p]:mb-8 [&>h2]:font-extrabold">
                    { documentToReactComponents(content, options) }
                </div>
            </div>
            <section className="w-full py-6 lg:mt-16 max-w-3xl bg-gray-200 rounded-3xl md:py-12">
                <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
                    <div className="space-y-2 text-center">
                        <h3 className="text-2xl font-bold tracking-tighter md:text-3xl/tight">Optimoidaan sinunkin sivusi?</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Ota yhteyttä niin tehdään sinunkin yrityksestäsi netissä näkyvä!
                        </p>
                    </div>
                    <div>
                        <Link
                            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            href="/otayhteytta"
                        >
                            Ota yhteyttä
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}