import { Link, navigate } from "@reach/router";
import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary caught an error! ", error, errorInfo);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hasError !== this.state.hasError) {
      setTimeout(() => navigate("/"), 5000);
    }
  }

  render() {
    if (this.state.hasError)
      return (
        <h1>
          There was an error thrown in your app <Link to="/">click here</Link>{" "}
          to go to home page
        </h1>
      );

    return this.props.children;
  }
}
