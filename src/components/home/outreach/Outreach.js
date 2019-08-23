import React from "react";
import {
  Page,
  PageTitle,
  PageTag,
  PageSpan,
  Container
} from "../../shared/primitives/Primitives";

const Outreach = () => {
  return (
    <Page style={{ paddingTop: "4vh", paddingBottom: "4vh" }}>
      <Container>
        <PageTitle float="right">Outreach</PageTitle>
      </Container>
      <Container float="right">
        <PageTag>
          Barkada is proud to work with local communities in the bay area
        </PageTag>
        <PageSpan>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          accumsan sed arcu ut vehicula. Integer laoreet metus sit amet augue
          placerat, quis imperdiet risus mollis. Fusce et sollicitudin metus, ut
          semper eros. In sed purus lobortis, iaculis tellus pharetra, malesuada
          sapien. Nam pharetra tellus suscipit scelerisque dapibus.
        </PageSpan>
      </Container>
    </Page>
  );
};

export default Outreach;
