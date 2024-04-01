import { BlogItem } from "@/types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from "contentful";

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

export default async function Blogi(props: BlogPageProps) {
    const { params } = props;
    const { slug } = params;
    const article = await fetchBlogPost(slug);
    const { title, date, content } = article.fields;
    return (
        <div className="min-h-screen p-6 lg:py-24 flex flex-col justify-center items-center">
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
                    { documentToReactComponents(content) }
                </div>
            </div>
        </div>
    )
}