import { createClient } from "contentful";
import Link from "next/link";

const client = createClient({
  space: process.env.CONTENFUL_SPACE_ID!,
  accessToken: process.env.CONTENT_DELIVERY_API!,
});

const getBlogEntries = async () => {
  const entries = (await client.getEntries({ content_type: "blog" }));
  return entries;
};

export default async function Blogs() {
    const blogEntries = await getBlogEntries();
    return (
        <section className=" w-full bg-white flex justify-center px-6">
            <div className=" py-24 sm:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Viimeisimmät blogit</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Yrittäjälle ja markkinoijalle suunnattua tietoa ja vinkkejä.
                    </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-3">
                      {blogEntries.items.map((post: any, i: number) => {
                        const { slug, title, date } = post.fields;
                        if (i > 2) return;
                        return (
                          <Link key={slug} href={`/blogi/${slug}`} className=" p-6 py-10 bg-zinc-900 rounded-2xl hover:bg-zinc-950">
                            <h2 className=" text-zinc-200 font-semibold">{title}</h2>
                            <span className="text-zinc-400">
                              Posted on{" "}
                              {new Date(date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                </div>
            </div>
        </section>
    )
}