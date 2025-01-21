import Logo from "./logo";
import Nav from "./nav";

export default function Header() {
  return (
    <div className="flex justify-center items-center p-6 border-b border-b-white/10">
      <div className="flex flex-row w-full justify-between max-w-screen-2xl">
        <Logo />
        <Nav />
      </div>
    </div>
  );
}
