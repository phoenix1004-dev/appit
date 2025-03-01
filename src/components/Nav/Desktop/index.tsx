import { NormalButton } from "../../common/Button";
import FavIcon from "../../Image/FavIcon";
import MenuList from "./MenuList";

const Desktop = () => {
  return (
    <div className="w-full px-[60px] py-[24px] hidden lg:block border-b border-solid border-[#1d1d20] justify-items-center">
      <div className="w-full max-w-[1320px] relative flex items-center justify-center">
        <FavIcon className="absolute left-0" />
        <div className="flex">
          <MenuList />
        </div>
        <NormalButton className="absolute right-0">Sign Up Now</NormalButton>
      </div>
    </div>
  );
};

export default Desktop;
