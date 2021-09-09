import React, { useState } from 'react';
import style from './Style.Module.css';

const Task = () => {

    // const [formInfo, setFormInfo] = useState({
    //     goal:"Get MERN black belt",
    //     mantra:"Debug Debug Debug"
    //     })

    const[newGoal, setNewGoal] = useState("")
    const[mantra, setNewMantra] = useState("")
    const [taskList, setTaskList] = useState([])



/* 
        Below arrray destructure syntax is equivalent to: 
        const newTodoStateArr = useState("");
        const newTodo = newTodoStateArr[0]
        const setNewTodo = newTodoStateArr[1] 
        
        */
        // const [newTodo, setNewTodo] = useState("")



    // const changeHandler = (e) => {
    //     // console.log("you are changing inputs -->", e.target.name, e.target.value)

    //     //UPDATE OBJECT with following 
    //     setFormInfo({
    //         ...formInfo, // use ...spread operator to create new copy 
    //         [e.target.name] : e.target.value  //set this key to be this value 
    //     })

    //     setNewGoal({
    //         ...taskList, 
    //         [e.target.name] : e.target.value 
    //     })
    //     setNewMantra({
    //         ...taskList, 
    //         [e.target.name] : e.target.value 
    //     })

    // }

    const addGoal = (e) => {
        e.preventDefault();
        // console.log("Added a new goal!");
        // console.log(formInfo);
        // console.log(newGoal);
        // console.log(mantra);
        
        if (newGoal.length === 0) {
            return;
        }
        if (mantra.length === 0) {
            return;
        }

        const todoItem = {
            text: newGoal,
            word: mantra,
            complete: false
        }

        setTaskList([...taskList, todoItem])
        setNewGoal("");
        setNewMantra("");

        // setFormInfo({
        //     goal:"",
        //     mantra:""
        //     })

    }


    const handleTodoDelete = (delIdx) => {
        const filterTodo = taskList.filter((task, idx) => {
            return idx !== delIdx;
        })

        setTaskList(filterTodo);
    }


    const handleComplete = (idx) => {
        const updatedTodos = taskList.filter((todo, i) => {
            if(idx ===i) {
                todo.complete = !todo.complete;

                // avoid mutating todo directly by doing this
                // const updatedTodo = {...todo, complete: ! todo.complete }
                //     return updatedTodo
            }
            return todo; 
        });

        setTaskList(updatedTodos)
    }


// ***********************************************************************

    // display below on Webpage 

    return (
        <div className="mb-3 container">
<hr />
            <form className="form-inline" onSubmit={addGoal}>

            <h3>Goal:</h3>
            <input onChange={(e)=> {setNewGoal(e.target.value)}} type="text"  name= "goal" id="goal" className="form-control" value={newGoal}/>

            <h3>Mantra:</h3>
            <input onChange={(e)=> {setNewMantra(e.target.value)}} type="text"  name= "mantra" id="mantra" className="form-control" value={mantra}/>

        <br />
        
            <button type="submit" className="btn-success">Set Goal</button>

            </form>

<hr />
            {/* Math.random()*16777215).toString(16) */}
            {/* rgb(166, 15, 212) */}


        {taskList.map( (task, idx) => {
            const todoClasses = ["bold"];
            
            if(task.complete) {
                todoClasses.push("line-through")
            }

            return <div key={idx} style= {{backgroundColor: "honeydew" , margin:5, borderRadius: 10, padding:5, fontWeight: "bold" }} >
                <br/>

            {/* <h3 className="goalName"> {task[idx].goal} </h3>
            <h3 className="mantra"> {task[idx].mantra} </h3> */}
            
            <input onChange={(e)=> {
                handleComplete(idx);
            }} checked={task.complete} type="checkbox" />
            

            <span className= {todoClasses.join(" ")} > 
             Goal {idx + 1}: {task.text}
            <br/>

            Mantra: {task.word}
            </span>

        <br/>
             <button onClick={(e) => {handleTodoDelete(idx);}} className= "btn-warning">Delete</button>
            
            </div>
        })}

        </div>

    )

}






export default Task