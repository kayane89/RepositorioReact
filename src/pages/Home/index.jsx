import { useEffect, useState } from "react";
import { Infos } from "../../components/Infos";

export const Home = () => {
    const [infos, setInfos] = useState([]);
    useEffect( ()=>{
        const getInfos = async()=>{
            const response = await fetch('https://api.github.com/users/bkayane89');
            const data = await response.json();
            setInfos(data);
            console.log(data);
        }
        getInfos();
    },[])
    return(
    <>
    <Infos
    avatar_url = {infos.avatar_url}
    userName = {infos.userName}
    login ={infos.login}
    public_repos = {infos.public_repos}
    followers = {infos.followers}
    following = {infos.following}
    html_url = {infos.html_url}
    />

    </>

)
}