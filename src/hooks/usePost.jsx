import { useState, useEffect } from "react";
import axios from "axios";
export default function usePosts(){
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        axios.get("https://dummyapi.io/data/v1/post", {
            headers: {"app-id" : import.meta.env.VITE_APP_KEY}
        })
        .then(response => {
            const responseObject = response.data;
            console.log(responseObject);
            setPosts([...responseObject.data]);
        })
    }, [posts]);
    return [posts, setPosts];
}