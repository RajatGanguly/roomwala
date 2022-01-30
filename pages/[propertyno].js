import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function propertyno() {
    const router = useRouter()
    const pno = router.query.propertyno
  return <>
  <Head>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
  </Head>
    <Navbar/><br/><br/><br/><br/>
    <h1>{pno}</h1>
    <Footer/>
  </>;
}

export default propertyno;
