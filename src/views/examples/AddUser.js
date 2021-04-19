
import React, { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Table,
  Pagination,
  PaginationLink,
  PaginationItem,
  CardFooter,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const AddUser= () => {
  
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
       <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Users Table</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Address</th>
                    <th scope="col">Location</th>
                    <th scope="col">Accept</th>
                    <th scope="col">Decline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Ernest kwami Aryee</th>
                    <td>abc@gmail.com</td>
                    <td>jkwnakjanakjnan</td>
                    <td> GS-1022-4848</td>
                    <td>Accra-Tema</td>
                    <td> <Button color="success" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">Accept</Button></td>
                    <td><Button color="danger" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">Delete</Button></td>
                  </tr>
                  
                  <tr>
                    <th scope="row">Ernest kwami Aryee</th>
                    <td>abc@gmail.com</td>
                    <td>jkwnakjanakjnan</td>
                    <td> GS-1022-4848</td>
                    <td>Accra-Tema</td>
                    <td> <Button color="success" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">Accept</Button></td>
                    <td><Button color="danger" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">Delete</Button></td>
                  </tr>

                  <tr>
                    <th scope="row">Ernest kwami Aryee</th>
                    <td>abc@gmail.com</td>
                    <td>jkwnakjanakjnan</td>
                    <td> GS-1022-4848</td>
                    <td>Accra-Tema</td>
                    <td> <Button color="success" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">Accept</Button></td>
                    <td><Button color="danger" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">Delete</Button></td>
                  </tr>

                  <tr>
                    <th scope="row">Ernest kwami Aryee</th>
                    <td>abc@gmail.com</td>
                    <td>jkwnakjanakjnan</td>
                    <td> GS-1022-4848</td>
                    <td>Accra-Tema</td>
                    <td> <Button color="success" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">Accept</Button></td>
                    <td><Button color="danger" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">Delete</Button></td>
                  </tr>
                  <tr>
                    <th scope="row">Ernest kwami Aryee</th>
                    <td>abc@gmail.com</td>
                    <td>jkwnakjanakjnan</td>
                    <td> GS-1022-4848</td>
                    <td>Accra-Tema</td>
                    <td> <Button color="success" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">Accept</Button></td>
                    <td><Button color="danger" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">Delete</Button></td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        className='bg-success'
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
           </Col>
          </Row>
         </Container>
    </>
  );
};

export default AddUser;
