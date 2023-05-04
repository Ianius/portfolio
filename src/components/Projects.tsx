import { Divider, Heading, VStack } from "@chakra-ui/react";

import Project from './Project';

import moviesWebsite1 from "../assets/movies-website-1.png";
import moviesWebsite2 from "../assets/movies-website-2.png";
import moviesWebsite3 from "../assets/movies-website-3.png";
import moviesWebsite4 from "../assets/movies-website-4.png";
import moviesWebsite5 from "../assets/movies-website-5.png";
import moviesWebsite6 from "../assets/movies-website-6.png";
import moviesWebsite7 from "../assets/movies-website-7.png";

import chatWebsite1 from "../assets/chat-website-1.png";
import chatWebsite2 from "../assets/chat-website-2.png";
import chatWebsite3 from "../assets/chat-website-3.png";

import mangaWebsite1 from "../assets/manga-website-1.png";
import mangaWebsite2 from "../assets/manga-website-2.png";
import mangaWebsite3 from "../assets/manga-website-3.png";
import mangaWebsite4 from "../assets/manga-website-4.png";

const Projects = () => {
    const projects = [
        {
            name: "MangaNexus",
            images: [mangaWebsite1, mangaWebsite2, mangaWebsite3, mangaWebsite4],
            details: "Provides users with the ability to search for and download multiple chapters of manga simultaneously. Manga is a popular style of Japanese comic book and graphic novel that often tells serialized stories with distinctive art styles and narratives.",
            demoUrl: "https://manganexus.vercel.app/",
            codeUrl: "https://github.com/Ianius/manganexus",
            description: "A website that allows you to search manga and download multiple chapters simultaneously",
            technologies: ["React", "TypeScript", "TailwindCSS"]
        },

        {
            name: "FilmFeast",
            images: [moviesWebsite1, moviesWebsite2, moviesWebsite3, moviesWebsite4, moviesWebsite5, moviesWebsite6, moviesWebsite7],
            details: "A platform for browsing movies, writing reviews, and creating your own custom movie lists. The home page displays a list of popular and trending films with links to more information. Users can view details about each movie and search for films.",
            demoUrl: "https://filmfeast.netlify.app/",
            codeUrl: "https://github.com/Ianius/movies-frontend",
            description: "A movie website where you can browse movies, write reviews, add movies to your favorites, watchlist, and custom lists.",
            technologies: ["React", "TypeScript", "NodeJS", "Express", "MySQL", "Chakra UI"]
        },

        {
            name: "Chat",
            images: [chatWebsite1, chatWebsite2, chatWebsite3],
            details: "A platform that allows users to communicate with each other in real time. Users can choose a unique username and join one of four chatrooms to engage in discussions on various topics.",
            demoUrl: "https://chat-client-brown.vercel.app/",
            codeUrl: "https://github.com/Ianius/chat-client",
            description: "Chat application made with React and socket.io",
            technologies: ["React", "TypeScript", "NodeJS", "Express", "Chakra UI", "Socket IO"]
        },
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
