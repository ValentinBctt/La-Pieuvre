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
    <div className="contactez-nous">
    <h2>Contactez-nous</h2>
    </div>
    <form onSubmit={handleSubmit} className="contact-form">
      

      <div className="form-message">
        <p><strong>ATELIER LA PIEUVRE</strong></p>
        <p>DTF_Sérigraphie_Broderie_DTG</p>
        <h1>Contact</h1>
            <textarea
            className='form-message'
        name="message"
        placeholder="Décrivez_votre_demande"
        value={form.message}
        onChange={handleChange}
        required
      />
      </div>

      <div className="form-contact">

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

      {status && <p className="form-status">{status}</p>}
    </form>

    <div className='footer'>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center', marginBottom: '2rem' }}>
        <div className="footer-bar" style={{ width: barWidth }} />
        <h2 className="footer-holding" ref={holdingRef}><strong>LA PIEUVRE</strong>&nbsp;HOLDING</h2>
        <div className="footer-bar" style={{ width: barWidth }} />
      </div>
    </div>
    <div className="footer-content">
      <div className='footer-la-pieuvre'>
        <a href=""><img className="footer-logo" src="https://res.cloudinary.com/dnojcwwos/image/upload/v1775051989/c36fa1a1-7052-4db1-8996-220a4a5c79a7.png" alt="Logo" />ATELIER <strong>LA PIEUVRE</strong></a>
        <a href=""><img className="footer-logo" src="https://res.cloudinary.com/dnojcwwos/image/upload/v1775051900/0399de92-9454-428b-9bc9-4983ee670d80.png" alt="Logo" />BUREAU <strong>LA PIEUVRE</strong></a>
        <a href=''><img className="footer-logo" src="https://res.cloudinary.com/dnojcwwos/image/upload/v1775051959/4418d29c-8feb-4245-86d1-e47d26a49d46.png" alt="Logo" />STUDIO <strong>LA PIEUVRE</strong></a>
      </div>

      <div className='footer-contact'>
        <h3>NOUS CONTACTER</h3>
        <a href="">Contact</a>
        <a href="">Instagram</a>
        <a href="">Linkedin</a>
      </div>

      <div className='footer-legal'>
        <h3>MENTIONS LÉGALES</h3>
        <a href="">Politique de confidentialité</a>
        <a href="">Conditions générales</a>
        <a href="">Cookies</a>
        <a href="">Accesibilité</a>
      </div>
    </div>
    </>
  );
}