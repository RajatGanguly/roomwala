import Image from 'next/image';
import styles from '../styles/quizbox.module.css'

function Quizbox() {
  return <>
    <div className="container">
        <div className="row">
            <div className={`col-10 ${styles.quizcon}`}><br/>
                <div className="row">
                    <div className="col-md-4">
                        <Image className={styles.houselogo} src='/images/houselogo.png' width='120' height='120' alt=""/><br/><br/><br/><br/>
                        <h4>Get best houses with minimum cost</h4>
                    </div>
                    <div className="col-md-8">
                        <div className={styles.quizbox}>
                            <h3>QUIZ SECTION</h3><br/>
                            <h5>Take quiz for better recomendation</h5>
                            <Image className={styles.quizrobot} src='/images/robot.png' width='120' height='120' alt=""/>
                            <button variant={`primary ${styles.quizbtn}`}>START QUIZ</button>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

  </>;
}

export default Quizbox;
