import React, { Component } from "react";

import OtpInput from "react-otpinput-component";

export default class App extends Component {
  render() {
    return (
      <div>
        <OtpInput
          length={6}
          onChange={opt => console.log(opt)}
          separator={<span>-</span>}
          disabled={false}
        />
      </div>
    );
  }
}
