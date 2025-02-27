import "./waiting.css"

const Waiting = () => {
    return(
        <div className="waiting">
            <div className="card">
                <img src="images/Checklist.png" alt="icon" className="icon" />
                <h1>Votre demande a été enregistrée  </h1>
                <p>votre compte sera activé après vérification des informations </p>
            </div>
        </div>
    );
}

export default Waiting;