import React from 'react';

import Option from './Option';
import Browser from '../../modules/browser';

export default class Textbox extends Option {
  render() {
    return (
      <label>
        <span>{this.props.label}:</span>
        <input type="text" value={this.state.value} onChange={this.handleChangeEvent} />
      </label>
    );
  }
}
