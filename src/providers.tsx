"use client"

import StyledComponentsRegistry from "@/lib/registry"
import {GlobalStyles} from "@/styles/global";
import {ThemeProvider} from "styled-components";
import {theme} from "@/styles";

function Providers(props: React.PropsWithChildren) {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {props.children}
            </ThemeProvider>
        </StyledComponentsRegistry>
    )
}

export default Providers