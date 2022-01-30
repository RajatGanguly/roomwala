import { useState } from "react";
import styles from '../styles/entryform.module.css'


function Signupbody() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return name.length > 0 && email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        let data = {name, mobile, email, password }
        fetch("http://roomwala-api.herokuapp.com/owner/signup",{
          method: "POST",
          headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
          },
          body: JSON.stringify(data)
        }).then((result)=>{
          console.log("Result: ", result)
        }) 
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="" className={styles.label}>Name</label>
                <input type="text" autoFocus className={`form-control ${styles.input}`} value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="" className={styles.label}>Email</label>
                <input type="text" className={`form-control ${styles.input}`} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="" className={styles.label}>Phone Number</label>
                <input type="text" className={`form-control ${styles.input}`} value={mobile} onChange={(e) => setMobile(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="" className={styles.label}>Password</label>
                <input type="password" className={`form-control ${styles.input}`} value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button size="lg" type="submit" disabled={!validateForm()} style={{"width":"100%"}} className={`btn btn-primary btn-lg btn-block`}>Sign Up</button>
        </form>
    </>
  );
}

export default Signupbody;