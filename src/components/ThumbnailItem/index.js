import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, clickThumbnailItem} = props
  const {imageUrl, thumbnailUrl} = thumbnailDetails

  const onClickThumbnailItem = () => {
    clickThumbnailItem(imageUrl)
  }

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-item-btn"
        onClick={onClickThumbnailItem}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
