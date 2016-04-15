var React = require('react');
var PropTypes = React.PropTypes;
var GetCityContainer = require('../containers/GetCityContainer');



var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/bg.svg')",
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
