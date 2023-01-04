import { 
    Badge, Heading, VStack, HStack, Text,
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
} from "@chakra-ui/react";

import LinkButton from './LinkButton';
import DraggableImageList from './DraggableImageList';

interface Props {
    name: string;
    isOpen: boolean;
    images: string[];
    details: string;
    demoUrl: string;
    codeUrl: string;
    onClose: () => void;
    technologies: string[];
}

const ProjectDrawer = ({ name, isOpen, images, details, demoUrl, codeUrl, onClose, technologies }: Props) => {
    return (
        <Drawer 
            placement='bottom' 
            onClose={onClose} 
            isOpen={isOpen}
        >
            <DrawerOverlay />

            <DrawerContent>
                <DrawerCloseButton />

                <DrawerHeader borderBottomWidth='1px'>
                    <VStack
                        align='left'
                    >
                        <Heading size='md'>
                            {name}
                        </Heading>

                        <HStack>
                            {technologies.map((tech, i) => <Badge key={i} colorScheme='blue'>{tech}</Badge>)}
                        </HStack>
                    </VStack>
                </DrawerHeader>

                <DrawerBody borderBottomWidth='1px'>
                    <VStack
                        pb='10px'
                        gap='0.5em'
                        align='left'
                    >
                        <DraggableImageList images={images} />

                        <Heading size='md'>Details</Heading>

                        <Text
                            maxH='200px'
                            overflowY='auto'
                        >
                            {details}
                        </Text>
                    </VStack>
                </DrawerBody>

                <DrawerFooter>
                    <HStack w='100%'>
                        <LinkButton url={demoUrl} text='Demo' />
                        <LinkButton url={codeUrl} text='View Code' />
                    </HStack>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default ProjectDrawer;
