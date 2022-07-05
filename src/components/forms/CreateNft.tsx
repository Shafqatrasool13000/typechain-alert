import React from 'react';
import { Form } from 'react-bootstrap'
import { CreateNftHook } from '../../hooks/CreateNftHook';
import MyNavbar from '../Navbar/Navbar';
import { Button, Modal } from "react-bootstrap";

const CreateNft = () => {

    const [name, setName] = React.useState('');
    const [symbol, setSymbol] = React.useState<string>('');
    const [show, setShow] = React.useState(false);

    const [data, setData] = React.useState<any>();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createNftHandler = CreateNftHook();

    return (
        <>
            <MyNavbar />
            <div style={{
                maxWidth: '700px',
                margin: '0 auto',
                marginTop: '20px',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                padding: '15px',

            }}>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <h4 className='text-center mt-3'> Create Nft</h4>
                <Form.Label htmlFor="basic-url">Name</Form.Label>
                <Form.Control
                    aria-label="Default"
                    placeholder="Enter Name"
                    type="text"
                    aria-describedby="inputGroup-sizing-default"
                    value={name} onChange={(event) => setName(event?.target.value)}
                />
                <div className="mt-3">
                    <Form.Label htmlFor="basic-url text-start">Symbol</Form.Label>
                    <Form.Control
                        aria-label="Default"
                        placeholder="Enter Symbol"
                        type="text"
                        aria-describedby="inputGroup-sizing-default"
                        value={symbol} onChange={(event) => setSymbol(event?.target.value)}
                    />
                </div>
                <div className="w-50 mt-3 mx-auto">
                    <button className="btn btn-primary w-100" onClick={async () => await createNftHandler(name, symbol, handleShow, setData)}>Create Nft</button>
                </div>
            </div>
        </>
    )
}

export default CreateNft