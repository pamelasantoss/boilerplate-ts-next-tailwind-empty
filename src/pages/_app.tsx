import type { AppProps } from "next/app"
import "@/styles/globals.css"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { IntlProvider } from "react-intl"
import en from "@/locales/en.json"
import es from "@/locales/es.json"
import pt_BR from "@/locales/pt-BR.json"

interface Message {
  string: string
}

type Messages = Record<string, Message>

type Locale = "pt-BR" | "en" | "es"

export default function App({ Component, pageProps }: AppProps) {
  const [locale, setLocale] = useState<Locale>("pt-BR")

  const compile = (msgs: Messages): Record<string, string> => {
    const results: Record<string, string> = {}
    for (const [id, msg] of Object.entries(msgs)) {
      results[id] = msg.string
    }
    return results
  }

  const messages = {
    "en": compile(en),
    "es": compile(es),
    "pt-BR": compile(pt_BR)
  }

  useEffect(() => {
    const localeCookie = Cookies.get("locale_info") as Locale
    if (localeCookie) {
      setLocale(localeCookie)
    }
  }, [])

  /*
    @todo Botão para troca de idioma não existe
  */

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale="pt-BR"
    >
      <Component {...pageProps} />
    </IntlProvider>
  )
}
