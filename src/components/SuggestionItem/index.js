// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, clickEvent} = props
  const {suggestion} = suggestionsList
  const clickText = () => {
    clickEvent(suggestion)
  }
  return (
    <li className="list-container">
      <p className="para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="img"
        alt="arrow"
        onClick={clickText}
      />
    </li>
  )
}
export default SuggestionItem
