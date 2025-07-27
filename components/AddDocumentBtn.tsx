"use client"
import { Button } from "./ui/button";
import Image from "next/image";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const addDocumentHandller = async () => {};
 
  return (
    <Button
      className="gradient-blue flex gap-1 shadow-md"
      onClick={addDocumentHandller}
      type="submit"
    >
        <Image 
        src="/assets/icons/add.svg"
        alt="add"
        width={24}
        height={24}/>
      <p className="hidden sm:block"> Start a blank document </p>
    </Button>
  );
};

export default AddDocumentBtn;
