import pic1 from "@/img/pic1.jpg";
import pic2 from "@/img/pic2.jpg";
import pic3 from "@/img/pic3.jpg";
import { StaticImageData } from "next/image";
import ComponentModel from "./ComponentModel";
import TitleModel from "./TitleModel";

export default function Marketing() {
  type DataItem = {
    title: string;
    des: string;
    img: StaticImageData; // Assuming your images are imported as StaticImageData
  };

  const data: DataItem[] = [
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic1 },
    { title: "banana", des: "this is the des", img: pic2 },
    { title: "apple", des: "this is the des", img: pic3 },
    { title: "banana", des: "this is the des", img: pic2 },
    { title: "apple", des: "this is the des", img: pic3 },
    { title: "banana", des: "this is the des", img: pic2 },
    { title: "apple", des: "this is the des", img: pic3 },
  ];
  return (
    <div id="marketing">
      <TitleModel
        title="Marketing"
        description="Heros, feature sections, newsletter, sign-up forms - everything you need to build beautiful marketing website"
      />
      <ComponentModel data={data} name="Page Section" />
    </div>
  );
}
