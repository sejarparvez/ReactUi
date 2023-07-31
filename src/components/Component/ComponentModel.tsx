import Image, { StaticImageData } from "next/image";
import { v4 as uuidv4 } from "uuid";

type DataItem = {
  title: string;
  des: string;
  img: StaticImageData;
};

type ComponentModelProps = {
  data: DataItem[];
  name: string;
};

export default function ComponentModel({ data, name }: ComponentModelProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-4 py-12 border-t">
      <div className="lg:w-1/4 w-full font-bold text-xl">{name}</div>
      <div className="lg:w-3/4 w-full flex flex-col md:grid grid-cols-3 gap-8">
        {data.map((item) => (
          <div key={uuidv4()}> {/* Use uuidv4() to generate a unique key */}
            <div className="flex rounded-md p-4 bg-gray-300">
              <Image
                src={item.img}
                alt=""
                className="w-full h-40 rounded-md object-cover"
              />
            </div>
            <p className="font-bold mt-3 mb-1">{item.title}</p>
            <p>{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
