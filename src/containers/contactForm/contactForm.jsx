import InputForm from "../../components/InputForm/InputForm";

function ContactForm() {
    return (
        <div className="contact_form">
            <InputForm $type="text" $placeholder="Votre nom" />
            <InputForm $type="Email" $placeholder="E-mail" />
            <textarea placeholder=" Votre Message..." rows={20}></textarea>
            <InputForm $className="contact_form-submit" $type="submit" />
        </div>
    )
}

export default ContactForm;