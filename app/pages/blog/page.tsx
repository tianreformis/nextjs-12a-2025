import { items } from "@/app/types/items-types";
import Link from "next/link";


const BlogPage = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8 mt-10">Blog Posts</h1>
            <div>
                {items.map((item) => (
                    <div
                        key={item.slug}
                        className="bg-amber-50 p-4 w-full rounded-md shadow-black shadow-md my-4 dark:text-white dark:bg-gray-900"
                    >
                        <div>
                            <div className="flex flex-row justify-between items-center mb-4">
                                <h1 className="text-2xl font-bold">{item.title}</h1> 
                                <h2 className="text-sm"> {item.date.split('-').reverse().join('/')}</h2>

                            </div>
                            <p className="mb-4">{item.content.slice(0, 200)}...</p>
                            <div className="bg-green-200 p-2 rounded-md w-fit">{item.categories.join(', ')}</div>
                            <Link
                                href={`/pages/blog/${item.slug}`}
                                className="cursor-pointer hover:underline text-blue-600 hover:text-blue-800 "

                            >
                                Baca Selengkapnya
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default BlogPage;