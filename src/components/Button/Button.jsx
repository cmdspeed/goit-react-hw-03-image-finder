import CSS from './Button.module.css';

export default function Button({ loadMorePhoto }) {
  return (
    <div className={CSS.ButtonWraper}>
      <button onClick={loadMorePhoto} className={CSS.Button}>
        Load more
      </button>
    </div>
  );
}
