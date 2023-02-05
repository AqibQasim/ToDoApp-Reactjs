import React, {useState} from "react";
import "./CourseForm.css";
function CourseForm(props){
    const[enteredTitle , setenteredTitle] = useState("");
    const AddGoalHandler = (event) =>{
        setenteredTitle(event.target.value);
    }
    const sumbutHandler = (event) =>{
        event.preventDefault();
        const goals = {
            title : enteredTitle
        }
        props.onAdding(goals);
        setenteredTitle("");
    }
    return(
        <form className="form" onSubmit={sumbutHandler}>
            <div className="form_input">
                <b><label>Course Goal</label></b>
                <br></br>
                <input type="text" onChange={AddGoalHandler} value = {enteredTitle} />
            </div>
            <div>
                <button type="submit" className="form_button">Add Goal</button>
            </div>
        </form>
    );
}
export default CourseForm;