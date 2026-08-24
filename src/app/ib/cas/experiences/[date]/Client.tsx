"use client";

import dynamic from "next/dynamic";

const Experience = dynamic(() => import("../../../../../legacy/ib/cas/experiences/[date]"), {
  ssr: false,
});

export default Experience;
