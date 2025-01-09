export const Article = ({ img, number, title, txt }) => {
  return (
    <article className="flex min-h-[162px] w-[343px] md:flex-grow">
      <div className="w-[100px] flex-none">
        <img src={img} alt="" />
      </div>
      <div className="pl-6">
        <span className="text-Grayish-blue text-3xl mb-[18px] font-bold">{number}</span>
        <h2 className="font-bold mb-[18px] cursor-pointer hover:text-Soft-orange">{title}</h2>
        <p className="text-Dark-grayish-blue">{txt}</p>
      </div>
    </article>
  );
};
