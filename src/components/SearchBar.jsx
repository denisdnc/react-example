import React from 'react'

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.filterByName = this.filterByName.bind(this)
    this.toggleOnlyInStock = this.toggleOnlyInStock.bind(this)
  }
  
  filterByName(e) {
    this.props.filterByName(e.currentTarget.value)
  }

  toggleOnlyInStock(e) {
    this.props.toggleOnlyInStock(e.currentTarget.checked);
  }

  render() {
    return (
      <div>
        <p>
          Search: <input type="text" onChange={this.filterByName} />
        </p>
        <p>
          <input
            name="isInStock"
            type="checkbox"
            checked={this.props.isInStock}
            onChange={this.toggleOnlyInStock}
          /> Only show products in stock
        </p>
      </div>
    )
  }
}