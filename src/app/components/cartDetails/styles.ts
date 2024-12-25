'use client'

import styled from 'styled-components';

export const CartDetailsContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    z-index: 1000;
    width: 480px;
    background-color: ${({ theme }) => theme.colors.gray800};
    padding: 24px;
    overflow: hidden;

    &.disabled {
        transform: translateX(110%);
        opacity: 0;
        transition: all 0.2s ease-in-out;
    }

    &.enabled {
        transform: translateY(0%);
        opacity: 1;
    }

    h1 {
        margin-top: 72px;
        height: 32px;
    }

    .main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100vh - 152px);
    }
`;

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
`;

export const ItemsContainer = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const ClosedButton = styled.button`
    position: absolute;
    right: 24px;
    top: 24px;
    background-color: transparent;
    border: none;

    &:hover {
        cursor: pointer;
    }
`;

export const TotalValueContainer = styled.div`
    .total_item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 7px;
    }

    .bold {
        font-weight: bold;
    }
`;

export const TotalQuantity = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 7px;
`;

export const TotalPrice = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 57px;
    font-weight: bold;
`;
