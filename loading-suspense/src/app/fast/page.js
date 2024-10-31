import { Suspense } from "react";
import { SlowComponent } from "../component/slowComponent";
import { ActiveLink } from "../component/ActiveLink";
import MoonLoader from "react-spinners/MoonLoader";

export default function FastPage() {
  return (
    <div>
      <h2>Fast page</h2>
      <Suspense fallback={<MoonLoader color="#ffffff" />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
