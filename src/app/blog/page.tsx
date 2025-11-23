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

const blogs = [
  {
    year: "2023",
    posts: [
      {
        title: "Import Aliases in react-native",
        description: "How to configure import aliases in react-native project.",
        href: "/blog/01-import-aliases",
      },
    ],
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Blog
          </h1>
        </motion.div>

        <div className="space-y-12">
          {blogs.map((yearGroup, yearIndex) => (
            <motion.div
              key={yearIndex}
              variants={itemVariants}
              className="space-y-6"
            >
              <h2 className="text-xl font-semibold text-zinc-500 dark:text-zinc-500">
                {yearGroup.year}
              </h2>
              <div className="space-y-4">
                {yearGroup.posts.map((post, postIndex) => (
                  <motion.div
                    key={postIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: postIndex * 0.1 }}
                  >
                    <Link
                      href={post.href}
                      className="group block rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition-all hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                            {post.title}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {post.description}
                          </p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-zinc-400 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

