import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Wrapper>
      <div className='footer-rows'>
      <div className='social-icons'>
          <a href={'https://www.linkedin.com/in/aldo-portillo-09b187253/'} target={"_blank"} rel="noreferrer"><AiFillLinkedin size={50}/></a>
          <a href={'https://github.com/aldoportillo'} target={"_blank"} rel="noreferrer"><AiFillGithub size={50}/></a>
          <a href={'https://www.instagram.com/portillo.mma/'} target={"_blank"} rel="noreferrer"><AiFillInstagram size={50}/></a>
          <a href={'https://twitter.com/aldoportillodev'} target={"_blank"} rel="noreferrer"><AiOutlineTwitter size={50}/></a>
        </div>
        <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target={"_blank"} rel="noreferrer">Don&apos;t Click!</a></p>
        
      </div>
      <div className='footer-rows'>
        <a href="https://whimsical.com/detailed-site-map-2W9iQ5URBfbF7csc8sASAe" target={"_blank"} rel="noreferrer">3D Portfolio</a>
        <p>Aldo Portillo &copy; {new Date().getFullYear()}</p> 
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.footer`

  align-self: center;
  background-color: var(--header);
  width: 100vw;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  bottom:0;
  padding-top: 1rem;

.footer-rows{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3vw;
  padding-right: 3vw;
}

.footer-rows >a:link{
  color: #ffffff;
}

.footer-rows > a:visited{
  color: #ffffff;
}

.footer-rows > a:hover {
  color: var(--accent);
}

/* selected link */
.footer-rows > a:active {
  color: white;
}
`