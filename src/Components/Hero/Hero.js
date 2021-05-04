import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-intro">Hey there, my name is</div>
        <div className="hero-name">Sean Seale.</div>
        <div className="hero-phrase">
          I'm a sydney based Frontend Developer.
        </div>
        <div className="hero-desc">
          I build unique UI implementaions, have a passion for software
          engineering and a strong drive to continue learning. Looking for a
          workplace that I can grow into, building upon my skills every day.
        </div>
        <div className="hero-button">
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
}
