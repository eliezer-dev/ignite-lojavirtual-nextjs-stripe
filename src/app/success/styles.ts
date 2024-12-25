'use client'

import styled from 'styled-components';

export const SuccessContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 656px;

    h1 {
        font-size: ${({ theme }) => theme.fontSizes['2xl']};
        color: ${({ theme }) => theme.colors.gray100};
    }

    p {
        font-size: ${({ theme }) => theme.fontSizes.xl};
        color: ${({ theme }) => theme.colors.gray300};
        max-width: 560px;
        text-align: center;
        margin-top: 2rem;
        line-height: 1.4;
    }

    a {
        display: block;
        margin-top: 5rem;
        font-size: ${({ theme }) => theme.fontSizes.lg};
        color: ${({ theme }) => theme.colors.green500};
        text-decoration: none;
        font-weight: bold;

        &:hover {
            color: ${({ theme }) => theme.colors.green300};
        }
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    max-width: 130px;
    height: 145px;
    background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
    border-radius: 8px;
    padding: 0.25rem;
    margin-top: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        object-fit: cover;
    }
`;
