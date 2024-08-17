export const Infos = (props = { avatar_url, userName, login, public_repos, followers, following, html_url }) => {
    return (
        <>
            <img src={props.avatar_url} alt={props.login} />
            <h1>{props.userName}</h1>
            <p>{props.login}</p>
            <p>{props.public_repos} repositórios criados</p>
            <p>{props.followers} seguidores, seguindo {props.following} membros </p>
            <a href={props.html_url}>Repositório</a>
        </>
    )
}