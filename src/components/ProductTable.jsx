import React from 'react'

import ProductRow from './ProductRow'

const listProducts = (products) => {
  return products.map((product) => <ProductRow key={product.name} product={product} />)
}

export default class ProductTable extends React.Component {
  render() {
    // No filter
    if (!this.props.isFilterApplied) {
      return (
        <div>
          <ul>{listProducts(this.props.products)}</ul>
        </div>
      )
    }

    // Filer applied
    if (this.props.isFilterApplied && this.props.productsToShow.length > 0) {
      return (
        <div>
          <ul>{listProducts(this.props.productsToShow)}</ul>
        </div>
      )
    }

    // Filer applied - Product not found
    if (this.props.isFilterApplied && this.props.productsToShow.length <= 0) {
      return <div>Nenhum produto encontrado</div>
    }
  }
}