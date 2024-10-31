import { SlowComponent } from "../component/slowComponent";

export default function Loading() {
  return (
    <div>
      <h2>Slow Page</h2>
      <p className="text-green-400">Loading your slow page...</p>
      <SlowComponent />
    </div>
  );
}
