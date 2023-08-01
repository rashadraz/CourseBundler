import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { courseRequest } from '../../redux/actions/other';
import { toast } from 'react-hot-toast';

function Request() {
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [name, setName] = useState('');
  const {
    loading,
    error,
    message: stateMessage,
  } = useSelector(state => state.other);

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(courseRequest(name, email, course));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, stateMessage, error]);

  return (
    <Container h={'92vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={16}>
        <Heading children="Request New Course" />
        <form style={{ width: '100%' }} onSubmit={submitHandler}>
          <Box my={4}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Course Name"
              type="text"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={4}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={4}>
            <FormLabel htmlFor="course" children="Course" />
            <Textarea
              required
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Explain The course..."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button
            isLoading={loading}
            my={'4'}
            colorScheme="yellow"
            type="submit"
          >
            Send Mail
          </Button>
          <Box my={'4'}>
            See Available Courses?{' '}
            <Link to="/courses">
              <Button colorScheme="blue" variant={'link'}>
                Click{' '}
              </Button>{' '}
              Here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
}

export default Request;
