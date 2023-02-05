import React from "react";
import "./courseGoalList.css";
function CourseGoalList(props){
    const listhandler = () =>{
        props.onclicking(props.title);
    }
    return( 
    <div className="list" onClick={listhandler}>
        <div>{props.title}</div>
    </div>
    );
}
export default CourseGoalList;