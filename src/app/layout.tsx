import {getLanguageDictionary} from '@/lang/lang'
import { defaultLocale } from '@/middleware'

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: {lang: string}
}) {
  let language = params.lang ?? defaultLocale;
  let dict = getLanguageDictionary(language,"Header")
  return (
    <html lang={language}>
      <head>
        <meta charSet={"UTF-8"}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <title>{dict.title}</title>
        <meta></meta>
      </head>
      <body>
        {children}
        </body>
    </html>
  )
}
