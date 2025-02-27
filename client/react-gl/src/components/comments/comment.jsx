import "./comment.css"
import Sidebar from "../compteavocat/sidebar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Comment = ({ text, rating }) => (
    <div className="comment">
        <div className="rate"><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#f0bc39",}}/> {rating}.0</div>
        <div className="text">{text}</div>  
    </div>
  );
  
 

const Commentpage = () => {
    const [comments] = useState([
        { text: "jxhskjdchsudcreation timeless for the standard best service passage vary, with some citing the 15 centurycreation timeless for the standard", rating: 5 },
        { text: "avocat commentaires", rating: 4 },
        
      ]);  //Just for testing

    return(
        <div className="comments">
            <Sidebar/>
            <div className="container">
                <h1>commentaires</h1>
                <div className="commentlist">
                    {comments.map((comment, index) => (
                        <Comment key={index} text={comment.text} rating={comment.rating} />
                    ))}
                </div>
                
            </div>
            
            
        </div>
    );
}

export default Commentpage;