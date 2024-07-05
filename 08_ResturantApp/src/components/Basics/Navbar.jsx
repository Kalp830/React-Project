import React from 'react'

const Navbar = ({fliterItem, menuList}) => {
  return (
    <>
    
  <div className="btn-group pt-5" role="group" aria-label="Basic outlined example">
  {menuList.map((curElem)=>{
           return(
              <button  className="btn btn-outline-primary" onClick={() => fliterItem(curElem)}>{curElem}</button>
            ) 
        })
    }
</div>
    </>
  )
}

export default Navbar
