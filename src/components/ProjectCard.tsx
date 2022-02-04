import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorMode,
} from '@chakra-ui/react';

interface Props {
  name: string;
  description: string;
  type: string;
  link: string;
  githubLink: string;
  image: string;
  alt: string;
  projectTitle: string;
  projectDescription: string;
  date: string;
}

export default function ProjectCard({cardData}: {cardData: Props}) {
  return (
    <Center py={6}>
      <Box
        maxW={'300px'}
        w={250}
        // bg={useColorMode}
        boxShadow={'2xl'}
        rounded={'md'}
        m={4}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              cardData.image
            }
            layout={'fill'}
            alt={cardData.alt}
          />
        </Box>
        <Stack>
          {cardData.type === 'Project' ? (
            <Text
              
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}>
              {cardData.type}
            </Text>
          ): cardData.type === 'Blog' ? (
            <Text
              
              color={'blue.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}>
              {cardData.type}
            </Text>
          ): (
            <Text
              
              color={'red.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}>
              {cardData.type}
            </Text>
          )}
          <Heading
            // color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {cardData.name}
          </Heading>
          <Text color={'gray.500'}>
            {cardData.description}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}