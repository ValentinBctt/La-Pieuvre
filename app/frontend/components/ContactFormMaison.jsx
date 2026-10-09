// src/components/ContactForm.jsx
import { useState, useRef, useEffect } from 'react';

export default function ContactForm({ endpoint = '/api/contacts', buttonText = 'Envoyer_' }) {
  const holdingRef = useRef(null);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    if (holdingRef.current) {
      setBarWidth(holdingRef.current.offsetWidth);
    }
  }, []);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Envoi en cours…');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('Mail envoyé avec succès !');
        setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Erreur lors de l’envoi du mail.');
      }
    } catch (err) {
      setStatus('Erreur réseau.');
    }
  };

  return (
    <>       
    <div className="contactez-nous maison-contactez-nous" id="contactez-nous">
      <h2>REJOIGNEZ-NOUS</h2>
      <p className="maison-contactez-nous-description">Nous recherchons des bénévoles et des financements…</p>
        {/* Scroll smooth vers l'ancre depuis n'importe quelle page */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              document.querySelectorAll('a[href="#contactez-nous"]').forEach(function(link) {
                link.addEventListener('click', function(e) {
                  const anchor = document.getElementById('contactez-nous');
                  if(anchor) {
                    e.preventDefault();
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                });
              });
            });
          `
        }} />
    </div>
    <form onSubmit={handleSubmit} className="contact-form maison-contact-form">
      

      <div className="form-message maison-form-message">
        <p style={{fontFamily: 'Pluto'}} >ATELIER <strong>LA PIEUVRE</strong></p>
        <p>DTF_Sérigraphie_Broderie_DTG</p>

            <textarea
            className='form-message maison-form-message-textarea'
        name="message"
        placeholder="Décrivez_votre_demande"
        value={form.message}
        onChange={handleChange}
        required
      />
            <div className="form-good-services maison-form-good-services">
          <p>Good_Services_And_Fast_Delivery</p>
          <p>Since_2022</p>
          </div>
      </div>

      <div className="form-contact maison-form-contact">

         <input
        type="email"
        name="email"
        placeholder="Votre_Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="firstName"
        placeholder="Votre_Prénom"
        value={form.firstName}
        onChange={handleChange}
        required
      />
      <input
        name="lastName"
        placeholder="Votre_Nom"
        value={form.lastName}
        onChange={handleChange}
        required
      />
     
      <input
        type="tel"
        name="phone"
        placeholder="Tél_"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <button type="submit">{buttonText}</button>
        </div>

      {status && <p className="form-status maison-form-status">{status}</p>}
    </form>

    <div className='footer maison-footer'>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center', marginBottom: '2rem' }}>
        <div className="footer-bar maison-footer-bar" style={{ width: barWidth }} />
        <h2 className="footer-holding maison-footer-holding" ref={holdingRef}><strong>LA PIEUVRE</strong></h2>
        <div className="footer-bar maison-footer-bar" style={{ width: barWidth }} />
      </div>
    </div>
    <div className="footer-content maison-footer-content">
      <div className='footer-la-pieuvre maison-footer-la-pieuvre'>
        <a href="/atelier"><img className="footer-logo maison-footer-logo" src="https://res.cloudinary.com/dnojcwwos/image/upload/v1776416329/08a6a08d-1b8c-4227-8c88-718ef85ffe28.png" alt="Logo" />ATELIER <strong>LA PIEUVRE</strong></a>
        <a href='/bureau'><img className="footer-logo maison-footer-logo" src="https://res.cloudinary.com/dnojcwwos/image/upload/v1775051900/0399de92-9454-428b-9bc9-4983ee670d80.png" alt="Logo" />BUREAU <strong>LA PIEUVRE</strong></a>
        <a href='/maison'><img className="footer-logo maison-footer-logo" src="https://res.cloudinary.com/dnojcwwos/image/upload/v1775051959/4418d29c-8feb-4245-86d1-e47d26a49d46.png" alt="Logo" />MAISON <strong>LA PIEUVRE</strong></a>
      </div>

      <div className='footer-contact maison-footer-contact'>
        <h3>NOUS CONTACTER</h3>
        <a href="">Contact</a>
        <a href="">Instagram</a>
        <a href="">Linkedin</a>
      </div>

      <div className='footer-legal maison-footer-legal'>
        <h3>MENTIONS LÉGALES</h3>
        <a href="/politique-confidentialite">Politique de confidentialité</a>
        <a href="/conditions-generales">Conditions générales</a>
        <a href="/politique-cookies">Cookies</a>
        <a href="/accessibilite">Accessibilité</a>
      </div>
    </div>
    </>
  );
}