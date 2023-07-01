import React from 'react'
import blog from '../assets/images/blog.jpg'
import Button from './Button';
import SectionText from './SectionText';



function Blog() {
    const blogData = [
        {
            title: 'Cooking Dining Experience',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
            img: blog,
            date: "May 29, 2023"
        },
        {
            title: 'Spaghetti With Rock Shrimp',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
            img: blog,
            date: "May 29, 2023"
        },
        {
            title: 'Life Is A Combination Of Food',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
            img: blog,
            date: "May 29, 2023"
        }
    ]

    return (
        <>
            <div className='section' style={{ backgroundColor: '#101418' }}>

                <SectionText title='Be First Who Read News' smalltitle='Our Blog' style="m-top" />
                <div className='row'>
                    {blogData.map((element, index) => {
                        return <div key={index} className='col-sm-6 col-lg-4 col-md-12 mb-4'>
                            <div className='card-blog'>
                                <div className='card-blog-img'>
                                    <img src={element.img} alt={element.title}></img>
                                    <span className='card-blog-date'>{element.date}</span>
                                </div>
                                <div className='blog-card-content'>
                                    <div className='blog-card-meta'>
                                        <i className="fa-solid fa-user">
                                        </i>
                                        <span>Admin</span>
                                        <i className="fa-solid fa-tag ms-3"></i>
                                        <span>Food</span>
                                    </div>
                                    <h5 className='blog-card-title'>{element.title}</h5>
                                    <p className='blog-card-info'>{element.desc}</p>
                                    <div className='horizontal-line'></div>
                                    <Button text="read more" style={{ border: 'none', background: 'transparent', color: '#c6a87d' }} />
                                </div>

                            </div>
                        </div>
                    })}
                </div>

            </div>
        </>
    )
}

export default Blog