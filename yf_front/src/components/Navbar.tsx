import React, { Fragment, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export const Navbar: React.FC = () => {

    useEffect(() => {
        changeLinkState();
    }, []);

    function changeLinkState() {
        const links = document.querySelectorAll<HTMLElement>('.links');
        const sections = document.querySelectorAll<HTMLElement>('.section');
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

      
        
        links.forEach((link) => link.classList.remove('current'));
        links[index].classList.add('current');

        if(window.scrollY <= 10) {
            console.log('below 10')
            links.forEach((link) => link.classList.remove('current'));
        }

        window.addEventListener('scroll', changeLinkState);
}

    const handleClick = (e) => {

        const listItem = document.querySelectorAll<HTMLElement>(".yf__top-nav-list li a");
  
        listItem.forEach.call(listItem, (el) => {
          el.classList.remove("current");
        });
        
        e.target.classList.add('current');
    }
    return (
        <Fragment>
            <ul className="yf__top-nav-list">
                <li><Link className="links" to="#what" onClick={handleClick}>What is it?</Link></li>
                <li><Link className="links" to="#how" onClick={handleClick}>How it works?</Link></li>
                <li><Link className="links" to="#why" onClick={handleClick}>Why it works?</Link></li>
                <li><Link className="links" to="#tokenomics" onClick={handleClick}>Tokenomics</Link></li>
                <li><Link className="links" to="#cases" onClick={handleClick}>Use Cases</Link></li>
            </ul>
        </Fragment>
    )
};