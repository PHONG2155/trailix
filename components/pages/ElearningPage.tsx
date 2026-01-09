import React from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  Zap,
  Video,
  Layers,
  BarChart,
  FileText,
  Mic,
  Box,
  CheckCircle2,
  Check,
  X,
  ArrowRight
} from "lucide-react";
import { useTranslation } from 'react-i18next';

import { Reveal } from "../ui/Shared";
import { ContactForm } from "../business/ContactForm";

const Hero = () => {
  const { t } = useTranslation('elearning');

  return (
    <section className="relative pt-36 md:pt-44 overflow-hidden bg-white">
      {/* --- BACKGROUND TECH GRID --- */}
      <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* --- BACKGROUND GLOW BLOBS (HIỆU ỨNG MỚI) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none overflow-hidden">
        {/* Blob Đỏ bên trái */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        {/* Blob Cam bên phải */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        {/* Blob Hồng ở giữa dưới */}
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        <Reveal>
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-red-100 bg-red-50 text-brand-red text-sm font-bold tracking-wide uppercase shadow-sm">
            {t('hero.badge')}
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display mb-8 leading-tight">
            <span className="block text-gray-900">{t('hero.title.line1')}</span>

            <span className="block mt-4 pb-2 leading-[1.25] text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-orange-500 animate-gradient-x">
              {t('hero.title.line2')}
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </Reveal>
      </div>

      {/* Fade effect ở đáy để nối liền mượt mà với section dưới */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

const Benefits = () => {
  const { t } = useTranslation('elearning');
  const benefits = t('benefits.items', { returnObjects: true }) as any[];
  const iconMap: any = { DollarSign, Zap, Video, Layers, BarChart };

  return (
    <section className="py-20 bg-white relative">
      {/* RESET TRỤC */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-4">

          {/* ===== ROW 1: First 3 items ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {benefits.slice(0, 3).map((item, i) => {
              const icons = [DollarSign, Zap, Video];
              const Icon = icons[i];
              return (
                <React.Fragment key={i}>
                  <Reveal delay={i * 0.08}>
                    <div className="h-full p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                      <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-brand-red mb-6 shadow-sm group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                </React.Fragment>
              )
            })}
          </div>

          {/* ===== ROW 2: Last 2 items centered ===== */}
          <div className="flex justify-center">
            <div className="flex flex-col lg:flex-row gap-10">
              {benefits.slice(3, 5).map((item, i) => {
                const icons = [Layers, BarChart];
                const Icon = icons[i];
                return (
                  <Reveal key={i} delay={0.24 + i * 0.08}>
                    <div className="w-[360px] p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-lg transition">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-red mb-6 shadow">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  const { t } = useTranslation('elearning');
  const employeeItems = t('impact.employee.items', { returnObjects: true }) as string[];
  const managerItems = t('impact.manager.items', { returnObjects: true }) as string[];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Pattern Background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-red/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <Reveal>
          <h2 className="text-3xl font-black uppercase text-center mb-16">
            {t('impact.title')}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
              <h3 className="text-2xl font-bold mb-6 text-brand-red">{t('impact.employee.title')}</h3>
              <ul className="space-y-4 text-gray-700">
                {employeeItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
              <h3 className="text-2xl font-bold mb-6 text-brand-red">{t('impact.manager.title')}</h3>
              <ul className="space-y-4 text-gray-700">
                {managerItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  const { t } = useTranslation('elearning');
  const rows = t('comparison.rows', { returnObjects: true }) as any[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl font-black uppercase text-center mb-6">
            {t('comparison.title')}
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            {t('comparison.subtitle')}
          </p>
        </Reveal>

        <div className="overflow-x-auto pb-4">
          <div className="min-w-[720px] grid grid-cols-3 gap-6 items-start">
            <div />
            <div className="text-center font-bold text-gray-400 uppercase text-sm tracking-wider">
              {t('comparison.traditional')}
            </div>
            <div className="text-center font-bold text-brand-red uppercase text-sm tracking-wider bg-red-50 py-2 rounded-lg">
              {t('comparison.trailix')}
            </div>

            {rows.map((row, idx) => (
              <React.Fragment key={idx}>
                <div className="font-semibold text-gray-700 pl-4">{row.label}</div>
                <div className="bg-gray-50 p-4 rounded-xl text-gray-600 flex gap-3 items-center border border-gray-100">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  {row.traditional}
                </div>
                <div className="bg-red-50 p-4 rounded-xl text-gray-900 flex gap-3 items-center border border-red-100 shadow-sm">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-semibold">{row.trailix}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const { t } = useTranslation('elearning');
  const steps = t('process.steps', { returnObjects: true }) as any[];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Tech Grid Background Mờ cho Process */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <Reveal>
          <h2 className="text-3xl font-black uppercase text-center mb-20">
            {t('process.title')}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {steps.map((s, i) => {
            const icons = [BarChart, FileText, FileText, Layers, Video, Mic, Box, CheckCircle2];
            const StepIcon = icons[i];

            return (
              <React.Fragment key={i}>
                <Reveal delay={i * 0.06}>
                  <div className="relative group h-full">

                    {(i + 1) % 4 !== 0 && i !== 7 && (
                      <div className="hidden lg:block absolute top-10 -right-6 transform translate-x-1/2 text-gray-300 z-0">
                        <ArrowRight size={24} strokeWidth={3} />
                      </div>
                    )}

                    <div className="text-center relative z-10">
                      <div className="relative mx-auto w-20 h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:border-brand-red group-hover:shadow-lg group-hover:shadow-red-100 transition-all duration-300">

                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                          {i + 1}
                        </div>

                        <StepIcon size={32} className="text-gray-500 group-hover:text-brand-red transition-colors" />
                      </div>

                      <h4 className="font-bold text-lg mb-2 text-gray-900">{s.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed px-2">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const { t } = useTranslation('elearning');
  const basic = t('pricing.basic', { returnObjects: true }) as any;
  const comprehensive = t('pricing.comprehensive', { returnObjects: true }) as any;

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4 relative z-10">

        {/* Card 1 */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-1 text-gray-900">{basic.title}</h3>
          <p className="text-gray-500 mb-6 font-medium text-sm">{basic.subtitle}</p>
          <div className="text-3xl font-black text-brand-red mb-6">
            {basic.price} <span className="text-base font-semibold text-gray-500">{basic.unit}</span>
          </div>
          <ul className="space-y-4 text-gray-700 mb-8">
            {basic.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-center gap-2"><Check className="w-5 h-5 text-brand-red" /> {feature}</li>
            ))}
          </ul>
          <button
            onClick={() =>
              document
                .getElementById("contact-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full py-3.5 rounded-xl font-bold border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition duration-300"
          >
            {basic.button}
          </button>
        </div>

        {/* Card 2 (Highlight) */}
        <div className="relative rounded-3xl border-2 border-brand-red bg-white p-8 shadow-xl transform md:-translate-y-4">
          {/* Glow effect sau lưng card */}
          <div className="absolute inset-0 bg-brand-red/5 blur-xl -z-10 rounded-3xl"></div>

          <div className="absolute -top-4 right-6 bg-brand-red text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md tracking-wide">
            {comprehensive.badge}
          </div>
          <h3 className="text-xl font-bold mb-1 text-gray-900">{comprehensive.title}</h3>
          <p className="text-gray-500 mb-6 font-medium text-sm">{comprehensive.subtitle}</p>
          <div className="text-3xl font-black text-brand-red mb-6">
            {comprehensive.price} <span className="text-base font-semibold text-gray-500">{comprehensive.unit}</span>
          </div>
          <ul className="space-y-4 text-gray-700 mb-8">
            {comprehensive.features.map((feature: string, idx: number) => (
              <li key={idx} className={`flex items-center gap-2 ${idx === 0 ? 'font-semibold' : ''}`}><Check className="w-5 h-5 text-brand-red" /> {feature}</li>
            ))}
          </ul>
          <button
            onClick={() =>
              document
                .getElementById("contact-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full py-3.5 rounded-xl font-bold bg-brand-red text-white hover:bg-brand-darkRed transition shadow-lg shadow-red-200"
          >
            {comprehensive.button}
          </button>
        </div>
      </div>
    </section>
  );
};

const PricingCTA = () => {
  const { t } = useTranslation('elearning');

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          {t('pricingCTA.text')} <br />
          {t('pricingCTA.subtext')}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">


          <button
            onClick={() =>
              document
                .getElementById("contact-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 rounded-full border border-gray-200 text-gray-700 font-bold uppercase hover:border-brand-red hover:text-brand-red hover:bg-red-50 transition-all duration-300"
          >
            {t('pricingCTA.button')}
          </button>
        </div>
      </div>
    </section>
  );
};

export const ElearningPage = () => (
  <div className="bg-white overflow-hidden">
    <Hero />
    <Benefits />
    <Impact />
    <Comparison />
    <Process />
    <Pricing />
    <PricingCTA />
    <ContactForm />
  </div>
);