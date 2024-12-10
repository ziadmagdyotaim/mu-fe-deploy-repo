import L2HeaderLinks from "./L2HeaderLinks";
import GlobalSearch from "./GlobalSearch";

const HeaderNavLevel2 = () => {
  return (
    <div className="px-4 container bg-white flex justify-between md:justify-normal gap-4 py-2">
      <div className="w-[150px] h-[auto] md:min-w-[200px] md:min-h-[80px] mb-auto ">
        {/* TODO make the logo dynamic */}
        <a href="#">
          <img
            src="https://www.menofia.edu.eg/PrtlFiles/uni/Portal/SiteInfo/uni_ar.png"
            alt="Menofia University"
            className="w-full h-full"
          />
        </a>
      </div>

      <L2HeaderLinks />

      <div className="mb-auto hidden md:block">
        <GlobalSearch />
      </div>
    </div>
  );
};

export default HeaderNavLevel2;
