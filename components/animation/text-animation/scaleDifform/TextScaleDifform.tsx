import { useState } from "react";
import TextSpan from "./TextSpan";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Palette } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface TextScaleDifformProps {
  text: string;
  name?: string;
  className?: string;
}

const TextScaleDifform = ({ text, name, className }: TextScaleDifformProps) => {
  const [isMarioColors, setIsMarioColors] = useState<boolean>(false);
  const [sentence, setSentence] = useState<string>(text);
  const letters = sentence.split("");

  const [nameInput, setNameInput] = useState<string>(name || "");
  const nameLetters = nameInput.split("");

  return (
    <div className={cn(className)}>
      {letters.map((letter, index) => {
        return (
          <TextSpan marioColors={isMarioColors} key={index}>
            {letter}
          </TextSpan>
        );
      })}

      {/* <div className="flex justify-center items-center">
        <Switch
          id="switchColor"
          checked={isMarioColors}
          onClick={() => setIsMarioColors(!isMarioColors)}
        />
        <Label htmlFor="switchColor">
          <Palette />
        </Label>
      </div> */}

      {/* {nameLetters.map((letter, index) => {
        return (
          <TextSpan marioColors={isMarioColors} key={index}>
            {letter}
          </TextSpan>
        );
      })}

      <div className="flex justify-center items-center">
        <Input
          id="inputText"
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Hello World"
          className="w-40"
          maxLength={10}
        />
      </div> */}
    </div>
  );
};

export default TextScaleDifform;
