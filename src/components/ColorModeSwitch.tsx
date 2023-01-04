import { HStack, Icon, Switch, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from 'react-icons/fa'

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack
            py='12px'
            px='20px'
            bg={useColorModeValue('white', 'blue.700')}
            right='32px'
            zIndex='1000'
            bottom='32px'
            shadow='dark-lg'
            position='fixed'
            borderRadius='full'
        >
            <Icon as={FaSun} fontSize='xl' /> 
            <Switch color='red' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Icon as={FaMoon} fontSize='xl' /> 
        </HStack>
    );
};

export default ColorModeSwitch;
