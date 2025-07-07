
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from '@/components/ThemeToggle';
import { Link } from 'react-router-dom';

function ModernNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
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
      <div className="fixed top-4 right-4 flex items-center gap-3">
        <Link 
          to="/auth" 
          className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 via-violet-500 to-blue-500 rounded-lg hover:opacity-90 transition-opacity"
        >
          Login
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}

const Header = () => {
  return <ModernNavbar className="top-2" />;
};

export default Header;
