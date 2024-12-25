import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background-color: ${({ theme }) => theme.colors.green500};
    width: 100%;
    height: 69px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: bold;
    border: none;
    border-radius: 8px;

    &:hover {
        color: ${({ theme }) => theme.colors.green300};
        cursor: pointer;
    }

    &:disabled {
        
        background-color: #cccccc; 
        color: #666666;
        cursor: not-allowed;
        opacity: 0.6;
    }
`;