import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faUnlockAlt} from "@fortawesome/free-solid-svg-icons";
import {Col, Row, Form, Card, Button, FormCheck, Container, InputGroup} from '@themesberg/react-bootstrap';
import {observer} from "mobx-react-lite";
import MainStore from "../store/MainStore"
import {Link} from "react-router-dom";


const SingIn = observer(() => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <main>
            <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
                <Container>
                    <Row className="justify-content-center form-bg-image">
                        <Col xs={12} className="d-flex align-items-center justify-content-center">
                            <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                <div className="text-center text-md-center mb-4 mt-md-0">
                                    <h3 className="mb-0">Вхід до системи</h3>
                                </div>
                                <Form className="mt-4">
                                    <Form.Group id="email" className="mb-4">
                                        <Form.Label>Логін</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <FontAwesomeIcon icon={faEnvelope}/>
                                            </InputGroup.Text>
                                            <Form.Control autoFocus required value={login}
                                                          onChange={event => setLogin(event.target.value)} type="text"
                                                          placeholder="dimasPivas"/>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Group id="password" className="mb-4">
                                            <Form.Label>Пароль</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text>
                                                    <FontAwesomeIcon icon={faUnlockAlt}/>
                                                </InputGroup.Text>
                                                <Form.Control required type="password" value={password}
                                                              onChange={event => setPassword(event.target.value)}
                                                              placeholder="valikRogalik"/>
                                            </InputGroup>
                                        </Form.Group>
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <Form.Check type="checkbox">
                                                <FormCheck.Input id="defaultCheck5" className="me-2"/>
                                                <FormCheck.Label htmlFor="defaultCheck5"
                                                                 className="mb-0">Запамʼятати</FormCheck.Label>
                                            </Form.Check>
                                            <Card.Link className="small text-end">Забули пароль?</Card.Link>
                                        </div>
                                    </Form.Group>
                                    <Button as={Link} variant="primary" type="button" className="w-100"
                                            to="/home"
                                            onClick={async () => {
                                                await MainStore.login(login, password)
                                            }}>
                                        Увійти
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
})

export default SingIn
