import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";
import {
	SiJavascript,
	SiPython,
	SiReact,
	SiRedux,
	SiHtml5,
  SiCss3,
  SiExpress,
  SiFlask,
  SiSequelize,
  SiPostgresql

} from "react-icons/si";

Modal.setAppElement("#root");

const About = () => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleModal() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<div className="tokyo_tm_about">
				<div className="about_image ">
					<img
						src="assets/img/slider/Parker-About.JPG"
						alt="about"
						style={{ height: 400, objectFit: "cover" }}
					/>
				</div>
				{/* <div className="o-video">
          <iframe src="https://www.youtube.com/embed/0yW7w8F2TVA"></iframe>
        </div> */}
				{/* END ABOUT IMAGE */}
				<div className="description">
					<h3 className="name">Parker Bolick - Software Engineer</h3>
					<div className="description_inner">
						<div className="left">
							<p>
								Hello, I am a software engineer based in Atlanta and enjoy
								building beautiful applications that provide an engaging user
								experience. I enjoy the process of starting with an idea,
								creating a plan of action, navigating through the problem
								solving process and seeing my idea come to life. Browse my
								portfolio to take a look at my work!
							</p>
						</div>
						{/* END LEFT */}
						<div className="right">
							<ul>
								<li>
									<p>
										<span>Birthday:</span>04.30.1997
									</p>
								</li>
								<li>
									<p>
										<span>Age:</span>24
									</p>
								</li>
								<li>
									<p>
										<span>Email:</span>
										<a href="mailto:bolickparker@gmail.com">
											bolickparker@gmail.com
										</a>
									</p>
								</li>
								<li>
									<p>
										<span>Phone:</span>
										<a href="tel:+17069455909">706 945-5909</a>
									</p>
								</li>
								<li>
									<p>
										<span>Study:</span>University of Georgia
									</p>
								</li>
							</ul>
							{/* END UL */}
						</div>
						{/* END RIGHT */}
					</div>
					{/* END DESCRIPTION INNER */}
				</div>
			</div>

			<div className="my_box">
				<div className="left">
					<div className="about_title">
						<h3>Skills</h3>
					</div>
					{/* END ABOUT TITLE */}

					<div className="tokyo_progress" style={{ marginBottom: 40 }}>
						<div id="skill-block">
							<div id="skill-title">JavaScript & Python</div>

							<div id="skill-icons">
								<SiJavascript size="3em" />
								<SiPython size="3em" />
							</div>
						</div>
						<div id="skill-block">
							<div id="skill-title">React & Redux</div>
							<div id="skill-icons">
								<SiReact size="3em" />
								<SiRedux size="3em" />
							</div>
						</div>
						<div id="skill-block">
							<div id="skill-title">HTML & CSS</div>
							<div id="skill-icons">
								<SiHtml5 size="3em" />
								<SiCss3 size="3em" />
							</div>
						</div>
						<div id="skill-block">
							<div id="skill-title">Express & Flask</div>
							<div id="skill-icons">
								<SiExpress size="3em" />
								<SiFlask size="3em" />
							</div>
						</div>
						<div id="skill-block">
							<div id="skill-title">Sequelize & PostgreSQL</div>
							<div id="skill-icons">
								<SiSequelize size="3em" />
								<SiPostgresql size="3em" />
							</div>
						</div>
					</div>
					{/* EDN TOKYO PROGRESS */}
				</div>
				{/* END RIGHT */}
			</div>
			{/* END MYBOX */}
		</>
	);
};

export default About;
