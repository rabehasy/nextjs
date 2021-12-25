import '../../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import {useEffect} from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return ( <Component {...pageProps} /> )
}

export default MyApp
