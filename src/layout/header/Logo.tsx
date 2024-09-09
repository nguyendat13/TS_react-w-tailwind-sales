import { Link } from 'react-router-dom';

const Logo = () => {
  return (
      <Link to="/" >
               <span className="text-6xl font-black pr-20">
                <span className="text-amber-400">PD!</span>
                <span className="text-orange-50">Decor</span>
                <span className="text-amber-400">.</span></span>
      </Link>
  )
}

export default Logo
