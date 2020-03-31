import React, {Fragment}from 'react';
import {Row,Col} from 'react-bootstrap';

const Contact=()=>{

    return(
        <Fragment>
            <Row className="pl-4">
            <Col md={6}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31805.766552230172!2d7.031748735759534!3d4.81792574028833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cdaa866ad747%3A0xb69f8277028b7f3a!2sTrans%20Amadi%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1578264833250!5m2!1sen!2sng"title="Trans-amadi Map" width="600" height="450" frameborder="0" style={{border:0,}} style={{marginTop:20,}}allowfullscreen=""></iframe>
        </Col>
        <Col md={6}>
        <form className="contactform">
         <h4>Contact Us </h4>
         <label>Fullname</label>
         <input type="text" placeholder="Fullname"/>
         <label>PhoneNumber</label>
         <input type="number" placeholder="PhoneNumber"/><br/>
         <label>Email Address</label>
         <input type="email" placeholder="Email Address"/><br/>
         <br/>
         <textarea className='form-control' rows='5'placeholder="Message..."> </textarea>
         <button>Submit</button>
        </form>

        </Col>
        </Row>
        </Fragment>

    );
}




export default Contact;