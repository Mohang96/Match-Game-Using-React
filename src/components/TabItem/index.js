import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {displayText, tabId} = tabDetails
  const tabItemClassName = isActive
    ? 'normal-tab-item active-tab-item'
    : 'normal-tab-item'

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={tabItemClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
