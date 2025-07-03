import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import type { TabType } from "@/pages/portfolio";

interface NavigationProps {
  tabs: { id: TabType; label: string }[];
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: (open: boolean) => void;
}

export default function Navigation({
  tabs,
  activeTab,
  onTabChange,
  isMobileMenuOpen,
  onMobileMenuToggle,
}: NavigationProps) {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-xl font-bold text-blue-600">VKR</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {tabs.map((tab, index) => (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button
                    variant={activeTab === tab.id ? "default" : "ghost"}
                    className={`nav-tab px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    onClick={() => onTabChange(tab.id)}
                  >
                    {tab.label}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onMobileMenuToggle(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden bg-white border-t border-slate-200 overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {tabs.map((tab, index) => (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Button
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`w-full text-left justify-start transition-all duration-200 ${
                  activeTab === tab.id ? "active" : ""
                }`}
                onClick={() => onTabChange(tab.id)}
              >
                {tab.label}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
