import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList';

export default function MainComponent() {
  return (
    <Box display="flex" justifyContent="space-around" sx={{ width: '100%', mt: '3rem'} }>
      <Grid container alignItems={'start'} justifyContent={'center'} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={{ xs: 0, md: 6 }}>
            {/* Users */}
            <UserList/>
        </Grid>
        <Grid 
            container 
            alignItems={'center'} 
            justifyContent={'center'} 
            direction={'column'} size={{ xs: 12, md: 6 }}>
            {/* post card */}
            <PostCardList/>
        </Grid>
      </Grid>
    </Box>
  );
}
