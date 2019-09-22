import React from "react";
import {
    Page,
    PageTitle,
    PageTag,
    Row,
    Column,
    FixedColumn,
    PageSpan,
    Container
} from "../../shared/primitives/Primitives";
import blanket from "./blankets.JPG";
import gk from "./gk.png";
import lead from "./lead.jpg";
import linus from "./linus.jpg";

const Outreach = () => {
    return (
        <Page
            style={{
                paddingTop: "48px",
                paddingBottom: "48px",
                background: "white"
            }}
        >
            <Container float="right" style={{marginTop: "48px"}}>
                <PageTitle float="right">
                    Outreach
                </PageTitle>
                <PageTag float="right">
                    Barkada is proud to work with local communities in the bay area.
                </PageTag>
                <PageSpan>
                    Contact us at scubarkada@gmail.com 
                </PageSpan>
            </Container>
            <Container style={{width: "100%", marginLeft: "0%", marginRight: "0%", background: "white"}}>
                <Row style={{width: "100%", marginLeft: "0%", marginRight: "0%"}}>
                    <FixedColumn width="33%">
                        <div
                            style={{
                                width: "150px",
                                height: "150px",
                                backgroundColor: "white",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "24px",
                                marginBottom: "24px"
                            }}
                        >
                            <img
                                src={gk}
                                style={{ width: "100%", height: "auto", marginTop: "25px" }}
                            />
                        </div>
                    </FixedColumn>
                    <FixedColumn width="33%">
                        <div
                            style={{
                                width: "150px",
                                height: "150px",
                                backgroundColor: "white",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "24px",
                                marginBottom: "24px"
                            }}
                        >
                            <img src={lead} style={{ width: "100%", height: "auto" }} />
                        </div>
                    </FixedColumn>
                    <FixedColumn width="33%">
                        <div
                            style={{
                                width: "150px",
                                height: "150px",
                                backgroundColor: "white",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "24px",
                                marginBottom: "24px"
                            }}
                        >
                            <img
                                src={linus}
                                style={{ width: "100%", height: "auto", marginTop: "20px" }}
                            />
                        </div>
                    </FixedColumn>
                </Row>
            </Container>
            <img
                src={blanket}
                style={{
                    width: "80%",
                    height: "auto",
                    borderRadius: "16px",
                    marginLeft: "10%",
                    marginRight: "10%",
                    verticalAlign: "bottom"
                }}
            />
        </Page>
    );
};

export default Outreach;
