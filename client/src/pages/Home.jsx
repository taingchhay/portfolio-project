
import profileImg from '../assets/profile2.jpg';

function Home() {
  return (
    <section className="home-hero">
      <div className="home-content">
        <h1 className="home-title">WHO AM I?</h1>
        <h2 className="home-subtitle">Showcasing Passion, Vision, and Creativity</h2>
        <p className="home-desc">
          Hi, I’m <b>Tangchhay Sophal</b>.<br/>
          Software Engineering Student & Aspiring Full-Stack Developer.<br/><br/>
          I’m a third-year Computer Science student specializing in Software Engineering at the Cambodia Academy of Digital Technology (CADT). I build clean, user-focused web applications and enjoy turning ideas into real products using modern web technologies.
        </p>
      </div>
      <div className="home-image-wrap">
        <img src={profileImg} alt="Tangchhay Sophal" className="home-profile-img" />
      </div>
    </section>
  );
}

export default Home;
