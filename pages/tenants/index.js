import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Properties from '../../components/Properties';

function index() {
  return <>
    <Head>
      <title>Roomwala | Tenants</title>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
    </Head>
    <Navbar/>
    <Properties/>
    <Footer/>
  </>;
}

export default index;
