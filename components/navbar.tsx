"use client";

import { motion } from "framer-motion";
import { Home, Calendar, MailCheck, MapPin, Image as ImageIcon } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const menuItems = [
    { id: "opening", label: "Opening", icon: Home },
    { id: "acara", label: "Acara", icon: Calendar },
    { id: "rsvp", label: "RSVP", icon: MailCheck },
    { id: "maps", label: "Maps", icon: MapPin },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="flex items-center justify-between w-full max-w-md bg-white/70 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl px-4 py-2"
      >
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative flex flex-col items-center justify-center flex-1 group"
            >
              {/* Efek Lingkaran saat Aktif */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-1 w-10 h-10 bg-[#5D4037]/10 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <Icon
                size={20}
                className={`transition-colors duration-300 ${
                  isActive ? "text-[#5D4037]" : "text-gray-400 group-hover:text-gray-600"
                }`}
              />
              
              <span
                className={`text-[10px] mt-1 font-medium transition-colors duration-300 ${
                  isActive ? "text-[#5D4037]" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </motion.div>
    </nav>
  );
}