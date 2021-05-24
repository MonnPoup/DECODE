import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Popover, Button } from 'antd';
import { Link } from "react-router-dom";

function AllPaletteModel(props) {
  var paletteImg = props.inspirations;
  console.log("palette image", paletteImg);

  var tabPaletteImg = paletteImg.map((img, j) => {
    const content = (
        <img style={{minWidth:'400px', minHeight:'400px', maxWidth:'700px', maxHeight: '700px'}} src={img} alt='inspo'/>
        )
    return (
        <Popover content={content} placement='right' >
      <Col
        md={2}
        lg={2}
        style={{
          backgroundColor: "#fcfbf6",
          margin: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "35vh",
          }}
        >
          <img
            key={j}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            classname="ImgAllPalettes"
            src={img}
          ></img>
        </div>
      </Col>
      </Popover>
    );
  });

  var paletteColor = props.colors;
  var tabPaletteColor = paletteColor.map((color, i) => {
    return (
      <div
        key={i}
        className="paletteAllPalettes"
        style={{ backgroundColor: `${color}` }}
      ></div>
    );
  });

  return (
    <div>
      <div className="containerAllPalettes">
        <h3 className="h3Container"> {props.name}</h3>
        <div className="traitContainerAllPalettes">
          <div className="paletteContainer">{tabPaletteColor}</div>
        </div>
      </div>
      <div className="scrollerAllPalettes">
        <Container
          lg={12}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3px",
            backgroundColor: "#fcfbf6",
            borderRadius: "10px"
          }}
        >
          <Row
            lg={12}
            md={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {tabPaletteImg}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AllPaletteModel;
