import { 
    SimpleGrid, Image, Box, Button, Heading, Text, VStack, 
    useBoolean, useColorModeValue, useDisclosure, useBreakpointValue
} from "@chakra-ui/react";

import ProjectDrawer from './ProjectDrawer';

interface Props {
    name: string;
    images: string[];
    details: string;
    demoUrl: string;
    codeUrl: string;
    reverse?: boolean;
    description: string;
    technologies: string[];
}

const Project = ({ name, images, details, demoUrl, codeUrl, reverse, description, technologies }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [hover, setHover] = useBoolean(false);
    const isSmall = useBreakpointValue({ base: true, md: false });

    const onDrawerOpened = () => {
        setHover.off();
        onOpen();
    };

    const vstack = 
        <VStack
            key={1}
            flex={1}
            align={isSmall ? 'center' : 'left'}
            justify='center'
        >
            <Heading size='lg'>{name}</Heading>

            <Text>{description}</Text>

            <Box>
                <Button 
                    isActive={hover}
                    colorScheme={useColorModeValue('gray', 'blue')}
                >
                    View
                </Button>
            </Box>
        </VStack>;

    const image =
        <Image
            key={2}
            fit='contain'
            src={images[0]}
            flex={1}
            filter={`grayscale(${hover ? 0 : 100}%)`}
            transition='500ms'
            borderRadius='md'
        />;

    return (
        <SimpleGrid
            gap='2em'
            cursor='pointer'
            onClick={onDrawerOpened}
            columns={[null, 1, 2]}
            // direction={reverse ? 'row-reverse' : undefined}
            onPointerEnter={setHover.on}
            onPointerLeave={setHover.off}
        >
            {
                isSmall 
                    ? [image, vstack] 
                    : (reverse ? [vstack, image] : [image, vstack])
            }

            <ProjectDrawer
                name={name}
                isOpen={isOpen}
                images={images}
                details={details}
                demoUrl={demoUrl}
                codeUrl={codeUrl}
                onClose={onClose}
                technologies={technologies}
            />
        </SimpleGrid>
    );
};

export default Project;
