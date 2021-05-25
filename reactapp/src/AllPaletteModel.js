import React from "react";
import { Carousel, Container, Row, Col} from 'react-bootstrap';

function AllPaletteModel(props) {
 

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
      <div style={{backgroundColor: '#203126', marginBottom:'50px', marginTop: '25px'}}>
      <Carousel style={{width: '100%', paddingLeft: '20vw', justifyContent: 'center'}} >
      <Carousel.Item >
              <div style={{padding: '10px',height:'350px', width:'300px', backgroudColor: 'white', display: 'flex'}}>
              <div>
              <img
               style={{marginRight: '20px', height:'100%', maxWidth: '500px',maxHeight:'4000'}}
               key={1}
                src={props.inspirations[0]}
                alt="First slide"
              />
              </div>
              <div>
              <img
               style={{marginRight: '20px', height:'100%', maxWidth: '500px',maxHeight:'4000'}}
               key={1}
                src={props.inspirations[1]}
                alt="First slide"
              />
              </div>
              <div>
              <img
               style={{marginRight: '20px', height:'100%', maxWidth: '500px',maxHeight:'4000'}}
               key={1}
                src={props.inspirations[4]}
                alt="First slide"
              />
              </div>
              </div>
            </Carousel.Item>
            <Carousel.Item >
              <div style={{padding: '10px',height:'350px', backgroudColor: 'white', display: 'flex'}}>
              <div>
              <img
               style={{marginRight: '20px', height:'100%', maxWidth: '500px',maxHeight:'4000'}}
               key={1}
                src={props.inspirations[2]}
                alt="First slide"
              />
              </div>
              <div>
              <img
               style={{marginRight: '20px', height:'100%', maxWidth: '500px',maxHeight:'4000'}}
               key={1}
                src={props.inspirations[3]}
                alt="First slide"
              />
              </div>
              </div>
            </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
}

export default AllPaletteModel;

