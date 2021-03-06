import {
  Badge,
  chakra,
  Heading,
  Icon,
  Text,
  Stack
} from '@chakra-ui/react'
import { SiFirebase, SiReact } from "react-icons/si";
import React from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'

export default function Homepage() {
  const { currentUser } = useAuth() 
  return (
    <Layout>
      <Stack align={'center'}>
        <Heading
          my="10"
          fontSize='4xl'
          isTruncated
        >
          {(!currentUser && `Hello! `) || (currentUser && `Hey ${currentUser.displayName}! `)}
          Welcome to my Chat site
        </Heading>
        <chakra.span
          fontSize='2rem'
          fontWeight="light"
          my="5"
        >
          Built with 
          <Badge
            mx="1"
            fontSize='2rem'
            fontWeight="light"
            colorScheme='orange'
            _hover={{ color: "white", backgroundColor: "#F6AD55", transition: ".5s"}}
          >
            <a href="https://firebase.google.com/" target="_blank" rel="noreferrer" >
              <Icon as={SiFirebase} />Firebase 
            </a>
          </Badge> 
          and 
          <Badge
            mx="1"
            fontSize='2rem'
            fontWeight="light"
            colorScheme='cyan'
            _hover={{ color: "white", backgroundColor: "#76E4F7", transition: ".5s"}}
          >
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <Icon as={SiReact} />React
            </a>
          </Badge>
        </chakra.span>
        <Text
          my="10"
          fontSize="1.6rem"
          fontWeight="light"
        >
          {!currentUser && `Create an account to join in the chat`}
        </Text>
      </Stack>
    </Layout>
  )
}
