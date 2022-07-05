import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { CreateFactoryContractHook } from '../../hooks/CreateTokenHook';
import MyNavbar from '../Navbar/Navbar';
import { Button, Modal } from "react-bootstrap";
import {TailSpin } from 'react-loader-spinner';

const CreateToken = () => {

    const [name, setName] = React.useState<string>('');
    const [symbol, setSymbol] = React.useState<string>('');
    const [intialSupply, setIntialSupply] = React.useState<string>('');
    const [show, setShow] = useState(false);
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async (result: any) => setShow(true);


    const CreateFactoryContract = CreateFactoryContractHook();
    console.log(data?.agrs);


    return (
        <>
            <MyNavbar />
            <div style={{
                maxWidth: '700px',
                margin: '0 auto',
                marginTop: '20px',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                padding:'15px',
            }}>
                <div className={`${loading ? 'd-block' : 'd-none'}`} style={{
                    position: 'absolute',
                    top: '39%',
                    left: '50%',
                    fontSize: '50px',
                    color: 'white',

                }}>
                    <TailSpin
                        height="100"
                        width="100"
                        color='grey'
                        ariaLabel='loading'
                    />
                </div>
                <div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Successfully Created</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{data && data}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>
                    <h4 className='text-center mt-3'>Create Token</h4>

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
                    <div className="mt-3">

                        <Form.Label htmlFor="basic-url text-start">Initial Supply</Form.Label>
                        <Form.Control
                            aria-label="Default"
                            placeholder="Enter Initial Supply"
                            type="number"
                            aria-describedby="inputGroup-sizing-default"
                            value={intialSupply} onChange={(event) => setIntialSupply(event?.target.value)}
                        />
                    </div>
                </div>
                <div className="w-50 mt-3 mx-auto">
                    <button className="btn btn-primary w-100" onClick={async () => await CreateFactoryContract(name, symbol, intialSupply, handleShow, setData, setLoading)}>Create Token</button>
                </div>
            </div>
        </>
    )
}

export default CreateToken