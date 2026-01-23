import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CreditCard, Building, Smartphone, Globe, Shield } from "lucide-react";

const paymentMethods = [
  {
    name: "PayPal",
    description: "Secure international payments",
    icon: Globe,
    available: true,
    features: ["Buyer protection", "Instant transfer", "150+ currencies"],
  },
  {
    name: "UPI",
    description: "Instant India payments",
    icon: Smartphone,
    available: true,
    features: ["Zero fees", "Instant settlement", "24/7 available"],
  },
  {
    name: "Bank Transfer",
    description: "Direct wire transfer",
    icon: Building,
    available: true,
    features: ["SWIFT/IBAN", "Any currency", "Invoice support"],
  },
  {
    name: "Crypto",
    description: "BTC, ETH, USDT",
    icon: CreditCard,
    available: true,
    features: ["Low fees", "Fast settlement", "Global access"],
  },
];

export const PaymentsSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-15" />

      <div className="container px-4 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-sm text-primary mb-3">
            // billing.methods
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Flexible Payments
          </h2>
          <p className="text-foreground-muted max-w-lg mx-auto">
            Global payment options for seamless collaboration — work with me
            from anywhere.
          </p>
        </motion.div>

        {/* Payment methods grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-xl border border-border bg-card p-5 hover:border-primary/50 hover:shadow-[0_0_25px_hsl(187_85%_53%/0.15)] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <method.icon className="w-6 h-6 text-foreground-muted group-hover:text-primary transition-colors" />
              </div>

              {/* Name & description */}
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {method.name}
              </h3>
              <p className="text-sm text-foreground-subtle mb-4">
                {method.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5">
                {method.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-xs text-foreground-muted"
                  >
                    <div className="w-1 h-1 rounded-full bg-terminal" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Status */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-terminal animate-pulse" />
                  <span className="text-xs font-mono text-terminal">
                    Available
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground-subtle"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-terminal" />
            <span>Secure Transactions</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary" />
            <span>Global Coverage</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-accent" />
            <span>Milestone-Based</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
