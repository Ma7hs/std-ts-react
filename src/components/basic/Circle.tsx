interface CircleProps{
    text: string,
    id: number,
    perfectly?: boolean
}


export function CircleComponent(props:CircleProps){    
    return(
        <div className={`
            flex justify-center items-center
            ${props.perfectly ? "rounded-2xl" : "rounded-full"}
            bg-red-600 h-[200px] w-[200px]
        `}>
            {props.text}
        </div>
    )
}