import HeaderNavLevel1 from "./HeaderNavLevel1";
import HeaderNavLevel2 from "./HeaderNavLevel2";

const L1Header = () => {
  return (
    <div>
      {/* Top Header Links */}
      <HeaderNavLevel1 />

      {/* Bottom Header Links */}
      <HeaderNavLevel2 />
    </div>
  );
};

export default L1Header;
