import styled from 'styled-components'


const FooterContainer = styled.footer`
    background: black;
    heigth: 10vh;
    bot: 0;
`

const FooterH3 = styled.h3 `

`

const Footer = () => {
    return ( 
        <FooterContainer>
            <FooterH3>
                Todos los derechos reservados.
            </FooterH3>
        </FooterContainer>  
     );
}
 
export default Footer;
