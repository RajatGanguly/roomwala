import { useState } from "react";
import styles from '../styles/entryform.module.css'


function Loginbody() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return phone.length > 8 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="" className={styles.label}>Phone Number</label>
                <input type="text" autoFocus className={`form-control ${styles.input}`} value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="" className={styles.label}>Password</label>
                <input type="password" className={`form-control ${styles.input}`} value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button size="lg" type="submit" disabled={!validateForm()} style={{"width":"100%"}} className={`btn btn-primary btn-lg btn-block`}>Log In</button>
        </form>
    </>
  );
}

export default Loginbody;