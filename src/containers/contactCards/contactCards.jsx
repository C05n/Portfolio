import ContactCard from "../../components/contactCard/contactCard"

function ContactCards () {
   return (
      <div className="contact_cards">
         <ContactCard $cardlink="src\assets\svg\mail.svg" />
         <ContactCard $cardlink="src\assets\svg\linkedin.svg" />
      </div>
   )
}

export default ContactCards;