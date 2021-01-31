
import React,{useRef,useState} from 'react'
import {Form,Card,Button,Alert,Container} from 'react-bootstrap'
import {useAuth} from "../../Contexts/AuthContext"
import {Link,useHistory} from "react-router-dom"
import { FaLock,FaEnvelope,FaHamburger } from 'react-icons/fa'

const Login = () => {
    const emailRef=useRef()
    const passwordRef=useRef()
    
    const {Login}=useAuth()
    const [error, seterror] = useState('')
    const [loading, setloading] = useState(false)
    const history=useHistory()

     const SubmissionHandler=async(e)=>{
          e.preventDefault()
          
          try{
              seterror('')
              setloading(true)
             await Login(emailRef.current.value,passwordRef.current.value);
             history.push("/")
          }
          catch{
               seterror("Failure! Cannot Sign")
          }
          setloading(false)
    }

    return (
        <>
         <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight:"100vh",color:"black"}}
      >
            <div className="w-100" style={{maxWidth:"400px"}}>
    
          <Card>
              <Card.Body>
                  
              <h2 className="text-center mb-4">Burger Builder <FaHamburger color="orange" style={{verticalAlign:"-4px"}}/></h2>
                  <h6 className="text-center mb-4">Enter your credentials to proceed</h6>
                  {error && <Alert variant="danger">{error}</Alert>}
                  
                  <Form onSubmit={SubmissionHandler}>
                         <Form.Group id="email">
                      <FaEnvelope color="blue" style={{verticalAlign:"-2px"}}/><Form.Label>&nbsp;Email</Form.Label>
                          <Form.Control type="email" ref={emailRef} required></Form.Control>
                      </Form.Group>
                      
                      <Form.Group id="password">
                      <FaLock color="blue" style={{verticalAlign:"-3px"}}/><Form.Label>&nbsp;Password </Form.Label>
                          <Form.Control type="password" ref={passwordRef} required></Form.Control>
                      </Form.Group>
                      <Button disabled={loading} type="submit" className="w-100 text-center mt-2">Log In</Button>
                  </Form>
                  <div className="w-100 text-center mt-2">
                      <Link to="/forgot-password">Forgot Password</Link>
                  </div>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
              </div> 
              </div>
              </Container> 
        </>
    )
}

export default Login;