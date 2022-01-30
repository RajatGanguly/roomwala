import styles from '../styles/bhkcard.module.css'

function Bhkcard() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img className={styles.cardbhkpic} src="/images/b1.jpg" width="360" height="300" alt=""/>
                        <div className={styles.cardbhktitle}>
                            <h3 className={styles.h3}>For Boys</h3>
                            <h5 className={styles.h5}>4+ Properties</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className={styles.cardbhkpic} src="/images/b1.jpg" width="360" height="300" alt=""/>
                        <div className={styles.cardbhktitle}>
                            <h3 className={styles.h3}>For Girls</h3>
                            <h5 className={styles.h5}>3+ Properties</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className={styles.cardbhkpic} src="/images/b1.jpg" width="360" height="300" alt=""/>
                        <div className={styles.cardbhktitle}>
                            <h3>For Girls</h3>
                            <h5>3+ Properties</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bhkcard