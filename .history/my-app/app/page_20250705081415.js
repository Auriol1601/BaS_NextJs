import Link from 'next/link';

export const metadat = {
  title: "Max Next App",
  description: "Teste "};

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <>
        <Books />
      </>
    
      <ul>
        <li> <Link href ="/">Accueil</Link></li>
        <li> <Link href ="/about">À propos</Link></li>
        <li> <Link href="/about/contact">Contact</Link></li>
      </ul>
      <p>This is the homepage of my application.</p>
      <button className="btn btn-active btn-primary">Primary</button>
    </div>
  );
}
export default Homepage;