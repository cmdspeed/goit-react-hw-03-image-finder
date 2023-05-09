import { Component } from 'react';

import fetchQuery from '../API/API';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  state = {};

  render() {
    return (
      <ul class="gallery">
        <ImageGalleryItem />
      </ul>
    );
  }
}
