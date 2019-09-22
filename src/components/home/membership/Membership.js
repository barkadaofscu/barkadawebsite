import React from "react";
import { Link } from "react-router-dom";
import {
    Page,
    PageTitle,
    PageSpan,
    PageTag,
    Row,
    Container,
    FixedColumn
} from "../../shared/primitives/Primitives";
import kaa from "./kaa.JPG"

const Membership = () => {
    return (
        <Page
            style={{
                paddingTop: "48px",
                paddingBottom: "48px",
                background: "#FFFFFF"
            }}
        >
            <Container>
                <PageTitle >Membership</PageTitle>
            </Container>
            <Container>
                <PageSpan  style={{ padding: 0, marginBottom: 0 }}>
                    Barkada hosts the Kuya Ate Ading program, a mentorship program that
                    has brought lifetime friendships, endless love, and unforgettable
                    memories.{" "}
                    <Link to="/kaa" style={{color: "black"}}>
                        (Click here more details on KAA)
                    </Link>{" "}
                        A one-year membership with comes with admission to this amazing
                        program as well as discounts to our events and an exclusive shirt.
                    </PageSpan>
                </Container>
                <img
                    src={kaa}
                    style={{
                        width: "80%",
                        height: "auto",
                        borderRadius: "16px",
                        marginLeft: "10%",
                        marginRight: "10%",
                        paddingTop: "48px",
                        paddingBottom: "48px",
                        verticalAlign: "bottom"
                    }}
                />
            </Page>
    );
};

export default Membership;
