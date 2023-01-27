import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="leftFooter">
        <img
          className="footer-image"
          src="https://assets.inshorts.com/website_assets/images/logo_footer.png"
          alt=""
        />
        <div>
          <b>Inshorts </b>

          <span>Pte. Ltd.</span>
          <div> ©COPYRIGHT 2022</div>
        </div>
      </div>
      <div className="line"></div>
      <div className="rightFooter">
        <h1>Contact us</h1>
        <br />
        <span>Terms & conditions Privacy Policies</span>
      </div>
    </div>
  );
}

export default Footer;
