const getMedata = (title: string, dis = "", openGraph = {}) => {
  return {
    title: title ? `${title} | Intevia Healthcare` : "Intevia Healthcare",
    description: dis,
    openGraph: {
      title: "Intevia Healthcare",
      locale: "uk_ua",
      url: "https://inteviahealthcare.co.uk/",
      type: "website",
      description: "Intevia Healthcare",
      ...openGraph,
    },
  };
};

export default getMedata;
