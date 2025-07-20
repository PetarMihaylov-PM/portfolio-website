import ModalImage from "react-modal-image";
import './Portfolio.css';
import portfolio1 from '../../assets/cooking1.JPG';
import portfolio2 from '../../assets/ai1.JPG';
import portfolio3 from '../../assets/quiz.jpg';
import portfolio4 from '../../assets/hangman.jpg';
import portfolio5 from '../../assets/tenzies.jpg';
import portfolio6 from '../../assets/meme.jpg';
import portfolio7 from '../../assets/trendora2.JPG';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="porfolio-title">
        My Portfolio
      </h2>
      <span className='portfolio-description'>
        A collection of my work as a front-end developer, featuring projects that demonstrate my skills in responsive design, modern UI, and clean, efficient code.
      </span>
      <div className="portfolio-imgs-container">
        <a href="https://trendora-e-commerce.vercel.app/" target='_blank' rel="noopener noreferrer">
          <img src={portfolio7} alt="" className="portfolio-img wide-img" />
        </a>

        <ModalImage
          small={portfolio1}
          large={portfolio1}
          className="portfolio-img wide-img"
        />

        <ModalImage
          small={portfolio4}
          large={portfolio4}
          className="portfolio-img portfolio-img2"
        />
        
        <ModalImage
          small={portfolio3}
          large={portfolio3}
          className="portfolio-img"
        />

        <ModalImage
          small={portfolio2}
          large={portfolio2}
          className="portfolio-img wide-img"
        />

        <ModalImage
          small={portfolio5}
          large={portfolio5}
          className="portfolio-img"
        />

        <ModalImage
          small={portfolio6}
          large={portfolio6}
          className="portfolio-img portfolio-img2"
        />
      </div>
      <a 
        href="https://github.com/PetarMihaylov-PM/react-projects"
        target='_blank' className='portolio-btn-link'>
        <button className='portfolio-btn'>See more</button>
      </a>
    </section>
  )
}

export default Portfolio