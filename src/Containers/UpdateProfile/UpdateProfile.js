
import React,{useRef,useState} from 'react'
import {Form,Card,Button,Alert,Container} from 'react-bootstrap'
import {useAuth} from "../../Contexts/AuthContext"
import {Link,useHistory} from "react-router-dom"

const UpdateProfile = () => {
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmationRef=useRef()
    const {currentUser,updateEmail,updatePassword}=useAuth()
    const [error, seterror] = useState('')
    const [message, setmessage] = useState('')
    const [loading, setloading] = useState(false)
    const history=useHistory();

     const SubmissionHandler=(e)=>{
           e.preventDefault()
          if(passwordRef.current.value!==passwordConfirmationRef.current.value){
               return seterror("Passwords don't match")
           }
           //Now what we are doing here is that we are running all promises 
           //and in the end we are checking if all of our promises have 
           // been run or not
           const promises=[]
           seterror("")
           setloading(true);
           if(emailRef.current.value!==currentUser.email ){
               promises.push(updateEmail(emailRef.current.value));
           }
           if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value));
        }
        Promise.all(promises).then(()=>{
            setmessage("Profile Updated!")
            history.push("/")
        }).catch(()=>{
            seterror("Failure! cannot update account")
        }).finally(()=>{
            setloading(false);
        })
        
    }

    return (
        <>
          <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight:"100vh",color:"black"}}
      >
            <div className="w-100" style={{maxWidth:"400px"}}>
    
          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Update your profile</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  {message && <Alert variant="success">{message}</Alert>}
                  
                  <Form onSubmit={SubmissionHandler}>
                      <Form.Group id="email" className="highlight">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" ref={emailRef} defaultValue={currentUser.email} required></Form.Control>
                      </Form.Group>
                      
                      <Form.Group id="password">
                          <Form.Label>New Password</Form.Label>
                          <Form.Control type="password" ref={passwordRef} placeholder="Leave it blank to keep the same" ></Form.Control>
                      </Form.Group>
                      
                      <Form.Group id="passwordConfirmation">
                          <Form.Label>Confirm your new password</Form.Label>
                          <Form.Control type="password" ref={passwordConfirmationRef} placeholder="Leave it blank to keep the same" ></Form.Control>
                      </Form.Group>
                      <Button disabled={loading} type="submit" className="w-100 text-center mt-2">Update your profile</Button>
                  </Form>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              <Link to="/">Return to dashboard</Link>
              </div>  
              </div>
              </Container>
        </>
    )
}

export default UpdateProfile;