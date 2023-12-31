import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { resetPassword } from '../../redux/actions/profile';
import { useNavigate } from 'react-router-dom';
function ResetPassword() {
  const params = useParams();
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, message } = useSelector(state => state.profile);

  function submitHandler(e) {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      navigate('/login');
    }
  }, [dispatch, error, message, navigate]);
  return (
    <Container py={16} h={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          children="Reset Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />

        <VStack spacing={8}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="New Password"
            type="password"
            focusBorderColor="yellow.500"
          />
          <Button
            isLoading={loading}
            type="submit"
            w="full"
            colorScheme="yellow"
          >
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
}
export default ResetPassword;
