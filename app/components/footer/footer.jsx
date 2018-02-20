import React, { Component } from 'react';
import '../../styles/components/footer.css'
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className='footer'>
        
        <div className="footer-left">
          <h3>Company logo</h3>
          <p >
            <a href="#">Home</a>
            ·
            <a href="#">stuffs</a>
            ·
            <a href="#">Pricing</a>
            ·
            <a href="#">About</a>
            ·
            <a href="#">Faq</a>
            ·
            <a href="#">Contact</a>
          </p>

          <p >Clothing-Line &copy; Dan & Jason</p>

            <div >
              <a href="#"><i style={{padding: '8px'}} >link 1</i></a>
              <a href="#"><i >link 2</i></a>
              <a href="#"><i >link 3</i></a>
              <a href="#"><i >link 4</i></a>
            </div>

        </div>

        <div className="footer-right">
          <div className="contacts">
            <p>Contact Us</p>

            <form action="#">

              <input type="text" name="email" placeholder="Email" />
              <textarea name="message" placeholder="Message"></textarea>
              <br />
              <button>Send</button>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
