import { HStack, useBoolean } from "@chakra-ui/react";
import { useRef, useState, useEffect } from 'react';

import ZoomableImage from './ZoomableImage';

interface Props {
    images: string[];
}

const DraggableImageList = ({ images }: Props) => {
    const [isDragging, setIsDragging] = useBoolean(false);
    const [offsetX, setOffsetX] = useState(0);
    const [lastPointerX, setLastPointerX] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onPointerMoved = (e: PointerEvent) => {
            if (isDragging) {
                const drag = e.clientX - lastPointerX;
                setOffsetX(offsetX + drag);
                setLastPointerX(e.clientX);
            }
        };

        const stack = ref.current;

        stack?.addEventListener('pointermove', onPointerMoved)

        return () => stack?.removeEventListener('pointermove', onPointerMoved)
    }, [isDragging, lastPointerX, offsetX]);

    return (
        <HStack
            h='300px'
            ref={ref}
            cursor='pointer'
            draggable={false}
            overflow='hidden'

            onPointerDown={e => {
                setLastPointerX(e.clientX);
                setIsDragging.on();
            }}

            onPointerUp={e => {
                setIsDragging.off();

                const stack = ref.current;

                if (stack) {
                    const maxScroll = -(stack.scrollWidth - stack.clientWidth);
                    const lastDrag = (e.clientX - lastPointerX) * 10;
                    const newOffsetX = offsetX + lastDrag;

                    if (newOffsetX > 0) setOffsetX(0);
                    else if (newOffsetX < maxScroll) setOffsetX(maxScroll);
                    else setOffsetX(newOffsetX);
                }
            }}
        >
            {
                images.map((image, i) => 
                    <ZoomableImage 
                        key={i} 
                        src={image}
                        offsetX={offsetX}
                        transition={isDragging ? undefined : '250ms'}
                    />)
            }
        </HStack>
    );
};

export default DraggableImageList;
