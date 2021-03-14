import Section1Comp from "./Section1";
import Section2Comp from "./Section2";
import Section3Comp from "./Section3";
import Section4Comp from "./Section4";
import Section5Comp from "./Section5";
import Section6Comp from "./Section6";
import SectionFooterComp from "./SectionFooter";
import HeaderComp from "./Header";
import MainPageComp from "./MainPage";

export const Header = ({ links }) => <HeaderComp links={links} />;
export const Section1 = () => <Section1Comp />;
export const Section2 = () => <Section2Comp />;
export const Section3 = () => <Section3Comp />;
export const Section4 = () => <Section4Comp />;
export const Section5 = () => <Section5Comp />;
export const Section6 = () => <Section6Comp />;
export const SectionFooter = () => <SectionFooterComp />;
export const MainPage = () => <MainPageComp />;
