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
  render(){
    let imageListContent;
    const {images} = this.props
    if(images){
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridTile title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton>
                  <ZoomIn color="white" />
                </IconButton>
              }
              >
             <img src={img.largImageURL} alt=""/>
            </GridTile>
          ))}
        </GridList>
      )
    }else {
      imageListContent = null;
    }
    return(
      <Fragment>
          {imageListContent}
      </Fragment>)
  }
}
ImagesResults.propTypes = {
  images : PropTypes.array.isRequired
}

export default ImagesResults
