import React from 'react';
import headerimg from './assets/imgs/headerimg.jfif';
import postimg from './assets/imgs/postimg.jpeg';
import profileimg from './assets/imgs/profileimg.jpg';
import galleryimg from './assets/imgs/galleryimg.jpg';
import * as Icons from 'react-bootstrap-icons';
import * as IconFamily from 'react-icons/go';
import './assets/scss/right.scss'

const Right = () => {
    return (
        <div className="Rightbody">
            <div className="header">
                <div className="leftpart">
                    <p><Icons.Search /></p>
                    <input type="text" name="" id="" placeholder="Search Creator" />
                </div>
                <div className="rightpart">
                    <p><Icons.Cart3 /></p>
                    <p><span><Icons.Person /></span>Log Out</p>
                </div>
            </div>
            <div className="headerimg">
                <img src={headerimg} alt="" />
            </div>
            <div className="rbody">
                <div className="infoside">
                    <div className="profilepic">
                        <img src={profileimg} alt="" />
                    </div>
                    <div className="nameinfo">
                        <h2>Linda Jackson</h2>
                        <span className="attributes">
                            <span>@linda3</span>
                            <span>Last seen 1 hour ago</span>
                        </span>
                        <section className="follow">
                            <span>
                                <span className="f-icons"><Icons.People /></span>
                                <span>20 followers</span>
                            </span>
                            <span>
                                <span className="f-icons"><Icons.PersonPlus /></span>
                                <span>20 following</span>
                            </span>
                        </section>
                        <div className="buttons">
                            <a href="#"><span>FOLLOW</span></a>
                            <a href="#"><span>SUBSCRIBE</span></a>
                        </div>
                        <p className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias repellendus nisi minima, beatae sunt eligendi! Reiciendis, dolores incidunt. Veritatis reprehenderit praesentium iste autem qui recusandae eum quo obcaecati vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis non eveniet. Magni dicta quia ducimus vel ut commodi in eos ad et? Dicta, magni rem voluptatum vero labore at.
                        </p>
                        <div className="extras">
                            <span>
                                <span className="extra-icons">
                                    <Icons.Link45deg />
                                </span>
                                <span style={{ color: "initial" }}>
                                    @thomasbank
                                </span>
                            </span>
                            <span>
                                <span className="extra-icons"><IconFamily.GoLocation /></span>
                                <span>City Cloudy</span>
                            </span>
                        </div>
                    </div>
                    <div className="gallery">
                        <div className="store">
                            <div className="heading">
                                <span>Store</span>
                                <a href="#"><span>See all</span></a>
                            </div>
                            <div className="body">
                                <div className="cards">
                                    <img src={galleryimg} alt="" />
                                    <p className="text">Lorem ipsum</p>
                                    <h2 className="tags">$15</h2>
                                </div>
                                <div className="cards">
                                    <img src={galleryimg} alt="" />
                                    <p className="text">Lorem ipsum</p>
                                    <h2 className="tags">$15</h2>
                                </div><div className="cards">
                                    <img src={galleryimg} alt="" />
                                    <p className="text">Lorem ipsum</p>
                                    <h2 className="tags">$15</h2>
                                </div>
                            </div>
                        </div>
                        <div className="photos">
                            <div className="heading">
                                <span>Photos</span>
                                <a href="#"><span>See all</span></a>
                            </div>
                            <div className="body">
                                <div className="cards">
                                    <img src={galleryimg} alt="" />
                                </div>
                                <div className="cards">
                                    <img src={galleryimg} alt="" />
                                </div><div className="cards">
                                    <img src={galleryimg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="photos">
                            <div className="heading">
                                <span>Photos</span>
                                <a href="#"><span>See all</span></a>
                            </div>
                            <div className="body">
                                <div className="cards">
                                    <img src={galleryimg} alt="" />
                                </div>
                                <div className="cards">
                                    <img src={galleryimg} alt="" />
                                </div><div className="cards">
                                    <img src={galleryimg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="postside">
                    <div className="rbody-header">
                        <section>
                            <span className="rh-icons"><Icons.FilePost /></span>
                            <span>Posts</span>
                        </section>
                        <section>
                            <span className="rh-icons"><Icons.Image/></span>
                            <span>Photos</span>
                        </section>
                        <section>
                            <span className="rh-icons"><Icons.CameraVideo/></span>
                            <span>Videos</span>
                        </section>
                    </div>
                    <div className="search-row">
                        <p>77 Posts</p>
                        <p><Icons.Search/></p>
                    </div>
                    <div className="content">
                        <div className="card">
                            <div className="name-row">
                                <div className="name-row-left">
                                    <section>
                                        <a href="#"><img src={profileimg} alt="" /></a>
                                    </section>
                                    <section >
                                        <p className="name">
                                            Linda Jackson
                                        </p>
                                        <p className="id">
                                            @linda3
                                        </p>
                                    </section>
                                </div>
                                
                                <section>
                                    <span className="date">
                                        May 14, 2021
                                    </span>
                                </section>
                            </div>
                            <section>
                                <img src={postimg} alt="" />
                                <div className="on-hover">
                                    <div>SAVE</div>
                                    <div>SHARE</div>
                                </div>
                            </section>
                            
                            <div className="response-row">
                                <span><Icons.Heart/> 1147</span>
                                <span><Icons.CameraVideo/> 547</span>
                                <span><Icons.CurrencyDollar/> Send Me</span>
                                <span><Icons.Flag/></span>
                            </div>
                            <div className="desc-row">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem iusto in earum necessitatibus. Minima voluptatem consequatur dolore, perspiciatis doloribus amet, corporis totam quam deserunt molestias neque mollitia adipisci eaque maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam at placeat rerum nihil, voluptas asperiores laborum ea delectus consequatur repellendus non quaerat velit corporis eligendi modi, officia amet ex molestiae?
                            </div>
                        </div>
                        <div className="card">
                            <div className="name-row">
                                <div className="name-row-left">
                                    <section>
                                    <a href="#"><img src={profileimg} alt="" /></a>
                                    </section>
                                    <section >
                                        <p className="name">
                                            Linda Jackson
                                        </p>
                                        <p className="id">
                                            @linda3
                                        </p>
                                    </section>
                                </div>
                                
                                <section>
                                    <span className="date">
                                        May 14, 2021
                                    </span>
                                </section>
                            </div>
                            <section>
                                <img src={postimg} alt="" />
                                <div className="on-hover">
                                    <div>SAVE</div>
                                    <div>SHARE</div>
                                </div>
                            </section>
                            
                            <div className="response-row">
                                <span><Icons.Heart/> 1147</span>
                                <span><Icons.CameraVideo/> 547</span>
                                <span><Icons.CurrencyDollar/> Send Me</span>
                                <span><Icons.Flag/></span>
                            </div>
                            <div className="desc-row">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem iusto in earum necessitatibus. Minima voluptatem consequatur dolore, perspiciatis doloribus amet, corporis totam quam deserunt molestias neque mollitia adipisci eaque maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam at placeat rerum nihil, voluptas asperiores laborum ea delectus consequatur repellendus non quaerat velit corporis eligendi modi, officia amet ex molestiae?
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Right;