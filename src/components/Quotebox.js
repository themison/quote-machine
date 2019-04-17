import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

/* styles */
import "./style.css";
import twitter from "../twitter.svg";
import vk from "../vk.svg";

class Quotebox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: false
    };
  }

  onClick = e => {
    console.log(123);
    this.props.changeColor();
    this.props.changeQoute();
  };

  showButton(prop) {
    this.setState({
      button: prop
    });
  }

  render() {
    return (
      <div id="quote-box">
        <div className="quoteWrapper">
          <TransitionGroup>
            <CSSTransition
              key={this.props.quote.quote}
              timeout={2000}
              classNames="fade"
              onExit={() => this.showButton(true)}
              onEntered={() => this.showButton(false)}
            >
              <div id="quote" style={{ color: this.props.color }}>
                <div id="text">
                  <h2>{this.props.quote.quote}</h2>
                </div>
                <div id="author">&mdash;&ensp;{this.props.quote.author}</div>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div id="quote-footer">
          <div id="button">
            <button id='new-quote'
              disabled={this.state.button}
              onClick={e => this.onClick(e)}
              style={{ background: this.props.color }}
            >
              New quote
            </button>
          </div>

            <a class="twitter-share-button" text={this.props.color} id='tweet-quote'
href={"https://twitter.com/intent/tweet?text="+this.props.quote.quote+' '+this.props.quote.author}>
  <img src={twitter} height="35px" alt="twitter" />
  
</a>
        </div>
      </div>
    );
  }
}

export default Quotebox;
