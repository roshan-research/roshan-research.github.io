import JoinUsButton from "./join-us-button";
import ContactUsButton from "./contact-us-button";
import '../../stylesheets/links-group.scss'

function DoubleTextGroup() {
    return (
        <div className='links-group'>
            <ContactUsButton/>
            <JoinUsButton/>
        </div>
    )
}

export default DoubleTextGroup;
