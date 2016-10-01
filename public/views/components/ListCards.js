import React, { Component } from 'react';
var that;
class Card extends Component {
	constructor(props, context) {
    super();
    this.state={
    	rank:[]
    }
	  that = this;
  }
  componentWillMount() {
  	this.state.rank = [];
  	for (var i = 1; i <= 5; i++) {
  		if(typeof this.props.place.rating != "undefined" && i <= Math.round(this.props.place.rating)){
				this.state.rank.push(<i className="fa fa-star active s1" data-score={i} />);
  		}
  		else{
				this.state.rank.push(<i className="fa fa-star s1" data-score={i} />);
  		}
  	}
  }
	render() {
		return (
			<li>
			  <div className="item">
			    <a href="#" className="image loaded">
			      <div className="inner">
			        <img src={this.props.place.photos ? this.props.place.photos[0].getUrl({'maxWidth': 200, 'maxHeight': 150}) : "/images/placeholder.png"} alt="image" className="mCS_img_loaded"/>
			      </div>
			    </a>
			    <div className="wrapper">
			      <a href="#">
			        <h3>{this.props.place.name}</h3>
			      </a>
			      <figure>{this.props.place.formatted_address}</figure>
			      <div className="price">{this.props.place.types[0].replace(/_/g," ")}</div>
		        <div className="rating" data-rating={this.props.place.rating}>
							<span className="stars">
				   			{this.state.rank}
				   		</span>
				   	</div>
			    </div>
			  </div>
			</li>
		);
	}
}
export default Card;