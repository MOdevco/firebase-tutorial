import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider defaultTheme='light'>
        <ChakraProvider >
              <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider> 
  )
}
