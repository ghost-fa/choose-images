import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
class ImagesResults extends Component{
  state = {
    open:false,
    currentImg:''
  }
  handleOpen = img =>{
    this.setState({open:true, currentImg:img})
  }

  handleClose = () =>{
    this.setState({open:false})
  }
  render(){
    let imageListContent;
    const {images} = this.props
    if(images){
      imageListContent = (
        <GridList cols={4} >
          {images.map(img => (
            <GridTile title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton onClick={ () =>this.handleOpen(img.previewURL)}>
                  <ZoomIn color="white" />
                </IconButton>
              }
              >
             <img src={img.previewURL} alt=""/>
            </GridTile>
          ))}
        </GridList>
      )
    }else {
      imageListContent = null;
    }
    const actions = [
      <FlatButton label='Close' primary={true} onClick={this.handleClose} />
    ]
    return(
      <Fragment>
          {imageListContent}
          <Dialog
          actions={actions}
          model={false}
        open={this.state.open}
      onRequestClose={this.handleClose}>
        <img src={this.state.currentImg} alt="" style={{width:'100%'}}/>
      </Dialog>
      </Fragment>)
  }
}
ImagesResults.propTypes = {
  images : PropTypes.array.isRequired
}

export default ImagesResults
