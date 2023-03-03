// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchText: ''}

  onChangeText = event => {
    console.log(event.target.value)
    this.setState({searchText: event.target.value})
  }

  onClickArrowText = suggestion => {
    this.setState({searchText: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchText} = this.state
    const ResultText = suggestionsList.filter(Item =>
      Item.suggestion.toLowerCase().includes(searchText.toLowerCase()),
    )
    return (
      <div className="container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="img-google"
          alt="google logo"
        />
        <div className="google-search-engine-container">
          <div className="img-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="img-search-icon"
              alt="search icon"
            />
            <input
              type="search"
              className="input-design"
              placeholder="Search Google"
              onChange={this.onChangeText}
              value={searchText}
            />
          </div>
          <ul className="ul-container-style">
            {ResultText.map(eachItem => (
              <SuggestionItem
                suggestionsList={eachItem}
                clickEvent={this.onClickArrowText}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
