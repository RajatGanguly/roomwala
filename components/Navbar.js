import Link from 'next/link'
import { useState } from "react";
import styles from "../styles/navbar.module.css";

function Navbar() {
    const [navclassNameval, setNavclassNameval] = useState(1);
  return <>
    <header className={styles.navWrapper}>
        <nav className={styles.navBody}>
          <div className={`${styles.nav} ${styles.left}`}>
            <span className={`${styles.gradient} ${styles.skew} ${styles.span}`}>
              <h1 className={`${styles.logo} ${styles.unSkew} ${styles.h1}`}>
                <Link href="/" onClick={()=>setNavclassNameval(1)}>Add Logo</Link>
              </h1>
            </span>
            {/* <button id={styles.menu} className={styles.btnNav}>
              <span className={styles.span}>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </span>
            </button> */}
          </div>
          <div className={`${styles.nav} ${styles.right}`}>            
            <Link href="/" id={styles.navLink} onClick={()=>setNavclassNameval(1)} className={(navclassNameval)===1?`${styles.active} ${styles.navLink}`:`${styles.navLink}`}>
              <span className={`${styles.navLinkSpan} ${styles.span}`}>
                <span className={`${styles.unav} ${styles.span}`}>Home</span>
              </span>
            </Link>
            <Link href="/" id={styles.navLink} onClick={()=>setNavclassNameval(2)} className={(navclassNameval)===2?`${styles.active} ${styles.navLink}`:`${styles.navLink}`}>
              <span className={`${styles.navLinkSpan} ${styles.span}`}>
                <span className={`${styles.unav} ${styles.span}`}>For Tenants</span>
              </span>
            </Link>
            <Link href="/owner" id={styles.navLink} onClick={()=>setNavclassNameval(3)} className={(navclassNameval)===3?`${styles.active} ${styles.navLink}`:`${styles.navLink}`}>
              <span className={`${styles.navLinkSpan} ${styles.span}`}>
                <span className={`${styles.unav} ${styles.span}`}>For Owners</span>
              </span>
            </Link>
          </div>
        </nav>
      </header>

  </>;
}

export default Navbar;
