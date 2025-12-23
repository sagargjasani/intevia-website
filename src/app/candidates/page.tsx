import Chero from "@/components/chero";
import getMedata from "@/components/getMedata";
import C1 from "@/components/pages/candidates/c1/c1";
import C2 from "@/components/pages/candidates/c2/c2";
export async function generateMetadata() {
  return getMedata("Candidates");
}
const RegularPage = () => (
  <>
    <Chero heroTitle="Candidates" />
    <C1 />
    <C2 />
  </>
);

export default RegularPage;
