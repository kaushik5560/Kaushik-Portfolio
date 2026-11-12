import React from 'react';
import { User, GraduationCap, MapPin, Code2, Award, HeartHandshake } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "CS Undergrad",
      desc: "B.Tech in Computer Science (2023 - 2027) at IES College of Technology, Bhopal.",
      color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      desc: "Hands-on experience building frontend UIs with React and backend APIs with Node/Express & MongoDB.",
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50"
    },
    {
      icon: HeartHandshake,
      title: "Biomedical & AI/ML",
      desc: "Research internship experience with IEEE EMBS Pune on cognitive mental health rehabilitation.",
      color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50"
    },
    {
      icon: Award,
      title: "Leadership & Competitions",
      desc: "Quiz Team Leader at IEEE-IES Student Branch and National Hackathon Participant.",
      color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Transforming Ideas Into Clean & Impactful Code
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            A quick glimpse into my background, technical journey, and what drives me.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Bio Description Box */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Who is Kaushik Kumar Pandey?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.about}
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Originally from Champaran, Bihar, and currently pursuing my engineering in Bhopal, I combine academic rigor in Computer Science fundamentals (DSA, OOP, OS, DBMS) with practical web engineering skills.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  📍 Bhopal, MP
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  🎓 B.Tech CSE (2023-2027)
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  ⚡ Problem Solver
                </span>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
