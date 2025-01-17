import InputForm from "../../components/inputForm/inputForm";

function ContactForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        if (!name || !email) {
            alert("Veuillez remplir tous les champs.");
            return;
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact_form">
            <InputForm $type="text" $placeholder="Votre nom" $label="name"/>
            <InputForm $type="email" $placeholder="E-mail" $label ="email"/>
            <label htmlFor="message"></label>
            <textarea placeholder=" Votre Message..." id="message" rows={20}></textarea>
            <InputForm $className="contact_form-submit" $type="submit" $label="envoyer" />
        </form>
    )
}

export default ContactForm;