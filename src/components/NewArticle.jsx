
export const NewArticle = ({title,text}) => {
  return (
    <article className="min-h-[140px] border-b-[1px] text-Off-white border-Grayish-blue py-7 last:border-none">
        <h3 className="text-xl mb-3 font-bold cursor-pointer hover:text-Soft-orange">{title}</h3>
        <p className="text-base">{text}</p>
    </article>
  )
}
