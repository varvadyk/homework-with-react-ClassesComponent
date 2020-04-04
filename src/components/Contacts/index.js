import React, { Component } from 'react';
import data from "../searchData/data";
import Contact from "../Contact/index";
import './style.css';
class Contracts extends Component{
	state = {
		contacts : data,
		filterContact: data,
		   search: "",

		
	};
	handleSearchChange=(event)=>{
		this.setState (
			{
				search:event.target.value
			},
			()=>{
				this.searchedContacts(this.state.search);
			}
			);
	};
	searchedContacts=(value)=>{
		const date=[...this.state.contacts];
	   const ChangeData=date.filter((item)=>{
		return(
		item.lastName.toLowerCase().includes(value.toLowerCase())||
		item.firstName.toLowerCase().includes(value.toLowerCase()) ||
		item.phone.includes(value)
		);
	
		});
		this.setState({
			filterContact:ChangeData, 
	});
}
	
	render() {

		let contacts = this.state.filterContact.map((item, index) => {
		  return <Contact key={item + index} {...item} />;
		});
		
return(
	<div className="contacts_list">
		<div className="contacts_input">
		< input type="text" placeholder="Search contact " onChange={this.handleSearchChange} value={this.state.search}  />
</div>
{contacts.length ? contacts : <h2>No  such contact...</h2>}
</div>
);
}
}


export default Contracts;
