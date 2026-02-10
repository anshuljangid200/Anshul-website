import { motion } from "framer-motion";
import { useState } from "react";
import { Building, Smartphone, Shield, CheckCircle2, Zap, ArrowRight, User, Mail, Briefcase, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GlowButton } from "@/components/ui/GlowButton";
import { Textarea } from "@/components/ui/textarea";

const paymentMethods = [
  {
    id: "upi",
    name: "UPI",
    description: "Instant India payments",
    icon: Smartphone,
    features: ["Zero fees", "Instant settlement", "24/7 available"],
  },
  {
    id: "bank",
    name: "Bank Transfer",
    description: "Direct wire transfer",
    icon: Building,
    features: ["NEFT/IMPS/RTGS", "Zero Platform Fees", "Invoice support"],
  },
];

export const PaymentsSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [step, setStep] = useState<"details" | "qr">("details");
  const [formData, setFormData] = useState({
    name: "",
    projectName: "",
    email: "",
    details: "",
  });

  const handleCardClick = (methodId: string) => {
    if (methodId === "upi") {
      setStep("details");
      setFormData({ name: "", projectName: "", email: "", details: "" });
      setIsDialogOpen(true);
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setStep("qr");
    }
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-dots opacity-15" />

      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-sm text-primary mb-3">
            // billing.gateway
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Select Payment Method
          </h2>
          <p className="text-foreground-muted max-w-lg mx-auto">
            Secure and simple payment methods. Click on a method below to proceed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.id}
              onClick={() => handleCardClick(method.id)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-8 transition-all duration-300 relative overflow-hidden ${method.id === "upi"
                  ? "cursor-pointer hover:border-primary/50 hover:shadow-[0_0_30px_hsl(187_85%_53%/0.15)]"
                  : "opacity-80"
                }`}
            >
              {method.id === "upi" && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              )}

              <div className="w-16 h-16 rounded-2xl bg-muted flex shrink-0 items-center justify-center group-hover:bg-primary/20 transition-colors z-10">
                <method.icon className="w-8 h-8 text-foreground-muted group-hover:text-primary transition-colors" />
              </div>

              <div className="text-center z-10">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {method.name}
                </h3>
                <p className="text-foreground-muted mb-6">
                  {method.description}
                </p>
                <ul className="flex flex-wrap justify-center gap-3 mb-6">
                  {method.features.map((feature) => (
                    <li
                      key={feature}
                      className="px-3 py-1 rounded-full bg-muted/50 border border-border text-xs font-mono text-foreground-muted"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                {method.id === "upi" ? (
                  <div className="inline-flex items-center gap-2 text-primary font-medium border-b border-primary/20 hover:border-primary transition-colors">
                    Pay via {method.name}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="text-xs text-foreground-subtle bg-muted/50 p-3 rounded-lg border border-border">
                    Bank details available upon request or invoice.
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* UPI Payment Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{step === "details" ? "Payment Details" : "Scan to Pay"}</DialogTitle>
            </DialogHeader>

            {step === "details" ? (
              <form onSubmit={handleNext} className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-foreground-muted" />
                    <Input
                      id="name"
                      required
                      placeholder="John Smith"
                      className="pl-9"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-foreground-muted" />
                    <Input
                      id="email"
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="pl-9"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project">Project Name</Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3 w-4 h-4 text-foreground-muted" />
                    <Input
                      id="project"
                      placeholder="E.g. Portfolio Website"
                      className="pl-9"
                      value={formData.projectName}
                      onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Other Details (Optional)</Label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-4 h-4 text-foreground-muted" />
                    <Textarea
                      id="details"
                      placeholder="Any specific notes..."
                      className="pl-9 min-h-[80px]"
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    />
                  </div>
                </div>

                <GlowButton type="submit" className="w-full mt-4">
                  Proceed to Pay
                  <ArrowRight className="w-4 h-4 ml-2" />
                </GlowButton>
              </form>
            ) : (
              <div className="flex flex-col items-center pt-4 animate-in fade-in zoom-in duration-300">
                <div className="relative bg-white p-4 rounded-xl mb-6 shadow-xl w-64 h-64 flex items-center justify-center">
                  <img
                    src="/upi-qr.png"
                    alt="UPI QR Code"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-xl pointer-events-none" />
                </div>

                <div className="text-center w-full space-y-4">
                  <div className="space-y-1">
                    <p className="text-sm text-foreground-muted">Paying as</p>
                    <p className="font-semibold text-foreground">{formData.name}</p>
                  </div>

                  <div className="p-3 bg-muted/50 rounded-lg border border-border">
                    <div className="text-xs text-foreground-subtle mb-1">UPI ID</div>
                    <div className="font-mono text-sm text-primary select-all">
                      anshuljangid.indian@okhdfcbank
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-green-500">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Safe & Secure Gateway</span>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

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
