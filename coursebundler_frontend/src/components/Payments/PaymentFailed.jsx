import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function PaymentFailed() {
  return (
    <Container h={'90vh'}>
      <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading textTransform={'uppercase'}>Payment Failed</Heading>
      <Link to="/subscribe">
        <Button variant={'ghost'}>Try Again</Button>
      </Link>
      </VStack>
    </Container>
  );
}
export default PaymentFailed;
