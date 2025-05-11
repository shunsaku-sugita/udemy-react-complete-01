const TabButton = (props) => {
  const { children, onSelect, isSelected } = props

  console.log('TAB BUTTON COMPONENT EXECUTED')
   
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
  )
}

export default TabButton