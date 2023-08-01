import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardStats } from '../../../redux/actions/admin';
import Loader from '../../Layout/Loader/Loader';

const DataBox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={['full', '20%']}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    p={8}
    borderRadius={'lg'}
  >
    <Text>{title}</Text>
    <HStack spacing={6}>
      <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />

      <HStack>
        <Text>{qtyPercentage}%</Text>
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text children={'Since Last Month'} opacity={0.5} />
  </Box>
);

const Bar = ({ title, value, profit }) => (
  <Box py={4} px={['0', '20']}>
    <Heading size={'sm'} children={title} mb={2} />
    <HStack w={'full'} alignItems={'center'}>
      <Text children={profit ? '0%' : `-${value}`} />
      <Progress
        w={'full'}
        value={profit ? value : 0}
        colorScheme="purple"
        size={'sm'}
      />
      <Text children={`${value > 100 ? value : 100}%`} />
    </HStack>
  </Box>
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    loading,
    stats,
    usersCount,
    subscriptionCount,
    viewsCount,
    subscriptionPercentage,
    viewsPercentage,
    usersPercentage,
    subscriptionProfit,
    viewsProfit,
    usersProfit,
  } = useSelector(state => state.admin);
  useEffect(() => {
    dispatch(getDashboardStats());
  }, [dispatch]);

  return (
    <Grid
      minH={'100vh'}
      css={{ cursor: `url(${cursor}),default` }}
      templateColumns={['1fr', '5fr 1fr']}
    >
      {loading ? (
        <Loader color="purple" />
      ) : (
        <Box boxSizing="border-box" py={16} px={['4', '0']}>
          <Text textAlign={'center'} opacity={0.5}>
            Last change was on{' '}
            {String(new Date(stats[11]?.createdAt)).split('G')[0]}
          </Text>
          <Heading ml={['0', '16']} mb={'16'} textAlign={['center', 'left']}>
            Dashboard
          </Heading>
          <Stack
            direction={['column', 'row']}
            minH={24}
            justifyContent={'space-evenly'}
          >
            <DataBox
              title="Views"
              qty={viewsCount}
              qtyPercentage={viewsPercentage}
              profit={viewsProfit}
            />
            <DataBox
              title="Users"
              qty={usersCount}
              qtyPercentage={usersPercentage}
              profit={usersProfit}
            />
            <DataBox
              title="Subscription"
              qty={subscriptionCount}
              qtyPercentage={subscriptionPercentage}
              profit={subscriptionProfit}
            />
          </Stack>
          <Box
            m={['0', '16']}
            borderRadius={'lg'}
            p={['0', '16']}
            mt={['4', '16']}
            boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
          >
            <Heading
              textAlign={['center', 'left']}
              size={'md'}
              children="Views Graph"
              pt={['8', '0']}
              ml={['0', '16']}
            />
            <LineChart viewsArray={stats.map(item => item.views)} />
            {/* Line graph goes here */}
          </Box>
          <Grid templateColumns={['1fr', '2fr 1fr']}>
            <Box p={4}>
              <Heading
                textAlign={['center', 'left']}
                size={'md'}
                children="Progress Bar"
                my={8}
                ml={['0', '16']}
              />
              <Box>
                <Bar
                  title="Views"
                  value={viewsPercentage}
                  profit={viewsProfit}
                />
                <Bar
                  title="Users"
                  value={usersPercentage}
                  profit={usersProfit}
                />
                <Bar
                  title="Subscription"
                  value={subscriptionPercentage}
                  profit={subscriptionProfit}
                />
              </Box>
            </Box>
            <Box p={['0', '16']} boxSizing="border-box" py={4}>
              <Heading textAlign={'center'} size={'md'} children="Users " />
              {/* Dounut graph goes here */}
              <DoughnutChart
                users={[subscriptionCount, usersCount - subscriptionCount]}
              />
            </Box>
          </Grid>
        </Box>
      )}
      <Sidebar />
    </Grid>
  );
};
export default Dashboard;
