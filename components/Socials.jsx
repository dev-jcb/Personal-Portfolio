import {SocialIcon} from 'react-social-icons';

export default function Socials() {
  return (
    <>
    <footer id="fh5co-footer" role="contentinfo">
      <div className="col-md-12 text-center">
        <p>
          <ul className="fh5co-social-icons">
            <li>
              {/* <a href="#">
                <i className="icon-twitter"></i>
              </a> */}
              <SocialIcon href="https://www.linkedin.com/in/jesus-carlo-borlagdan-726857196/" url="www.linkedin.com" />
            </li>
            <li>
              <SocialIcon href="https://www.instagram.com/_jcvb/" url="www.instagram.com" />
            </li>
            <li>
              <SocialIcon href="https://www.facebook.com/RoyalPrince.JC" url="www.facebook.com" />
            </li>
          </ul>
        </p>
      </div>
        
        </footer>
    </>
  );
}
