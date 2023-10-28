import React from 'react'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded sticky z-[1] ">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">NIS Group</a>
            </nav>
            <aside>
                <p>Copyright © 2023 - All right reserved by NIS Alibi</p>
            </aside>
        </footer>
    )
}

export default Footer