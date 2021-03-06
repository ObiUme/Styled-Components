import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import {StyledSocialIcons} from './styled/SocialIcons.styled'

function SocialIcons() {
    return (
        <StyledSocialIcons>
            <li>
                <a href='http://twitter.com'>
                    <FaTwitter/>
                </a>
            </li>
            <li>
                <a href='http://facebook.com'>
                    <FaFacebook/>
                </a>
            </li>   
            <li> 
                <a href='http://linkedin.com'>
                    <FaLinkedin/>
                </a>
            </li>

        </StyledSocialIcons>
    )
}
export default SocialIcons;