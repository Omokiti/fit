import React from 'react';
import { Row, Col,  } from 'react-bootstrap';
import './Home.css';
const Footer = () => {
  return (
    <div>

      <Row className="footer">
        <Col md={6}>
          <p className="ml-4 mt-3">Get in Touch</p>

          <p className="ml-4"> We  would love to hear from you</p>

          <form className="ml-4">
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email </label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
            </div>


            <div class="form-group">
              <textarea placeholder="Type your mesage "class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" id="btn">Send</button>
          </form>
        </Col>
        <Col md={6} classsName="pt-3">
          <p className="ml-3 mt-3">Subscribe to Our Newsletter to get updates</p>
          <p className="ml-3"> We  would love to hear from you</p>
          
          <form className="ml-3 mr-3">
           
            <div class="form-group ">
            <label for="exampleFormControlInput1">Email address</label>
            <div class="add">
              <input type="email" class="form-control addon" id="exampleFormControlInput1" placeholder="Email" />
              <button type="submit"id="subscribe">Subscribe</button>
              </div>
            </div>
             
         
           
          </form>

        </Col>

        <Col md={true}>
          <hr />
          <span>&copy; Fitz 2020 Copyright. All rights reserved.</span>
        </Col>




      </Row>

    </div>
  );
}

export default Footer;