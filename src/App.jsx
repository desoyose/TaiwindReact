
import {Header} from './components/Header'
import { MainArticle } from './components/MainArticle';
import { NewContainer } from './components/NewContainer';
import { ArticleContainer } from './components/ArticleContainer';
import "./index.css";
function App() {

  return (
    <main className='px-4 pt-6 max-w-[1440px] mx-auto'>
      <Header />
      <div className='lg:flex lg:gap-8'>
        <MainArticle/>
        <NewContainer />
        

      </div>
      <ArticleContainer />
    </main>
  )
}

export default App
