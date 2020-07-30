//react-hook-form   https://www.youtube.com/watch?v=bU_eq8qyjic&feature=emb_rel_end  //
// https://react-hook-form.com/api/
// https://www.npmjs.com/package/react-redux-form

import React from "react";
import { useForm } from "react-hook-form";
import { Control, LocalForm, Errors } from "react-redux-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Button,
  Label,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";

// custom validators
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const Contact = (props) => {
  const handleSubmit = (values) => {
    console.log("Current state is :" + JSON.stringify(values));
    alert("Current state is :" + JSON.stringify(values));
  };
  return (
    <div className="container-fluid">
      <div className="row row-content">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i className="fa fa-phone"></i>: +852 1234 5678
            <br />
            <i className="fa fa-fax"></i>: +852 8765 4321
            <br />
            <i className="fa fa-envelope"></i>:{" "}
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href="tel:+85212345678"
            >
              <i className="fa fa-phone"></i> Call
            </a>
            <a role="button" href="/" className="btn btn-info">
              <i className="fa fa-skype"></i> Skype
            </a>
            <a
              role="button"
              className="btn btn-success"
              href="mailto:confusion@food.net"
            >
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 mt-4 mb-4" style={{ textAlign: "center" }}>
          <h3>Send us your Feedback</h3>
        </div>
        <div className="col-md-10 col-12 m-auto">
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <Row className="form-group">
              <Label htmlFor="firstName" md={2}>
                First Name
              </Label>
              <Col md={4}>
                <Control.text
                  model=".firstName"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(10),
                  }}
                />
                <Errors
                  model=".firstName"
                  className="text-danger"
                  show="touched"
                  messages={{
                    required: "Required ",
                    minLength: "minimum 3 character.",
                    maxLength: "max 10 char allowed",
                  }}
                />
              </Col>
              <Label htmlFor="lastName" md={2}>
                Last Name
              </Label>
              <Col md={4}>
                <Control.text
                  model=".lastName"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  model=".lastName"
                  className="text-danger"
                  show="touched"
                  messages={{
                    required: "Required ",
                    minLength: "Minimum 3 character.",
                    maxLength: "Maximum 15 char allowed",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={4}>
                <Control.text
                  model=".email"
                  name="email"
                  id="email"
                  placeholder="abc@gmail.com"
                  className="form-control"
                  validators={{ required, validEmail }}
                />
                <Errors
                  model=".email"
                  className="text-danger"
                  show="touched"
                  messages={{
                    required: "Email is required. ",
                    validEmail: "Invalid email address",
                  }}
                />
              </Col>
              <Label htmlFor="telNum" md={2}>
                Phone
              </Label>
              <Col md={4}>
                <Control.text
                  model=".telNum"
                  name="telNum"
                  id="telNum"
                  placeholder="876543210"
                  className="form-control"
                  validators={{
                    required,
                    isNumber,
                  }}
                />
                <Errors
                  model=".telNum"
                  className="text-danger"
                  show="touched"
                  messages={{
                    required: "Required ",
                    isNumber: "Must be a number",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 5, offset: 2 }}>
                <div className="form-check">
                  <Label check>
                    <Control.checkbox
                      model=".agree"
                      type="checkbox"
                      name="agree"
                      id="checkbox"
                      className="form-check-input"
                    />
                    <strong>May we contact you</strong>
                  </Label>
                </div>
              </Col>
              <Col md={{ size: 4, offset: 1 }}>
                <Control.select
                  model=".contactType"
                  type="select"
                  name="contactType"
                  id="select"
                  className="form-control"
                >
                  <option>Email</option>
                  <option>Phone</option>
                </Control.select>
              </Col>
            </Row>

            <Row className="form-group">
              <Label for="feedback" md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Control.textarea
                  model=".message"
                  name="texmessage"
                  id="message"
                  rows="6"
                  className="form-control"
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send feedback
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </div>
      </div>
    </div>
  );
};

export default Contact;
