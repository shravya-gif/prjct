import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardOverlay,
  MDBCardTitle,
  MDBCardText,
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import "./Inteststyle.css";
import { MDBBox } from "mdbreact";

export default function Intest() {
  return (
    <MDBRow className="p-3">
      <MDBCol md="4">
        <MDBCard
          background="dark"
          className="text-white"
          style={{ maxWidth: "450px" }}
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
      <MDBCol md="4">
        <MDBCard
          background="dark"
          className="text-white"
          style={{ maxWidth: "450px" }}
        >
          <MDBCardImage
            overlay
            src="https://mdbootstrap.com/img/new/slides/017.webp"
            alt="..."
          />
          <MDBCardOverlay>
            <MDBCardTitle>Fractional Real Estate</MDBCardTitle>
            <MDBCardText>
              Invest & Own an assets and earn monthly rental income.
            </MDBCardText>
            <MDBCardText>Last updated 3 mins ago</MDBCardText>
          </MDBCardOverlay>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4">
        <MDBCard
          background="dark"
          className="text-white"
          style={{ maxWidth: "450px" }}
        >
          <MDBCardImage
            overlay
            src="https://mdbootstrap.com/img/new/slides/017.webp"
            alt="..."
          />
          <MDBCardOverlay>
            <MDBCardTitle>Revenue Based Financing</MDBCardTitle>
            <MDBCardText>
              Invest in businesses with high growth potential and own a share of
              the monthly revenue.
            </MDBCardText>
            <MDBCardText>Last updated 3 mins ago</MDBCardText>
          </MDBCardOverlay>
        </MDBCard>
      </MDBCol>
      <h1>View more assets</h1>
      <div className="slider p-5">
        <MDBCarousel showControls showIndicators dark interval={500000}>
         
        <MDBCarouselItem
            className="img w-100 h-100 d-block"
            itemId={1}
            src={undefined}
          >
            <div
              className="parent"
            >
              <img
                className="child square-img"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
                alt=""
              ></img>
              <div className="child">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </MDBCarouselItem>


          <MDBCarouselItem
            className="img w-100 h-100 d-block"
            itemId={2}
            src={undefined}
          >
            <div
              className="parent"
            >
              <img
                className="child square-img"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
                alt=""
              ></img>
              <div className="child">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="img w-100 h-100 d-block"
            itemId={3}
            src={undefined}
          >
            <div
              className="parent"
            >
              <img
                className="child square-img"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
                alt=""
              ></img>
              <div className="child">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
    </MDBRow>
  );
}