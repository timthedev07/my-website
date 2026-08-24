"use client";

import dynamic from "next/dynamic";

const Project = dynamic(() => import("../../../../../legacy/ib/cas/projects/[slug]"), {
  ssr: false,
});

export default Project;
