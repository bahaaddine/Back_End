import React from 'react'
import {Button} from 'react-bootstrap'
import{useDispatch,useSelector} from 'react-redux'
import {deleteHandler,doneHandler} from '../Redux/action'
function Task() {

   
    const task = useSelector((state) => state.task)
    const dispatch = useDispatch()
    const removeTask = (ID) => {
        dispatch(deleteHandler(ID))
    }
    
    const checkTask = (DATA) => {
        task.map((task, i) =>{
            if(task.id === DATA.id){
                task.isDone = !task.isDone
            }
        })
        dispatch(doneHandler(task))
    } 
    
    return (
        <div className="task-container">
            {task.map((task,key) =>  
                    <div className="task-list" key={key}>
                        {  task.isDone ?  <span className="task checked"><i className="fas fa-tasks"></i>   {task.name}</span> :  <span className="task"><i className="fas fa-tasks"></i>   {task.name}</span> }
                      {  task.isDone ?  <Button variant="primary" onClick={()=>checkTask(task)}><i className="fas fa-check"></i></Button> :  <Button variant="outline-primary" onClick={()=>checkTask(task)}><i className="fas fa-check"></i></Button>}
                        <Button variant="outline-danger" onClick={()=>removeTask(task.id)}><i className="fas fa-trash-alt"></i></Button>
                    </div>
            )}
        </div>
    )
}

export default Task
