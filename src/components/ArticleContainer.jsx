import { Article } from "./Article";
import img1 from "../assets/images/image-retro-pcs.jpg";
import img2 from "../assets/images/image-top-laptops.jpg";
import img3 from "../assets/images/image-gaming-growth.jpg";

export const ArticleContainer = () => {
  return (
    <section className="p-6 md:p-12 lg:p-16 bg-Off-white">
      
      <div className="flex flex-col gap-8 md:flex-row  md:flex md:flex-wrap">
        <Article
          img={img1}
          number="01"
          title="Reviving Retro PCs"
          txt="What happens when old PCs are given modern upgrades?"
        />
        <Article
          img={img2}
          number="02"
          title="Top 10 Laptops of 2022"
          txt="Our best picks for various needs and budgets."
        />
        <Article
          img={img3}
          number="03"
          title="The Growth of Gaming"
          txt="How the pandemic has sparked fresh opportunities."
        />
      </div>
    </section>
  );
};
