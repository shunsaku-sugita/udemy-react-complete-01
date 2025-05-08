const TabButton = (props) => {
  const { children, onSelect } = props

  console.log('TAB BUTTON COMPONENT EXECUTED')
   
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  )
}

export default TabButton