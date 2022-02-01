import '../../stylesheets/header-button.scss';

function ContactUsButton() {
    return (
        <div title={'بخش تماس با ما'} style={{marginTop: '6px'}}>
            <a href={'https://www.roshan-ai.ir/contact-us'} className={'header-button'}>
                تماس با ما
            </a>
        </div>
    )
}

export default ContactUsButton;
