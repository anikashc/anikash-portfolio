import React from 'react'
import {
    useColorMode,
    Button,
    Flex,
    Text,
    Box 
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import DarkModeSwitch from './DarkModeSwitch'


const Container = ({ children }: React.PropsWithChildren<{}>) => {

    const { colorMode } = useColorMode()

    const bgColor = {
        light: 'yellow.50',
        dark: 'gray.900'
    }

    const color = {
        light: 'black',
        dark: 'white'
    }

    const navHoverBg = {
        light: 'gray.600',
        dark: 'gray.300',
    }

    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
        `

    return (
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="90%"
                minWidth="356px"
                width="100%"
                bg={bgColor[colorMode]}
                as="nav"
                px={[2, 6, 6]}
                py={2}
                mt={8}
                mb={[0, 0, 8]}
                mx="auto"
            >
                <Box>
                    <NextLink href="/" passHref>
                        <Text fontSize='4xl' p={[1, 2, 4]} _hover={{
                            transition: 'text-decoration-color 300ms',
                            textDecoration: 'underline 0.15em rgba(0, 0, 0, 0)' 
                        }}> 
                            AC
                        </Text>
                    </NextLink>
                </Box>
                <DarkModeSwitch />
            </StickyNav >
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Container