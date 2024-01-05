import React from 'react'
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components'
import { product2 } from '../data/products'

describe('ProductImage', () => {
  test('Debe mostrar el componente sin imagen', () => {
    const wrapper = renderer.create(
      <ProductImage className='custom-class' img='http://test.com' />
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  test('Debe mostrar el componente con imagen', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
