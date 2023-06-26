interface PropsInput{
    value: number,
    change: ( value: number) => void
}

export default function InputSize(props: PropsInput){
    const handleInputChanged = (e:any) => {
        const inputValue = +e.target.value
        props.change(inputValue)
    }

    return(
        <input
        className="bg-zinc-700 text-white outline-none w-40 rounded-sm pl-2"
        type="number"
        value={props.value}
        onChange={handleInputChanged}
      />
    )
}