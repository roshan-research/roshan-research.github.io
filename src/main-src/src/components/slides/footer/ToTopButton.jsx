import { Component } from "react";
import { Fullpage } from "fullpage-react";
import "../../../stylesheets/to-top.scss";
import { flowerAnimation } from "../../../animations/kashf-image";
import { motion } from "framer-motion";
const { changeFullpageSlide } = Fullpage;

const goToTop = changeFullpageSlide.bind(null, 0);

class ToTopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBottom: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );

    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    const distanceFromBottom = documentHeight - (scrollPosition + windowHeight);

    if (distanceFromBottom <= 154) {
      this.setState({ isBottom: true }); // Increase the bottom margin to 80px
    } else {
      this.setState({ isBottom: false }); // Maintain the initial bottom margin of 40px
    }
  };

  render() {
    const { isBottom } = this.state;

    return (
      <>
        {isBottom ? (
          <motion.div
            id={"to-top"}
            onClick={goToTop}
            className={"to-top-clients"}
            variants={flowerAnimation}
            initial={"hidden"}
            animate={"visible"}
            style={{
              bottom: "196px",
              position: "absolute",
              transition: "none",
            }}>
            &uarr;
          </motion.div>
        ) : (
          <motion.div
            id={"to-top"}
            onClick={goToTop}
            className={"to-top-clients"}
            variants={flowerAnimation}
            initial={"hidden"}
            animate={"visible"}
            style={{
              bottom: "40px",
              position: "fixed",
              transition: "none",
            }}>
            &uarr;
          </motion.div>
        )}
      </>
    );
  }
}

export default ToTopButton;
