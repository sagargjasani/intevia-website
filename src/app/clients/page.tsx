import Chero from "@/components/chero";
import getMedata from "@/components/getMedata";
import Cl1 from "@/components/pages/clients/cl1/cl1";
import Cl3 from "@/components/pages/clients/cl3/cl3";
import Cl4 from "@/components/pages/clients/cl4/cl4";

export async function generateMetadata() {
  return getMedata("Candidates");
}
const Clients = () => (
  <>
    <Chero heroTitle="Clients" />
    <Cl1 />
    {/* <Cl2 /> */}
    <Cl3 />
    <Cl4 />
  </>
);

export default Clients;
