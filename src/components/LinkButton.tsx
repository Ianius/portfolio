import { Icon, Link, Button } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
    url: string;
    text: string;
    icon?: IconType;
    variant?: string;
    colorScheme?: string;
}

const LinkButton = ({ url, text, icon, variant, colorScheme }: Props) => (
    <Link href={url} isExternal>
        <Button size='lg' variant={variant} colorScheme={colorScheme} leftIcon={icon ? <Icon as={icon}/> : undefined}>{text}</Button>
    </Link>
);

export default LinkButton;
