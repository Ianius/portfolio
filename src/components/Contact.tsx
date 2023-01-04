import { Flex, Divider, VStack, Heading } from "@chakra-ui/react";
import { MdEmail } from 'react-icons/md';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import Links from '../links';
import LinkButton from './LinkButton';

const Contact = () => {
    return (
        <VStack
            w='100%'
            py='160px'
            gap='1em'
            divider={<Divider/>}
            justify='center'
        >
            <Heading size='lg' textAlign='center'>Contact</Heading>

            <Flex
                wrap='wrap'
                align='center'
                justify='center'
            >
                <LinkButton variant='ghost' url={Links.email} text='Send me an email' icon={MdEmail} colorScheme='red' />
                <LinkButton variant='ghost' url={Links.linkedin} text='Find me on LinkedIn' icon={BsLinkedin} colorScheme='linkedin' />
                <LinkButton variant='ghost' url={Links.github} text='Find me on GitHub' icon={BsGithub} colorScheme='blue' />
            </Flex>
        </VStack>
    );
};

export default Contact;
