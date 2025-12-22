import type { Route } from "./+types/home";
import Hero from "../compontents/home/hero";

import Newcart from "~/compontents/home/Newcart";
import NavSection from "~/compontents/home/Newnav";
import Courses from "~/compontents/home/course";



export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Hero />
<Courses />
      <Newcart />
      <NavSection/>
  
    </div>
  );
}
