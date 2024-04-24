import React, { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { getResponses } from "../../../controllers/poll";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];
const MOCK = {
  title: "what do you think?",
  vote: {
    option1: 23,
    option2: 14,
    option3: 53,
    option4: 63,
  },
};
export default function PollResponse({ pollId }) {
  const [response, setResponse] = useState(MOCK);

  // getResponses({ id: pollId }).then((data) => {
  //   console.log("response____", data);
  //   setResponse(MOCK);
  // });
  if (!response) return <h4>No Response</h4>;
  return (
    <>
      <h4>Question: {response.title}</h4>
      <br />
      <BarChart
        width={500}
        height={300}
        series={[
          { data: Object.values(response.vote), label: "votes", id: "voteId" },
        ]}
        xAxis={[{ data: Object.keys(response.vote), scaleType: "band" }]}
      />
    </>
  );
}
