import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xjkkdeoy");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        if (state.succeeded) {
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }
    }, [state.succeeded]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const onSubmit = (e) => {
        setIsSubmitting(true); // Démarrer l'animation de soumission
        handleSubmit(e);
    };

    return (

        <form onSubmit={onSubmit} className='contact_form'>
            <label htmlFor="name">Votre nom</label>
            <input placeholder="Votre nom" id="name" type="text" name="name" onChange={handleChange} required/>
            <ValidationError className='error' prefix="name" field='name' errors={state.errors}/>

            <label htmlFor="email">E-mail</label>
            <input placeholder="E-mail" id="email" type="email" name="email" onChange={handleChange} required/>
            <ValidationError className='error' prefix="Email" field="email" errors={state.errors}/>

            <textarea placeholder=" Votre Message..." id="message" name="message" onChange={handleChange} required/>
            <ValidationError className='error' prefix="Message" field="message"errors={state.errors}/>

            <button className='contact_form-submit' type="submit" disabled={state.submitting}>{state.submitting ? "Envoi en cours..." : "Envoyer"}</button>
        </form>
    )
}

export default ContactForm;