import githubIcon from '../../images/headerIcons/github.svg';
import linkedInIcon from '../../images/headerIcons/linkedIn.ico';
import tgIcon from '../../images/headerIcons/telegram.ico';

export default function Footer() {
  return (
    <div className="tmp-noclass">
      <a href="">
        <img src={githubIcon} alt="github link" />
        <p>GitHub</p>
      </a>
      <a href="">
        <img src={linkedInIcon} alt="linkedin link" />
        <p>LinkedIn</p>
      </a>
      <a href="">
        <img src={tgIcon} alt="tg link" />
        <p>Telegram</p>
      </a>
    </div>
  );
}
