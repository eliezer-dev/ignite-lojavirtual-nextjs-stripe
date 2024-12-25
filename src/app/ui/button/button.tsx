import {ButtonContainer} from "@/app/ui/button/styles";

interface ButtonTextProps {
    title: string;
    onClick?: () => void;
    disabled?: boolean;
}


export  default function Button (props: ButtonTextProps) {
    return(
        <ButtonContainer onClick={props.onClick} disabled={props.disabled}>
            {props.title}
        </ButtonContainer>
    )
}