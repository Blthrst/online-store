import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../styles/productView.css'

export function ProductView() {

    const { id } = useParams()

    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(`/api/clothing/${id}`)
            .then(res => setProduct(res.data))
    }, [id])

    return (
        <div>
            {product &&
                <div className="product">
                    <div className="product-img">
                        <img className="view" src={product.image} alt="Product" />
                    </div>
                    <div className="product-info">
                        <p className='product-title'>{product.title}</p>
                        <p className='product-description'>{product.description}</p>
                        <p className='product-price'>{product.price}</p>
                        <div>
                            <button className='product-button'>Add to cart</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}