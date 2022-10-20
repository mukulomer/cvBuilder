import React from "react";
import queryString from "query-string";

export default function AwardDetails(props) {
  const { type, year } = queryString.parse(props.location.search);

  return (
    <h1>
      {type} {year}
    </h1>
  );
}
