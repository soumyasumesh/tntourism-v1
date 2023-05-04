import Head from "next/head";

import Layouts from "../components/Layouts";
import Meta from "../components/meta";

import '../styles/bootstrap.min.css'
import '../styles/ui.css'

import Script from 'next/script'
import Header from "../components/Header";

import jQuery from 'jquery'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Meta />
       
      </Head>
      <Script src="/js/front-end/jquery.min.js" />
      <Script src="/js/front-end/bootstrap.bundle.min.js" />
      <Script src="/js/front-end/ui.js" />   
      <Layouts>
      <Header />
           

        <Component {...pageProps} />   
       

      </Layouts> 
    </>
  );
}

export default MyApp;
