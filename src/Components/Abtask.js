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
function Abtask() {
//   const element = [0, 1, 2, 3, 4];

  //   for(let i=0;i<=5;i++)
  return (
    <div>
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
            <MDBCardTitle>card1</MDBCardTitle>
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
      </div>

  );
}
export default Abtask;

{
  /* //   return <div>{element}</div>; */
}
