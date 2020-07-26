import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // Jumbotron,
  // Container,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  // const onSubmit = (e) => {
  //   toggleModal();
  //   alert("Username : " + JSON.stringify(e));
  // };
  const onSubmit = (data) => {
    toggleModal();
    console.log(data);
    alert(JSON.stringify(data));
  };

  const { register, handleSubmit } = useForm();
  return (
    <>
      <Navbar color="faded" light expand="md">
        <NavbarBrand className="mr-auto">
          <Link to="/" className="nav-link">
            Restaurant
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto">
            <Button color="primary" outline onClick={toggleModal}>
              Login
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
      {/* <Jumbotron fluid>
        <Container fluid style={{ textAlign: "center" }}>
          <h1 className="display-3">Restaurant</h1>
          <p className="lead">
            If you don’t lick your fingers, enjoy only half
          </p>
        </Container>
      </Jumbotron> */}

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>User Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter user name.."
                innerRef={register}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password.."
                innerRef={register}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="remember" innerRef={register} />{" "}
                Remember me
              </Label>
            </FormGroup>

            <Button type="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default NavBar;
