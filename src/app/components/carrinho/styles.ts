import {styled} from "@/styles";

export const CarrinhoContainer = styled('div', {
    position: 'relative',

    '&:hover': {
        cursor: 'pointer',
    }
})

export const QuantityItemCartContainer = styled('div', {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '$no',
    right: '-10px',
    top:'-10px',
    height: '24px',
    width: '24px',
    borderRadius: '50%',
    backgroundColor: '$green500',


})