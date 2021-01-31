import React,{useRef,useState} from 'react'
import {Form,Card,Button,Alert,Container} from 'react-bootstrap'
import {useAuth} from "../../Contexts/AuthContext"
import {Link,useHistory} from "react-router-dom"
import {FaEnvelope,FaLock,FaUserAlt} from 'react-icons/fa'

const Signup = () => {
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmationRef=useRef()
    const {signUp}=useAuth()
    const [error, seterror] = useState('')
    const [loading, setloading] = useState(false)
    const history=useHistory();

     const SubmissionHandler=async(e)=>{
          e.preventDefault()
          if(passwordRef.current.value!==passwordConfirmationRef.current.value){
              return seterror("Passwords don't match")
          }
          try{
              seterror('')
              setloading(true)
             await signUp(emailRef.current.value,passwordRef.current.value);
             history.push("/login")
          }
          catch{
               seterror("Failure! Cannot Create an Account")
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
              <h2 className="text-center mb-4">Sign Up <FaUserAlt color="orange" style={{verticalAlign:"-5px"}}/></h2>
                  <h6 className="text-center mb-4">Create an account! It's free and will always be</h6>
                  {error && <Alert variant="danger">{error}</Alert>}
                  
                  <Form onSubmit={SubmissionHandler}>
                      <Form.Group id="email">
                      <FaEnvelope color="blue" style={{verticalAlign:"-2px"}}/><Form.Label>&nbsp;Email</Form.Label>
                          <Form.Control type="email" ref={emailRef} required></Form.Control>
                      </Form.Group>
                      
                      <Form.Group id="password">
                      <FaLock color="blue" style={{verticalAlign:"-3px"}}/><Form.Label>&nbsp;Password (at least 6 characters)</Form.Label>
                          <Form.Control type="password" ref={passwordRef} required></Form.Control>
                      </Form.Group>
                      
                      <Form.Group id="passwordConfirmation">
                          <FaLock color="blue" style={{verticalAlign:"-3px"}}/><Form.Label>&nbsp;Confirm your password</Form.Label>
                          <Form.Control type="password" ref={passwordConfirmationRef} required></Form.Control>
                      </Form.Group>
                      <Button disabled={loading} type="submit" className="w-100 text-center mt-2">Create your account</Button>
                  </Form>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/login">Log In</Link>
              </div>  
              </div>
              </Container>
        </>
    )
}

export default Signup;