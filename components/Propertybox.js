import Image from 'next/image'
import styles from '../styles/propertybox.module.css'
import Link from 'next/link'

function Propertybox(props) {
  return <>
  <Link href={"/propertyno"+props.id}>
    <div className={`${styles.propertylistcon} container`}>
        <div className="row">
            <div className="col-4">
                <Image className={styles.propertylistpic} src='/images/b3.jpg' width="360" height="300" alt=""/>
            </div>
            <div className="col-8">
                <div className="container">
                    <div class="row property-box-row">
                        <div className="col-12">{props.id} | Locality: <span>{props.locality}</span>{(props.sex==-1)?<span className={styles.sex}>For Girls Only</span>:(props.sex==0)?<span className={styles.sex}>For Boys & Girls</span>:<span className={styles.sex}>For Boys Only</span>}{(props.verified==1)?<span>&#9989;Verified</span>:null}</div><br/><br/><br/>
                        <div className="col-3"></div>
                        <div className="col-3">
                            <div><h4>₹{props.price}</h4><h6> / month</h6></div>
                        </div>
                        <div className="col-3">
                            <div><h4>{props.person}Persons</h4><h6> / room</h6></div>
                        </div>
                        <div className="col-3">
                            <div><h4>{props.bhk} BHK</h4></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Link>
  </>;
}

export default Propertybox;
