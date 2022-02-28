import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import CollectionCard from './components/CollectionCard';
import './components/CollectionCard.css';


function App() {
  return (
    <div className='app'>
      <Header/>
      <CollectionCard 
        id={0} 
        name={'Bandana Punk'} 
        traits={[{'value':7}]}
        image="https://lh3.googleusercontent.com/2ubgxCkpU7Z02Te-TipFn53_APmkpJArL8Z4V_jNth0Ln2-fy59LOSQAGLE0SHjFS6ysYkHcGlNXByoBx2eG4kCe30OdDPsKCw-Ncw=s0"
      />
    </div>
  );
}

export default App;
