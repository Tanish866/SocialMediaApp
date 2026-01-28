import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchQuery from '../../helper/FetchUser';


export default function UserProfileDetails() {
  // const [user, loading] = useUserProfile();
  const {userId} = useParams();
  const response = useQuery({
      queryKey: ['user', userId],         
      queryFn: fetchQuery,   
      enabled: !!userId,                 
  });
  console.log("response is ", response);


  if(response.isLoading){
    return ( <div>Loading...</div>);
  }
  else{
    const user = response.data.data;
    // console.log("Data",response);
    return (
      <Card sx={{ display: 'flex', mt: '2rem'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {user?.firstName + " " + user?.lastName}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: 'text.secondary' }}
            >
              {user?.email}
            </Typography>
          </CardContent>
        
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={user?.picture}
          alt="User Picture"
        />
      </Card>
    );
  }
}

