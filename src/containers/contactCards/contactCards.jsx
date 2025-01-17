import ContactCard from "../../components/contactCard/contactCard"

function ContactCards () {
   return (
      <div className="contact_cards">
         <ContactCard $cardImg="assets/svg/tools/github.svg" $cardtext="Retrouvez moi sur GitHub" $cardlink="https://github.com/C05n" />
         <ContactCard $cardImg="assets/svg/linkedin.svg" $cardtext="Contactez moi sur LinkedIn" $cardlink='https://www.linkedin.com/in/C05n/' />
      </div>
   )
}

export default ContactCards;