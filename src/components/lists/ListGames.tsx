interface PropsGames {
  list: string[];
}

export default function ListGame(props: PropsGames) {

    const listGames = props.list.map((games) => {
        return (
            <li key={games}>
                {games}
            </li>
        )
    })
    
    return(
        <ol className="text-center">
            {listGames}
        </ol>
    )
}
