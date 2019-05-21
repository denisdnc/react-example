import React from 'react'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      productsToShow: [],
      isFilterApplied: false
    }
    this.toggleOnlyInStock = this.toggleOnlyInStock.bind(this)
    this.filterByName = this.filterByName.bind(this)
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5ce317f13400001d8677389d')
      .then(res => res.json())
      .then(res => {

        const products = res.products

        this.setState({
          products: products,
          productsToShow: products
        })
      })
  }

  toggleOnlyInStock(currentValue) {
    this.setState({
      isFilterApplied: currentValue,
      productsToShow: this.state.products.filter((product) => product.stocked)
    })
  }

  filterByName(value) {
    if (value && value.length > 0) {
      const filtered = this.state.products
        .filter((product) => product.name.toLowerCase().includes(value.toLowerCase()))

      this.setState({
        isFilterApplied: true,
        productsToShow: filtered
      })
    } else {
      this.setState({
        isFilterApplied: false
      })
    }
  }

  render() {
    if (this.state.products.length <= 0) {
      return (
        <div>
          <SearchBar />
          <div>Loading...</div>
        </div>
      )
    }

    return (
      <div className="filterable-product-table">
        <SearchBar
          isFilterApplied={this.state.isFilterApplied}
          toggleOnlyInStock={this.toggleOnlyInStock}
          filterByName={this.filterByName}
        />
        <ProductTable
          isFilterApplied={this.state.isFilterApplied}
          productsToShow={this.state.productsToShow}
          products={this.state.products}
        />
      </div>
    )
  }
}