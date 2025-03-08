import React from 'react';
import { Link  } from 'react-router-dom';

// Import images
import TeamImg1 from '../../assets/images/resource/team-1.jpg';
import TeamImg2 from '../../assets/images/resource/team-2.jpg';
import TeamImg3 from '../../assets/images/resource/team-3.jpg';

function Team() {
    return (
        <>
           <section className="">
		<div className="container pb-70">
			<div className="row">
				<div className="team-block col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box mb-md-30">
						<div className="image-box">
							<figure className="image"><Link  to="/team-details"><img src={TeamImg1}  alt="" /></Link ></figure>
						</div>
						<div className="info-box">
							<h5 className="name"><Link  to="/team-details">Kevin Martin</Link ></h5>
							<span className="designation">designer</span>
							<ul className="social-Link s">
								<li><Link  to="#"><span className="fab fa-twitter"></span></Link ></li>
								<li><Link  to="#"><span className="fab fa-facebook-f"></span></Link ></li>
								<li><Link  to="#"><span className="fab fa-instagram"></span></Link ></li>
							</ul>
						</div>
					</div>
				</div>

				<div className="team-block col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box mb-md-30">
						<div className="image-box">
							<figure className="image"><Link  to="/team-details"><img src={TeamImg2}  alt="" /></Link ></figure>
						</div>
						<div className="info-box">
							<h5 className="name"><Link  to="/team-details">Aleesha Brown</Link ></h5>
							<span className="designation">co founder</span>
							<ul className="social-Link s">
								<li><Link  to="#"><span className="fab fa-twitter"></span></Link ></li>
								<li><Link  to="#"><span className="fab fa-facebook-f"></span></Link ></li>
								<li><Link  to="#"><span className="fab fa-instagram"></span></Link ></li>
							</ul>
						</div>
					</div>
				</div>

				<div className="team-block col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box">
						<div className="image-box">
							<figure className="image"><Link  to="/team-details"><img src={TeamImg3}  alt="" /></Link ></figure>
						</div>
						<div className="info-box">
							<h5 className="name"><Link  to="/team-details">Sarah Albert</Link ></h5>
							<span className="designation">developer</span>
							<ul className="social-Link s">
								<li><Link  to="#"><span className="fab fa-twitter"></span></Link ></li>
								<li><Link  to="#"><span className="fab fa-facebook-f"></span></Link ></li>
								<li><Link  to="#"><span className="fab fa-instagram"></span></Link ></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    );
}

export default Team;
