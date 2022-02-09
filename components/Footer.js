import styles from '../styles/footer.module.css'
import Link from 'next/link'

function Footer() {
  return <>
    <footer id="footer" className={`${styles.footerTag}`}><br/><br/><br/><br/>
        <link
          rel="stylesheet"
          href="//netdna.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        />
        <div className={`${styles.mainFooter} ${styles.widgetsDark} ${styles.typoLight}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className={`${styles.widget} ${styles.subscribe} ${styles.noBox}}`}>
                  <h5 className={styles.widgetTitle}>
                    ROOMWALA<span></span>
                  </h5>
                  <p>Roomwala where you can get your dream room in a very affordable price</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className={`${styles.widget} ${styles.subscribe} ${styles.noBox}}`}>
                  <h5 className={styles.widgetTitle}>
                    Quick Links<span></span>
                  </h5>
                  <ul className={styles.thumbnailWidget}>
                    <li>
                      <div className={styles.thumbContent}>
                        <Link href="/" exact={true}>
                          Home
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className={styles.thumbContent}>
                        <Link href="/tenants">For Tenants</Link>
                      </div>
                    </li>
                    <li>
                      <div className={styles.thumbContent}>
                        <Link href="/owner">For Owners</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className={`${styles.widget} ${styles.subscribe} ${styles.noBox}}`}>
                  <h5 className={styles.widgetTitle}>
                    Contact Us<span></span>
                  </h5>
                  <p>
                    We will contact you in no time 
                  </p>
                  <div className="emailfield">
                    
                    <form action="">
                        <div className="form-group">
                            <input name="email" type="email" className="form-control" id={styles.input} aria-describedby="emailHelp" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input name="number" type="text" className="form-control" id={styles.input} placeholder="Phone No"/>
                        </div>
                        <button type="submit" id={styles.inputbtn} className="btn btn-primary">Enquire Now</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerCopyright}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Copyright Design Roomwala © 2022. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  </>;
}

export default Footer;
