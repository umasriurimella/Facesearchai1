import axios from 'axios'
import './subscription.css'


function App() {

  const buyfunction = async () =>{

    let response = await axios.post('http://localhost:3000/payment')

    if(response && response.status === 200 ){

      window.location.href = response.data.url
      
      console.log(response.data)
    }
  }

  return (
    <div className='subscription'>
    <h1>If you want to access more features Buy Plan</h1><br/><br/>
    <button onClick={buyfunction}className='btn'>
      buy now
    </button>
    </div>
  )
}

export default App
