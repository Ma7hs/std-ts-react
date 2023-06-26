import Events from "@/components/basic/Events";

export default function EventsPage(){
    return(
        <div className={
            `flex flex-wrap h-screen justify-center gap-5 items-center`
        }>
            <Events/>
            <Events/>
            <Events/>
            <Events/>
        </div>
    )
}