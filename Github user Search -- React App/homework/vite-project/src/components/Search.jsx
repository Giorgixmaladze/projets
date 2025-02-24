import { useEffect, useState } from "react";

const fetchData = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

function Search({color,data}) {
    const [githubData, setGithubData] = data;


    


    const handleSearch = async (e) => {
        e.preventDefault();
        const data = await fetchData(e.target.search.value);
        setGithubData(data);
        console.log(data)
    };

    return (
        <div id="search" style={{backgroundColor: color === "#141c2f" ? "#1f2a48" : "white" }}>
            <form onSubmit={handleSearch}>
                <input style={{color: color === "#141c2f" ? "grey" : "black" }} type="text" name="search" placeholder="Enter GitHub username" />
                <button type="submit">Search</button>
            </form>
{/* 
            {githubData && (
                <div>
                    <h2>{githubData.login}</h2>
                    <img src={githubData.avatar_url} alt="Avatar" width={100} />
                    <p>Followers: {githubData.followers}</p>
                    <p>Repositories: {githubData.public_repos}</p>
                </div>
            )} */}

        </div>
    );
}

export default Search;
