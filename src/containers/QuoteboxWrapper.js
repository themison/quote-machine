import React from 'react'

import { connect } from 'react-redux'
import  Quotebox  from '../components/Quotebox'
import { changeColor, changeQoute } from '../actions/index'
import * as random from 'randomcolor'
import * as quotes from '../quotes'
import './style.css'

class QuoteboxWrapper extends React.Component {
  render() {
    return (
      <div className='quoteMain' style={{background: this.props.color}}>
        <Quotebox {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.color,
    quote: state.quote
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeColor: () => dispatch(changeColor(random({luminosity: "dark"}))),
    changeQoute: () => dispatch(changeQoute(quotes.default.quotes[Math.floor(Math.random() * quotes.default.quotes.length)]))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteboxWrapper);

