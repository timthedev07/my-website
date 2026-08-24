import { Suspense } from "react";
import ClientError from "../../legacy/client-error";

export default function ClientErrorPage() {
  return <Suspense><ClientError /></Suspense>;
}
