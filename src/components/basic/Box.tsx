export default function Box(props: any){
    return(
        <div className="bg-purple-500 m-2 rounded-md p-2 w-64 h-64 text-center text-2xl font-bold flex justify-center items-center">
            <p>{props.children}</p>
        </div>
    )
}