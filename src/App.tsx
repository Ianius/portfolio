import { Box, Center, Flex, useColorModeValue } from '@chakra-ui/react';
import { useRef, useEffect, useState, ReactNode } from 'react';
import About from './components/About';
import ColorModeSwitch from './components/ColorModeSwitch';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

interface SectionData {
    name: string;
    element?: ReactNode;
}

const scrollIntoSection = (elements: HTMLDivElement[], index: number) =>
    elements[index]
        ?.scrollIntoView({ behavior: 'smooth' });

const App = () => {
    const navbarH = 60;

    const [activeSection, setActiveSection] = useState(0);
    const sectionsRef = useRef<HTMLDivElement[]>([]);

    const sections: SectionData[] = [
        { name: "About", element: <About onSectionLinkClicked={sectionName => scrollIntoSection(sectionsRef.current, sections.findIndex(section => section.name === sectionName))} /> },
        { name: "Projects", element: <Projects /> },
        { name: "Contact", element: <Contact /> }
    ];
	
    useEffect(() => {
        const onScroll = () => {
            const result = sectionsRef.current.reduce((acc, section, i) => {
                const sectionHeight = section.scrollHeight;
                const windowBottomY = window.innerHeight - navbarH;
                const sectionTopY = acc.currentY - window.scrollY;
                const sectionBottomY = sectionTopY + sectionHeight;
                const cutTop = sectionTopY < 0 ? -sectionTopY : 0;
                const cutBottom = Math.max(0, sectionBottomY - windowBottomY);
                const visiblePercentage = (sectionHeight - cutTop - cutBottom) / sectionHeight;
                const currentY = acc.currentY + sectionHeight;

                return (
                    visiblePercentage > acc.mostVisibleSectionPercentage
                        ? {
                            mostVisibleSectionIndex: i,
                            mostVisibleSectionPercentage: visiblePercentage,
                            currentY
                        }
                        : { ...acc, currentY }
                );
            }, { mostVisibleSectionIndex: -1, mostVisibleSectionPercentage: -1, currentY: 0 });

            setActiveSection(result.mostVisibleSectionIndex);
        };

        document.addEventListener('scroll', onScroll);

        return () => document.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <ColorModeSwitch />
            <Flex
                minH='100vh'
                direction='column'
            >
                <Navbar
                    h={`${navbarH}px`}
                    sections={
                        sections
                            .map((section, i) => ({
                                name: section.name,
                                onClick: () => scrollIntoSection(sectionsRef.current, i)
                            }))
                    }
                    activeSection={sections[activeSection].name}
                />

                <Center
                    bg={useColorModeValue('white', 'gray.800')}
                    flex={1}
                    transition='100ms'
                >
                    <Box
                        maxW='900px'
                        px='32px'
                    >
                        {sections.map((section, i) =>
                            <Center
                                key={i}
                                scrollMarginTop={`${navbarH}px`}
                                ref={el => {
                                    if (el)  sectionsRef.current[i] = el
                                }}
                            >
                                {section.element}
                            </Center>)}
                    </Box>
                </Center>

                <Footer />
            </Flex>
        </>
    );
};

export default App;
