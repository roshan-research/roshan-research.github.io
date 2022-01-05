import LinksGroup from "./LinksGroup";
import IconTextGroup from "./RoshaniIconGroup";
import '../../stylesheets/navbar.scss'
import MenuButtons from "./MenuButtons";
import {motion} from 'framer-motion';

function Navbar(props) {
    return (
        <motion.header className='navbar'>
            <LinksGroup/>
            <IconTextGroup/>
            <MenuButtons toggle={props.toggle} isOpen={props.isOpen}/>
        </motion.header>
    )
}

export default Navbar;
