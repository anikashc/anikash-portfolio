import type { NextPage } from 'next'
import Container from '../components/Container'
import Head from 'next/head'
import { Grid, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
} from '@chakra-ui/react'
import ProjectCard from '../components/ProjectCard'
import {Links, LandingData} from '../data'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Home - Anikash Chakraborty</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, I am {LandingData.name}</Heading>
          <Text color={colorSecondary[colorMode]}>
            {LandingData.description}
          </Text>
          <Button my={5} onClick={()=> window.open(Links.resume, "_blank")} variant='outline' data-splitbee-event="Button Click" data-splitbee-event-type="Resume" >View Resume</Button>

        </Flex>
        <Flex
          alignItems='flex-start'
        >
          <Link href={Links.github} passHref>
            <Icon w={8} h={8}>
              <FontAwesomeIcon icon={['fab', 'github']} />
            </Icon>
          </Link>
          <Link href={Links.linkedIn} passHref>
            <Icon w={8} h={8}>
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </Icon>
          </Link>
          <Link href={Links.twitter} passHref>
            <Icon w={8} h={8}>
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </Icon>
          </Link>
          <Link href={Links.instagram} passHref>
            <Icon w={8} h={8}>
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </Icon>
          </Link>
          <Link href={Links.email} passHref>
            <Icon w={8} h={8}>
              <FontAwesomeIcon icon={['fab', 'envelope']} />
            </Icon>
          </Link>
        </Flex>
      </Stack>
        <Projects />
    </Container>
  )
}

export default Home

