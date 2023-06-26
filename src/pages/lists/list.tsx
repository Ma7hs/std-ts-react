import ListGame from "@/components/lists/ListGames";

export default function ListPage(){

    const list = [
        'GTA',
        'Dota 2',
        'Counter Strike : Global Offesinve',
        'Warframe',
        'Work Of Tanks Blitz',
        'War Thunder',
        'Paladins'
    ]

    return(
        <div className="flex flex-col justify-center items-center h-screen gap-20">
            <h1 className="font-black text-5xl">Listof most played games</h1>
            <ListGame list={list}/>
        </div>
    )
}