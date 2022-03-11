import React, { Component } from "react";
import "./tabs.css";


export default class Tabs extends Component {
  state = {
    selected: 0
  };
  updateSelected(index) {
    this.setState({
      selected: index
    });
  }
  renderLabel = () =>
    React.Children.map(this.props.children, (kids, index) => (
      <button
        className="tab-label"
        onClick={() => this.updateSelected(index)}
        data-active={this.state.selected === index}
      >
        {kids.props.label}
      </button>
    ));
  renderContent = () =>
    React.Children.map(this.props.children, (kids, index) => (
      <div className="tab-content" data-active={this.state.selected === index}>
        {kids}
      </div>
    ));
  render() {
    return (
      <div className="tabs">
        {this.renderLabel()}
        {this.renderContent()}
      </div>
    );
  }
}
