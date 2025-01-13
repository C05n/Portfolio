import ContactCard from "../../components/contactCard/contactCard"

function ContactCards () {
   return (
      <div className="contact_cards">
         <ContactCard $cardlink="src\assets\svg\mail.svg" $cardtext="Envoyez moi un E-mail" />
         <ContactCard $cardlink="src\assets\svg\linkedin.svg" $cardtext="Contactez moi sur LinkedIn" />
      </div>
   )
}

export default ContactCards;