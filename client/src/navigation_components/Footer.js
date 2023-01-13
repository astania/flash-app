import React from 'react'
import { SocialIcon } from 'react-social-icons'


const Footer = () => {
  return (
    <footer className="footer mt-auto bg-light" fixed="bottom">
      <div className="row" style={{ display: "flex", height: "50px", marginBottom: "-50px" }}>
        <div className="col-6" style={{ width: "50%", float: "left" }}>
          <h5>Anna Stania Productions</h5>
        </div>
        <div className="col-6" style={{ width: "50%", float: "right" }}>
          <SocialIcon url="https://www.linkedin.com/in/anna-stania/" style={{ width: "1em", margin: ".2em", padding: ".2em" }} />
          <SocialIcon url="https://github.com/astania" style={{ width: "1em", margin: ".2em", padding: ".2em" }} />
          <SocialIcon url="https://medium.com/@annaestania" style={{ width: "1em", margin: ".2em", padding: ".2em" }} />
        </div>
      </div>
    </footer>
  )
}

export default Footer