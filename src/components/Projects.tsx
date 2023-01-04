import { Divider, Heading, VStack } from "@chakra-ui/react";

import Project from './Project';

import moviesWebsite from "../assets/movies-website.png";
import moviesWebsite1 from "../assets/movies-website-1.png";
import moviesWebsite2 from "../assets/movies-website-2.png";
import moviesWebsite3 from "../assets/movies-website-3.png";
import moviesWebsite4 from "../assets/movies-website-4.png";

import chatWebsite from "../assets/chat-website.png";
import chatWebsite1 from "../assets/chat-website-1.png";
import chatWebsite2 from "../assets/chat-website-2.png";

const Projects = () => {
    const projects = [
        {
            name: "Movies",
            images: [moviesWebsite, moviesWebsite1, moviesWebsite2, moviesWebsite3, moviesWebsite4],
            details: "A platform for browsing and learning about movies. The home page displays a list of popular and trending films with links to more information. Users can view details about each movie and search for films.",
            demoUrl: "https://movies-chi-neon.vercel.app/",
            codeUrl: "https://github.com/Ianius/movies-frontend",
            description: "A movie website where you can browse and read details about movies.",
            technologies: ["React", "Typescript", "NodeJS", "Express", "Chakra UI"]
        },

        {
            name: "Chat",
            images: [chatWebsite, chatWebsite1, chatWebsite2],
            details: "A platform that allows users to communicate with each other in real time. Users can choose a unique username and join one of four chatrooms to engage in discussions on various topics.",
            demoUrl: "https://chat-client-brown.vercel.app/",
            codeUrl: "https://github.com/Ianius/chat-client",
            description: "Chat application made with React and socket.io",
            technologies: ["React", "Typescript", "NodeJS", "Express", "Chakra UI", "Socket IO"]
        }
    ];

    return (
        <VStack
            pt='160px'
            gap='1em'
            divider={<Divider/>}
        >
            <Heading size='lg' textAlign='center'>My projects</Heading>

            <VStack
                gap='2em'
            >
                {projects.map((project, i) => <Project key={i} {...project} reverse={i % 2 !== 0} />)}
            </VStack>
        </VStack>
    );
};

export default Projects;
