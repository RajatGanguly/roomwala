import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from "react";
import styles from '../styles/ownerform.module.css'
import Loginbody from '../components/Loginbody'
import Signupbody from '../components/Signupbody'

function Userentry() {
  
  const [nav_val, setNav_val] = useState(1);

  return <>
    <Head>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
    </Head>
    <Navbar/>
    <div className={styles.userentrybg}>
        <div className={`${styles.userentrycard} container`}>
            <div className={`${styles.entrynav} row`}>
                <div className={`${styles.entryheadbtncon} col-md-6`}>
                  <button onClick={()=>{setNav_val(1)}} className={(nav_val)===1?`${styles.activeloginnav}`:`${styles.entryheadbtn}`}>Log In</button>
                </div>
                <div className={`${styles.entryheadbtncon} col-md-6`}>
                  <button onClick={()=>{setNav_val(2)}} className={(nav_val)===2?`${styles.activeloginnav}`:`${styles.entryheadbtn}`}>Sign Up</button>
                </div>
            </div><br/><br/><br/>
            {
              (nav_val===1)?<Loginbody/>:<Signupbody/>
            }
        </div>
    </div>
    <Footer/>
  </>;
}

export default Userentry;