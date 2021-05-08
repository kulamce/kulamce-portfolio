import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.png'
import pic05   from '../images/pic05.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }} onKeyDown={this.handleClick }role="button"
        tabIndex="0" aria-label="Save"
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">O mnie</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
          Nazywam się Cezary Krawczyk i od 2 lat fascynuję się i zajmuję kodowaniem stron internetowych.
          <br/>Jestem absolwentem studiów I stopnia kierunku Informatyka na Wydziale Nauk Technicznych 
          w Wyższej Szkoły Przedsiębiorczości i Administracji w Lublinie.</p> 
          <p>Obecnie mieszkam w Lublinie, a całą swoją uwagę koncentruję na rozwijaniu umiejętności oraz 
          poznawaniu nowych technologii, 
          dzięki którym moje projekty będą jeszcze lepsze.</p>
          <p>Aktualnie staram się o pracę jako Front-End Developer.</p>
          <p>Pasjonuję się modą i uwielbiam żartować, poznawać nowych ludzi, realizować muzyczne pasje, a wolne chwile poświęcać na sport.</p>
          {close}
        </article>

        

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Umiejętności</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p style={{textAlign: 'center', fontSize: 1.6+'rem'}}>
            Technologie, których używam:
          </p>
          <div style={{fontSize: '0.8rem'}}>
          <ul className="icons" style={{display: 'flex', justifyContent: 'space-evenly'}}>
              <li>
                <i className="fab fa-sass fa-6x"/>
              </li>
              <li>
              <i className="fab fa-react fa-6x"/>
              </li>
              <li>
              <i className="fab fa-html5 fa-6x"/>
              </li>
              <li>
              <i className="fab fa-css3-alt fa-6x"/>
              </li>
          </ul>
          <ul className="icons" style={{display: 'flex', justifyContent: 'space-evenly'}}>
              <li>
              <i className="fab fa-js fa-6x"/>
              </li>
              <li>
              <i className="fab fa-bootstrap fa-6x"/>
              </li>
              <li>
              <i className="fab fa-node fa-6x"/>
              </li>
              <li>
              <i className="fas fa-database fa-6x"><p className="textUnderIcon">MySQL</p></i>
              </li>
          </ul>
          </div>	 
          {close}
        </article>

        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Portfolio</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p style={{textAlign:'center', fontSize: 1.6+ 'rem'}}>Moje projekty:</p>
          <div className="projects">
            <ul style={{display: 'flex', listStyleType: 'none'}}>
              
              <li>
                  <figure>
                  <a href="https://zielonezacisze-janowlub.pl" aria-label="link do projektu"><img src={pic04} alt=""/></a>
                  <figcaption>Strona Agroturystyki</figcaption>
                  </figure>
              </li>
              
              
              <li>
                  <figure>
                  <a href="https://heuristic-bhabha-791098.netlify.app" aria-label="link do projektu"><img src={pic05} alt=""/></a>
                  <figcaption>Mini Heroes</figcaption>
                  </figure>
              </li>
            </ul>
          </div>
         

          {close}
        </article>


        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Kontakt</h2>
            <form action="https://formspree.io/f/xqkwavqd" method="POST" encType="multipart/form-data">
            <label>
                Imię:
                <textarea type="message" name="name" required style={{marginTop: 10 + 'px', height: 55 + 'px', resize: 'none', width: 200 + 'px'}} ></textarea>
              </label>
              <label>E-mail:<input type="email" name="_replyto" placeholder="Wprowadź swój e-mail" required style={{marginTop: 10 + 'px'}}/></label>
              <label>
                Wiadomość:
                <textarea name="message" required style={{marginTop: 10 + 'px', resize: 'none'}} ></textarea>
              </label>
              <label>
                Your file:
                <input type="file" name="attachment" accept="image/png, image/jpeg" />
              </label>
              <button type="submit">Wyślij</button>
            </form>
          <ul className="icons">
            <li>
              <a href="https://facebook.com/cezary.krawczyk.7" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/cezvrx" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kulamce/kulamce-portfolio"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
