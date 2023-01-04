import { 
    Image, Portal,
    useBoolean
} from "@chakra-ui/react";

import { useState } from 'react';

interface Props {
    src: string;
    offsetX: number;
    transition?: string;
}

const ZoomableImage = ({ src, offsetX, transition }: Props) => {
    const [selected, setSelected] = useBoolean(false);
    const [pointerDownPosition, setPointerDownPosition] = useState({ x: 0, y: 0});

    return (
        <>
            <Image 
                borderRadius='md' 
                draggable={false}
                opacity={selected ? 0 : 1}
                pointerEvents={selected ? 'none' : undefined}

                onPointerDown={e => {
                    setPointerDownPosition({ x: e.clientX, y: e.clientY });
                }}

                onPointerUp={e => {
                    if (e.clientX === pointerDownPosition.x && e.clientY === pointerDownPosition.y)
                        setSelected.on();
                }}

                h='100%' 
                src={src} 
                fit='contain' 
                transform={`translateX(${offsetX}px)`}
                transition={transition}
                transitionTimingFunction='ease-out'
            />

            { selected && 
                <Portal
                    appendToParentPortal={false}
                >
                    <Image 
                        bg='rgba(0, 0, 0, 0.8)'
                        position='fixed'
                        zIndex={2000}
                        left='0px'
                        right='0px'
                        bottom='0px'
                        top='0px'
                        m='auto'
                        borderRadius='md' 
                        draggable={false}
                        cursor='pointer'
                        onClick={setSelected.off}
                        h='100%' 
                        w='100%'
                        src={src} 
                        fit='contain' 
                        transition={transition}
                        transitionTimingFunction='ease-out'
                    />
                </Portal>
            }
        </>
    );
};

export default ZoomableImage;
