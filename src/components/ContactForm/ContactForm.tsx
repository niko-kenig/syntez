import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contactForm.module.scss';

interface ContactFormProps {
  onClose: () => void;
}

export const ContactForm = ({ onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_bzj72jn',
        'template_se6qjrk',
        formData,
        'g7RdAo1x0KiP__QZE'
      );
      
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  if (isSubmitted) {
    return (
      <div className={styles.overlay}>
        <div className={`${styles.contactForm} ${styles.formSubmitted}`}>
          <h3>Спасибо за ваше сообщение!</h3>
          <p>Мы свяжемся с вами в ближайшее время.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.contactForm} onClick={e => e.stopPropagation()}>
        <button 
          type="button" 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="Закрыть"
        >
          &times;
        </button>
        <h3>Напишите нам</h3>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Ваше имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={'Имя'}
              required
              className={styles.formControl}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Ваш email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={'Email'}
              required
              className={styles.formControl}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Ваше сообщение</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder={'Текст'}
              className={styles.formControl}
            />
          </div>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </div>
    </div>
  );
};
