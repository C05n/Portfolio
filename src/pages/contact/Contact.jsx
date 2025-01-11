import InputForm from "../../components/InputForm/InputForm";
import ContactCard from "../../components/contactCard/contactCard"
import ContactForm from "../../containers/contactForm/contactForm";

function Contact() {
   return (
    <section className="contact">
      <ContactCard $cardlink="src\assets\svg\mail.svg" />
      <ContactCard $cardlink="src\assets\svg\linkedin.svg" />
      <ContactForm />
      </section>
   );
 }
 
 export default Contact;