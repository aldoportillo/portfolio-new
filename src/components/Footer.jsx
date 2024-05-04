import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer>
      <div className='first-row'>
      <div className='social-icons'>
          <a href={'https://www.linkedin.com/in/aldo-portillo-09b187253/'} target={"_blank"} rel="noreferrer"><AiFillLinkedin size={50}/></a>
          <a href={'https://github.com/aldoportillo'} target={"_blank"} rel="noreferrer"><AiFillGithub size={50}/></a>
          <a href={'https://www.instagram.com/portillo.mma/'} target={"_blank"} rel="noreferrer"><AiFillInstagram size={50}/></a>
          <a href={'https://twitter.com/aldoportillodev'} target={"_blank"} rel="noreferrer"><AiOutlineTwitter size={50}/></a>
        </div>
        <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target={"_blank"} rel="noreferrer">Don&apos;t Click!</a></p>
        
      </div>
      <div className='second-row'>
        <a href="https://whimsical.com/detailed-site-map-2W9iQ5URBfbF7csc8sASAe" target={"_blank"} rel="noreferrer">Site Map</a>
        <p>Aldo Portillo &copy; 2022</p>
      </div>
    </footer>
  )
}
