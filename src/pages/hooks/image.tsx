import RandomImages from "@/components/hooks/RandomImage";

export default function generatingImage(){
    return(
        <div className={
            `flex flex-wrap gap-5 justify-center h-screen items-center`
        }>
            <RandomImages/>
        </div>
    )
}