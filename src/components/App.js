import React from 'react'
import QuoteboxWrapper from '../containers/QuoteboxWrapper';
import './style.css'


class App extends React.Component {
  componentWillMount() {
    var script = document.createElement("script");

    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <QuoteboxWrapper/>
    )
  }
}

export default App