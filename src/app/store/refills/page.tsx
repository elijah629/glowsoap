import Image from "next/image";
import {
  Truck,
  ShieldCheck,
  Heart,
  Share2,
  Minus,
  Plus,
  Flag,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-12">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border">
            <Image
              src="/GlowSoapRefill.png"
              alt="Product image"
              width={600}
              height={600}
              className="aspect-square w-full object-contain object-center"
              priority
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge className="text-xs text-foreground bg-orange-500">
                PRE-ORDER
              </Badge>
            </div>
            <h1 className="text-3xl font-bold">GlowSoap Refill</h1>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">$10.00</span>
            </div>
          </div>

          <p className="text-muted-foreground">GlowSoap Refills</p>

          {/* Quantity */}
          <div className="space-y-4">
            <div className="font-medium">Quantity</div>
            <div className="flex items-center">
              <Button variant="outline" size="icon" className="rounded-r-none">
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <div className="flex h-10 w-12 items-center justify-center border-y">
                1
              </div>
              <Button variant="outline" size="icon" className="rounded-l-none">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
          </div>

          {/* Add to Cart and Buy Now */}
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button className="flex-1">Add to Cart</Button>
            <Button variant="secondary" className="flex-1">
              Buy Now
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share product</span>
            </Button>
          </div>

          {/* Shipping and Returns */}
          <div className="space-y-4 rounded-lg border p-4">
            <div className="flex items-start gap-2">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="font-medium">Free Shipping</div>
                <div className="text-sm text-muted-foreground">
                  Free standard shipping on orders over $75
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="font-medium">30-Day Returns</div>
                <div className="text-sm text-muted-foreground">
                  Shop with confidence with our 30-day return policy
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Flag className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="font-medium">Made in USA</div>
                <div className="text-sm text-muted-foreground">
                  Unnaffected by the global trade war
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">Product Description</h3>
          The Official place for GlowSoap Refills
        </div>
      </div>
    </div>
  );
}
