
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "@/App";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";

function ModernNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const getUserInitials = (name: string | undefined) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/">Home</HoveredLink>
            <HoveredLink to="/#why-choose-us">Features</HoveredLink>
            <HoveredLink to="/#testimonials">Testimonials</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/services/web-development">Web Development</HoveredLink>
            <HoveredLink to="/services/technical-support">Technical Support</HoveredLink>
            <HoveredLink to="/services/business-consultancy">Business Consultancy</HoveredLink>
            <HoveredLink to="/services">All Services</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Company">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/about">About Us</HoveredLink>
            <HoveredLink to="/blog">Blog</HoveredLink>
            <HoveredLink to="/contact">Contact</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/pricing">Pricing Plans</HoveredLink>
            <HoveredLink to="/contact">Custom Quote</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      <div className="fixed top-4 right-4">
        {loading ? (
          <div className="w-10 h-10 bg-muted rounded-lg animate-pulse" />
        ) : user ? (
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={user.user_metadata?.avatar_url} />
              <AvatarFallback className="text-xs bg-gradient-to-r from-orange-500 via-violet-500 to-blue-500 text-white">
                {getUserInitials(user.user_metadata?.display_name || user.email)}
              </AvatarFallback>
            </Avatar>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <Link 
            to="/auth" 
            className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 via-violet-500 to-blue-500 rounded-lg hover:opacity-90 transition-opacity"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

const Header = () => {
  return <ModernNavbar className="top-2" />;
};

export default Header;
