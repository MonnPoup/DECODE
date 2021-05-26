import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";

import { Checkbox} from 'antd';

import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';




function Filter(props) {
 const [palette, setPalette] = useState(props.paletteFromStore)

 const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div style={{margin:"160px"}}>
      <Button id="Popover1" type="button" className='ButtonHome'> 
        Filter
      </Button>
      <Popover placement="bottom"trigger="hover" isOpen={popoverOpen} target="Popover1" toggle={toggle} style={{backgroundColor:'#FBFCF6'}}>
        <PopoverHeader style={{backgroundColor:'#203126', margin:'0px', color:'white'}}>  Catégorie </PopoverHeader>
        <PopoverBody>
        <Form>
      <FormGroup check inline>
        <Label check>
          <Input type="checkbox" /> Mobilier
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
           <Input type="checkbox" /> Décoration
        </Label>
      </FormGroup>
    </Form>
        </PopoverBody>
      </Popover>
    </div>
  );
}


function mapStateToProps(state){
return {token: state.token, paletteFromStore: state.palette}
}

function mapDispatchToProps(dispatch) {
  return {
    suppressionToken: function () {
      dispatch({ type: "deconnexion" });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
