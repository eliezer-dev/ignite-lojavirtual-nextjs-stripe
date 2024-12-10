import {styled} from "@/styles";
import {hidden} from "next/dist/lib/picocolors";

export const CartDetailsContainer = styled('div', {
    position: 'absolute',
    top:0,
    right: 0,
    button: 0,
    height: '100vh',
    zIndex: '1000',
    width: '480px',
    backgroundColor: '$gray800',
    padding: '24px',


    variants: {
        state: {
            enabled: {
                transform: 'translateX(0)',
                transition: 'all 0.2s ease-in-out',
                opacity: 1,
            },
            disabled: {
                transform: 'translateX(110%)',
                opacity: 0,
                transition: 'all 0.2s ease-in-out',
            },
        },
    },

    // '.disabled': {
    //     transform: 'translateX(110%)',
    //     opacity: 0,
    //     transition: 'all 0.2s ease-in-out',
    //},
    //
    // '.enabled' : {
    //     transform: 'translateY(0%)',
    //     opacity: 1
    // },

    h1: {
        marginTop: '72px',
        height: '32px'
    },

    '.main': {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'calc(100vh - 152px)'
    }

})

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

export const ItemsContainer = styled('div', {
    marginTop: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap:'24px',
})

export const ClosedButton = styled('button', {
    position: 'absolute',
    right: '24px',
    top: '24px',
    backgroundColor: 'transparent',
    border: 'none',

    '&:hover': {
        cursor: 'pointer',
    }
})

export const TotalValueContainer = styled('div', {
    '.total_item': {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '7px',
    },

    '.bold': {
        fontWeight: 'bold',
    }


})

export const TotalQuantity = styled('div', {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '7px'
})

export const TotalPrice = styled('div', {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '57px',
    fontWeight: 'bold'
})