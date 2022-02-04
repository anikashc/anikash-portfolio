import { useColorMode, IconButton, Flex, Heading, Container,Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import ProjectCard from './ProjectCard'
import { Cards } from '../data'

const Projects = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'black',
        dark: 'white'
    }
    const sortedCards = Cards.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return Number(new Date(b.date)) - Number(new Date(a.date));
    });
    return (
        <Container
            maxW='container.lg' 
            
        >
            <Heading>Work</Heading>
            <Tabs isFitted variant='enclosed' defaultIndex={0}>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Work Experience</Tab>
                    <Tab>Projects</Tab>
                    <Tab>Blogs</Tab>
                </TabList>
    
                <TabPanels>
                    <TabPanel>
                        <Flex
                            flexDirection="row"
                            flexFlow='wrap'
                            justifyContent='center'
                            >
                                {
                                    sortedCards.map((card,i) => {
                                        return (   
                                            <ProjectCard key={i} cardData={card} />
                                        )
                                    })
                                }  
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex
                            flexDirection="row"
                            flexFlow='wrap'
                            justifyContent='center'
                            >
                                {
                                    Cards.map((card,i) => {
                                        return (   
                                            card.type==="Work Experience" && <ProjectCard key={i} cardData={card} />
                                        )
                                    })
                                }  
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex
                            flexDirection="row"
                            flexFlow='wrap'
                            justifyContent='center'
                            >
                                {
                                    Cards.map((card,i) => {
                                        return (   
                                            card.type==="Project" && <ProjectCard key={i} cardData={card} />
                                        )
                                    })
                                }  
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex
                            flexDirection="row"
                            flexFlow='wrap'
                            justifyContent='center'
                            >
                                {
                                    Cards.map((card,i) => {
                                        return (   
                                            card.type==="Blog" && <ProjectCard key={i} cardData={card} />
                                        )
                                    })
                                }  
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            

        </Container>
    )
}

export default Projects