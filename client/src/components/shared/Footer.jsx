import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

/**
 * footer template from:
 * https://mdbootstrap.com/docs/react/navigation/footer/
 */

function Footer(){
  return (
    <MDBFooter color="white" className="footer-style font-small pt-4 mt-4">
      <MDBContainer fluid className="mytext text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">App-point</h5>
            <p>
              LOGO
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Explore</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Terms and Conditions</a> 
              </li>
              <li className="list-unstyled">
                <a href="#!">Blog</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Events</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FAQ</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Group 5 - COMP3006 | <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;