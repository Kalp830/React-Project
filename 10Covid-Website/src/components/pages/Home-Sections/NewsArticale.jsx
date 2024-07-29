import React from 'react'

const NewsArticale = () => {
    const newsImageArry = [
        {img:'./images/news-1.jpg', date:'5 Dec 2020', description:'How coronavirus very contigous'},
        {img:'./images/news-2.jpg', date:'5 Dec 2020', description:'How coronavirus very contigous'},
        {img:'./images/news-3.jpg', date:'5 Dec 2020', description:'How coronavirus very contigous'}
    ]
  return (
    <>
      <section className='news-article py-5'>
          <div className='container'>
            <div className='row'>
            <div className='text-center'>
            <h2 className='text-blue fw-bold'>News and Articles</h2>
            <p className='w-50 m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>

            {/* News and Articel */}
            <div className='NA-section'>
            <div className='row py-5'>
              {newsImageArry.map((item, index)=>(
                <div className='col-xl-4' key={index}>
                     <img src={item.img} alt="article-news"/>
                     <div className='d-flex justify-content-between'>
                        <i className='fa fa-user'></i>
                        Admin
                        <i className='fa fa-chat'></i>
                        2 Comments
                     </div>
                </div>
              ))
              }
              </div> 
            </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default NewsArticale
