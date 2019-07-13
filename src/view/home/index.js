import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideLoadingAction } from '../../redux/action';
import './index.sass';
const Logo = './logo.svg';
class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.hideLoadingAction();
    }, 500);
  }

  render() {
    return (
      <div className="home">
        <img className="App-logo" src={Logo} alt="" />
        <h3 className="App-link">React.js</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    hideLoadingAction: params => {
      dispatch(hideLoadingAction(params));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
