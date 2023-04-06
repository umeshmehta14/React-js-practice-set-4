import React, {useState, useEffect } from 'react'

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//     "rate": 3.9,
//     "count": 120
//     }
//     },

const JH = () => {

    const [data, setData] = useState([]);
    const [products, setProducts] = useState(data);

    
    const getData = async() =>{
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const parseData = await response.json();
            setData(parseData);
            setProducts(parseData)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(()=>{
        getData();
    },[])

    const HandleRadiobtn = (rating)=>{
        const filterData = data.filter(({rating:{rate}})=> rate <= rating)
        setProducts(filterData);
    }
  return (
    <div>
        <form action="">
        <label htmlFor="" >2.0</label>
        <input type="radio" name="two"  onChange={() => HandleRadiobtn(2)} />
        <label htmlFor=""  >3.0</label>
        <input type="radio" name="two" onChange={() => HandleRadiobtn(3)} />
        <label htmlFor=""  >4.0</label>
        <input type="radio" name="two" onChange={() => HandleRadiobtn(4)} />
        </form>
      {
        products.map(({id,title,price,description,category,image,rating:{rate,count}})=>{
            return <>
            <div key={id}>
                <p>id:{id}</p>
                <h1>{title}</h1>
                <p>price:{price}</p>
                <p>description:{description}</p>
                <p>category:{category}</p>
                <p>rating:{rate}</p>
                <p>count:{count}</p>

            </div>
            </>
        })
      }
    </div>
  )
}

export default JH
