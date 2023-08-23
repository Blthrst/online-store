  import React, { useState} from 'react';
  import axios from 'axios';
  import '../styles/Editor.css'

  
  export function Editor() {
    const [product, setProduct] = useState({
      title: null,
      description: null,
      price: null,
      image: null
    });

    async function handleSubmit(event) {
        event.preventDefault();
        axios.post('/api/clothing/editor', product)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));     
    }
  
    function handleInput(event) {
      setProduct({ ...product, [event.target.name]: event.target.value });
    }


    return (
      <div className='editor'>
        <header>Create your own clothing!</header>
        <main>
          <div className='form-div'>
            <form method="post" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                onChange={handleInput}
                placeholder="Title"
              />
              <input
                type="text"
                name="price"
                onChange={handleInput}
                placeholder="Price"
              />
              <input
                type="text"
                name="image"
                onChange={handleInput}
                placeholder="Image URL"
              />
              <br />
              <textarea
                name="description"
                onChange={handleInput}
                placeholder="Description"
              />
              <img src={product.image}
              alt="Your product (provide URL)"/>
              <br/>
              <button type="submit">Create</button>
            </form>
          </div>
        </main>
      </div>
    );
  }