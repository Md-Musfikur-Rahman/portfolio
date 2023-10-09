import AboutPage from "@/pages/AboutPage";
import WorkPage from "@/pages/WorkPage";
import ContactPage from "@/pages/ContactPage";

const Extras = ({ params }) => {
  const id = params.extra;

  const pages = [
    {
      pageTitle: "about",
      pageName: "About",
      page: <AboutPage />,
    },
    {
      pageTitle: "work",
      pageName: "Work",
      page: <WorkPage />,
    },
    {
      pageTitle: "contact",
      pageName: "Contact",
      page: <ContactPage />,
    },
  ];

  const page = pages.find((peg) => peg.pageTitle === id);

  return <div className="w-4/5 mx-auto mb-8 min-h-[75vh]">{page.page}</div>;
};

export default Extras;
