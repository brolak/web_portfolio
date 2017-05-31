import React from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Divider from 'material-ui/Divider';
import {red500} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';

const style = {
	paper: {
  		height: 440,
  		width: '95%',
  		margin: '2.5%',
  		// textAlign: 'center',
  		display: 'inline-block',
	},
	list:{
		width: '50%',
		marginRight: '25%',
		marginLeft: '25%',
		border: '#E0E0E0',
		marginTop: '3%',
		marginBottom: '3%',
	},
	listItem: {
		textDecoration: 'none',
	}

};

const gmail = require('../../img/gmail.png');
const linkedIn = require('../../img/linkedin.png');
const gitHub = require('../../img/github.png');
const fcc = require('../../img/fcc.png');
const stackO = require('../../img/stackoverflow.png');

const Contact = () => (
	<Paper style={style.paper} zDepth={2} >
    		<List style={style.list}>
    			<Subheader inset={true}>Links</Subheader>
    			<Divider />
    			<ListItem 
    			primaryText={<a href="https://www.linkedin.com/in/mati-borlak-1b9247135/">LinkedIn</a>}
    			leftAvatar={<Avatar src={require('../../img/linkedin.png')} />} />
		      	<Divider />
		      	<ListItem 
		      		primaryText={<a href="https://github.com/brolak">Github</a>} 
		      		leftAvatar={<Avatar src={gitHub} 
		      		href='http://www.google.com' />} />
    			<Divider />
    			<ListItem 
    				primaryText={<a href="mailto:matiborlak@gmail.com">Email</a>} 
    				leftAvatar={<Avatar src={gmail} backgroundColor={red500} />} 
    				href='' />
    			<Divider />
    			<ListItem 
    			primaryText={<a href="https://www.freecodecamp.com/brolak">Free Code Camp</a>} 
    			leftAvatar={<Avatar src={fcc} 
    			href='' />} />
		      	<Divider />
		      	<ListItem 
    			primaryText={<a href="https://stackoverflow.com/users/7435189/brolak">Stack Overflow</a>} 
    			leftAvatar={<Avatar src={stackO} 
    			href='' />} />
		      	<Divider />
    		</List>
    		
	</Paper>
);

export {Contact};