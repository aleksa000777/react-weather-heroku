var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../helpers/utils');
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

function Detail(props){
  // console.log(this.props);
  // console.log(props.data,'heree');
  var date = getDate(props.data.dt);
  var icon = props.data.weather[0].icon;
  var min = convertTemp(props.data.temp.min);
  var max = convertTemp(props.data.temp.max);
  var humidity = props.data.humidity;
  var description = props.data.weather[0].description;
  return (
    <div style={styles.dayContainer} onClick={props.handleClick}>
      <img style={styles.weather} src={'./app/images/' + icon + '.svg'} alt="Weather" />
      <h2 style={styles.subheader}>{date}</h2>
      <h2 style={styles.subheader}>{props.city}</h2>
      <p style={styles.subheader}>{description} </p>
      <p style={styles.subheader}>min temp: {min} degrees</p>
      <p style={styles.subheader}>max temp: {max} degrees</p>
      <p style={styles.subheader}>humidity: {humidity} </p>


    </div>
  )
}

module.exports = Detail;
