import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { clearCart, useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/products";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

interface Props {
  onBack: () => void;
}

export function CheckoutForm({ onBack }: Props) {
  const { total } = useCart();
  const [form, setForm] = useState({ name: "", address: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.phone) {
      toast.error("Please fill in all fields");
      return;
    }
    clearCart();
    toast.success("🎉 Order placed successfully! Your items will be delivered soon.");
    onBack();
  };

  return (
    <div className="flex flex-1 flex-col py-4">
      <button
        onClick={onBack}
        className="mb-4 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to cart
      </button>

      <h3 className="font-heading text-lg font-semibold text-foreground">Checkout — Cash on Delivery</h3>
      <p className="mt-1 text-sm text-muted-foreground">Total: {formatPrice(total)}</p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-1 flex-col gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">Full Name</label>
          <Input
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">Address</label>
          <Textarea
            placeholder="Delivery address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            rows={3}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">Phone Number</label>
          <Input
            placeholder="+91 XXXXXXXXXX"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        <div className="mt-auto">
          <Button type="submit" variant="hero" className="w-full rounded-full py-6">
            Place Order — {formatPrice(total)}
          </Button>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Payment will be collected upon delivery
          </p>
        </div>
      </form>
    </div>
  );
}
