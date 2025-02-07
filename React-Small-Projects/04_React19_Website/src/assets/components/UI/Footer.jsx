import footerContact from '../../../api/footerApi.json'
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container grid grid-three-cols">
            {  
              footerContact.map((item, index)=>{
                const {icon, title, details} = item;
                return(
                  <>
                  <div className="footer-contact" key={index}>
                    <div className="icon">{icon}</div>
                    <div className="footer-contact-text">
                      <p>{title}</p>
                      <p>{details}</p>
                    </div>
                  </div>
                  </>
                )
              })
            }
        </div>
      </footer>
    </>
  );
};

export default Footer;
