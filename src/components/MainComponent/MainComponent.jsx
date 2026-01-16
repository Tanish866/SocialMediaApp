import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList';

export default function MainComponent() {
  return (
    <Box  sx={{ width: '100%', mt: '3rem'} }>
      <Grid container alignItems='start' justifyContent='center' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid >
            <UserList/>
        </Grid>
        <Grid 
            container 
            alignItems={'center'} 
            justifyContent={'center'} 
            direction={'column'} size={{  md: 8 }}>
            <PostCardList/>
        </Grid>
      </Grid>
    </Box>
  );
}
