import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import service1 from '../assets/images/service-1.jpg';
import service2 from '../assets/images/service-2.jpg';
import service3 from '../assets/images/service-3.jpg';

const Services = () => {
  const services = [
    {
      title: "Communications",
      description: "Premium communication solutions tailored to your business needs. Our advanced systems ensure seamless connectivity across all platforms, with enterprise-grade security and 24/7 support. Streamline your organization's communication workflow with our cutting-edge technology.",
      linkText: "MORE",
      image: service1
    },
    {
      title: "Task Management",
      description:"Comprehensive task management system designed to boost productivity. Features include real-time collaboration, automated reminders, progress tracking, and integration with popular tools. Transform how your team organizes and completes work with our intuitive platform.",
      linkText: "MORE",
      image: service2
    },
    {
      title: "Project Tracking",
      description: "End-to-end project tracking with powerful analytics and visualization tools. Monitor milestones, allocate resources efficiently, and generate detailed reports. Our system provides complete visibility across all projects with customizable dashboards.",
      linkText: "MORE",
      image: service3
    }
  ];

  return (
    <>
      <Header />
      <div className="pb-5"></div>
      <section className="py-4" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>      
          <Row className="g-5 py-5 mb-3">
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4 mb-lg-0">
                <Card className="h-100 border-0 bg-white shadow-sm overflow-hidden" 
                  style={{ 
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    minHeight: '550px' 
                  }}>
                  <div style={{ 
                    height: '280px', 
                    overflow: 'hidden',
                    padding: '0'
                  }}>
                    <Card.Img 
                      variant="top" 
                      src={service.image} 
                      style={{ 
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%',
                        transition: 'transform 0.5s ease'
                      }} 
                      className="hover-zoom"
                    />
                  </div>             
                  <Card.Body className="p-4 d-flex flex-column">
                    <Card.Title 
                      className="mb-3  text-center text-muted"
                      style={{ 
                        fontSize: '1.5rem',
                        letterSpacing: '0.5px'
                      }}>
                      {service.title}
                    </Card.Title>
                    
                    <Card.Text 
                      className="mb-4 text-muted"
                      style={{ 
                        lineHeight: '2',
                        flexGrow: 1
                      }}>
                      {service.description}
                    </Card.Text> 
                    <div className="text-center"> 
                      <Button 
                        variant="success" 
                        style={{
                          backgroundColor: '#28a745',
                          border: 'none',
                          padding: '0.6rem 2rem',
                          borderRadius: '30px',
                          fontWeight: '600',
                          width:' 100%',
                          margin: '0 auto' 
                        }}>
                        {service.linkText}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Services;