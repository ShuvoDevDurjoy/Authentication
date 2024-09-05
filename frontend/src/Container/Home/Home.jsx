import './Home.css'
import Navbar from '../../Component/Navbar/Navbar'
import Warning from '../../Component/Warning/Warning'

const Home = ({warningMessage,setWarningMessage}) => {

  return ( 
    <div className='home_container'>
      <Navbar />
      
      <Warning warningMessage={warningMessage} setWarningessage = {setWarningMessage} />
    </div>
  )
}

export default Home
