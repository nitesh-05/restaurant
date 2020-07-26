//react-hook-form   https://www.youtube.com/watch?v=bU_eq8qyjic&feature=emb_rel_end  //
// https://react-hook-form.com/api/
import React from "react";
import { useForm } from "react-hook-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";

const Contact = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup row>
              <Label htmlFor="firstName" md={2}>
                First Name
              </Label>
              <Col md={4}>
                <Input
                  type="text"
                  name="firstName"
                  // id="firstName"
                  placeholder="First Name"
                  innerRef={register({
                    required: "Enter your first name.",
                  })}
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </Col>
              <Label htmlFor="lastName" md={2}>
                Last Name
              </Label>
              <Col md={4}>
                <Input
                  type="text"
                  name="lastName"
                  // id="lastName"
                  placeholder="Last Name"
                  innerRef={register({ required: true })}
                />
                {errors.lastName && <p>Enter a lastname</p>}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={4}>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abc@gmail.com"
                  innerRef={register}
                />
              </Col>
              <Label htmlFor="telNum" md={2}>
                Phone
              </Label>
              <Col md={4}>
                <Input
                  type="text"
                  name="telNum"
                  id="telNum"
                  placeholder="876543210"
                  innerRef={register({
                    pattern: {
                      value: /^\d+$/,
                      message: "Only number allowed",
                    },
                    minLength: { value: 10, message: "Invalid Phone Number" },
                    maxLength: { value: 13, message: "Invalid Number" },
                  })}
                />
                {errors.telNum && <p>{errors.telNum.message}</p>}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 5, offset: 2 }}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="agree"
                      innerRef={register}
                      id="checkbox"
                    />
                    <strong>May we contact you</strong>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={{ size: 4, offset: 1 }}>
                <Input
                  type="select"
                  name="contactType"
                  id="select"
                  innerRef={register}
                >
                  <option>Email</option>
                  <option>Phone</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="feedback" md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Input
                  type="textarea"
                  name="texmessage"
                  id="message"
                  rows="6"
                  innerRef={register}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send feedback
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
