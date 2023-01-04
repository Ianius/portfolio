import { Box, BoxProps } from '@chakra-ui/react';
import { useRef } from 'react';

interface Props extends BoxProps {
    getRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Section = (props: BoxProps) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <Box
            ref={ref}
            {...props}
        />
    );
};

export default Section;
