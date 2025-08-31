import React, { useEffect, useRef, useState } from 'react';

function useInView(ref: React.RefObject<HTMLElement>, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting), 
      { rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
  
  return isIntersecting;
}

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function AnimatedNumber({ value, prefix = '', suffix = '', duration = 1200 }: AnimatedNumberProps) {
  const [display, setDisplay] = useState(0);
  const start = useRef(0);
  const startTime = useRef<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, '-100px');

  useEffect(() => {
    if (!inView) return;
    
    function step(ts: number) {
      if (!startTime.current) startTime.current = ts;
      const progress = Math.min((ts - startTime.current!) / duration, 1);
      const val = Math.floor(start.current + (value - start.current) * progress);
      setDisplay(val);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [inView, value, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-extrabold text-accent-400">
      {prefix}{display.toLocaleString()}{suffix}
    </div>
  );
}

const Metrics = () => {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 glass-card">
        <div className="text-center">
          <AnimatedNumber value={2500000000} prefix="₦" suffix="+" />
          <p className="text-sm text-muted-foreground mt-2">Revenue Generated</p>
        </div>
        <div className="text-center">
          <AnimatedNumber value={2000} suffix="+" />
          <p className="text-sm text-muted-foreground mt-2">Working Hours Saved Monthly</p>
        </div>
        <div className="text-center">
          <AnimatedNumber value={98} suffix="%" />
          <p className="text-sm text-muted-foreground mt-2">Client Satisfaction Rate</p>
        </div>
        <div className="text-center">
          <AnimatedNumber value={300} suffix="+" />
          <p className="text-sm text-muted-foreground mt-2">AI Solutions Deployed</p>
        </div>
      </div>
    </section>
  );
};

export default Metrics;