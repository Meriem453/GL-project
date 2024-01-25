import "./login.css"
import { Link } from "react-router-dom";
const Login = () => {
    return(
        <div className="login">
            <div className="card">
                <img src="images/logo.png" alt="Logo" className="logo" />
                <div className="container">
                    <div className="title">Se Connecter</div>
                    <form>
                        <div className="input-group">
                            <input
                            type="text"
                            placeholder=''
                            />
                            <label>E-mail</label>
                        </div>

                        <div className="input-group">
                            <input
                            type="password"
                            placeholder=" "
                            />
                            <label>mot de passe </label>
                        </div>
                        <span>mot de passe oublié ?</span>
                        <button>se connecter</button>
                        <button className="google"><img src="images/google.png" alt="google" />connectez-vous avec google</button>
                    </form>
                    <p className="signup-link">vous n’avez pas de compte ? <Link to="/signup" className="link"> s’inscrire</Link></p>
                    
                </div> 
            </div>
        </div>
    );
}

export default Login;