import '@/components/NavBar/NavBar'
import MenuBar from '@/components/NavBar/NavBar'
import {getLanguageDictionary} from '@/lang/lang'

export const metadata = {
  
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: {lang: string}
}) {



  return (
    <html lang={params.lang}>
      <head>
        <meta charSet={"UTF-8"}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{"Jaume Ivars Grimalt - Portfolio"}</title>
        <meta></meta>
      </head>
      <body>
        {children}
        </body>
    </html>
  )
}
