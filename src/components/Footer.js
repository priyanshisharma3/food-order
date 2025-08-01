import { GIT_URL } from "../../utils/constants";

const Footer = () => {
    return(
        <div className="footer">
            <div className="links">
                <ul>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Premium</li>
                    <li>History</li>
                </ul>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Help/Support</li>
                    <li>History</li>
                </ul>
            </div>
            <div className="compAdd">
                Adrress: Food Alix HQ Bangalore
            </div>
            <div className="contact">
                <span className="number">Phn No.: 0000000000</span>
                <span className="email">E-mail: foodalixco@hmail.com</span>
            </div>
            <div className="copyright">
                Made with &hearts; by <a href={GIT_URL}>Priyanshi Sharma</a>
            </div>
        </div>
    )
}

export default Footer;