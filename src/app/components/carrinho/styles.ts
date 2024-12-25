'use client'

import styled from 'styled-components';

export const CarrinhoContainer = styled.div`
    position: relative;

    &:hover {
        cursor: pointer;
    }
`;

export const QuantityItemCartContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.no};
    right: -10px;
    top: -10px;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.green500};
`;
