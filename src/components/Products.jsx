import React, { useEffect, useState } from 'react'
import star from '../images/Star 2.png'
const Products = () => {
    var [products,setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchData();
      }, []);
     
    
  return (
      <div className="container-fluid" id='products'>
        <div className="row">
        <div className='col-md-12 product-head'>New Products</div>

        </div>
        <div className="row">
            <div className='col-md-12' style={{display:"flex"}}>
        <img className='star' src={star} alt="" /><hr className='product-line' />
        </div>
        </div>
        <div className="row">
            <div className="col-md-4" style={{padding:"10px"}}>
                <ul className='product-ul'>
                    <li className='product-li'>accesories</li>
                    <li className='product-li'>50% off</li>
                    <li className='product-li'>Best Sellers</li>
                    <li className='product-li'>Apperal</li>
                </ul>
            </div>
            <div className="scrolldiv col-md-8 d-flex" style={{overflow:"scroll"}}>
            {
                    products.map((product,index)=>{
                        return <div key={index} style={{padding:"5px"}}>
                        <img className='images' src={product.image} alt=""/>
                        <h6>{product.title.toUpperCase()}</h6>
                        <p className='product-desc'>{product.description}</p>
                        <h6 className='product-price'>${product.price}</h6>
                        </div>
                    })
                }
                
            </div>

        </div>

    </div>
  )
}

export default Products