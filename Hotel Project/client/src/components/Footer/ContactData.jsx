const ContactData = ({ icon, text }) => {
    return (
        <ul >
            <li className="flex items-center text-gray-600 gap-3">
                <img src={icon} />
                {text}
            </li>
        </ul>
    )
}

export default ContactData