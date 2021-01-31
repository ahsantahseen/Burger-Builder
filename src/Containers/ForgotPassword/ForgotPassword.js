
import React,{useRef,useState} from 'react'
import {Form,Card,Button,Alert,Container} from 'react-bootstrap'
import {useAuth} from "../../Contexts/AuthContext"
import {Link} from "react-router-dom"

const ForgotPassword = () => {
    const emailRef=useRef()
    
    const {passwordreset}=useAuth()
    const [error, seterror] = useState('')
    const [message, setmessage] = useState('')
    const [loading, setloading] = useState(false)
    

     const SubmissionHandler=async(e)=>{
          e.preventDefault()
          
          try{
              seterror('')
              setloading(true)
             await passwordreset(emailRef.current.value);
             setmessage("Success! a link has been sent to your inbox")

             
          }
          catch{
               seterror("Failure! Cannot reset your password")
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
                  <h2 className="text-center mb-4">Password Reset</h2>
                  {message && <Alert variant="success">{message}</Alert>}
                  {error && <Alert variant="danger">{error}</Alert>}
                  
                  <Form onSubmit={SubmissionHandler}>
                      <Form.Group id="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" ref={emailRef} required></Form.Control>
                      </Form.Group>
                      <Button disabled={loading} type="submit" className="w-100 text-center mt-2">Reset Password</Button>
                  </Form>
                  <div className="w-100 text-center mt-2">
              <Link to="/login">Log In</Link>
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

export default ForgotPassword;