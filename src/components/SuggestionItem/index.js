import './index.css'

const SuggestionItem = props => {
  const {SuggestionDetails, updatedSearchInput} = props
  const {suggestion} = SuggestionDetails

  const updateArrowButton = () => {
    updatedSearchInput(suggestion)
  }
  return (
    <li className="app-container">
      <p className="paragraph"> {suggestion}</p>
      <button className="button" type="button" onClick={updateArrowButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-image"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
