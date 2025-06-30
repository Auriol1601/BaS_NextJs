import Link from 'next/link';

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <ul>
        <li> <Link href ="/">Accueil</Link></li>
        <li> <Link href ="/about">À propos</Link></li>
      </ul>
      <p>This is the homepage of my application.</p>
      <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
    </div>
  );
}
export default Homepage;