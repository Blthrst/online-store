import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/Board.css'

export function Board() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    axios.get('/api/clothing')
      .then((res) => { setProducts(res.data) })
  }, [products])

  return (
    <main>
      {products && products.map((elem) => {
        return (
          <Link to={`product/${elem.id}`}>
            <div key={elem.id} className='item'>
              <div className='img-div'>
                <img src={elem.image} alt="Black T-shirt" />
              </div>
              <p className='title'>{elem.title}</p>
              <p className='description'>{elem.description}</p>
              <p className='price'>{elem.price}</p>
              <button className='add-button'>Add to cart</button>
            </div>
          </Link>
        );
      })}
    </main>
  );
}