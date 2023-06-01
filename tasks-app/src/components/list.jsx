import {useEffect} from 'react'
import {connect} from 'react-redux'

//utils
import {getList} from '../utils/list'
//components
import Loading from './loading/loading'
//images
import noPhoto from '../images/noPhoto.png'

//styles
import './styles/list.css'
const List = ({loading,list}) => {
  useEffect(() => {
    getList()
  }, [])
  
  return (
    <div className='list'>
      {loading ? 
        <Loading/>
        :
        list?.map((item,index) => 
        <div className='list_item' key={index}>
          <img src={noPhoto} alt='avatar img'/>
          <span>{item.name}</span>
        </div>)
      }
    </div>
  )
}
function mapStateToProps({list}){
  return {
    list: list.list,
    loading: list.loading
  }
}
export default connect(mapStateToProps)(List)