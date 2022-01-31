import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import customTheme from '../styles/theme'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
            <ColorModeScript initialColorMode={customTheme.colorConfig.initialColorMode}/>
            <Main />
            <NextScript />

        </body>
      </Html>
    )
  }
}

export default MyDocument