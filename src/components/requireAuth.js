import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidmount() {
      console.log("Hello under HOC");
      console.log("value of auth = ", this.props.auth);
      this.shouldNavigateAway();
    }


    shouldNavigateAway() {
      console.log(this.props.auth);
      if (!this.props.auth) {
        console.log(this.props.auth);
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStatetoprops(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStatetoprops)(ComposedComponent);
};
