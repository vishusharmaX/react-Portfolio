import React from 'react'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle ,AiOutlineArrowUp} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={'https://avatars.githubusercontent.com/u/91490950?s=400&u=20e97d783c6390481d7be86978c9fb881e8b0898&v=4'} alt="Founder" />
            <h2>Vishwajeet Sharma</h2>
            <p>A good programmer is someone who always looks both ways before crossing a one-way street</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://www.instagram.com/vishu.livincool/" target={'blank'}>
                    <AiFillInstagram/>
                </a>
                <a href="https://github.com/vishusharmaX" target={'blank'}>
                    <AiFillGithub/>
                </a>
                <a href="https://www.linkedin.com/in/vishwajeet-sharma-649a21205/" target={'blank'}>
                    <AiFillLinkedin/>
                </a>
                <a href="https://twitter.com/VishuSh62450403?t=m-5QTgaVVlWHmsFXDuXxFw&s=09" target={'blank'}>
                    <AiFillTwitterCircle/>
                </a>
            </article>
        </aside>
            <a href="#home"> <AiOutlineArrowUp/> </a>
    </footer>
  )
}

export default Footer
