import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-3 sm:top-4 left-3 sm:left-4 z-50 bg-background/80 backdrop-blur-sm border-2 border-romantic-primary/30 hover:border-romantic-primary/60 transition-all duration-300 hover:scale-110 w-10 h-10 sm:w-11 sm:h-11"
      aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-romantic-primary transition-all duration-300" />
      ) : (
        <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-romantic-primary transition-all duration-300" />
      )}
    </Button>
  );
};

export default ThemeToggle;