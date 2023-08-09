import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div>
    <div>
      <h1>404</h1>

      <div>
        <p>Something's missing.</p>
        <p>We suggest you go back to home.</p>

        <Link to="/">Go to Home</Link>
      </div>
    </div>
  </div>
);
