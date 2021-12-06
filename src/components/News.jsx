import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
		<>
			<div className="tokyo_tm_news">
				<div className="tokyo_tm_title" style={{marginBottom:10}}>
					<div className="title_flex">
						<div className="left">
							<span>Resume</span>
              <span style={{marginLeft:10}} id="download-resume"><a href="assets/img/resume/Parker-Bolick-Resume.pdf" download="parker-bolick-resume.pdf">Download PDF</a></span>
						</div>
					</div>
				</div>
				{/* END TITLE */}

				<embed
					src="assets/img/resume/Parker-Bolick-Resume.pdf"
					frameBorder="0"
					scrolling="auto"
					width="100%"
          height="800px"
				/>
			</div>
		</>
	);
};

export default News;
