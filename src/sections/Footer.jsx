import React, { useState } from 'react';
import './Footer.css';

const FooterLink = ({ href, label }) => (
  <a href={href} className="footer-link">
    {label}
  </a>
);

const Footer = ({ data = {} }) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const {
    companyName = 'Verona',
    companyDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    newsletterText = 'Send us your request and our team will contact you shortly.',
    socialLinks = [
      { icon: 'facebook', url: '#' },
      { icon: 'whatsapp', url: '#' },
      { icon: 'instagram', url: '#' },
    ],
    navigation = [
      { label: 'Products', url: '#' },
      { label: 'Collections', url: '#' },
      { label: 'Projects', url: '#' },
      { label: 'Contact', url: '#' },
      { label: 'About Us', url: '#' },
      { label: 'Blog', url: '#' },
    ],
    categories = [
      { label: 'Living Room', url: '#' },
      { label: 'Bedroom', url: '#' },
      { label: 'Mattresses', url: '#' },
      { label: 'Outdoor', url: '#' },
      { label: 'Office', url: '#' },
      { label: 'Home Decor', url: '#' },
    ],
    legal = [
      { label: 'Terms & Conditions', url: '#' },
      { label: 'Terms of Use', url: '#' },
      { label: 'Privacy Policy', url: '#' },
      { label: 'Ads', url: '#' },
      { label: 'Personal Information', url: '#' },
    ],
    partnerShop = { name: 'SMEG Shop', url: '#' },
  } = data;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Company Info */}
          <div className="footer-company">
            <h3 className="footer-company-name">{companyName}</h3>
            <p className="footer-company-description">{companyDescription}</p>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <p className="footer-newsletter-text">{newsletterText}</p>
            <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer-newsletter-input"
                required
              />
              <button type="submit" className="footer-newsletter-button">
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          {/* Social Media */}
          <div className="footer-column">
            <h4 className="footer-column-title">Social Media</h4>
            <div className="footer-social-links">
              {socialLinks.map((link, idx) => (
                <a key={idx} href={link.url} className={`footer-social-icon footer-icon-${link.icon}`} aria-label={link.icon}>
                  {link.icon === 'facebook' && 'f'}
                  {link.icon === 'whatsapp' && '💬'}
                  {link.icon === 'instagram' && '📷'}
                </a>
              ))}
            </div>
            <div className="footer-partner-shop">
              <p className="footer-partner-shop-name">{partnerShop.name}</p>
              <div className="footer-partner-icons">⊕ ⊕ ⊕ ⊕</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <h4 className="footer-column-title">Navigation</h4>
            <div className="footer-links">
              {navigation.map((link, idx) => (
                <FooterLink key={idx} href={link.url} label={link.label} />
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="footer-column">
            <h4 className="footer-column-title">Categories</h4>
            <div className="footer-links">
              {categories.map((link, idx) => (
                <FooterLink key={idx} href={link.url} label={link.label} />
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h4 className="footer-column-title">Legal</h4>
            <div className="footer-links">
              {legal.map((link, idx) => (
                <FooterLink key={idx} href={link.url} label={link.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
