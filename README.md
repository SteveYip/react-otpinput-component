# react-otpinput-component

an otpinput component for react

## Installation

To install the latest stable version:

```
npm install --save react-otpinput-component

yarn add react-otpinput-component
```

Basic usage:

```javascript
import React, { Component } from "react";
import OtpInput from "react-otpinput-component";

export default class App extends Component {
  render() {
    return (
      <div>
        <OtpInput
          onChange={otp => console.log(otp)}
          length={6}
          separator={<span>-</span>}
        />
      </div>
    );
  }
}
```

## Contributing

Feel free to open issues and pull requests!
