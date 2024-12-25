import styled from 'styled-components';

export const ButtonTextContainer = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.green500};
    font-weight: bold;
    font-size: 16px;
    text-align: left;

    &:hover {
        color: ${({ theme }) => theme.colors.green300};
        cursor: pointer;
    }
`;
