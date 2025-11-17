import { items } from "@/app/types/items-types";

const SinglePostPage = (
    { params }: { params: { slug: string } }
    //parameter untuk terima slug dari URL
) => {
    const item = items.find((p) => p.slug === params.slug);   
    return (
        <div>
            <h1>{item?.title}</h1>
            <div>{item?.content}</div>
            

        </div>
    )
}
export default SinglePostPage;