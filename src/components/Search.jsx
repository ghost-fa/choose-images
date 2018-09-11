import React, { Component, Fragment } from 'react';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImagesResults from './ImagesResults'

class Search extends Component{
  state = {
    searchText : ' ',
    amount: 15,
    apiUrl : 'https://pixabay.com/api',
    apiKey : '10046199-3365a577732ff746787874537',
    images:[]
  };

  onTextChange = (e) =>{
    this.setState({[e.target.name]:e.target.value}, () =>{
      axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`).then(res => this.setState({images:res.date.hits})).catch(err => console.log(err))
    });
  }

onAmountChange = (e, index, value) => this.setState({amount:value})
  render(){
    console.log(this.state.images)
    return(
      <Fragment >
      <TextField
         name="searchText"
         value={this.state.searchText}
         onChange={this.onTextChange}
         floatingLabelText= 'Search from Iamages'
         fullWidth={true}
      />

       <SelectField
         name ="amount"
         floatingLabelText= "Amount"
         value = {this.state.amount}
         onChange = {this.onAmountChange}>
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
          </SelectField>
          {this.state.images.length > 0 ? (<ImagesResults  images={this.state.images}/>): null}

</Fragment>
    )
  }
}

export default Search
