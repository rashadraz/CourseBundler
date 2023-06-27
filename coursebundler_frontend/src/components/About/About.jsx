import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../../assets/docs/termsAndCondition'

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        boxSize={['40', '48']}
        src="https://avatars.githubusercontent.com/u/88219300?v=4"
      />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Rashad" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Hi, I am full stack developer and a teacher. Our Mission is to provide quality content at reasonable price.`}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      // autoPlay={true}
      muted
      loop
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Condition"
      textAlign={['center', 'left']}
      my={4}
    />
    <Box h={'sm'} p={4} overflowY={'scroll'}>
      <Text
        textAlign={['center', 'left']}
        letterSpacing={'widest'}
        fontFamily={'heading'}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my={4}
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days"
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding={16} boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />

      <Founder />
      <Stack m={8} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={8} textAlign={['center', 'left']}>
          We are a video Streaming Platform with some premium Courses available
          only for Premium Users
        </Text>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />

      <TandC termsAndCondition={termsAndCondition} />
      <HStack m={4} p={4}>
        <RiSecurePaymentFill />
        <Heading
          children={'Payment is secured by Razor Pay'}
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
        />
      </HStack>
    </Container>
  );
};
export default About;
