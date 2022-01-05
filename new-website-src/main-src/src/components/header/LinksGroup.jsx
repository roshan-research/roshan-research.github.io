import JoinUsButton from "./JoinUsButton";
import ContactUsButton from "./ContactUsButton";
import '../../stylesheets/links-group.scss'

function LinksGroup() {
    return (
        <div className='links-group'>
            <ContactUsButton/>
            <JoinUsButton/>
        </div>
    )
}

export default LinksGroup;
