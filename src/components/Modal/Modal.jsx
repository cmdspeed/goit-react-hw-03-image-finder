import { Component } from 'react';
import PropTypes from 'prop-types';
import * as basicLightbox from 'basiclightbox';

export default class Modal extends Component {
  state = {};

  render() {
    return (
      <div class="overlay">
        <div class="modal">
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
