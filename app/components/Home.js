var React = require('react');
var PropTypes = React.PropTypes;
var GetCityContainer = require('../containers/GetCityContainer');



var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('https://s3.amazonaws.com/weather-react/bg.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
}

function Home (props) {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Enter a City and State</h1>
        <GetCityContainer />
      </div>
  )
}

module.exports = Home;
