import pic1 from "@/img/pic1.jpg";
import pic2 from "@/img/pic2.jpg";
import pic3 from "@/img/pic3.jpg";
import { StaticImageData } from "next/image";
import ComponentModel from "./ComponentModel";
import TitleModel from "./TitleModel";

export default function Ecommerce() {
  type DataItem = {
    title: string;
    des: string;
    img: StaticImageData; // Assuming your images are imported as StaticImageData
  };

  const data: DataItem[] = [
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic2 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
  ];

  const data1: DataItem[] = [
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic2 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
  ];

  return (
    <div id="ecommerce">
      <TitleModel
        title="Ecommerce"
        description="Checkout forms, shopping carts, product views — everything you need to build your next ecommerce front-end."
      />
      <ComponentModel data={data} name="Components" />
      <ComponentModel data={data1} name="Page Example" />
    </div>
  );
}
