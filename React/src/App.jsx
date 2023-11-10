import Home from "./pages/HomePage"
import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/signup"
import axios from 'axios'
import React from "react"


// class App extends React.Component{


//   state = { details: [], }
//   componentDidMount(){
//     let data;
//     axios.get('http://localhost:8000')
//     .then(res=> {
//       data=res.data;
//       this.setState({
//         details:data
//       });
//     })
//     .catch(err => { })
//   }
//   render(){
//     return(
//       <div>
//       <Routes>
//          <Route path="/" element={<Home />}></Route>
//          <Route path="/login" element={<LoginPage />}></Route>
//          <Route path="/signup" element={<SignupPage/>}></Route>
//       </Routes>
//         <header>data generated from django</header>
//         {this.state.details.map((output,id) => (
//           <div>
//             <h2>{output.username}</h2>
//             <h2>{output.email}</h2>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage/>}></Route>
    </Routes>
  )
}

export default App