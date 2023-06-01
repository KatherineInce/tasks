import {Link} from 'react-router-dom'
import './styles/main-page.css'
const MainPage = () => {
  return (
    <div className='main-page'>
        <Link to='/tasks'>Task</Link>
        <Link to='/list'>List</Link>
    </div>
  )
}

export default MainPage