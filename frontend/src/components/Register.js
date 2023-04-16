import React, { useEffect } from 'react'
import './Register/Register.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function register() {
  
 
  
  return (
    <>
<MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg' />
          <MDBInput label='Your Email' id='form2' type='email' />
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Password' id='form3' type='password' />
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Repeat your' id='form4' type='password' />
        </div>

        <div className='mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
        </div>

        <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src="data:image/png;base64,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" fluid/>
        
        
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>
<img src='blob:https://web.whatsapp.com/0d6b2904-00b9-41b0-86c7-c6ce8fb1503d'/>
    </>
  )
}

export default register



{/* <div> */}
{/* <div className='register'>

<label className=''>Creat acount</label> */}

{/* <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      <Form.Group as={Col} className="mb-3" controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder="Password" />
      </Form.Group>
      </Row>
      <Row className="mb-3">
          <Col>
            <Form.Label >firstName</Form.Label>
            <Form.Control
            className="lebelregistar"
              placeholder="First name"
              onChange={(e) => {
                
              }}
            />
          </Col>
          <Col>
            <Form.Label >lastName</Form.Label>
            <Form.Control
            className="lebelregistar"
              placeholder="Last name"
              onChange={(e) => {
                
              }}
            />
          </Col>
        </Row>


      

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}

    
{/* </div> */}


    {/* </div> */}