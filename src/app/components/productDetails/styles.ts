'use client'

import styled from 'styled-components';

export const ProductDetailsContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    gap: 4rem;

    max-width: 1180px;
    margin: 0 auto;
`;

export const ImageContainer = styled.div`
    width: 100%;
    max-width: 576px;
    height: 656px;
    background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
    border-radius: 8px;
    padding: 0.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        object-fit: cover;
    }
`;

export const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: ${({ theme }) => theme.fontSizes['2xl']};
        color: ${({ theme }) => theme.colors.gray300};
    }

    span {
        margin-top: 1rem;
        display: block;
        font-size: ${({ theme }) => theme.fontSizes['2xl']};
        color: ${({ theme }) => theme.colors.green300};
    }

    p {
        margin-top: 2.5rem;
        font-size: ${({ theme }) => theme.fontSizes.md};
        line-height: 1.6;
        color: ${({ theme }) => theme.colors.gray300};
    }

    button {
        margin-top: auto;

    }
`;
