import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

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
					<img src="assets/img/slider/Parker-About.JPG" alt="about"
          style={{height: 400, objectFit:"cover"}}/>
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
							<div className="tokyo_tm_button">
								<button onClick={toggleModal} className="ib-button">
									Read More
								</button>
							</div>
							{/* END TOKYO BUTTON */}
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

			{/* START ABOUT POPUP BOX */}
			<Modal
				isOpen={isOpen}
				onRequestClose={toggleModal}
				contentLabel="My dialog"
				className="mymodal"
				overlayClassName="myoverlay"
				closeTimeoutMS={500}
			>
				<div className="tokyo_tm_modalbox_about">
					<button className="close-modal" onClick={toggleModal}>
						<img src="assets/img/svg/cancel.svg" alt="close icon" />
					</button>
					{/* END POPUP CLOSE BUTTON */}
					<div className="box-inner">
						<div
							className="description_wrap scrollable"
							data-aos="fade-right"
							data-aos-duration="1200"
						>
							<div className="my_box">
								<div className="left">
									<div className="about_title">
										<h3>Skills</h3>
									</div>
									{/* END ABOUT TITLE */}

									<div className="tokyo_progress">
										<div className="progress_inner" data-value="95">
											<span>
												<span className="label">ReactJS</span>
												<span className="number">95%</span>
											</span>
											<div className="background">
												<div className="bar">
													<div
														className="bar_in"
														style={{ width: 95 + "%" }}
													></div>
												</div>
											</div>
										</div>

										<div className="progress_inner" data-value="80">
											<span>
												<span className="label">JavaScript</span>
												<span className="number">95%</span>
											</span>
											<div className="background">
												<div className="bar">
													<div
														className="bar_in"
														style={{ width: 80 + "%" }}
													></div>
												</div>
											</div>
										</div>

										<div className="progress_inner" data-value="90">
											<span>
												<span className="label">Python</span>
												<span className="number">80%</span>
											</span>
											<div className="background">
												<div className="bar">
													<div
														className="bar_in"
														style={{ width: 90 + "%" }}
													></div>
												</div>
											</div>
										</div>
									</div>
									{/* END PROGRESS */}
								</div>
								{/* END LEFT */}

								<div className="right">
									<div className="about_title">
										<h3> </h3>
									</div>
									{/* END TITLE */}
									<div className="tokyo_progress">
										<div className="progress_inner" data-value="95">
											<span>
												<span className="label">Express</span>
												<span className="number">95%</span>
											</span>
											<div className="background">
												<div className="bar">
													<div
														className="bar_in"
														style={{ width: 95 + "%" }}
													></div>
												</div>
											</div>
										</div>

										<div className="progress_inner" data-value="90">
											<span>
												<span className="label">Flask</span>
												<span className="number">95%</span>
											</span>
											<div className="background">
												<div className="bar">
													<div
														className="bar_in"
														style={{ width: 90 + "%" }}
													></div>
												</div>
											</div>
										</div>

										<div className="progress_inner" data-value="85">
											<span>
												<span className="label">PostgreSQL</span>
												<span className="number">95%</span>
											</span>
											<div className="background">
												<div className="bar">
													<div
														className="bar_in"
														style={{ width: 85 + "%" }}
													></div>
												</div>
											</div>
										</div>
									</div>
									{/* EDN TOKYO PROGRESS */}
								</div>
								{/* END RIGHT */}
							</div>
							{/* END MYBOX */}

							<div className="counter">
								<div className="about_title">
									<h3>Fun Facts</h3>
								</div>
								<ul>
									<li>
										<div className="list_inner">
											<h3>4</h3>
											<span>Published Projects</span>
										</div>
									</li>
									<li>
										<div className="list_inner">
											<h3>9K+</h3>
											<span>Lines of Code</span>
										</div>
									</li>
								</ul>
								{/* END COUNTER CONTENT */}
							</div>
							{/* END COUNTER */}

							{/* END PARTNER SLIDER */}
						</div>
					</div>
				</div>
			</Modal>
			{/* END ABOUT POPUP BOX */}
		</>
	);
};

export default About;
