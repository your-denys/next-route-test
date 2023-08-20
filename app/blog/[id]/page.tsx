import { Metadata } from "next";

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate:60
        }
    })

    return response.json()
}

type Props = {
    params: {
        id: string;
    };
}

export async function generateMetadata({params: {id}}:Props): Promise<Metadata> {

    const postsId = await getData(id)

    return {
        title: postsId.title
    }
}

export default async function Post ({params: {id}}:Props) {
    
    const postsId = await getData(id)
    console.log(postsId)

    return (
        <>
        <h1>
           {postsId.title}
        </h1>
        {postsId.body}
        </>
    );
}

