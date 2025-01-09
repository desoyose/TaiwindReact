import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
  return (
    <aside className="bg-Very-dark-blue text-Off-whitepy-[28px] px-[20px] lg:mb-16">
        <h2 className="text-Soft-orange text-4xl pt-10">New</h2>
        <NewArticle
            title='Hydrogen VS Electric Cars'
            text='Will hydrogen-fueled cars ever catch up to EVs?'
        />
        <NewArticle
            title='The Downsides of AI Artistry'
            text='What are the possible adverse effects of on-demand AI image generation?'
        />
        <NewArticle
            title='Is VC Funding Drying Up?'
            text='Private funding by VC firms is down 50% YOY. We take a look at what that means.'
        />
        

    </aside>
  )
}
