const items = [
    {
        slug: 'first-post',
        title: 'My First Post',
        date: '2024-01-01',
        categories: ['Tech', 'Programming'],
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, minima cum accusantium veritatis non tempora inventore quos, corrupti unde voluptas, voluptatem ducimus quidem veniam? Eum, iste alias quod molestiae rem corrupti accusantium? Nam nihil ipsa sint tempore alias, praesentium voluptates ullam odio mollitia eius provident quaerat placeat, ducimus voluptate repellendus.'
    },
    {
        slug: 'second-post',
        title: 'My Second Post',
        date: '2024-01-01',
        categories: ['Lifestyle', 'Health'],
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, minima cum accusantium veritatis non tempora inventore quos, corrupti unde voluptas, voluptatem ducimus quidem veniam? Eum, iste alias quod molestiae rem corrupti accusantium? Nam nihil ipsa sint tempore alias, praesentium voluptates ullam odio mollitia eius provident quaerat placeat, ducimus voluptate repellendus.'
    },
];
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