import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: `'Raleway', sans-serif`,
        body: `'Roboto', sans-serif`
    },
    styles: {
        global: {
            body: {
                m: '0px',
                p: '0px'
            }
        }
    },
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false
    }
});

export default theme;
