import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-display font-bold text-brand-accent mb-4">404</h1>
      <h2 className="text-3xl font-display uppercase text-white mb-6">Page Not Found</h2>
      <p className="text-gray-400 font-body mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/">
        <Button variant="primary">Return Home</Button>
      </Link>
    </div>
  );
};
export default NotFound;
