import { Col, Container, Row, Card, Link, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
export default function PhotoDetails() {
    const { id } = useParams();
    const [photo, setPhoto] = useState({})
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos/" + id)
            .then(res => res.json())
            .then(data => setPhoto(data)) //thay đổi dữ liệu của photos
    }, [])
    return (
        <div>
            {
                photo == null && <Alert variant="danger">Photo not found</Alert>
            }
            <div>Id: {id}</div>
            <div>Title: {photo.title}</div>
            <div>Album: {photo.albumId} </div>
            <div>Url: {photo.url}</div>
        </div>
    )

}