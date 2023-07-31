import Link from "next/link";
import FaqItem from "./FaqItem";

export default function FaqLic() {
  return (
    <div>
      <div className="text-gray-500 font-medium">Licensing</div>
      <div className="flex flex-col">
        <div className="pb-4 border-b">
          <FaqItem
            question="Can i upgrade to a team license later?"
            answer={
              <div className="flex flex-col gap-3">
                <p>
                  Yup! If you're a solo developer you can start with a personal
                  license, and then upgrade to the team license later if other
                  developers join your team.
                </p>
                <p>
                  There is an "Upgrade to Team License" option under the
                  "Account" menu within the Tailwind UI app after logging in.
                </p>
                <p>
                  Note that we only offer team all-access licenses, and do not
                  offer team licenses for the individual component packages.
                </p>
              </div>
            }
          />
        </div>
        <div className="pb-4 border-b">
          <FaqItem
            question="Do i need to purchase a licenses for each project i work on?"
            answer={
              <div className="flex flex-col gap-3">
                <p>
                  Unlike most other templates/themes, you don't have to buy a
                  new Tailwind UI license every time you want to use it on a new
                  project.
                </p>
                <p>
                  {" "}
                  As long as what you're building is allowed as per the license,
                  you can build as many sites as you want without ever having to
                  buy an additional license.{" "}
                </p>
                <p>
                  For more information and examples,
                  <Link href="#" className="font-bold text-indigo-600">
                    {" "}
                    read through our license.
                  </Link>
                </p>
              </div>
            }
          />
        </div>
        <div className="pb-4 border-b">
          <FaqItem
            question="Can I use Tailwind UI for client projects?"
            answer={
              <div className="flex flex-col gap-4">
                <p>
                  Yes! As long what you're building is a custom website
                  developed for a single client, you can totally use components
                  and templates in Tailwind UI to help build it.
                </p>
                <p>
                  The only thing you can't do is use Tailwind UI to build a
                  website or template that is resold to multiple clients.
                </p>
                <p>
                  For more information and examples,
                  <Link href="#" className="font-bold text-indigo-600">
                    {" "}
                    read through our license.
                  </Link>
                </p>
              </div>
            }
          />
        </div>
        <div className="pb-4 border-b">
          <FaqItem
            question="Can I use Tailwind UI for my own commercial projects?"
            answer={
              <div className="flex flex-col gap-4">
                <p>
                  Absolutely! Your license gives you permission to build as many
                  of your own projects as you like, whether those are simple
                  public websites or SaaS applications that end users need to
                  pay to access.{" "}
                </p>
                <p>
                  As long as what you’re building isn’t a website builder or
                  other tool that customers can use to create their own sites
                  using elements that originate from Tailwind UI, you’re good to
                  go.
                </p>
                <p>
                  For more information and examples,
                  <Link href="#" className="font-bold text-indigo-600">
                    {" "}
                    read through our license.
                  </Link>
                </p>
              </div>
            }
          />
        </div>
        <div className="pb-4 border-b">
          <FaqItem
            question="Can I use Tailwind UI in open source projects?"
            answer={
              <div className="flex flex-col gap-4">
                <p>
                  Yep! As long as what you're building is some sort of actual
                  website and not a derivative component library, theme builder,
                  or other product where the primary purpose is clearly to
                  repackage and redistribute our components, it's totally okay
                  for that project to be open source.
                </p>
                <p>
                  For more information and examples,
                  <Link href="#" className="font-bold text-indigo-600">
                    {" "}
                    read through our license.
                  </Link>
                </p>
              </div>
            }
          />
        </div>
        <div className="pb-3">
          <FaqItem
            question="Can I sell template/themes I build with Tailwind UI?"
            answer={
              <div className="flex flex-col gap-4">
                <p>
                  No, you cannot use Tailwind UI to create derivative products
                  like themes, UI kits, page builders, or anything else where
                  you would be repackaging and redistributing our components or
                  templates for someone else to use to build their own sites.{" "}
                </p>
                <p>
                  For more information and examples of what is and isn't okay,
                  <Link href="#" className="font-bold text-indigo-600">
                    {" "}
                    read through our license.
                  </Link>
                </p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
