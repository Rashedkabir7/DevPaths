import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className = "" }: NavigationProps) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/roadmaps', label: 'Roadmaps' },
    { path: '/topics', label: 'Topics' },
  ];

  return (
    <nav className={`hidden md:flex space-x-6 ${className}`}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`font-medium transition-colors ${
            location.pathname === item.path
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

interface HeaderProps {
  children?: React.ReactNode;
  showNav?: boolean;
}

export const Header = ({ children, showNav = true }: HeaderProps) => {
  return (
    <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[var(--gradient-primary)] rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-foreground">DevPath</span>
            </Link>
            {showNav && <Navigation />}
          </div>
          
          {children || (
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-border text-muted-foreground hover:bg-accent">
                Sign In
              </Button>
              <Button className="bg-[var(--gradient-primary)] hover:opacity-90">
                Get Started
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};