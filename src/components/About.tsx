import { HStack, Divider, Heading, Icon, Link, SimpleGrid, Text, VStack, useColorModeValue, shouldForwardProp, Box } from "@chakra-ui/react";
import { SiJavascript, SiTypescript, SiHtml5, SiReact, SiCss3, SiNodedotjs, SiExpress, SiMysql, SiChakraui, SiMongodb } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import Links from '../links';

import IconButtonLink from './IconButtonLink';
import { useEffect, useState } from "react";

interface Typewriter {
    typed: string;
    isTyping: boolean;
    wordIndex: number;
}

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

    const words = ["learn", "code", "design"];
    const gradients = ['blue.500, blue.400', 'green.500, green.400', 'pink.500, pink.400'];

    const [typewriter, setTypewriter] = useState<Typewriter>({
        typed: "",
        isTyping: false,
        wordIndex: 0
    });

    const [caretState, setCaretState] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setCaretState(!caretState), 500);
        return () => clearTimeout(timeout);
    }, [caretState]);

    useEffect(() => {
        const finished = (typewriter: Typewriter) => typewriter.typed.length === words[typewriter.wordIndex].length;

        const type = () => {
            const newState = { ...typewriter };

            if (typewriter.isTyping) {
                const word = words[typewriter.wordIndex];

                if (finished(typewriter)) {
                    newState.isTyping = false;
                } else {
                    newState.typed = typewriter.typed + word[typewriter.typed.length];
                }
            } else {
                if (typewriter.typed.length === 0) {
                    newState.isTyping = true;
                    newState.wordIndex = (newState.wordIndex + 1) % words.length
                } else {
                    newState.typed = typewriter.typed.slice(0, typewriter.typed.length - 1);
                }
            }

            return newState;
        };

        const timeout = setTimeout(() => setTypewriter(type()), finished(typewriter) ? 1000 : 100);
        return () => clearTimeout(timeout);
    }, [typewriter]);

    return (
        <VStack
            pt='160px'
            gap='100px'
        >
            <VStack
                w='100%'
                spacing={4}
            >
                <Box>
                    <Heading 
                        size='lg' 
                        display='inline'
                    >
                        I'm a software developer who loves to{" "}
                    </Heading>

                    <Heading
                        size='lg' 
                        display='inline'
                        bgGradient={`linear(to-r, ${gradients[typewriter.wordIndex]})`}
                        bgClip='text'
                        _after={{
                            content: `"|"`,
                            transition: '250ms',
                            opacity: caretState ? 100 : 0,
                            color: useColorModeValue('black', 'white'),
                            pl: '0.1em'
                        }}
                    >
                        {typewriter.typed}
                    </Heading>
                </Box>

                <Divider />

                <Text>
                    Hi there! My name is Michael Peña and I am a systems engineering student from Colombia. I am fluent in both English and Spanish and am always working to improve my skills and stay up-to-date with the latest trends in web development.
                </Text>

                <Text>
                    Please take a look at <Link onClick={() => onSectionLinkClicked("Projects")} fontWeight='bold' color='blue.200'>my projects</Link> to see some examples of my work. If you have any questions or would like to discuss potential opportunities, don't hesitate to contact me. Thank you for visiting my website.
                </Text>

                <HStack
                    alignSelf='center'
                >
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
            </VStack>

            <VStack 
                w='100%'
                spacing={4}
            >
                <Heading 
                    size='lg' 
                >
                    Here are some technologies I like to work with
                </Heading>

                <Divider />

                <SimpleGrid 
                    spacing={12}
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
