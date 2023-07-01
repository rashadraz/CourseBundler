import { Box, Grid } from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';

const CreateCourse = () => {
  return (
    <Grid
      minH={'100vh'}
      css={{ cursor: `url(${cursor}),default` }}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box></Box>
      <Sidebar />
    </Grid>
  );
};
export default CreateCourse;
