import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'

class Search extends Component{
  state = {
    searchText : ' ',
    amount: 15,
    apiUrl : 'https://pixabay.com/api',
    apiKey : '10046199-3365a577732ff746787874537',
    images:[]
  }
  render(){
    return(
      <TextField
         name="searchText"
         value={this.state.searchText}
         onChange={this.onTextChange}
         floatingLabelText= 'Search from Iamages'
         fullWidth={true}

      />
    )
  }
}

export default Search
