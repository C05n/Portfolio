function ContactCard ({$cardlink, $cardtext}) {
    return (
        <div className="contact_card">
            <img src={$cardlink} alt="" />
            <p>{$cardtext}</p>
        </div>
    )
}

export default ContactCard;