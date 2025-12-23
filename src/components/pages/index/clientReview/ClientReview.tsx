import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./clientReview.scss";

const clientReviewData = [
  {
    clientName: "Royal Mencap",
    personName: "Steven Moocarme",
    review: `I would like to thank Parth and your
  company for your continued support.
  We would recommend your services to
  others. Your staff have been great, so
  much so that some have been acquired
  a permanent role with us.`,
  },
  {
    clientName: "Turning Point",
    personName: "Charles Musendo",
    review: `Thank you so much Intevia Healthcare for
    your amazing services curating with your work
    ethics, honest, relaiablity and professionalism.
    The healthcare workers provided by your
    agency are very responsible and truley liked
    by our residents and staff members. Looking
    forward for more work like this ! Keep up the
    good work Guys.`,
  },
  {
    clientName: "Sanctury Housing Association",
    personName: "Jonathon James",
    review: `We've been using Intevia Healthcare now for
    more than 6 months and their commistment and
    dedication in filling our Support Worker
    vacancies is second to none. The shortlist of
    candidates that Intevia's team send, indicate a
    good understanding of the job brief and of all
    care homes, and we have now successfully
    placed a number of Nurses into our business
    thanks to them. `,
  },
];

const ClientReview = () => {
  return (
    <div className="clientReview">
      <h5>Our Happy Clients</h5>
      <div className="clientReview_container">
        {clientReviewData.map(({ clientName, personName, review }) => (
          <div key={new Date().getTime()} className="clientReview_card">
            <div className="clientName_container">
              <div className="names">
                <h5>{clientName}</h5>
                <p>{personName}</p>
              </div>
              <div className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </div>
            <div className="content">
              <p>{review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
