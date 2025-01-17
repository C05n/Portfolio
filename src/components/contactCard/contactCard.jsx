import { NavLink } from "react-router-dom";

function ContactCard ({$cardlink, $cardtext, $cardImg}) {
    return (
        <div className="contact_cards-card">
            <NavLink to={$cardlink} href="_blank" className="contact_cards-card-link">
                <img src={$cardImg} alt="" />
                <p>{$cardtext}</p>
            </NavLink>
        </div>
    )
}

export default ContactCard;