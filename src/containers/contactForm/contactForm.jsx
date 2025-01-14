import InputForm from "../../components/inputForm/inputForm";

function ContactForm() {
    return (
        <div className="contact_form">
            <InputForm $type="text" $placeholder="Votre nom" $label="name"/>
            <InputForm $type="Email" $placeholder="E-mail" $label ="email"/>
            <label htmlFor="message"></label>
            <textarea placeholder=" Votre Message..." id="message" rows={20}></textarea>
            <InputForm $className="contact_form-submit" $type="submit" $label="envoyer" />
        </div>
    )
}

export default ContactForm;