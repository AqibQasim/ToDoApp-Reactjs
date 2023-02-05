import React,{useState} from "react";
import CourseMain from "./Components/CourseMain";
const initial_goalItems = [
  {title : "Do All Exercises !" , id : 0},
  {title : "Complete till section 6 !" , id : 1},
  {title : "Shut the Fuck Up !" , id : 2},
  {title : "I just hate everything !" , id : 3},
  {title : "fuck you !" , id : 4},
  {title : "sleep ...." , id : 5}
];
function App(){
  const[goalItems,setenteredgoals] = useState(initial_goalItems);

  const updateHandler = (goals) => {
    setenteredgoals((prevGoals) => {
      return[goals , ...prevGoals];
    });
  }
  const deleteHandler = (goaltitle) =>{
    setenteredgoals((prevGoals) =>{
      const updatedgoals = prevGoals.filter(goal => goal.title !== goaltitle);
      return updatedgoals;
    });
  }

  return (
    <div>
      <CourseMain Items = {goalItems} onupdate = {updateHandler} ondelete = {deleteHandler}/>
    </div>
  );
}
export default App;