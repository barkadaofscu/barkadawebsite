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
import board from "./board.gif";

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
        <Row style={{paddingTop: "48px"}}>
            <Column>
                <img
                    src={board}
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
                        Barkada Board 2020-2021
                    </PageTag>
                    <PageSpan>
                            <p><b>Co-Chairs:</b> Joshua Raymundo '22, Jeremy Reyes '22</p>
                            <p><b>MCC Representative:</b> Taylor Kealoha '23</p>
                            <p><b>Social Chair:</b> Vincent Joaquin '23</p>
                            <p><b>Friendship Games Coordinator (Fall Quarter):</b> Gabi Sicat '21</p>
                            <p><b>Public Relations Director:</b> Maddy Javier '23</p>
                            <p><b>Visual Branding Chair:</b> Caitlin Lopez '23</p>
                            <p><b>Finance Director:</b> Anne Paloma '23</p>
                            <p><b>Cultural Director:</b> Jonathan Tablante '22</p>
                            <p><b>Outreach Coordinator:</b> Trizha Aquino '21</p>
                            <p><b>Historian:</b> Nicole Cruz '23</p>
                            <p><b>PCN Directors:</b> Kiana Abrigana '21, Brenden Farrer '21</p>
                            <p><b>Freshman Representatives</b>: TBD</p>{" "}
                    </PageSpan>
                </Container>
            </Column>
        </Row>
    </div>
);

export default About;
