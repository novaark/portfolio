import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

export const NavContainer = styled(motion.div)`
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background:transparent;
    position:fixed;
    top:0;
    left:0;
    z-index:1;
`
export const NavWrapper = styled.div`
    display:flex;
    width:90%;
    margin:1rem auto 0 auto;
    /* max-width:500px; */
    height:auto;
    align-items: flex-end;
    justify-content: space-between;
    padding:10px 0;
`
export const NavLogoWrapper = styled(Link)`
    text-decoration:none;
    font-size:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const NavLogo = styled.img`
    height:4rem;
    width:auto;
`
export const IconWrapper = styled.div`
    font-size:3rem;
    color:red;
    display:flex;
`
// export const NavLinkWrapper = styled.div`
//     display:flex;
//     justify-self:end;
// `
// export const LinkWrapper = styled.div`
//     padding:0 15px;
//     display:flex;
//     justify-content: center;
//     align-items: center;
// `
// export const NavLink = styled(Link)`
//     text-decoration:none;
//     color:black;
//     font-size:1.5rem;
//     font-weight:300;
// `