import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";


function PostCardList(){
    const [ posts, setPosts ] = useState([]);
    useEffect(() => {
        axios.get("https://dummyapi.io/data/v1/post", {
            headers: {"app-id" : import.meta.env.VITE_APP_KEY}
        })
        .then(response => {
            const responseObject = response.data;
            setPosts([...responseObject.data]);
        })
    }, []);


    return((posts.length == 0) ? 
            "Loading..." :
            posts.map((post) => <PostCard 
                key={post.id}
                authorName={post.owner.firstName}
                image={post.image}
                content={post.text}
            />)
    )
}
export default PostCardList;

