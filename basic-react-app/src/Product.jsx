import  "./Product.css"
function Product({title,price,features}){
    return(
        <div className="Product">
               <h4>{title}</h4>
               <h5>Price: {price}</h5>
               <h4>{features}</h4>
        </div>

    )
}

export default Product;