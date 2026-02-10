import { motion } from "framer-motion";
import { Building, Smartphone, Shield, CheckCircle2, Zap } from "lucide-react";

const paymentMethods = [
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
    features: ["NEFT/IMPS/RTGS", "Zero Platform Fees", "Invoice support"],
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
            Payment Options
          </h2>
          <p className="text-foreground-muted max-w-lg mx-auto">
            Secure and simple payment methods for seamless project kickoffs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Payment Methods List */}
          <div className="grid gap-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-[0_0_25px_hsl(187_85%_53%/0.15)] transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-muted flex shrink-0 items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <method.icon className="w-7 h-7 text-foreground-muted group-hover:text-primary transition-colors" />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {method.name}
                  </h3>
                  <p className="text-sm text-foreground-subtle mb-4">
                    {method.description}
                  </p>
                  <ul className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2">
                    {method.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-foreground-muted"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-terminal" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-2 self-center sm:self-start mt-2 sm:mt-0 px-3 py-1 rounded-full bg-terminal/10 border border-terminal/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-terminal animate-pulse" />
                  <span className="text-[10px] font-mono text-terminal">
                    ACTIVE
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* QR Code Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 text-center flex flex-col items-center"
          >
            <div className="font-mono text-xs text-primary mb-6">
              // manual.scan
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white p-4 rounded-xl mb-8 shadow-2xl">
                <img
                  src="/upi-qr.png"
                  alt="UPI QR Code"
                  className="w-56 h-56 object-contain"
                />
              </div>
            </div>

            <div className="w-full max-w-sm space-y-6">
              <div>
                <div className="flex items-center justify-center gap-2 text-xs text-foreground-subtle mb-2">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  <span>UPI ID</span>
                </div>
                <div className="font-mono text-sm sm:text-base text-foreground bg-muted/50 py-3 px-4 rounded-lg border border-border select-all break-all hover:border-primary/50 transition-colors cursor-text">
                  anshuljangid.indian@okhdfcbank
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-foreground-muted">
                <CheckCircle2 className="w-3 h-3 text-terminal" />
                <span>Verified Merchant</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-foreground-subtle"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-terminal" />
            <span>Secure Transactions</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span>Instant Processing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
