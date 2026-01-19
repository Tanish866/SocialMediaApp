import MainComponent from "./MainComponent/MainComponent";
import Input from "./Input/Input";
import postCardContext from '../providers/PostProvider';
import usePosts from "../hooks/usePost";

function SocialApp(){

    const [ posts, setPosts ] = usePosts();

    return (
        <div>
            <postCardContext.Provider value={{posts, setPosts}}>
                <Input/>
                <MainComponent/>
            </postCardContext.Provider>
        </div>
    );
}
export default SocialApp;