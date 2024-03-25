import React from 'react'
import { Button, Col, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='w-full mt-5 px-3 py-3'>
        <Row>
          <Col sm={12} lg={3}>
            <div className='mb-5'>
              <h4>
              <i className="fa-solid fa-pepper-hot fa-bounce text-red-700"></i>
              <span className='ms-2 font-bold'>Black Pepper</span>
              </h4>
              <h6>all rights reserved </h6>
              <h6>❤️❤️</h6>
              <p>All rights reserved ©️ 2024</p>
            </div>
          </Col>
          <Col sm={12} lg={3}>
            <div className='flex flex-col mb-5'>
              <h4>Links</h4>
              <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
              <Link to={'/menu'} className='text-red-700' style={{textDecoration:'none'}}>Menu</Link>
              <Link to={'/favourites'} style={{textDecoration:'none',color:'white'}}>Favourites</Link>
            </div>
          </Col>
          <Col sm={12} lg={3}>
            <div className='flex flex-col mb-5'>
              

            </div>
          </Col>
          <Col sm={12} lg={3}>
            <div className='flex flex-col mb-5'>
              <h4>Contact Us</h4>
              <div>
                <Form className='flex'>
                  <Form.Group className="w-9/12 mb-3 me-2" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Your Email Id" />
                  </Form.Group>
                  <Button variant='outline-dark' className='h-1/2'>
                    <i className="fa-solid fa-arrow-right" style={{color:'red'}}></i>
                  </Button>
                </Form>
              </div>
              <div className='fs-5'>
                <Link className='me-3' to={'mailto:jessyjemz14@gmail.com'} style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-envelope"></i></Link>
                <Link className='me-3' to={'https://twitter.com'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-twitter"></i></Link>
                <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-linkedin"></i></Link>
                <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-instagram"></i></Link>
                <Link className='me-3' to={'https://github.com'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-github"></i></Link>
                <Link className='me-3' to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-facebook"></i></Link>
              </div>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default Footer