import React, {Component} from 'react'

export default class SingleAlbum extends Component {

	render(){
		return(
			<div className="album">
			  <div>
			    <h3>{this.props.album.name}</h3>
			    <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=IshouldBEanIMAGE&w=300&h=300" className="img-thumbnail" />
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
			    	this.props.album.songs.map(song => {
			    		return(
			    			<tbody>
						      <tr>
						        <td>
						          <button className="btn btn-default btn-xs">
						            <span className="glyphicon glyphicon-play"></span>
						          </button>
						        </td>
						        <td>{song.name}</td>
						        <td>{song.artists.join(' ')}</td>
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