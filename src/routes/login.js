import { Card, Button, Row, Col, Container, Form } from "react-bootstrap";

function Login(){
    return (
            <Container fluid={true} className="p-4">
                <Row>
                    <Col md={{span: 4, offset: 4}}>
                        <h1 className="text-center">Alfa Budget</h1>
                        <Card className="my-5">
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Iniciar Sesión
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    );
}

export default Login;