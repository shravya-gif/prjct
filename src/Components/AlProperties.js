import React from "react";
import "./Alp.css";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardOverlay,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  // MDBCarousel,
  // MDBCarouselItem,
} from "mdb-react-ui-kit";
// import "./Inteststyle.css";

export default function AlProperties() {
  let jsonarray = [{
id:1,
title:"card1",
description:"This is a wider card with supporting text below as a natural lead in to additional content. This content is a little bit longer.",
Image:"https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp",
small:"Last updated 3 ims ago"
  },
  {
    id:1,
    title:"card2",
    description:"This is a wider card with supporting text below as a natural lead in to additional content. This content is a little bit longer.",
    Image:"https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp",
    small:"Last updated 3 ims ago"
  },
  {
    id:3,
    title:"card1",
    description:"This is a wider card with supporting text below as a natural lead in to additional content. This content is a little bit longer.",
    Image:"https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp",
    small:"Last updated 3 ims ago"
  }

  ];
  return (
    
    <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
      
      <MDBCol md="4">
        <MDBCard
          background="dark"
          className="card text-white  "
          style={{ maxWidth: "500px" }}
        >
          <MDBCardImage
            overlay
            src="https://mdbootstrap.com/img/new/slides/017.webp"
            alt="..."
          />
          <MDBCardOverlay>
            <MDBCardTitle>Asset Leasing</MDBCardTitle>
            <MDBCardText>
              Earning stable monthly income from the purchase and leasing of
              assets to businesses.
            </MDBCardText>
            <MDBCardText>Last updated 3 mins ago</MDBCardText>
          </MDBCardOverlay>
        </MDBCard>
      </MDBCol>
      <div>
        {jsonarray.map((item) => (
          // <div key={item.id}>
          <MDBCard style={{ maxWidth: "580px" }}>
            <MDBRow className="propty px-md-3 g-0">
              <MDBCol md="4">
                <MDBCardImage
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
                  alt="..."
                  fluid
                />
              </MDBCol>
              <div className="bodyy">
          
                <MDBCol className="md-8">
                  <MDBCardBody>
                    <MDBCardTitle>{item}</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </MDBCardText>
                    <MDBCardText>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCol>
              </div>
            </MDBRow>
          </MDBCard>
          // </div>
        ))}
      </div>

      {/* <MDBCard style={{ maxWidth: "580px" }}>
        <MDBRow className="propty px-md-3 g-0">
          <MDBCol md="4">
            <MDBCardImage
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
              alt="..."
              fluid
            />
          </MDBCol>
          <div className="bodyy">
            <MDBCol className="md-8">
              <MDBCardBody>
                <MDBCardTitle>Card1 title</MDBCardTitle>
                <MDBCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
                <MDBCardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </div>
        </MDBRow>
      </MDBCard>

      <MDBCard style={{ maxWidth: "580px" }}>
        <MDBRow className="propty px-md-3 g-0">
          <MDBCol md="4">
            <MDBCardImage
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
              alt="..."
              fluid
            />
          </MDBCol>

          <div className="bodyy">
            <MDBCol className="md-8">
              <MDBCardBody>
                <MDBCardTitle>Card2 title</MDBCardTitle>
                <MDBCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
                <MDBCardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </div>
        </MDBRow>
      </MDBCard>
      <MDBCard style={{ maxWidth: "580px" }}>
        <MDBRow className="propty px-md-3 g-0">
          <MDBCol md="4">
            <MDBCardImage
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
              alt="..."
              fluid
            />
          </MDBCol>
          <div className="bodyy">
            <MDBCol className="md-8">
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
                <MDBCardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </div>
        </MDBRow>
      </MDBCard>
      <MDBCard style={{ maxWidth: "580px" }}>
        <MDBRow className="propty px-md-3 g-0">
          <MDBCol md="4">
            <MDBCardImage
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
              alt="..."
              fluid
            />
          </MDBCol>
          <div className="bodyy">
            <MDBCol className="md-8">
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
                <MDBCardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </div>
        </MDBRow>
      </MDBCard> */}
    </div>
  );
}
