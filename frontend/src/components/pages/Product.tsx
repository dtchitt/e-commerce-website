import React from 'react'
import Image from 'react-bootstrap/Image'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import './Product.css'

export default function Product() {

    const price = (onSale: boolean) => {
        if(onSale){
            return(
                <h4>$XX.XX <Badge bg="warning">SALE</Badge></h4>
            )
        }else{
            return(
                <h4>$XX.XX</h4>
            )
        }
    }

  return (
    <>
    <Container className=''>
        <Row className='justify-content-start mt-3'>
            <Col xs={2}>
                <h2 className='mb-0'>Product Title</h2>
                <p className='mt-0'>product number</p>
            </Col>
        </Row>
        <Row>
            <Col xs={7} className='p-3'>
                <div className="border border-dark image-wrapper-lg">
                    <Image className='border border-primary shadow p-0' src='#' alt='' style={{width: '100%', height: '100%'}} />
                </div>
            </Col>
            <Col xs={4} className='border border-dark p-3'>
                <div className='border border-primary p-0 m-0 shadow' style={{width:'50vh'}}>
                    <Image className='p-0' src='#' alt='' style={{ width:'50vh', height:'30vh', maxWidth: '100%', maxHeight: '100%'}}/>
                    <Image className='p-0' src='#' alt='' style={{ width:'50vh', height:'30vh', maxWidth: '100%', maxHeight: '100%' }}/>
                </div>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col xs={7}>
                <h3>Product Title</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque aspernatur aut repellat ducimus pariatur molestias voluptatum ad distinctio. Aut magnam laboriosam deserunt labore illo sunt distinctio ipsa neque asperiores enim.</p>
            </Col>
            <Col xs={5}>
                {price(true)}
                
            </Col>
        </Row>
    </Container>
        
    </>
  )
}
