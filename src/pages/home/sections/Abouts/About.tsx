import './About.scss'
import './About.media.scss'

import { IMAGES } from '../../../../assets/images';
import ButtonText from './../../../../components/buttons/ButtonText/ButtonText'
import ButtonIcon from '../../../../components/buttons/ButtonIcon/ButtonIcon';
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const About = () => {
    return (
        <div id="about" className="about">
          <div className='about-avatar'>
            <div className='about-avatar-img'>
              <img src={IMAGES.AVATAR} alt="Avatar" />
            </div>
          </div>
          <div className='about-information'>
            <h1>I am Professional <strong>Web Developer</strong></h1>
            <p>I am a Front-End programmer with more than 1 year of experience in HTML & CSS, JavaScript and nearly 4 months of experience in learning and developing TypeScript with the ReactJs library. I can use Bootstrap and Tailwind with Ant Design.</p>
            <p>I have actively researched and developed projects such as W3school's The Band, Mentor Frontend QR code component and Blog preview card, Shop and F_News, which helped me practice teamwork, communication, problem-solving and investigation skills.</p>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>Quach Hai Bang</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>:</td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>Ca Mau, Viet Nam</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>:</td>
                  <td>(+84) 368459077</td>
                </tr>
                <tr>
                  <td>E-mail</td>
                  <td>:</td>
                  <td>quachbang2404@gmail.com</td>
                </tr>
              </tbody>
            </table>
            <div className='about-information-btn'>
              <ButtonText title='Download cv' className='btn-download'/>
              <ButtonIcon className="btn-git" icon={<FaGithub />} />
              <ButtonIcon className="btn-link" icon={<FaLinkedinIn  />} />
              <ButtonIcon className="btn-face" icon={<FaFacebookF />} />
            </div>
          </div>
        </div>
      );
}

export default About;