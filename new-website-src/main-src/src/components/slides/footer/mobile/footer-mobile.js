import {ReactComponent as Email} from "../../../../assets/images/email.svg";
import {ReactComponent as Name} from "../../../../assets/images/sherkat.svg";
import './footer-mobile.scss';

export default function FooterMobile(){
    return(
        <div>
            <div id={'email-name-mobile'}>
                <Name id={'name-mobile'}/>
                <a
                    title={'تماس از طریق ایمیل'}
                    href={'mailto:salam@roshan-ai.ir'}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Email id={'email-mobile'}/>
                </a>
            </div>
        </div>
    )
}
