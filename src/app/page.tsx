"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    company: "CARS24",
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

const projects = [
  {
    title: "RN Starter",
    description:
      "An Opinionated react-native template with commonly used libraries to kickstart your react-native app development",
    href: "/projects/rn-starter",
  },
];

const blogs = [
  {
    title: "Import Aliases in react-native",
    description: "How to configure import aliases in react-native project.",
    href: "/blog/01-import-aliases",
  },
];

const socialLinks = [
  { name: "x (Previously Twitter)", href: "https://twitter.com/hrithik73_" },
  { name: "github", href: "https://github.com/hrithik73" },
  { name: "linkedin", href: "https://www.linkedin.com/in/hrithik73/" },
  { name: "Email", href: "mailto:shrithik404@gmail.com" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-24"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="space-y-2">
          {/* <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Hritik Singh
          </h1> */}
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Mobile app developer with 4+ years of experience in building
            products , i have worked on a diverse range of projects, including
            Fintech, B2B, Gaming , E-commerce and more.
          </p>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mt-4">
            Currently building mobiles apps at{" "}
            <a
              href="https://bharatpe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-700 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:text-zinc-300"
            >
              BharatPe
            </a>
            , Previously i worked at{" "}
            <a
              href="https://pokerbaazi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-700 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:text-zinc-300"
            >
              PokerBaazi
            </a>
            , and{" "}
            <a
              href="https://cars24.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-700 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:text-zinc-300"
            >
              Cars24
            </a>
            .
          </p>
        </motion.section>

        {/* About Section */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                    {exp.period}
                  </span>
                  <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
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
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-1 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
          >
            View all experience
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.section>

        {/* Featured Projects Section */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Featured Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={project.href}
                  className="group block rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition-all hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-zinc-400 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.section>

        {/* Writing Section */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Writing
          </h2>
          <div className="space-y-4">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={blog.href}
                  className="group block rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition-all hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {blog.description}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-zinc-400 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
          >
            View all posts
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.section>

        {/* Connect Section */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Connect
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Let&apos;s build something great together.
          </p>
          <ul className="flex flex-wrap gap-4">
            {socialLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <a
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </motion.div>
    </div>
  );
}
