import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxFill, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const isAuthenticated = true;
  const user = {
    role: 'admin',
  };

  const LinkButton = ({ url = '/', title = 'Home' }) => (
    <Link to={url}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );

  const logoutHandler = () => {
    console.log('Logout');
  };

  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={() => onOpen()}
        colorScheme="yellow"
        width={12}
        height={12}
        rounded={'full'}
        position={'fixed'}
        top={6}
        left={6}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>Course Bundler</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} alignItems={'flex-start'}>
              <LinkButton url="/" title="Home" />
              <LinkButton url="/courses" title="Browse All Courses" />
              <LinkButton url="/request" title="Request All Courses" />
              <LinkButton url="/contact" title="Contact Us" />
              <LinkButton url="/about" title="About " />

              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile">
                          <Button variant={'ghost'} colorScheme="yellow">
                            Profile
                          </Button>
                        </Link>
                        <Link to="/profile">
                          <Button variant={'ghost'} onClick={logoutHandler}>
                            <RiLogoutBoxFill style={{ margin: '4px' }} />
                            Logout
                          </Button>
                        </Link>
                      </HStack>

                      {user && user.role === 'admin' && (
                        <Link to="/admin/dashboard">
                          <Button colorScheme="purple" variant={'ghost'}>
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button colorScheme="yellow">Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link to="/register">
                      <Button colorScheme="yellow">Signup</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
