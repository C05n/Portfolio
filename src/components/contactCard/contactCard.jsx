function ContactCard ({$cardlink, $cardtext}) {
    return (
        <div className="contact_cards-card">
            <img src={$cardlink} alt="" />
            <p>{$cardtext}</p>
        </div>
    )
}

export default ContactCard;