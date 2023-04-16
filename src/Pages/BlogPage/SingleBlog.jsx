import React from 'react';
import {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Layouts from "../../Components/Layouts";
import {useParams, Navigate} from "react-router-dom";

const SingleBlog = () => {

    let params = useParams();
    const [postId, setPostId] = useState();
    const [post, setPost] = useState([]);

    useEffect(() => {
        setPostId(params.id);
    }, [params]);

    useEffect(() => {
        if (postId) {
            fetch(`http://localhost:3001/posts?id=${postId}`)
                .then(response => response.json())
                .then(post => setPost(post[0]));
        }
    }, [postId]);

    const hasPost = post ? true : false;

    return (
        !hasPost ?
        <Navigate to="/"/>
        :
        <Layouts>
            {post ?
                <Container className="singleBlog">
                    <Row>
                        <Col xs={12} lg={8}>
                            <h1 className="singleBlog--title">
                                {post.title}
                            </h1>
                            <div className="singleBlog--image">
                                <img src={__dirname + post.image} alt={post.title} className="img"/>
                            </div>
                            <div className="singleBlog--description">
                                <p className="text text-muted">
                                    {post.body}
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} lg={4}>
                            sidebar
                        </Col>
                    </Row>
                </Container>
                :
                <p>
                    loading...
                </p>
            }
        </Layouts>
    );
};

export default SingleBlog;