import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  return (
    <Container py={16} minH={'90vh'}>
      <form>
        <Heading
          children="Change Password"
          my={16}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={8}>
          <Input
            required
            id="password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Old Password"
            type="password"
            focusBorderColor="yellow.500"
          />

          <Input
            required
            id="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="New Password"
            type="password"
            focusBorderColor="yellow.500"
          />

          <Button w={'full'} colorScheme='yellow' type='submit'>Change</Button>
        </VStack>
      </form>
    </Container>
  );
};
export default ChangePassword;
