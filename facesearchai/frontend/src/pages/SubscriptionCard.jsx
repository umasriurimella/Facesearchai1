import axios from 'axios'


function App() {

  const buyfunction = async () =>{

    let response = await axios.post('http://localhost:3000/payment')

    if(response && response.status === 200 ){

      window.location.href = response.data.url
      
      console.log(response.data)
    }
  }

  return (
    <>
    <p>If you want to access more features Buy Plan</p>
    <button onClick={buyfunction}>
      buy now
    </button>
    </>
  )
}

export default App
