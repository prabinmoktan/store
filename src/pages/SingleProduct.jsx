import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { singleData } from "../services/axios.service";

const SingleProduct = () => {
    const [prod, setProd] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();


    const getSingleData = async(id) => {
      const response= await singleData(id);
      
      setProd(response);
    }
    useEffect(() => {
      getSingleData(id)
    },[]);

    const goToHandler = (e) => {
      e.preventDefault()
      navigate("/")
    }

    

    
  return (
    <>
       <Container className="mt-5">
        <Row>
          <Col md="6">
            <h1 className="d-flex justify-content-center">{prod.title}</h1>
            <h4>Price: ${prod.price}</h4>
            <p className="ms-5">{prod.description}</p>
            <p >Category: {prod.category}</p>
            
            
          </Col>
          <Col md="6" className=" d-flex justify-content-center ">
            <img
              src={prod.image}
              className="w-50  pic-shadow rounded "
              alt={prod.title}
            />
          </Col>
        </Row>
        <div className="text-center mt-4 ms-5">
        <button onClick={goToHandler} className="btn btn-primary p-2 rounded ">Go To Home</button>
        </div>
      </Container>
  
    </>
  );
};

export default SingleProduct;
