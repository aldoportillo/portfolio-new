import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrapper>
      <SocialIcons>
        <IconLink href={'https://www.linkedin.com/in/aldo-portillo-09b187253/'} target="_blank" rel="noreferrer"><AiFillLinkedin size={50}/></IconLink>
        <IconLink href={'https://github.com/aldoportillo'} target="_blank" rel="noreferrer"><AiFillGithub size={50}/></IconLink>
        <IconLink href={'https://www.instagram.com/portillo.mma/'} target="_blank" rel="noreferrer"><AiFillInstagram size={50}/></IconLink>
        <IconLink href={'https://twitter.com/aldoportillodev'} target="_blank" rel="noreferrer"><AiOutlineTwitter size={50}/></IconLink>
      </SocialIcons>
      <MiscLinks>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Don&apos;t Click!</a>
        <a href="https://12-3d-text-nu.vercel.app/" target="_blank" rel="noreferrer">3D Portfolio</a>
      </MiscLinks>
      <CopyRight>Aldo Portillo &copy; {new Date().getFullYear()}</CopyRight>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  align-items: center;
  background-color: var(--header);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 1rem 3vw;
  text-align: center;
  width: 100%;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px; 
  margin-bottom: 20px;
`;

const IconLink = styled.a`
  color: #ffffff; 
  transition: color 0.3s;

  &:hover {
    color: var(--accent); 
  }
`;

const MiscLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;

  a {
    color: #ffffff;
    transition: color 0.3s;

    &:hover {
      color: var(--accent);
    }
  }
`;

const CopyRight = styled.p`
  margin: 10px 0 0;
  width: 100%; 
`;
