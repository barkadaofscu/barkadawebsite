import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Page,
    PageTitle,
    PageTag,
    PageSpan,
    BoldSpan,
    BoldHeader,
    Container,
    Row,
    Column
} from "../../shared/primitives/Primitives";
import Card from "../../shared/card";
import barrio from "./assets/barrio1.JPG";
import fg from "./assets/fg.JPG";
import eotyd from "./assets/eotyd.JPG";
import kaa from "./assets/kaa.JPG";

const events = [
    {
        key: 1,
        name: "KAA",
        image: kaa,
        link: "/kaa",
        description:
        "KAA, Kuya Ate Ading, is the largest big/little mentorship program on campus. For years, the KAA program has brought lifetime friendships, endless love, and unforgetable memories."
    },
    {
        key: 2,
        image: fg,
        name: "Friendship Games",
        link: "/fg",
        description:
        "Friendship games features over 40 Pilipino American Student Organizations from college Campuses representing CA, NV, AZ that participate in a day of friendly but competitive picnic games, performances, and S.P.U.F - Spirit, Pride, Unity, and Friendship."
    },
    {
        key: 3,
        name: "Barrio Fiesta",
        image: barrio,
        link: "/barrio",
        description:
        "In Tagalog, Barrio Fiesta means 'neighborhood celebration.' It is an annual Barkada dinner in which we celebrate the Filipino culture by coming together as a campus community to eat traditional Filipino food and watch peers perform acts ranging from singing, dancing, spoken word, yo-yo-ing and more! Additionally, all proceeds from this event go to a charity that supports the Filipino Community."
    },
    {
        key: 4,
        name: "End of the Year Dinner",
        image: eotyd,
        link: "/eotyd",
        description:
        "End of the Year Dinner is a reflection of all the good times shared throughout the year, as well as a farewell to the graduating seniors."
    }
];
class Events extends Component {
    render() {
        return (
            <Page
                style={{
                    background: "white",
                    paddingTop: "48px",
                }}
            >
                <PageTitle color="black">Events</PageTitle>
                <Container>
                    <PageSpan color="black">
                        Barkada hosts KAA, the largest big/little program on campus, travels
                        to Southern California for Friendship games, hosts its own MassKara
                        festival with Barrio fiesta, sends off its seniors for the End of
                        the Year Dinner, and many more! Barkada also produces the largest
                        student run culture show on campus{" "}
                        <Link to="/pcn" style={{ color: "black" }}>
                            (Click here for details)
                        </Link>{" "}
                            which is open to everyone, including nonmembers! There's an event
                            for everyone to enjoy.
                        </PageSpan>
                    </Container>
                    <Container style={{marginTop: "48px", marginBottom: "48px"}}>
                        <PageTag color="black">Event Spotlight </PageTag>
                    </Container>
                    <Container style={{width: "100%", height: "50vh", display: "inline-block", margin: "0"}}>
                        <Card
                            name="Friendship Games"
                            image={events[1].image}
                            link="/fg"
                            description={events[1].description}
                        />
                        <Card
                            name="Barrio Fiesta"
                            image={events[2].image}
                            link="/barrio"
                            description={events[2].description}
                        />
                        <Card
                            name="End of the Year Dinner"
                            image={events[3].image}
                            link="/eotyd"
                            description={events[3].description}
                        />
                    </Container>
                    <Container style={{ marginTop: "12px", marginBottom: "48px" }}>
                        <PageSpan color="black">Click on cards for more information</PageSpan>
                    </Container>
                    <Container style={{ marginTop: "36px", marginBottom: "24px" }}>
                        <PageTag color="black">Other Events</PageTag>
                    </Container>
                    <Container>
                    <Row style={{width: "100%", margin: "0"}}>
                        <Column width="33%">
                            <BoldHeader color="black">Fall</BoldHeader>
                            <ul
                                style={{ fontSize: "18px", color: "black", lineHeight: "200%" }}
                            >
                                <PageSpan style={{color: "black"}}>
                                    <a
                                        style={{ textDecoration: "underline", color: "black" }}
                                        href="https://photos.app.goo.gl/aLQrNov41gUyf3bK9"
                                    >
                                        Welcome Back BBQ
                                    </a>
                                </PageSpan>
                                <PageSpan style={{color: "black"}}>
                                    Happy Lemon Fundraiser</PageSpan>
                                <PageSpan style={{color: "black"}}>
                                    <a
                                        style={{ textDecoration: "underline", color: "black" }}
                                        href="https://photos.app.goo.gl/dVdrq3uC5Y6xL6Kt5"
                                    >
                                        KAApportunity
                                    </a>
                                </PageSpan>
                                <PageSpan style={{color: "black"}}>
                                    <a
                                        style={{ textDecoration: "underline", color: "black" }}
                                        href="https://photos.app.goo.gl/5KqspzdY7SFnjAog9"
                                    >
                                        KAAlue Night
                                    </a>
                                </PageSpan>
                                <PageSpan style={{color: "black"}}>
                                    <a
                                        style={{ textDecoration: "underline", color: "black" }}
                                        href="https://photos.app.goo.gl/bQTm4jEKCJLLqdJc8"
                                    >
                                        KAA Reveal
                                    </a>
                                </PageSpan>
                                <PageSpan style={{color: "black"}}>
                                    <a
                                        style={{ textDecoration: "underline", color: "black" }}
                                        href="https://photos.app.goo.gl/ayUmxeEhUBogqjxB7"
                                    >
                                        Christmas Dinner
                                    </a>
                                </PageSpan>
                            </ul>
                        </Column>
                        <Column width="33%">
                            <BoldHeader color="black">Winter</BoldHeader>
                            <ul
                                style={{ fontSize: "18px", color: "black", lineHeight: "200%" }}
                            >
                                <PageSpan style={{color: "black"}}>LEAD Filipino Workshops</PageSpan>
                                <PageSpan style={{color: "black"}}>APSU Night Market</PageSpan>
                                <PageSpan style={{color: "black"}} >Barter-kada</PageSpan>
                                <PageSpan style={{color: "black"}} >JSA Food Run</PageSpan>
                            </ul>
                        </Column>
                        <Column width="33%">
                            <BoldHeader color="black">Spring</BoldHeader>
                            <ul
                                style={{ fontSize: "18px", color: "black", lineHeight: "200%" }}
                            >
                                <PageSpan>
                                    <a
                                        style={{ textDecoration: "underline", color: "black" }}
                                        href="https://photos.app.goo.gl/pxqEEBaxTApT5PhGA"
                                    >
                                        Global Village
                                    </a>
                                </PageSpan>
                                <PageSpan style={{color: "black"}}>SF Trip</PageSpan>
                                <PageSpan style={{color: "black"}}>KAAlympics</PageSpan>
                                <PageSpan style={{color: "black"}}>Pilipino Culture Night</PageSpan>
                                <PageSpan style={{color: "black"}}>3v3 Basketball</PageSpan>
                                <PageSpan style={{color: "black"}}>Get Wet Weekend</PageSpan>
                            </ul>
                        </Column>
                    </Row>
                    </Container>
                </Page>
        );
    }
}

export default Events;
