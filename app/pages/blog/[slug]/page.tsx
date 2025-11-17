import { items } from "@/app/types/items-types";
import Link from "next/link";

const SinglePostPage = (
    { params }: { params: { slug: string } }
    //parameter untuk terima slug dari URL
) => {
    const item = items.find((p) => p.slug === params.slug);   
    return (
        <div className="p-4 w-full rounded-md shadow-black shadow-md my-4 dark:text-white dark:bg-gray-900">
            <h1 className="text-2xl font-black">{item?.title}</h1>
            <div>{item?.content}</div>
            <div className="bg-green-200 p-2 rounded-md w-fit mt-4">{item?.categories.join(', ')}</div>
            <Link
                href={`/pages/blog/`}
                className="cursor-pointer hover:underline text-blue-600 hover:text-blue-800 "
            >
                Back to Blog Posts
            </Link>


            

        </div>
    )
}
export default SinglePostPage;