import Product from "./Product";
function ProductGroup(){
    let options={a:"fast", b:"Tech", c:"Book", d:"Nice pen"};
    return(
       <>
       <Product title="Laptop" price="35000" features={options.a}/>
       <Product title="Phone" price="15000" desc="Nokia" features={options.b}/>
       <Product title="Notepad" price="50" desc="Navneet" features={options.c}/>
       <Product title="Pen" price="10" desc="Raynold" features={options.d}/> 
       </>
    )
}
export default ProductGroup;