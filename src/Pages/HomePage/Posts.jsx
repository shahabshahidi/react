import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CardBlog from "../../Components/Card/CardBlog";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/posts`)
            .then(response => response.json())
            .then(posts => setPosts(posts));
    }, []);

    let cardPosts = posts ? posts.map(post => {
        return (
            <Col key={post.id} className="mb-4">
                <CardBlog post={post}/>
            </Col>
        )
    }) : null;


    return (
        <Container>
            <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-4">

                {cardPosts ? cardPosts : <p>loading...</p>}

            </Row>
        </Container>
    );
};

export default Posts;