import {useState,useEffect} from 'react'
import {connect} from 'react-redux'

//components
import Modal from './modal/modal'

//actions
import {setTask,setTasks} from '../actions/tasks'

//styles
import './styles/tasks.css'
const Tasks = ({task,tasks,setTask,setTasks}) => {
  const [visible, setVisible] = useState(false)
  const updateTasks = _ => {
    if(task)
    {
      setTasks(task)
      setVisible(false)
    }
  }
  useEffect(() => {
    return _ => setTask('')
  }, [])
  
  return (
    <div className='tasks'>
    <div className='tasks_button-container'>
      <button className='tasks_open-modal' onClick={_=>setVisible(true)}>New Task</button>
    </div>
    <div className='tasks_list'>
      {
        tasks.map((task,index) => 
          <div key={index} >{task}</div>
        )
      }
    </div>

      <Modal visible={visible}>
        <div className='modal_container'>
          <input className='modal_input' type="text" value={task} onChange={e => setTask(e.target.value)} placeholder='add your task in here'/>
          <button className='modal_add' onClick={updateTasks}>Add</button>
          <button className='modal_cancel' onClick={_=>setVisible(false)}>Cancel</button>
        </div>
      </Modal>
    </div>
  )
}
function mapStateToProps({tasks}){
  return {
    tasks: tasks.tasks,
    task: tasks.task
  }
}
function mapDispatchToProps(dispatch){
  return {
    setTask: value => dispatch(setTask(value)),
    setTasks: value => dispatch(setTasks(value))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tasks)