import React from "react";
import CourseGoalList from "./courseGoalList";
import CourseForm from "./CourseForm";
import "./CourseMain.css";
function CourseMain(props){
    const AddingHandler = (goals) =>{
        props.onupdate(goals);
    }
    const clickhandler = (goaltitle) =>{
        props.ondelete(goaltitle);
    }
    return(
        <div className="main">
            <CourseForm onAdding = {AddingHandler}></CourseForm>
            {props.Items.map(goal => <CourseGoalList title = {goal.title} key = {goal.id} onclicking = {clickhandler}/>)}
        </div>
    );
}
export default CourseMain