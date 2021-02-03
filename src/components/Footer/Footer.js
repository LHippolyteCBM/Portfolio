import React from "react";
import { MenuList } from '../Navbar/MenuList';


import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
        <div className="footer-div">
            <p>Projet réaliser en janvier 2021 dans le cadre du test de fin de formation</p>
        </div>
        <div className="footer-div">
            <ul className="footer-list">
                {MenuList.map((item, index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>{item.title}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className="footer-div">
        <ul className="footer-list">
                <li><a href="" className="anchor-footer"><FaGithub color="white" size="33px"/></a></li>
                <li><a href="" className="anchor-footer"><FaLinkedin color="white" size="33px"/></a></li>
            </ul>
        </div>
        
    </footer>
  );
}

export default Footer;