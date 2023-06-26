import Box from "@/components/basic/Box";

export default function createBox(){
    return(
        <div className="flex gap-2 justify-center items-center h-[100vh]">
            <Box>Matheus</Box>
            <Box>Learing</Box>
            <Box>NextJS with TypeScript</Box>
        </div>
    )
}