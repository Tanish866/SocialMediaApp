import axios from 'axios';
const fetchQuery = async ({ queryKey }) => {
    const userId = queryKey[1];
    const response = await axios.get(`https://dummyapi.io/data/v1/user/${userId}`, {
        headers: {
            "app-id" : import.meta.env.VITE_APP_KEY
        }
    });
    return response;
}
export default fetchQuery;
