interface PropsButton {
    value: string;
    click: (value: string) => void;
  }
  
export const ButtonImage = ({ value, click }: PropsButton) => {
    return (
      <button
        className="bg-zinc-500 px-4 py-2 rounded-md capitalize"
        onClick={() => {
          click(value);
          console.log(value);
        }}
      >
        {value}
      </button>
    );
};