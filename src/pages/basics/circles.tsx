import { CircleComponent } from "@/components/basic/Circle";

export default function createCircle(){
    return (
        <div>
            <h1 className="text-center">Circle Page</h1>
            <div className="flex justify-evenly items-center h-screen">
                <CircleComponent text="Circle #1" id={1}></CircleComponent>
                <CircleComponent text="Circle #2" id={2} perfectly={true}></CircleComponent>
                <CircleComponent text="Circle #3" id={3}></CircleComponent>
            </div>
        </div>
    )
}