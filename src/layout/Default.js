import React from 'react'
import Sidebar from './Sidebar';
import { Container, Row, Col } from "react-bootstrap";
import MainNavbar from './MainNavbar';

const Default = ({ children, noNavbar, noFooter }) => (
  <Container style={sytles.root}>
      <Sidebar />
      <div style={sytles.contentContainer}>
        {!noNavbar && <MainNavbar />}
        <main style={sytles.content}>
          {children}
        </main>
      </div>

  </Container >
);

// Default.propTypes = {
//   /**
//    * Whether to display the navbar, or not.
//    */
//   noNavbar: PropTypes.bool,
//   /**
//    * Whether to display the footer, or not.
//    */
//   noFooter: PropTypes.bool
// };


const sytles = {
  root: {
    display: "grid",
    maxWidth: "100vw",
    gridTemplateColumns: "auto 1fr",
    padding: 0,
    backgroundColor:'#EEF0F3'
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    height: "100vh"
  },
  content: {
    padding: ".5rem",
    height: "100%",
    overflow: "auto",
    marginTop: "1rem",
    backgroundColor: '#EEF0F3',
  },
}

export default Default;
