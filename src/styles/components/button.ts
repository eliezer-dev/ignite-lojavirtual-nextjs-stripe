import {styled} from "@/styles";

export const ButtonContainer = styled('button', {
    backgroundColor: '$green500',
    width: '100%',
    height: '69px',
    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',

    '&:hover': {
        color: '$green300',
        cursor: 'pointer',
    }
})