import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import { Card, Container, CardGroup} from "react-bootstrap";
import CarouselBox from "../Component/CarouselBox";


export default class Home extends Component {
    render(){
        return(
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Our Team</h2>
                    <CardGroup className=" m-4">
                        <Card border="dark">
                            <Card.Img
                              variant="top"
                              src="https://www.15five.com/blog/wp-content/uploads/2021/03/team-success.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Team Design Interior</Card.Title>
                                <Card.Text>
                                Только системный процесс, построенный от диагностики до оценки результатов, 
                                позволяет HRу стать бизнес-партнером, а не исполнителем заявок на обучение.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card border="dark">
                            <Card.Img
                              variant="top"
                              src="https://c8.alamy.com/comp/2B1YN8J/teamwork-and-business-human-resources-group-of-business-people-working-together-as-successful-team-building-strength-and-unity-for-organization-par-2B1YN8J.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Team Design Grafic</Card.Title>
                                <Card.Text>
                                Только системный процесс, построенный от диагностики до оценки результатов, 
                                позволяет HRу стать бизнес-партнером, а не исполнителем заявок на обучение.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card border="dark">
                            <Card.Img
                              variant="top"
                              src="https://myrhline.com/wp-content/uploads/2019/12/On-vous-dit-tout-sur-la-triste-ve%CC%81rite%CC%81-du-team-building-scaled.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Team Design Patterns</Card.Title>
                                <Card.Text>
                                Только системный процесс, построенный от диагностики до оценки результатов, 
                                позволяет HRу стать бизнес-партнером, а не исполнителем заявок на обучение.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </>
        )
    }
     
}