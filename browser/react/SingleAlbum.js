import React, {Component} from 'react'

export default class SingleAlbum extends Component {

	render(){
		// const album = this.props.album
		const {album} = this.props //same thing with ES6 object destructuring
		return(
			<div className="album">
			  <div>
			    <h3>{album.name}</h3>
			    <img src={album.imageUrl} className="img-thumbnail" />
			  </div>
			  <table className='table'>
			    <thead>
			      <tr>
			        <th></th>
			        <th>Name</th>
			        <th>Artists</th>
			        <th>Genre</th>
			      </tr>
			    </thead>

			    {
			    	album.songs.map(song => {
			    		return(
			    			<tbody>
						      <tr>
						        <td>
						          <button className="btn btn-default btn-xs">
						            <span className="glyphicon glyphicon-play"></span>
						          </button>
						        </td>
						        <td>{song.name}</td>
						        <td>{song.artists.map((artist) => artist.name).join(' ')}</td>
						        <td>{song.genre}</td>
						      </tr>
						    </tbody>
			    		)
			    	})
			    }

			    
			  </table>
			</div>
			)
	}
}