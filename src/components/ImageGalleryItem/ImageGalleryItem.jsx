import CSS from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ url, tags, modalUrl, getTags }) {
  return (
    <li className={CSS.galleryItem}>
      <img
        src={url}
        alt={tags}
        className={CSS.img}
        onClick={() => {
          modalUrl(url);
          getTags(tags);
        }}
      />
    </li>
  );
}
