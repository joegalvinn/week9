import { ActiveLink } from "./ActiveLink";

export default function NavBar() {
  return (
    <>
      <ActiveLink href="/">Homepage</ActiveLink>
      <ActiveLink href="/fast">Fast Page</ActiveLink>
      <ActiveLink href="/slow">Slow Page</ActiveLink>
    </>
  );
}
