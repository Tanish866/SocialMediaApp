import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function useUserProfile() {
  let { userId } = useParams();
  const [user, setuser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyapi.io/data/v1/user/${userId}`,{
      headers: {'app-id' : import.meta.env.VITE_APP_KEY}
    })
    .then((response) =>{
      console.log(response.data)
      setuser({...response.data})
      setLoading(false);
    })
  },[]);
  return [user, loading];
}