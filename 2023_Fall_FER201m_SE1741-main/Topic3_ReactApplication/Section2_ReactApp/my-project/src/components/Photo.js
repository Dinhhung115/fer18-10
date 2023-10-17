import { Col, Container, Row, Card, Link, style } from "react-bootstrap";
import { useState, useEffect } from "react"
export default function Photos() {
    //tạo một viến state chứa dữ liệu của photos
    const [photos, setPhoto] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            // .then(data => setPhoto(data)) //thay đổi dữ liệu của photos
            .then(data => {
                if (search.length == 0)
                    setPhoto(data);
                else
                    setPhoto(data.filter(p => p.title.toLowerCase().startsWith(search.toLowerCase())))
            }) //thay đổi dữ liệu của photos
        // .catch(error => console.log(error.message))

    }, [search])

    //console.log(Photo);
    return (
        <Container>
            <Row>
                <Col style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <input placeholder="Enter title to search..."
                        style={{ width: '50%', lineHeight: '30px' }}
                        onChange={(e) => setSearch(e.target.value)}
                    />


                </Col>
            </Row>
            <Row>
                {
                    photos.map(p => (
                        <Col xs={12} sm={6} md={4}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>${p.title}</Card.Title>
                                    <Card.Link href={`/Photo/${p.id}`}>Details</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}