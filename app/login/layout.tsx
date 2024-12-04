import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
