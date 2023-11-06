import { NavLink } from "react-router-dom";
import logo from "../../../assets/svgviewer-png-output (1).png"

const Footer = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <footer className="footer p-10 text-base-content text-blac">
                <aside className="flex flex-col justify-center items-center">
                    <NavLink className="btn btn-ghost font-pacifico normal-case text-4xl lg:text-5xl text-primary" to={"/"}><img className=" w-40" src={logo} alt="" /></NavLink>
                    <p className="pt-4">Learnly Industries Ltd.<br />Providing reliable assignment assistance since 1992</p>
                </aside>
                <nav className="">
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;