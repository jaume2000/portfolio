import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import {getAvailableLenguages} from '@/lang/lang'

const locales = getAvailableLenguages();
export const defaultLocale = 'en';

function getLocale(request: Request): string {
  const headers = new Headers(request.headers)
  const acceptLanguage = headers.get("accept-language")
  if (acceptLanguage) {
    headers.set('accept-language', acceptLanguage.replaceAll("_", "-"))
  }

  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();

  //CHANGED THIS
  //console.log(languages)
  try{
    const m = match(languages, locales, defaultLocale);
    //console.log("match",m)
    return m
  }
  catch (error) {
    return defaultLocale
  }
}

export function middleware(request: NextRequest) {
  let locale = getLocale(request) ?? defaultLocale
  let pathname = request.nextUrl.pathname

  const pathname_list = pathname.split('/')
  const possible_locale = pathname_list[1];
  if(locales.includes(possible_locale)){
    locale = possible_locale;
    pathname_list.splice(0,2)
    pathname = '/'+pathname_list.join('/')
  }

  const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl);

  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.rewrite(newUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|public/|images|robots).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
