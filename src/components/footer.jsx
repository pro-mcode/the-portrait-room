import { footerLists } from "./footer-lists";

export default function Footer() {
  return (
    <footer className="py-16 bg-black/95 text-white md:py-24">
      <div className="layout mx-auto ">
        <div className="flex flex-col gap-6 justify-between md:flex-row">
          <div className="mb-10">
            <h3 className="logo text-2xl">Portrait Room</h3>
            <p>copyright©portraitroom.com</p>
          </div>
          {footerLists.map((section, i) => (
            <div key={i} className="service-lists mb-10">
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>

              <ul
                className={`${section.isSocial ? "flex gap-4" : "space-y-2"}`}
              >
                {section.items.map((item, index) => (
                  <li key={index}>
                    {/* If it's social icon → render as element */}
                    {section.isSocial ? (
                      <a href="#">{item}</a>
                    ) : (
                      <a href="#" className="hover:underline">
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr />
        <div className="footer-end flex justify-between mt-10">
          <p className="text-sm font-medium">Privacy Policy</p>
          <p className="text-xs font-medium">
            <i className="fas fa-code"></i> by <strong>AD-M INNOVATIONS</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
