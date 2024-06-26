import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

export default class OtpInput extends Component {
  static propTypes = {
    length: PropTypes.number,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    separator: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.refsArray = [];
  }
  renderInput = length => {
    let element = [];
    for (let i = 0; i < length; i++) {
      element.push(
        <input
          type="text"
          maxLength={1}
          className={styles.Input}
          onChange={e => this.handleOnchange(e.target.value, i)}
          ref={ref => {
            this.setTextInputRef(ref, i);
          }}
          disabled={this.props.disabled}
        />
      );
    }
    return element;
  };
  setTextInputRef = (element, index) => {
    this.refsArray[index] = element;
  };

  handleOnchange = (value, index) => {
    if (index < this.props.length - 1 && value.length > 0) {
      for (let i = index; i < this.props.length; i++) {
        if (this.refsArray[i].value.length == 0) {
          this.refsArray[i].focus();
          break;
        }
      }
    } else if (value.length == 0) {
      if (index > 0) {
        this.refsArray[index - 1].focus();
      }
    }
    this.props.onChange(value);
  };

  generateSeparator = index => {
    if (index < this.props.length - 1) {
      return this.props.separator;
    }
  };

  render() {
    const { length } = this.props;

    return (
      <div className={styles.flexDiv}>
        {this.renderInput(length).map((item, index) => (
          <div key={index}>
            {item}
            {this.generateSeparator(index)}
          </div>
        ))}
      </div>
    );
  }
}

OtpInput.defaultProps = {
  length: 4,
  onChange: null,
  disabled: false,
  separator: <span></span>
};
