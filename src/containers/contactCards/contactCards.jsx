import ContactCard from "../../components/contactCard/contactCard"

function ContactCards () {
   return (
      <div className="contact_cards">
         <ContactCard $cardlink="assets/svg/tools/github.svg" $cardtext="Retrouvez moi sur GitHub" />
         <ContactCard $cardlink="assets/svg/linkedin.svg" $cardtext="Contactez moi sur LinkedIn" />
      </div>
   )
}

export default ContactCards;