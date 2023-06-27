import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import {  RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container h={'90vh'}>
      <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading>Page Not Found</Heading>
      </VStack>
      <Link to="/">
        <Button variant={'ghost'}>Go to Home</Button>
      </Link>
    </Container>
  );
}
export default NotFound;
