import React, {Component} from 'react';
import Footer from './Footer'
import Sidebar from './Sidebar'
import AllAlbums from './AllAlbums'
import SingleAlbum from './SingleAlbum'
import axios from 'axios'


export default class Main extends Component {

	constructor(){
		super();
		this.state= {
			albums:[],
			selectedAlbum : {}
		}
		this.selectAlbum = this.selectAlbum.bind(this)
	}

	componentDidMount(){
		axios.get('/api/albums')
			.then(response => response.data)
			.then(albums => this.setState({albums:albums}))
	}

	selectAlbum(albumId){
		// console.log("CLiCKIN")
		axios.get(`/api/albums/${albumId}`)
			.then(res => res.data)
			.then(album => this.setState({ selectedAlbum : album}))
	}

	render(){//render method
		return(//remember this!
			<div>	
				<Sidebar />
				<div className="col-xs-10">
					{this.state.selectedAlbum.songs ? 
					<SingleAlbum album={this.state.selectedAlbum} /> :
					<AllAlbums selectAlbum={this.selectAlbum} albums={this.state.albums}/>
				}
				</div>
				<Footer />
			</div>
			)
	}
}