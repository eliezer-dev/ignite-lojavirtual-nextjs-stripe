'use client'

import styled from 'styled-components';

export const ItemSelectContainer = styled.div`
    display: grid;
    grid-template-columns: 101.94px 262.06px;
    overflow: hidden;

    img {
        object-fit: cover;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    max-width: 101.94px;
    height: 93px;
    background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
    border-radius: 8px;
    padding: 0.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ShirtInformation = styled.div`
    margin-left: 20px;
    font-size: ${({ theme }) => theme.fontSizes.md};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .bold {
        font-weight: bold;
    }
`;
