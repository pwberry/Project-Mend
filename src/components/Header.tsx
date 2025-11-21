import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/project_mend_logo_purple.png";

const navItems = [
  { label: "About", path: "/" },
  { 
    label: "People", 
    path: "/people/2026",
    hasDropdown: true,
    dropdownItems: [
      { label: "2026", path: "/people/2026" },
      { label: "2025", path: "/people/2025" },
      { label: "2024", path: "/people/2024" },
      { label: "2023", path: "/people/2023" },
    ]
  },
  { label: "Submit", path: "/submit" },
  {
  label: <span><em>Mend</em>, The Journal</span>,
  path: "https://surface.syr.edu/mend/",
  external: true
},
  { label: "Join Editorial Team", path: "/join" },
  { label: "News & Events", path: "/news" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isDropdownActive = (item: any) => {
    if (item.hasDropdown) {
      return item.dropdownItems?.some((dropItem: any) => location.pathname === dropItem.path);
    }
    return false;
  };


  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 md:px-6 py-4 pr-[1in]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Project Mend Logo" 
              className="h-8 w-auto md:h-10 transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                const handleMouseEnter = () => {
                  if (hoverTimeout) clearTimeout(hoverTimeout);
                  setDropdownOpen(true);
                };
                
                const handleMouseLeave = () => {
                  const timeout = setTimeout(() => setDropdownOpen(false), 150);
                  setHoverTimeout(timeout);
                };

                return (
                  <div 
                    key={item.path} 
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={item.path}
                      className={`px-3 lg:px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                        isDropdownActive(item)
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={16} />
                    </Link>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-0 bg-background border border-border rounded-md shadow-lg min-w-[120px] z-50 pt-1">
                        {item.dropdownItems?.map((dropItem: any) => (
                          <Link
                            key={dropItem.path}
                            to={dropItem.path}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isActive(dropItem.path)
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground hover:bg-secondary"
                            }`}
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 lg:px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                  }`}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav 
            className="md:hidden mt-4 pb-4 border-t border-border pt-4"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.path}>
                    <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
                      {item.label}
                    </div>
                    {item.dropdownItems?.map((dropItem: any) => (
                      <Link
                        key={dropItem.path}
                        to={dropItem.path}
                        className={`block px-8 py-2 rounded-md text-sm transition-colors duration-200 ${
                          isActive(dropItem.path)
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-secondary"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={isActive(dropItem.path) ? "page" : undefined}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
