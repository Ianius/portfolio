import { HStack, Divider, Heading, Icon, Link, SimpleGrid, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { SiJavascript, SiTypescript, SiHtml5, SiReact, SiCss3, SiNodedotjs, SiExpress, SiMysql, SiChakraui, SiMongodb } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import Links from '../links';

import IconButtonLink from './IconButtonLink';

interface Props {
    onSectionLinkClicked: (sectionName: string) => void;
}

const About = ({ onSectionLinkClicked }: Props) => {
    const technologies = [
        { name: 'React', color: useColorModeValue('cyan.600', 'cyan.300'), as: SiReact },
        { name: 'Javascript', color: useColorModeValue('yellow.500', 'yellow.400'), as: SiJavascript },
        { name: 'Typescript', color: useColorModeValue('blue.600', 'blue.400'), as: SiTypescript },
        { name: 'HTML5', color: useColorModeValue('orange.600', 'orange.400'), as: SiHtml5 },     
        { name: 'Css3', color: useColorModeValue('cyan.600', 'cyan.400'), as: SiCss3 },
        { name: 'NodeJS', color: useColorModeValue('green.700', 'green.500'), as: SiNodedotjs },
        { name: 'ExpressJS', color: useColorModeValue('gray.500', 'gray.300'), as: SiExpress },
        { name: 'Chakra UI', color: useColorModeValue('teal.500', 'teal.300'), as: SiChakraui },
        { name: 'MySQL', color: useColorModeValue('blue.700', 'blue.500'), as: SiMysql },
        { name: 'MongoDB', color: useColorModeValue('green.700', 'green.500'), as: SiMongodb }
    ];

    return (
        <VStack
            pt='160px'
            gap='100px'
        >
            <VStack
                w='100%'
                spacing={4}
            >
                <Heading size='lg' textAlign='center'>Welcome to my portfolio!</Heading>

                <HStack>
                    <IconButtonLink 
                        url={Links.linkedin}
                        icon={BsLinkedin}
                        ariaLabel='LinkedIn'
                    />

                    <IconButtonLink 
                        url={Links.github}
                        icon={BsGithub}
                        ariaLabel='Github'
                    />

                    <IconButtonLink 
                        url={Links.email}
                        icon={MdEmail}
                        ariaLabel='Email'
                    />
                </HStack>

                <Divider />

                <Text>
                    Hi there! My name is Michael Peña and I am a systems engineering student from Colombia. I am fluent in both English and Spanish and am always working to improve my skills and stay up-to-date with the latest trends in web development.
                </Text>

                <Text>
                    Please take a look at <Link onClick={() => onSectionLinkClicked("Projects")} fontWeight='bold' color='blue.200'>my projects</Link> to see some examples of my work. If you have any questions or would like to discuss potential opportunities, don't hesitate to contact me. Thank you for visiting my website.
                </Text>
            </VStack>

            <VStack 
                w='100%'
                spacing={4}
            >
                <Heading size='lg' textAlign='center'>Here are some technologies I like to work with</Heading>

                <Divider />

                <SimpleGrid 
                    spacing={8}
                    columns={[3, 4, 5]}
                >
                    {technologies.map((tech, i) => 
                        <Icon 
                            as={tech.as} 
                            key={i}
                            boxSize='5em' 
                        />
                    )}
                </SimpleGrid>

                <Text>Plus I'm always learning new stuff!</Text>
            </VStack>
        </VStack>
    );
};

export default About;
