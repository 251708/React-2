
import './App.css'
import Card from './component/Card';

function App() {
  let myObj = {
    username: "Sakshi Singh",
    age: 22
  }
  let newArr = [1,2,34,56]
 return (
    <>
      
  <h1 className ='bg-green-400 text-black p-4 rounded-xl' >TailWind Test</h1>
  <Card username = "Sakshi Singh" btnText = "click Me"/>
  <Card  username = "gudiya" btnText = "visit Me"/>
    </>
  )
}

export default App;
