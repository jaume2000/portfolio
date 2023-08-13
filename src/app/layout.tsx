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

  let language = navigator.language.split('-')[0]
  let dict = getLanguageDictionary(language,"Header")

  return (
    <html lang={params.lang}>
      <head>
        <meta charSet={"UTF-8"}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{dict.title}</title>
        <meta></meta>
      </head>
      <body>
        {children}
        </body>
    </html>
  )
}
