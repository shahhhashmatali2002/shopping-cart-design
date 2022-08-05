import { Image } from "antd";
import React, { useState } from "react";
import './Blog.css'
import blogs from "./BlogContent";

const Blog = () => {
    const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;

    const [showBlog, setShowBlog] = useState(false)
    const [filterBlog, setFilterBlog] = useState([])
    const goBlog = (id) => {
        window.scrollTo(0, 0)
        setShowBlog(true)
            blogs.filter((ele, index) => {
                if(index === id){
                    return setFilterBlog([ele])
                }
            })
    }
    return(
        <>
                <div className="blog">
            <div className="container">
                <div className="row m-0">
                    {
                        blogs.map((ele, index) => {
                            return <div className="col col-lg-4 col-md-4 col-12">
                            <Image className="" preview={false} src={ele.img} width={"100%"}></Image>
                            <p>{ele.date} &nbsp; | &nbsp; {ele.comment} Comments</p>
                            <h4 className="mt-2">{ele.title}</h4>
                            <p>
                            {ele.text}<br/>
                            </p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
};

export default Blog;