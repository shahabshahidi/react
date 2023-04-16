import React from 'react';
import {Card, CardImg} from "react-bootstrap";

import './card.scss';
import {Link} from "react-router-dom";

const CardBlog = ({post}) => {
    let img = __dirname + post.image;
    return (
        <Card className="cardBlog h-100 d-flex flex-column justify-content-between">
            <CardImg src={img} alt={post.title}/>
            <div className="card-body cardBlog--body">
                <strong className="card-title cardBlog--title">
                    {post.title}
                </strong>
            </div>
            <div className="card-footer cardBlog--footer">
                <Link to={`/blog/${post.id}`} className="btnReadMore">read more</Link>
            </div>
        </Card>
    );
};

export default CardBlog;