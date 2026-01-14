import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PostCard from '../PostCard';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function RowAndColumnSpacing() {
  return (
    <Box display="flex" justifyContent="center" sx={{ width: '100%', mt: '3rem'} }>
      <Grid container alignItems={'start'} justifyContent={'center'} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={0} md={3}>
            {/* Users */}
          <Item> 1 </Item>
        </Grid>
        <Grid 
            container 
            alignItems={'center'} 
            justifyContent={'center'} 
            direction={'column'} xs={12} md={9}>
            {/* post card */}
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </Grid>
      </Grid>
    </Box>
  );
}
