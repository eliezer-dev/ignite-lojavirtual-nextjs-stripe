import {Html, Head, Main, NextScript} from 'next/document';
import {getCssText} from "@/styles";

export default function Document () {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:wght@400;700&display=swap"
                    rel="stylesheet"/>
                <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}}/>
                <meta charSet="UTF-8"/>
            </Head>
            <body>
            <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}