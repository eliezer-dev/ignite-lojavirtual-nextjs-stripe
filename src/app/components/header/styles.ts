'use client'

import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-bottom: 2rem;
    padding-right: calc(100vh - (1180px - 400px));
    width: 100%;
    max-width: calc(100vw - ((100vw - 1180px) / 2));
    margin-left: auto;
    justify-content: space-between;
`;
