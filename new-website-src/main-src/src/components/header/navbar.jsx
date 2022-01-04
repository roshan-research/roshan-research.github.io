import DoubleTextGroup from "./links-group";
import IconTextGroup from "./roshan-icon-group";
import '../../stylesheets/navbar.scss'
import MenuButtons from "./menu-buttons";
import {motion} from 'framer-motion';

function Navbar(props) {
    return (
        <motion.div className='navbar'>
            <DoubleTextGroup />
            <IconTextGroup/>
            <MenuButtons toggle={props.toggle} isOpen={props.isOpen}/>
        </motion.div>
    )
}

export default Navbar;
