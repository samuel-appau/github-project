import { ApiContext } from "../../context/ApiContext";
import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  Button,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

const User = () => {
  const [apiData, setApiData] = useContext(ApiContext);
  return (
    <>
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Github User</h3>
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
                    <th scope="col">Location</th>
                    <th scope="col">Followers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Ernest kwami Aryee</th>
                    <td>abc@gmail.com</td>
                    <td>Accra-Tema</td>
                    <td> 4848</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default User;
