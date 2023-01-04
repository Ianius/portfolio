import { Icon, IconButton, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
    url: string;
    icon: IconType;
    ariaLabel: string;
}

const IconButtonLink = ({ url, icon, ariaLabel }: Props) => (
    <Link href={url} isExternal>
        <IconButton
            icon={<Icon as={icon} />}
            size='lg'
            variant='ghost'
            aria-label={ariaLabel}
            colorScheme={'blue'}
        />
    </Link>
);

export default IconButtonLink;
