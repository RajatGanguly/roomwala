import Navbar from "../../components/Navbar";
import Head from 'next/head'
import Footer from "../../components/Footer";
import Bannerhome from "../../components/Banner";
import Bgcard from "../../components/Bgcard";
import Bhkcard from "../../components/Bhkcard";
import Quizbox from "../../components/Quizbox";

function Home() {
  return <>
    <Head>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
    </Head>
    <Navbar/><br/><br/>
    <Bannerhome/>
    <Bgcard/>
    <Bhkcard/>
    <Quizbox/>
    <Footer/>
  </>;
}

export default Home;
