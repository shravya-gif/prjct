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
  return (
    <MDBRow className=" p-3 ">
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
                    <MDBCardTitle>Card title</MDBCardTitle>
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
        </MDBRow>
      </MDBCard>
    </MDBRow>
  );
}
