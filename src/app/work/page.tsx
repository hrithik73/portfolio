"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const experience = [
  {
    period: "Apr 2024 - Current",
    company: "Cars24",
    role: "SDE-2 (React Native)",
    description:
      "Revamped key features including the Homepage, LeadForm, and LeadList, and developed impactful functionalities such as the native booking appointment flow, MMVY flow, and Save for Later. I also contributed to the Design Language System by creating reusable components, implemented live bid activity for iOS, and resolved critical performance issues. Currently, I am working on a new app for leads",
  },
  {
    period: "Jun 2022 - Feb 2024",
    company: "Indianic",
    role: "SDE-1",
    description:
      "At indianic, i worked on a diverse range of projects, including e-commerce, fitness, CRM, social media, and more.",
  },
];

export default function WorkPage() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  // Initialize key with stable literal to avoid hydration mismatch
  const [animationKey, setAnimationKey] = useState<string>("/work");
  const prevPathnameRef = useRef<string | null>(null);
  const isInitialMount = useRef(true);

  // Handle initial mount and hydration
  useEffect(() => {
    setMounted(true);
    prevPathnameRef.current = pathname || "/work";
    isInitialMount.current = false;
  }, []);

  // Track pathname changes and reset animations only when navigating TO this page
  useEffect(() => {
    // Skip on initial mount (handled by the effect above)
    if (isInitialMount.current) return;

    const currentPathname = pathname || "/work";
    const prevPathname = prevPathnameRef.current;

    // Only reset animations when navigating TO this page (pathname is "/work")
    // and pathname actually changed from a different route
    if (mounted && prevPathname !== null && prevPathname !== currentPathname && currentPathname === "/work") {
      // Update key only when pathname actually changes (navigation between routes)
      // This triggers animation reset without causing hydration issues
      setAnimationKey(currentPathname);
      setMounted(false);
      
      // Capture pathname at the time of effect execution to avoid stale closure
      const capturedPathname = currentPathname;
      const timer = setTimeout(() => {
        setMounted(true);
        prevPathnameRef.current = capturedPathname;
      }, 10);
      return () => clearTimeout(timer);
    } else {
      // Update ref even if we don't reset animations (for tracking purposes)
      prevPathnameRef.current = currentPathname;
    }
  }, [pathname]);
  
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <motion.div
        key={animationKey}
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        className="space-y-16"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Work
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={`${animationKey}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-3 border-b border-zinc-200 pb-12 last:border-0 dark:border-zinc-800"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                  {exp.period}
                </span>
                <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {exp.company}
                </span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  {exp.role}
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

