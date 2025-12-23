import Chero from "@/components/chero";
import getMedata from "@/components/getMedata";
import Contact from "@/components/pages/contact/contact";

export async function generateMetadata() {
  return getMedata("Candidates");
}

const IndexPage = () => (
  <>
    <Chero heroTitle=" Contact Us" />
    <Contact />
  </>
);

export default IndexPage;
