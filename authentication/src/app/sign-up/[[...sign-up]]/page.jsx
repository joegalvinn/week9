import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignUpPage() {
  return (
    <>
      <h1>Sign-up for a welcome package.</h1>
      <SignUp
        appearance={{
          baseTheme: dark,
        }}
      />
    </>
  );
}
