import Image from "next/image";
import { useState } from "react";
import { ButtonImage } from "./ButtonImage";
import InputSize from "./inputSize";

export default function RandomImages() {
  const [image, setImage] = useState<string>("random");
  const [size, setSize] = useState<number>(300);
  const url: string = "https://source.unsplash.com/featured/300x300?";

  return (
    <div className="flex flex-col gap-3 p-7 rounded-lg bg-blue-900">
      <div className="flex flex-row gap-5 justify-center text-white">
        <p className="capitalize font-black">{image}</p>
        <p>{`${size}px x ${size}px`}</p>
      </div>
      <Image
        src={`${url}${size}x${size}?${image}`}
        height={300}
        width={300}
        alt="Image"
        className="rounded-lg"
      />
      <div className="flex justify-evenly gap-5">
        <ButtonImage value="abstract" click={setImage}/>
        <ButtonImage value="people" click={setImage}/>
        <ButtonImage value="animals" click={setImage}/>
      </div>
      <InputSize value={size} change={setSize}/>
    </div>
  );
}
