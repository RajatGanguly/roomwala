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
                        <div className="col-12">{props.id} | Address: <span>12no. Khudiram Nagar, Haldia: 123456</span></div><br/><br/><br/>
                        <div className="col-3"></div>
                        <div className="col-3">
                            <div><h4>₹2000</h4><h6> / month</h6></div>
                        </div>
                        <div className="col-3">
                            <div><h4>2Persons</h4><h6> / room</h6></div>
                        </div>
                        <div className="col-3">
                            <div><h4>2BHK</h4></div>
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
