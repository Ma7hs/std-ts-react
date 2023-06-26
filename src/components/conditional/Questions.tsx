import { IconArrowDown, IconArrowUp } from "@tabler/icons-react";
import { useState } from "react";

interface QuestProps {
  question: string;
  aswers: string;
}

export default function Questions(props: QuestProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="border border-white rounded-md gap-5 select-none overflow-hidden">
      <div
        className="bg-zinc-700 cursor-pointer p-5 flex justify-between"
        onClick={() => setOpen(!open)}
      >
        {props.question}
        {open ?  <IconArrowUp/>: <IconArrowDown/>}
      </div>
      {open && <div className="bg-black p-5">{props.aswers}</div>}
    </div>
  );
}
