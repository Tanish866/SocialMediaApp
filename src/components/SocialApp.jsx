import MainComponent from "./MainComponent/MainComponent";
import Navbar from './Navbar/Navbar';
import Input from "./Input/Input";
import postCardContext from '../providers/PostProvider';
import { useState, useEffect } from "react";
import axios from "axios";

function SocialApp(){
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


    return (
        <div>
            <postCardContext.Provider value={{posts, setPosts}}>
                <Navbar/>
                <Input/>
                <MainComponent/>
            </postCardContext.Provider>
        </div>
    );
}
export default SocialApp;