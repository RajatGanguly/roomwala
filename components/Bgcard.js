import Image from 'next/image';
import styles from '../styles/bgcard.module.css'

function Bgcard() {
  return <>
    <div className="container">
        <div className="row">
            <div className="col-md-6 card-pic-wrapper">
                <Image className={styles.cardPic} src='/images/b1.jpg' width='600' height='360' alt=""/>
                <div className={styles.cardTitle}>
                    <h3 className={styles.h3}>For Boys</h3>
                    <h5 className={styles.h5}>4+ Properties</h5>
                </div>
            </div>
            <div className="col-md-6 card-pic-wrapper">
                <Image className={styles.cardPic} src='/images/b2.jpg' width='600' height='360' alt=""/>
                <div className={styles.cardTitle}>
                    <h3 className={styles.h3}>For Girls</h3>
                    <h5 className={styles.h5}>3+ Properties</h5>
                </div>
            </div>
        </div>
    </div>

  </>;
}

export default Bgcard;
