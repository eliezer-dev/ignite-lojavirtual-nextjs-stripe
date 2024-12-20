import {getCssText, globalCss} from "@/styles";
import { globalStyles } from "@/styles/global";
import {Container} from "@/styles/pages/app";
import Header from "@/app/components/header/header";
import {DataProvider, useData} from "@/context/DataContext";
import CartDetails from "@/app/components/cartDetails/cartDetails";


globalStyles();

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
        />
        <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}}/>
      </head>
      <body>
        <DataProvider>
        <Container>
            <Header/>
            <CartDetails/>
            {children}
        </Container>
        </DataProvider>

      </body>

      </html>
  )
}
