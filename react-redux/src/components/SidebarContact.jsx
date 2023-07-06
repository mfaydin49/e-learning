import {useSelector} from "react-redux";

const SidebarContact = () => {
    const {contacts} = useSelector((store) => store);

    return contacts.data.map((contact, key) => {
        return (
            <div key={key}>
                <p className="contact-title">{contact.position}</p>
                <p className="contact-person">{contact.name}</p>
                <a href='mailto:${contact.mail}'>{contact.mail}</a>
            </div>
        )
    })
}

export default SidebarContact;