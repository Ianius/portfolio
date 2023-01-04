import { Button, Center, Flex, Heading, Spacer, useColorModeValue } from "@chakra-ui/react";

interface SectionButtonProps {
    name: string;
    active: boolean;
    onClick: () => void;
}

const SectionButton = ({ name, active, onClick }: SectionButtonProps) => (
    <Button
        colorScheme={useColorModeValue('gray', 'blue')}
        variant={active ? 'solid' : 'ghost'}
        onClick={onClick}
        fontWeight={active ? 'bold' : undefined}
    >
        {name}
    </Button>
);

interface Props {
    h: string;
    sections: { name: string, onClick: () => void }[];
    activeSection: string;
}

const Navbar = ({ h, sections, activeSection }: Props) => {
    return (
        <Center
            h={h}
            bg={useColorModeValue('white', 'gray.800')}
            px='32px'
            top='0px'
            zIndex='3'
            position='sticky'
            borderBottomColor={useColorModeValue('gray.200', 'blue.800')}
            borderBottomWidth='1px'
        >
            <Flex
                w='100%'
                h='100%'
                maxW='1200px'
                align='center'
                gap={2}
            >
                <Heading size='md'>Michael Peña</Heading>

                <Spacer />

                { sections.map((section, i) => <SectionButton key={i} {...section} active={activeSection === section.name} />)}
            </Flex>
        </Center>
    );
};

export default Navbar;
