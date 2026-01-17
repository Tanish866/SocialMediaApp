import { useEffect, useContext } from "react";
import PostCard from "../PostCard";
import postCardContext from '../../providers/PostProvider';

function PostCardList(){
    const { posts } = useContext(postCardContext);


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
