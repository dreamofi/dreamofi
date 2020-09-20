import React from "react";
import PropTypes from "prop-types";

import Header from "../../components/header/Header.component";
import Contact from "../../components/contact/Contact.component";
import Footer from "../../components/footer/Footer.component";
import BottomHamburger from "../../components/bottomHamburger/BottomHamburger.component";
import GoTop from "../../components/goTop/GoTop.component";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Contact id="Contact" />
      <Footer />
      <BottomHamburger />
      <GoTop />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
