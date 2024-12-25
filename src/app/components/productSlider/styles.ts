'use client'

import styled from 'styled-components';

export const ProductSliderContainer = styled.div``;

export const Product = styled.div`
    background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
    border-radius: 8px;
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    
    img {
       
        object-fit: cover;
    }

    footer {
        position: absolute;
        bottom: 0.25rem;
        left: 0.25rem;
        right: 0.25rem;
        padding: 2rem;

        border-radius: 6px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: rgba(0, 0, 0, 0.6);

        transform: translateY(110%);
        opacity: 0;
        transition: all 0.2s ease-in-out;

        strong {
            font-size: ${({ theme }) => theme.fontSizes.lg};
            color: ${({ theme }) => theme.colors.gray100};
        }

        span {
            font-size: ${({ theme }) => theme.fontSizes.xl};
            font-weight: bold;
            color: ${({ theme }) => theme.colors.green300};
        }
    }

    .footer_productinfo {
        display: flex;
        flex-direction: column;
    }

    &:hover {
        footer {
            transform: translateY(0%);
            opacity: 1;
        }
    }
`;
