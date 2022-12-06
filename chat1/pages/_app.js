import '../styles/globals.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth, db } from '../firebase'


function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);
   
  if(!user) return <Login/>
 

function MyApp({ Component, pageProps }) {


  return <Component {...pageProps} />
}

export default MyApp
