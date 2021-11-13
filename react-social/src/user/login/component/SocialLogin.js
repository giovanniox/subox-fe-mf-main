import fbLogo from '../../../img/fb-logo.png'
import googleLogo from '../../../img/google-logo.png'
import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  ACCESS_TOKEN,
} from '../../../constants'
const SocialLogin = () => {
  return (
    <div className="social-login">
      <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
        <img src={googleLogo} alt="Google" /> Inicia con Google
      </a>
      <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
        <img src={fbLogo} alt="Facebook" /> Inicia con Facebook
      </a>
    </div>
  )
}

export default SocialLogin
