var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
  render: function(){
    // console.log(this.props.location.state.weather);
    // console.log(this.props.routeParams.city);
    return (
      <div>
        <Detail data={this.props.location.state.weather} city = {this.props.routeParams.city} />
      </div>
    )
  }
})

module.exports = DetailContainer;
