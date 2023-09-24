import JoinUsButton from "./JoinUsButton";
import ContactUsButton from "./ContactUsButton";
import '../../stylesheets/links-group.scss'
import '../../stylesheets/header-button.scss'
import {Fullpage} from 'fullpage-react';
const { changeFullpageSlide} = Fullpage;

const goToClients = changeFullpageSlide.bind(null, 5);

function LinksGroup() {
    return (
        <nav className='links-group'>
            <button onClick={goToClients}
                    className={'header-button'}
                    id={'clients-button'}
                    title={'بخش مشتریان ما'}
            >
                مشتریان ما
            </button>
            <ContactUsButton/>
            <JoinUsButton/>
        </nav>
    )
}

export default LinksGroup;
