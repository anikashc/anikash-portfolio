
import type { AppProps } from 'next/app'
import { ChakraProvider} from '@chakra-ui/react'
import customTheme from '../styles/theme'
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// See https://github.com/FortAwesome/react-fontawesome#integrating-with-other-tools-and-frameworks
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(
  faGithub, faTwitter, faLinkedin, faEnvelope, faInstagram
);
function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      
      <Component {...pageProps} />
 
    </ChakraProvider>
  )
}

export default MyApp
