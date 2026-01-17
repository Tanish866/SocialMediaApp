import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import axios from 'axios';
import postCardContext from '../../providers/PostProvider';

function Input(){
    const [ postText, setPostText ] = useState("");
    const [ ImageUrl, setImageUrl ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const { posts, setPosts } = useContext(postCardContext);

    async function createPost(){
        setLoading(true);
        console.log("Inside create post");
        axios.post("https://dummyapi.io/data/v1/post/create",
        {
            text : postText,
            owner : '67ad8e5e0d03253fe78b405a',
            image: ImageUrl,
            likes: 0,
        },
        {
            headers: {"app-id" : import.meta.env.VITE_APP_KEY}
        }
        )
        .then(response => {
            console.log(response.data);
            setPosts([ response.data, ...posts]);
            setLoading(false);
            setPostText('');
            setImageUrl('');
        })
    }

    return (
        <Box sx={{mt : '2rem'}}>
            <TextField 
            fullWidth id="outlined-basic" 
            label="Your next post..." 
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            variant="outlined" />

            <TextField 
            sx={{mt : '1rem'}} 
            fullWidth id="outlined-basic" 
            label="Image for your post..." 
            value={ImageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            variant="outlined" />

            {
                (!loading) ? <Button sx={{mt : '1rem'}} variant="contained" onClick={createPost}>Submit</Button> : <Button sx={{mt : '1rem'}} loading variant="outlined">Submit</Button>
            }

            
        </Box>
    )
}
export default Input;