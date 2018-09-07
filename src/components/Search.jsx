import React, { Component, Fragment } from 'react';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios'

class Search extends Component{
  state = {
    searchText : ' ',
    amount: 15,
    apiUrl : 'https://pixabay.com/api/',
    apiKey : '10046199-3365a577732ff746787874537',
    images:[]
  }

  changeText = (e) =>{
    this.setState({[e.target.name]:e.target.value}, () =>{
      axios.get(`{this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.ssearchText}/&image_teyp=photo&per_page=${this.state.amount}&safesearch=true`).then(res => this.setState({images:res.date.hits})).catch(err => console.log(err))
    });
  }
  
  render(){
    console.log(this.state.image)
    return(
      <Fragment >
      <TextField
         name="searchText"
         value={this.state.searchText}
         onChange={this.changeText}
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

</Fragment>
    )
  }
}

export default Search
