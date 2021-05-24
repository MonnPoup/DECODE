import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import { connect } from "react-redux";


import { Popover, Button, Checkbox} from 'antd';




function Filter(props) {
 
    const content = (
      <div>
            <div style={{paddingBottom:'8px'}}>
            <h6> Catégorie </h6> 
            <Checkbox value="A">Mobilier</Checkbox>
            <Checkbox value="B">Décoration</Checkbox>
            </div>
            <div style={{paddingBottom:'8px'}}>
            <h6> Sous-catégorie </h6> 
            <Checkbox value="A">canapé</Checkbox>
            <Checkbox value="B">lampe</Checkbox>
            <Checkbox value="B">vase</Checkbox>
            </div>
            <div>
            <h6> Couleur </h6> 
            <Checkbox value="A">rouge</Checkbox>
            <Checkbox value="B">vert</Checkbox>
            <Checkbox value="B">bleu</Checkbox>
            </div>
      </div>
    );
 
  
  return (
   
  
<Popover content={content}  placement='bottom'>
            <Button> Filtrer </Button>
            </Popover>
  
  );
}


function mapStateToProps(state){
return {token: state.token}
}

function mapDispatchToProps(dispatch){
  return {
    suppressionToken: function(){
        dispatch({type: 'deconnexion'})
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
