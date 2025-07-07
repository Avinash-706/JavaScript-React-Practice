import { useState } from 'react'
import ProductItem from './components/ProductItem'
import './App.css'

const initialProducts = [
  { id: 1, name: 'Apple', price: 1.99, quantity: 2 },
  { id: 2, name: 'Banana', price: 0.79, quantity: 3 },
  { id: 3, name: 'Orange', price: 2.49, quantity: 4 }
]

function App() {
  const [products, setProducts] = useState(initialProducts)

  const handleIncrement = (productId) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, quantity: product.quantity + 1 }
        : product
    ))
  }

  const handleDecrement = (productId) => {
    setProducts(products.map(product => 
      product.id === productId && product.quantity > 0
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ))
  }

  const cartTotal = products.reduce((total, product) => 
    total + (product.price * product.quantity), 0
  )

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Shopping Cart 🛒</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {products.map(product => (
            <ProductItem
              key={product.id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              onIncrement={() => handleIncrement(product.id)}
              onDecrement={() => handleDecrement(product.id)}
            />
          ))}
          <div className="card mt-4">
            <div className="card-body">
              <h3 className="text-end mb-0">
                Cart Total: ${cartTotal.toFixed(2)}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
