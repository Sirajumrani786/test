import React, { useState, useEffect } from 'react';
import Logo from '../../assets/icons/logo';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(prevYear => prevYear + 1);
    }, 60000); // Increment every minute, you can adjust the interval as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>Fitness</span>-Gym</h6>
            <p>Join our state-of-the-art gym and transform your fitness journey. We offer personalized workout plans, expert trainers, and a supportive community to help you achieve your fitness goals.</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>
          <div className="site-footer__links">
            <ul>
              <li>Fitness Programs</li>
              <li><a href="#">Personal Training</a></li>
              <li><a href="#">Group Classes</a></li>
              <li><a href="#">Yoga and Pilates</a></li>
              <li><a href="#">Cardio Workouts</a></li>
              <li><a href="#">Strength Training</a></li>
            </ul>
            <ul>
              <li>Membership</li>
              <li><a href="#">Membership Plans</a></li>
              <li><a href="#">Join Now</a></li>
              <li><a href="#">Member Benefits</a></li>
              <li><a href="#">Refer a Friend</a></li>
              <li><a href="#">Corporate Memberships</a></li>
            </ul>
            <ul>
              <li>Support</li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY <a href="https://gmgsolutions.io/" style={{ color: 'blue' }}>GMG Solutions</a> - © {currentYear}. ALL RIGHTS RESERVED.</p>
        </div>
      </div>

      <style jsx>{`
        @media screen and (max-width: 767px) {
          .site-footer {
            text-align: center;
          }
          .site-footer__social-networks {
            display: flex;
            justify-content: center;
            margin-left: 25px;
        }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
