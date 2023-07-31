import Link from "next/link";
import FaqItem from "./FaqItem";

export default function FaqGen() {
  return (
    <div>
      <div className="text-gray-500 font-medium">General</div>
      <div className="flex flex-col">
        <div className="border-b pb-4">
          <FaqItem
            question="What does 'lifetime access' mean exactly?"
            answer={
              <div className="flex flex-col gap-4">
                <p>
                  Tailwind UI products are a{" "}
                  <span className="font-bold text-black">
                    {" "}
                    one-time purchase, with no recurring subscription.{" "}
                  </span>
                  When you purchase any Tailwind UI product, you have access to
                  all of the content in that product forever.
                </p>
              </div>
            }
          />
        </div>
        <div>
          <FaqItem
            question="What does 'free updates' include?"
            answer={
              <div className="flex flex-col gap-4">
                <p>
                  When you purchase any Tailwind UI product, any improvements we
                  make or new content we add to that product will always be free
                  for anyone who owns that product.
                </p>
                <p>
                  <span className="font-bold text-black">
                    Individual component packages:
                  </span>{" "}
                  When you buy the Marketing, Application UI, or Ecommerce
                  component packages individually, you'll get any new components
                  we add to those packages in the future at no extra cost.
                </p>
                <p>
                  We regularly add new components to these packages whenever we
                  have new ideas, and you can see what previous updates have
                  looked like{" "}
                  <Link href={"#"} className="text-indigo-600">
                    in our changelog.
                  </Link>
                </p>
                <p>
                  Any new component packages we release are considered separate
                  products, and can be purchased at an upgrade price.
                </p>
                <p>
                  <span className="text-black font-bold">All-access: </span>{" "}
                  When you purchase an all-access license, you get access to
                  every component package and every site template available
                  today, plus any additional component packages or templates we
                  release in the future at no additional cost.
                </p>
                <p>
                  This means that if we add a brand new component package like
                  “Journalism” or design a new social media website template,
                  access to those products are included in your original
                  purchase, with no upgrade cost.
                </p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
