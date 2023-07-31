import pic1 from "@/img/pic1.jpg";
import pic2 from "@/img/pic2.jpg";
import pic3 from "@/img/pic3.jpg";
import { StaticImageData } from "next/image";
import ComponentModel from "./ComponentModel";
import TitleModel from "./TitleModel";

export default function ApplicationUi() {
  type DataItem = {
    title: string;
    des: string;
    img: StaticImageData; // Assuming your images are imported as StaticImageData
  };

  const data: DataItem[] = [
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic2 },
    { title: "mango", des: "hello world", img: pic3 },
  ];

  const data1: DataItem[] = [
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic2 },
    { title: "mango", des: "hello world", img: pic3 },
  ];

  const data2: DataItem[] = [
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic2 },
    { title: "mango", des: "hello world", img: pic3 },
  ];

  const data3: DataItem[] = [
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic2 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
  ];

  const data4: DataItem[] = [
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic2 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic2 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic2 },
    { title: "mango", des: "hello world", img: pic3 },
  ];

  const data5: DataItem[] = [
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic2 },
  ];

  const data6: DataItem[] = [
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic2 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
  ];

  const data7: DataItem[] = [
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic2 },
    { title: "mango", des: "hello world", img: pic3 },
  ];

  const data8: DataItem[] = [
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic2 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
  ];

  const data9: DataItem[] = [
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic3 },
    { title: "mango", des: "hello world", img: pic2 },
    { title: "mango", des: "hello world", img: pic3 },
  ];

  const data10: DataItem[] = [
    { title: "mango", des: "hello world", img: pic1 },
    { title: "mango", des: "hello world", img: pic2 },
    { title: "mango", des: "hello world", img: pic3 },
  ];

  return (
    <div id="application">
      <TitleModel
        title="Application Ui"
        description="Form layouts, tables, modal dialogs — everything you need to build beautiful responsive web applications."
      />
      <ComponentModel data={data} name="Application Shells" />
      <ComponentModel data={data1} name="Heading" />
      <ComponentModel data={data2} name="Data Display" />
      <ComponentModel data={data3} name="Lists" />
      <ComponentModel data={data4} name="Forms" />
      <ComponentModel data={data5} name="Feedback" />
      <ComponentModel data={data6} name="Navigation" />
      <ComponentModel data={data7} name="Overlays" />
      <ComponentModel data={data8} name="Elements" />
      <ComponentModel data={data9} name="Layout" />
      <ComponentModel data={data10} name="Page Example" />
    </div>
  );
}
