import img2 from "../../Assets/logo.jpg";
import img1 from "../../Assets/bg party.jpg";
import { Link } from 'react-router-dom'
import { useState } from "react"
import "./userlogin.css"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";

const Login = () =>{
    const [data , updatelogin] = useState({contact:"" , password:""})
    const [msg , updatemsg] = useState()
    const naviagte = useNavigate()
    const handlelogin = async () =>{
        const formdata = new FormData()
        formdata.append("contact", data.contact)
        formdata.append("password", data.password)
        const response = await fetch("https://event-proposal-project.onrender.com/loginuser", {
          method: 'POST',
          body: formdata
        })
        const resp = await response.json()
        if(resp.status === "failure"){
            naviagte("/loginuser")
            {Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User not found',
              
              })}

        }else if(resp.status === "failure2"){
            updatemsg(<div className="msg2">Invalid Password</div>)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Password',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }else{
            naviagte("/")
            Swal.fire({
                title: 'User logged in successfully',
                icon: 'success',
                showClass: {
                   popup: 'animate_animated animate_fadeInDown'
                },
                hideClass: {
                   popup: 'animate_animated animate_fadeOutUp'
                }
             })
        }
    }

const handle = () =>{
    naviagte("/registeruser")
}

const handleSymbol =()=>{
 naviagte("/loginvendor")
}

    return(
   
         <div className="form2">
        <img src={img1} alt='party' className='party'/>
        <img src={img2} alt='symbol' onClick={handleSymbol} className='symbol'/> 
         <div className="formContainer">
        <Link to="/loginvendor" ><button className='vendor-btn'>Vendor</button></Link>
      <Link to="/loginuser"><button className='user-btn'>User</button> </Link>
     <div className='signup-text'>Sign in Your Account </div>
    <div className='input-boxes'>

         <input type="number" className='phone-input' placeholder="Enter your contact" value={data.contact} onChange={(e) => {updatelogin({ ...data, contact: e.target.value }) }}  />
       
         <input type="password" className='password-input' placeholder="Enter your password" value={data.password} onChange={(e) => { updatelogin({ ...data, password: e.target.value }) }} /> 
         </div>

        <p className='forgot-text'>Forgot Password.?</p>
        <div className="link-buttons">      
         <Link to="/registeruser" className='create-user' onClick={handle} >Create Account</Link>
        <span ><button  onClick={handlelogin}  className="signt">Login</button></span>
        <div className="msg"> {msg}
        </div>
        
        
         </div>
        </div>
         </div>
    )
}

export default Login
