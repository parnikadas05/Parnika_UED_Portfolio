
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gold">404</h1>
        <p className="text-2xl mt-4 mb-8">Page Not Found</p>
        <Button asChild>
          <Link to="/" className="bg-gold hover:bg-gold/90 text-dark">
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
