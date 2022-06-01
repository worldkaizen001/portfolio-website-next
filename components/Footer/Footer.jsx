// import Link from "next/link";
// import { FooterSchema } from "../../constants/FooterSchema";

const Footer = () => {
  return (
    <div className="bg-[#252424] text-[#D9DBE1] w-full flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center py-[1.5rem] px-[2rem] md:px-[10.3rem]">
      {/* <div className="footerItemOne w-[30%]">
        <ul className="flex flex-col md:flex-row items-start md:items-center mb-4 md:mb-0 justify-between w-full">
          {FooterSchema.map((item, index) => (
            <li key={index}>
              <Link href={item.route} passHref={true}>
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footerItemTwo w-[70%] flex items-center justify-end">
        <p>&copy; 2022 Jomax tech. Powered by Kleekit</p>
      </div> */}
    </div>
  );
};

export default Footer;
