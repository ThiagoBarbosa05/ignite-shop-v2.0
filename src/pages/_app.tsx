import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";
import type { AppProps } from "next/app";
import { Provider} from "react-redux";
import {store} from "@/app/store";
import { HeaderApp } from "@/components/HeaderApp";


globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <Container>
            <HeaderApp />
            <Component {...pageProps} />
          </Container>
      </Provider>    
   
  
  );
}
