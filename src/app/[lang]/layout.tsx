import '@/components/NavBar/NavBar'
import MenuBar from '@/components/NavBar/NavBar'

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
        <title>{"Jaume Ivars' Portfolio"}</title>
      </head>
      <body>
        {children}
        </body>
    </html>
  )
}
