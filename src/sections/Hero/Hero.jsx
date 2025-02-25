import styles from './HeroStyles.module.css';
import heroImg from "../../assets/Raman nema profile -Photoroom-modified.png";
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinDark from "../../assets/linkedin-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import instagramLight from "../../assets/instagram-alt.svg";
import instagramDark from "../../assets/inst.png";
import CV from "../../assets/Raman_Nema CV.pdf";
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme , toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon ;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark ;
  const githubIcon = theme === 'light' ? githubLight : githubDark ;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark ;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
    <img 
    className={styles.hero} 
    src={heroImg} 
    alt="ProfilePictureOfRaman" 
    />
    <img 
    className={styles.colorMode}
     src={themeIcon}
      alt="Color mode icon"
      onClick={toggleTheme}
       />
      </div>
      <div className={styles.info}>
            <h1>
                Raman
                <br />
                 Nema
            </h1>
            <h2>
                 Software Developer
            </h2>
            <span>
            <a href="https://github.com/nraman2045" target = "_blank">
              <img src={githubIcon} alt="githubIcon" />
              </a>
              <a href="https://www.linkedin.com/in/raman-nema-56667b267/" target = "_blank">
              <img src={linkedinIcon} alt="linkedinIcon" />
              </a>
              <a href="https://www.instagram.com/raman.nema/?next=%2F" target = "_blank">
              <img src={instagramIcon} alt="instagramIcon" />
              </a>
              
            </span>
            <p className={styles.description}>
            An aspiring software developer who stays current with market trends.
            </p>
            <a href={CV} download >
                <button className='Hover' >Resume</button>
            </a>

      </div>
 </section>
  )
}

export default Hero
