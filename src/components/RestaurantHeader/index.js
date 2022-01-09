import {BsFilterLeft} from 'react-icons/bs'

import './index.css'

const RestaurantHeader = props => {
  const {sortByOptions, sortByValue, updateSortByValue} = props
  const onChangeSortBy = event => {
    updateSortByValue(event.target.value)
  }

  return (
    <div className="restaurant-header">
      <div>
        <h1 className="restaurants-list-heading">Popular Restaurants</h1>
        <p className="description">
          Select Your favourite restaurant special dish and make your day
          happy...
        </p>
      </div>
      <div className="sorting-container">
        <BsFilterLeft className="sort-by-icon" />
        <p className="sort-by">Sort by</p>
        <select
          className="sort-by-select"
          value={sortByValue}
          onChange={onChangeSortBy}
        >
          {sortByOptions.map(eachOption => (
            <option
              key={eachOption.id}
              value={eachOption.value}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default RestaurantHeader
