import {styled} from "@/styles";

export const ButtonTextContainer = styled('button', {
    background: 'transparent',
    border: 'none',
    color: '$green500',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'left',


    '&:hover': {
        color: '$green300',
        cursor: 'pointer',
    }
})