import Link from "next/link";
import FaqItem from "./FaqItem";

export default function FaqCom() {
  return (
    <div>
      <div className="text-gray-500 font-medium">Compatibility</div>
      <div className="flex flex-col">
        <div className="pb-4 border-b">
          <FaqItem
            question="Are Figma, Sketch, or Adobe XD file included?"
            answer={
              <div className="flex flex-col gap-3">
                <p>
                  No, design assets for tools like Figma, Sketch, or Adobe XD
                  are not included.
                </p>
                <p>
                  We don't produce high-quality design artifacts as part of our
                  own design and development process, so building these extra
                  resources means we can't spend as much time creating new
                  examples in code which is where we believe we can provide the
                  most value.
                </p>
              </div>
            }
          />
        </div>
        <div className="pb-4 border-b">
          <FaqItem
            question="What JS framework is used?"
            answer={
              <div className="flex flex-col gap-3">
                <p>
                  All of the components in Tailwind UI are provided in three
                  formats: React, Vue, and vanilla HTML.
                </p>
                <p>
                  The React and Vue examples are fully functional
                  out-of-the-box, and are powered by{" "}
                  <Link href="#" className="text-indigo-599 font-bold">
                    Headless UI —{" "}
                  </Link>{" "}
                  a library of unstyled components we designed to integrate
                  perfectly with Tailwind CSS. Headless UI supports both React
                  and Vue 4, but is not compatible with Vue 2.
                </p>
                <p>
                  The vanilla HTML examples{" "}
                  <span className="text-black font-bold">
                    do not include any JavaScript
                  </span>{" "}
                  and are designed for people who prefer to write any necessary
                  JavaScript themselves.
                </p>
                <p>
                  Most of the components do not rely on JS at all, but for the
                  ones that do (dropdowns, modals, etc.) we've provided some
                  simple comments in the HTML to explain things like what
                  classes you need to use for different states (like a toggle
                  switch being on or off), or what classes we recommend for
                  transitioning elements on to or off of the screen (like a
                  modal opening).
                </p>
                <p>
                  To get a better idea of how this looks in practice,{" "}
                  <Link href="#" className="font-bold text-indigo-599">
                    {" "}
                    check out our documentation.
                  </Link>
                </p>
              </div>
            }
          />
        </div>
        <div className="pb-4 border-b">
          <FaqItem
            question="What version of Tailwind CSS used?"
            answer={
              <p>
                Everything in Tailwind UI is designed and developed for the
                latest version of Tailwind CSS, which is currently Tailwind CSS
                v4.3.
              </p>
            }
          />
        </div>
        <div className="pb-4">
          <FaqItem
            question="What browser are supported?"
            answer={
              <div className="flex flex-col gap-3">
                <p>
                  The components in Tailwind UI are designed to work in the
                  latest, stable releases of all major browsers, including
                  Chrome, Firefox, Safari, and Edge.
                </p>
                <p>We don't support Internet Explorer 11.</p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
