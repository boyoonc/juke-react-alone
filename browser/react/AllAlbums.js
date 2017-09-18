import React, {Component} from 'react';

export default class AllAlbums extends Component{
	render(){
		return(
				<div>
				  <h3>Albums</h3>
				  <div className="row">
				  {
				  	this.props.albums.map(album => {
				     return(
				     	<div key={album.id} className="col-xs-4">
					      <a onClick = {()=>{this.props.selectAlbum(album.id)}} className="thumbnail" href="#">
					        <img src={album.imageUrl} />
					        <div className="caption">
					          <h5>
					            <span>{album.name}</span>
					          </h5>
					          <small>{album.songs.length}</small>
					        </div>
					      </a>
					    </div>
				     )
				  	})
				  }
				  </div>
				</div>
			)
	}
}


