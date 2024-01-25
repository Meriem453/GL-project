import "./rendezvous.css"
import Message from "./message"
import Sidebar from "../compteavocat/sidebar";
const Rendezvous = () => {
    return(
        <div className="rendezvous">
            <Sidebar/>
            <div className="container">
                <h1>Rendez-vous</h1>
                <div className="messages">
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
            </div>
            
            
        </div>
    );
}

export default Rendezvous;