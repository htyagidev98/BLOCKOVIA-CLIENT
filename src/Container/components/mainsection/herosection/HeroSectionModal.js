import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { toast } from 'react-toastify';

const HeroSectionModal = ({ show, hide, objectData,setUpdateUi}) => {
    const [inputData, setInputData] = useState({
        id: "",
        title: "",
        paragraph: "",
    });

    const id = objectData._id

    console.log('objectData', objectData)




    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.put(`/hero/content/update?_id=${id}`, inputData);
            if(result.status===200){
                toast.success("Successfully Updated")
            }
            hide();

            setUpdateUi((pre)=>!pre);

        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        if (objectData != null) {

            setInputData((prevFormData) => ({
                ...prevFormData,

                id: objectData?._id || "",
                title: objectData?.title || "",
                paragraph: objectData?.paragraph || "",

            }));

        }
    }, [objectData])

    return (
        <Modal show={show} onHide={hide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Hero Section</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" id='title' value={inputData.title} onChange={handleChange} placeholder="Title" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicParagraph">
                        <Form.Label>Paragraph</Form.Label>
                        <Form.Control type="text" name="paragraph" id='paragraph' value={inputData.paragraph} onChange={handleChange} placeholder="Paragraph" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            </Modal.Body>

        </Modal>

    )
}

export default HeroSectionModal