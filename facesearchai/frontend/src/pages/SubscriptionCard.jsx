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
    <h1>Premium Plan</h1>
    <h2>Rs.100.00/mo</h2>
    <p>Monthly subscription-Auto-renews every month</p>
        <ul>
       <li>Unlock 25 Daily Searches</li>
       <li>Increased Results Quantity and Quality</li>
       <li>Access to Links</li>
       <li>Advanced GPT Reasearch Capabilities</li>
       <li>Access to More Details of Images</li>
       </ul>


    <button onClick={buyfunction}className='btn'>
      buy now
    </button>
    </div>
  )
}

export default App
