import Chero from "@/components/chero";
import Head from "@/components/getMedata";
import Au3 from "@/components/pages/about/au3/au3";
import Au4 from "@/components/pages/about/au4/au4";
import Au5 from "@/components/pages/about/au5/au5";
export async function generateMetadata() {
  return Head("About Us");
}
const RegularPage = () => (
  <>
    <Chero heroTitle="About Us" /> {/* <Au1 /> */} <Au3 />
    <Au4 />
    <Au5 />
  </>
);

export default RegularPage;
