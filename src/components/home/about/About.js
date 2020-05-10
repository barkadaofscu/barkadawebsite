import React from "react";
import {
    PageTitle,
    PageTag,
    PageSpan,
    Container,
    Column,
    Row
} from "../../shared/primitives/Primitives";
import pdf from "../../../assets/barkadaconstitution.pdf"
import kscu from "../../../assets/Barkada_KSCU Statement.pdf"
import about1 from "./about1.JPG";
import about2 from "./about2.JPG";

const About = () => (
    <div style={{width: "100%", height: "100%", background: "white", paddingBottom: "48px", overflow: "hidden"}}>
        <Container float="left" style={{marginTop: "48px"}}>
            <PageTitle float="left">
                About Us
            </PageTitle>
            <PageTag float="left">
                In Tagalog, Barkada means: "a group of friends" but to us, it means so
                much more.
            </PageTag>
        </Container>
        <Row>
            <Column>
                <Container float="left" style={{marginTop: "48px"}}>
                    <PageTag float="left">
                        Mission Statement
                    </PageTag>
                    <PageSpan >
                        Our mission is to promote the awareness of the Filipino culture
                        and community on the SCU campus through education, networking,
                        social justice, and social activities/events. We also strive to
                        uphold our heritage, traditions, and relationships.
                    </PageSpan>
                    <a href={pdf}><PageSpan>Read our 2020 Constitution</PageSpan></a>
                </Container>
            </Column>
            <Column>
                <img
                    src={about1}
                    style={{
                        width: "90%",
                        height: "auto",
                        marginTop: "48px",
                        verticalAlign: "bottom",
                        borderRadius: "12px"
                    }}
                />
            </Column>
        </Row>
        <Row style={{paddingTop: "48px"}}>
            <Column>
                <img
                    src={about2}
                    style={{
                        width: "90%",
                        height: "auto",
                        verticalAlign: "bottom",
                        borderRadius: "12px"
                    }}
                />
            </Column>
            <Column>
                <Container float="right" style={{ marginTop: "5%" }}>
                    <PageTag float="right">
                        Brief History
                    </PageTag>
                    <PageSpan>
                        Barkada was established in 1983 by Gem Yabut, Butch Yabut, and
                        Ronald Martinez. We are one of the six founding organizations
                        within the Santa Clara University Multicultural Center. Today, we
                        are one of the largest student-run cultural clubs on campus.{" "}
                    </PageSpan>
                    <a href={kscu}><PageSpan>Barkada of SCU & KSCU 2020 Statement</PageSpan></a>
                </Container>
            </Column>
        </Row>
    </div>
);

export default About;
