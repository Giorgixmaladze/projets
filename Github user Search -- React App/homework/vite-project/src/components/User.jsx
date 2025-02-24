import octocat from "../images/octocat.png"
import location from "../images/location.png"
import twitter from "../images/twitter.png"
import link from "../images/link.png"
import company from "../images/company.png"

const User = ({ color, data }) => {
    const [githubData, setGithubData] = data

    const obj = {
        name: "The Octocat",
        userName: "octocat",
        joinDate: "Joined 25 Jan 2011",
        bio: "This profile has no bio",
        repos: 8,
        followers: 3938,
        following: 9,
        location: "San Francisco",
        link: "https://github.blog",
        twitter: "Not available",
        git: "@github"
    }
    const joinDate = new Date(githubData.created_at);

    console.log(githubData)
    return (
        <div style={{backgroundColor:color ==="#141c2f"? "#1f2a48": "white", boxShadow: color ==="white"? "0px 0px 15px grey": "none"}  } id="userInfo">





            {githubData.length === 0 ? (
                
                <div id="data">
                    <div id="info1">
                        <img id="avatar" src={octocat} alt="" />
                        <div id="total">

                            <div id="userName">
                                <span>
                                    <h2 style={{color: color ==="#141c2f"? "#f1f1f3": "black" }}>{obj.name}</h2>
                                    <p>@{obj.userName}</p>
                                </span>

                                <h4>{obj.joinDate}</h4>

                            </div>




                            <p id="bio">{obj.bio}</p>
                        </div>
                    </div>


                    {/* repos */}
                    <div id="section" >
                        <div id="accInfo" style={{backgroundColor: color==="#141c2f"? "#141c2f": "white", boxShadow:color === "white"? "0px 0px 15px grey": "none"}}>
                            <span>
                                <p style={{color: color === "#141c2f"?"#bfc0c7": "gray"}} className="dataInfo">Repos</p>
                                <p style={{color: color === "#141c2f"?"#bfc0c7": "black"}} className="accData">{obj.repos}</p>
                            </span>
                            <span>
                                <p style={{color: color === "#141c2f"?"#bfc0c7": "gray"}} className="dataInfo">Followers</p>
                                <p style={{color: color === "#141c2f"?"#bfc0c7": "black"}} className="accData">{obj.followers}</p>
                            </span>
                            <span>
                                <p style={{color: color === "#141c2f"?"#bfc0c7": "gray"}} className="dataInfo">Following</p>
                                <p style={{color: color === "#141c2f"?"#bfc0c7": "black"}} className="accData">{obj.following}</p>
                            </span>

                        </div>


                        {/* location */}
                        <div id="detailedInfo">
                            <div>
                                <span>
                                    <img src={location} />
                                    <h4 style={{color: color === "#141c2f"?"#bfc0c7": "gray"}}>{obj.location}</h4>
                                </span>
                                <span>
                                    <img src={twitter} alt="" />
                                    <h4 style={{color: color === "#141c2f"?"#bfc0c7": "gray"}}>{obj.twitter}</h4>
                                </span>
                            </div>

                            <div>
                                <span>
                                    <img src={link} alt="" />
                                    <a style={{color: color === "#141c2f"?"#bfc0c7": "gray"}} href="">{obj.link}</a>
                                </span>
                                <span>
                                    <img src={company} alt="" />
                                    <h4 style={{color: color === "#141c2f"?"#bfc0c7": "gray"}}>@{obj.userName}</h4>
                                </span>

                            </div>




                        </div>

                    </div>

                </div>
                
                

            ) : (
                <div id="data">
                    <div id="info1">
                        <img id="avatar" src={githubData.avatar_url} alt="" />
                        <div id="total">

                            <div id="userName">
                                <span>
                                    <h2>{githubData.login}</h2>
                                    <p>@{githubData.name}</p>
                                </span>

                                <h4>Joined {`${joinDate.getDate().toString()}/ ${joinDate.getMonth() + 1}/ ${joinDate.getFullYear()}`}</h4>

                            </div>




                            <p id="bio">{githubData.bio}</p>
                        </div>
                    </div>


                    {/* repos */}
                    <div id="section">
                        <div id="accInfo">
                            <span>
                                <p className="dataInfo">Repos</p>
                                <p className="accData">{githubData.public_repos}</p>
                            </span>
                            <span>
                                <p className="dataInfo">Followers</p>
                                <p className="accData">{githubData.followers}</p>
                            </span>
                            <span>
                                <p className="dataInfo">Following</p>
                                <p className="accData">{githubData.following}</p>
                            </span>

                        </div>


                        {/* location */}
                        <div id="detailedInfo">
                            <div>
                                <span>
                                    <img src={location} />
                                    <h4>{githubData.location}</h4>
                                </span>
                                <span>
                                    <img src={twitter} alt="" />
                                    <h4>{githubData.twitter_username === null ? "Not available" : githubData.twitter_username}</h4>
                                </span>
                            </div>

                            <div>
                                <span>
                                    <img src={link} alt="" />
                                    <a href={githubData.html_url}>{githubData.html_url}</a>
                                </span>
                                <span>
                                    <img src={company} alt="" />
                                    <h4>@{githubData.name}</h4>
                                </span>

                            </div>




                        </div>

                    </div>

                </div>


            )}

        </div>
    )

}


export default User