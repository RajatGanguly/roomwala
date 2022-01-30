import { useState , useEffect } from "react";
import Image from 'next/image'
import styles from '../styles/banner.module.css'

function Bannerhome() {
    const [bannerVal, setBannerVal] = useState(1);
    useEffect(() => {
      const interval = setInterval(() => {
        (bannerVal===5)?setBannerVal(1):setBannerVal(bannerVal+1)
      }, 3000);
      return () => {
        clearInterval(interval)
      }
    }, [bannerVal]);
  return (
    <div>
      <div className={styles.slideshowContainer}>
        <div id={styles.slide1} className={styles.mySlides}>
          <div className={styles.numbertext}>{bannerVal} / 5</div>
          <Image src={(bannerVal===1)?`/images/b1.jpg`:(bannerVal===2)?'/images/b2.jpg':(bannerVal===3)?'/images/b1.jpg':(bannerVal===4)?'/images/b4.jpg':(bannerVal===5)?'/images/b5.jpg':null} width= "1700" height= "800" alt="" />
          <div className={styles.text}>Lamborghini Sian Roadster</div>
        </div>

        <span className={styles.prev} onClick={()=>((bannerVal===1)?setBannerVal(5):setBannerVal(bannerVal-1))}>&#10094;</span>
        <span className={styles.next} onClick={()=>((bannerVal===5)?setBannerVal(1):setBannerVal(bannerVal+1))}>&#10095;</span>
      </div>
      <br />

      <div style={{ "text-align": "center" }}>
        <span className={styles.dot} onClick={()=>{setBannerVal(1)}}></span>
        {/* {console.log(bannerVal)} */}
        <span className={styles.dot} onClick={()=>{setBannerVal(2)}}></span>
        <span className={styles.dot} onClick={()=>{setBannerVal(3)}}></span>
        <span className={styles.dot} onClick={()=>{setBannerVal(4)}}></span>
        <span className={styles.dot} onClick={()=>{setBannerVal(5)}}></span>
      </div>

      <div className={styles.hero}>
        <h1 className={styles.heading}>Discover the Car World</h1>
        <p className={styles.para}>
          I don't want to be in a relationship, I want to be in a Lamborghini
        </p>
      </div>
    </div>
  );
}

export default Bannerhome;