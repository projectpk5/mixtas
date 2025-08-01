import React from 'react'
import { Accordion } from 'react-bootstrap'
import { myFashionFAQs } from '../../assets/assets'
const FAQ_Accordion = () => {
  return (
        <>
        <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col d-flex align-items-center justify-content-center">
                        <h1 className='display-4'>Frequently Asked Questions</h1>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-lg-6">
                        {myFashionFAQs.filter((value)=> (value.id <= 5)).map( (value,index) => (
                            <Accordion className='my-2' defaultActiveKey="0"  class='my-3' key={index}>
                                <Accordion.Item eventKey={value.id}>
                                    <Accordion.Header>{value.question}</Accordion.Header>
                                    <Accordion.Body>{value.answer}</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        ))}
                    </div>
                    <div className="col-lg-6">
                        {myFashionFAQs.filter((value)=> (value.id > 5)).map( (value,index) => (
                            <Accordion className='my-2' defaultActiveKey="0" key={index}>
                                <Accordion.Item eventKey={value.id}>
                                    <Accordion.Header>{value.question}</Accordion.Header>
                                    <Accordion.Body>{value.answer}</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </>
  )
}

export default FAQ_Accordion