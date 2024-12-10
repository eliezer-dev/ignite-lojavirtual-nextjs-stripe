import {styled} from "@/styles";

export const ItemSelectContainer = styled('div',{
    display:'grid',
    gridTemplateColumns: '101.94px 262.06px',

    img: {
        objectFit: 'cover'
    },

    overflow: 'hidden'


})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: '101.94px',
    height: '93px',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

})


export const ShirtInformation = styled('div', {
    marginLeft: '20px',
    fontSize: '$md',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '.bold': {
        fontWeight: 'bold',
    },


})

