import styles from '../styles/leftfilter.module.css'
import { useEffect, useState } from 'react'

function LeftFilter(props) {
    const [sex, setSex] = useState(0);
    const [rangeval, setRangeval] = useState(null);
    const [bhk, setBhk] = useState(null);
    const [sqft, setSqft] = useState(null);
    const [area, setArea] = useState(null);
    const [verified, setVerified] = useState(null);

    useEffect(()=>{
        console.log('called')
        var sendObj = {sex: sex, rangeval: rangeval, bhk: bhk, sqft: sqft, area: area, verified: verified}
        props.getObj(sendObj)
    }, [sex, rangeval, bhk, sqft, area, verified])

    return (
        <div>
            <div className={styles.leftfiltermenu}>
                <div className="container">
                    <div className="row">
                        <div className={`${styles.filtercon} col-12`}>
                            <div className={`${styles.togglebox} ${styles.filterbox}`}>
                                <h5>Gender: </h5>
                                <span>Boys</span>
                                <label className={styles.switch}>                                    
                                    <input type="checkbox" className={styles.input} onClick={(event)=>{(sex==0)?setSex(-1):setSex(sex*(-1))}}/>
                                    <span className={`${styles.slidertoggle} ${styles.round}`}></span>
                                </label>
                                <span>Girls {sex}</span>
                            </div>
                            <div className={`${styles.moneyrangebox} ${styles.filterbox}`}>
                                <h5>Budget: </h5>
                                <div className={styles.slidecontainer}>
                                    <input type="range" min="1000" max="10000" className={styles.sliderrange} id={styles.myRange} onChange={(event) => {setRangeval(event.target.value)}}/>
                                    <h4 className={styles.moneyh4}>Select Range: {(rangeval==1000)?'upto':null} {rangeval} {(rangeval==10000)?'+':null}</h4>
                                </div>
                            </div>
                            <div className={`${styles.bhkbox} ${styles.filterbox}`}>
                                <h5>BHK: </h5>
                                <div className={styles.bhkoption} onClick={()=>{setBhk(1)}}>
                                    <span>1 BHK</span>
                                </div>
                                <div className={styles.bhkoption} onClick={()=>{setBhk(2)}}>
                                    <span>2 BHK</span>
                                </div>
                                <div className={styles.bhkoption} onClick={()=>{setBhk(3)}}>
                                    <span>3 BHK</span>
                                </div>
                            </div>
                            <div className={`${styles.moneyrangebox} ${styles.filterbox}`}>
                                <h5>Area: </h5>
                                <div className={styles.slidecontainer}>
                                    <input type="range" min="200" max="2000" className={styles.sliderrange} id={styles.myRange} onChange={(event) => setSqft(event.target.value)}/>
                                    <h4 className={styles.moneyh4}>Select Sqft: {(sqft==200)?'upto':null} {sqft} {(sqft==2000)?'+':null}</h4>
                                </div>
                            </div>
                            <div className={`${styles.bhkbox} ${styles.filterbox}`}>
                                <h5>Furnishing Status: </h5>
                                <div className={styles.bhkoption}>
                                    <span>Unfusnished</span>
                                </div>
                                <div className={styles.bhkoption}>
                                    <span>Semifurnished</span>
                                </div>
                                <div className={styles.bhkoption}>
                                    <span>Furnished</span>
                                </div>
                            </div>
                            <div className={`${styles.togglebox} ${styles.filterbox}`}>
                                <h5>Verified: </h5>
                                <span>No</span>
                                <label className={styles.switch}>                                    
                                    <input type="checkbox" className={`${styles.input} ${styles.inputver}`}/>
                                    <span className={`${styles.slidervertoggle} ${styles.slidertoggle} ${styles.round}`}></span>
                                </label>
                                <span>Yes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftFilter
