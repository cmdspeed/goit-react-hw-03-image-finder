import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <Modal />
      </>
    );
  }
}