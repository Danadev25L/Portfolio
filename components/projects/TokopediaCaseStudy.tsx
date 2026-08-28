import {
  BarChart3,
  Boxes,
  Check,
  FileText,
  Image as ImageIcon,
  MapPin,
  Megaphone,
  MessageSquareText,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Tags,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

const sellerOperations = [
  {
    icon: Store,
    title: "Store management",
    copy: "Manage shop settings, channel availability, operating status, and the complete product catalog from one place.",
  },
  {
    icon: ShoppingBag,
    title: "Products & catalog",
    copy: "Create listings, organize categories and variations, improve product quality, and handle high-volume catalog updates.",
  },
  {
    icon: PackageCheck,
    title: "Orders & fulfillment",
    copy: "Track new orders, packing deadlines, shipment progress, cancellations, returns, and warehouse origin.",
  },
  {
    icon: Boxes,
    title: "Inventory control",
    copy: "Keep stock synchronized across sales channels and identify low stock or overselling risk before it affects customers.",
  },
  {
    icon: MessageSquareText,
    title: "Customer operations",
    copy: "Bring chat, questions, complaints, and response performance into the seller's everyday operational queue.",
  },
  {
    icon: Megaphone,
    title: "Marketing & growth",
    copy: "Connect promotions, advertising, affiliates, and live-shopping activity to product and revenue performance.",
  },
];

const aiListingSteps = [
  {
    number: "01",
    title: "Upload one image",
    copy: "The seller starts with a clear product photo instead of a long empty form.",
    icon: ImageIcon,
  },
  {
    number: "02",
    title: "Understand the product",
    copy: "AI identifies the likely item, category, color, material, visible attributes, and possible variations.",
    icon: Search,
  },
  {
    number: "03",
    title: "Prepare the listing",
    copy: "The system drafts the title, description, attributes, search terms, price range, and shipping information.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Check quality and policy",
    copy: "Image quality, missing information, prohibited claims, duplicate listings, and risky content are flagged.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Review before publishing",
    copy: "Every generated field remains editable. The seller approves the final listing and stays in control.",
    icon: Check,
  },
];

const intelligenceFeatures = [
  {
    icon: TrendingDown,
    title: "Explain why performance is down",
    copy: "Separate traffic problems from conversion problems, then compare price position, stock, delivery speed, ratings, returns, listing quality, and ad efficiency to identify likely causes.",
  },
  {
    icon: TrendingUp,
    title: "Recommend what to sell next",
    copy: "Find products and bundles that match growing search demand, related purchases, category gaps, seasonal movement, and the seller's existing strengths.",
  },
  {
    icon: MapPin,
    title: "Show where demand is growing",
    copy: "Compare product interest, available stock, shipping coverage, competition, and conversion by city or region to guide inventory and campaign decisions.",
  },
  {
    icon: Tags,
    title: "Improve price and promotion decisions",
    copy: "Show the seller how pricing compares with similar products and whether a discount, bundle, ad, or improved listing is the strongest next action.",
  },
];

const reports = [
  ["Sales", "Revenue, orders, fees, discounts, refunds, cancellations, and net payout."],
  ["Products", "Views, search visibility, conversion, stock cover, returns, and margin."],
  ["Buyers", "New and returning buyers, repeat behavior, cohorts, and leading locations."],
  ["Advertising", "Spend, attributed sales, ROAS, search terms, and underperforming campaigns."],
  ["Operations", "Packing time, delivery service level, cancellation reasons, and response time."],
  ["Shop health", "Ratings, listing quality, policy risks, service quality, and growth readiness."],
];

export default function TokopediaCaseStudy() {
  return (
    <div className="space-y-28">
      <section>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Seller operations</p>
        <h2 className="max-w-4xl text-3xl font-bold text-white md:text-5xl">One place to run the complete marketplace workflow.</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
          The seller experience brings everyday operations together instead of making teams move between disconnected tools. It covers the work from creating a product to fulfilling an order and understanding the result.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sellerOperations.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <Icon size={21} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-gray-400">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-fuchsia-300/15 bg-gradient-to-br from-fuchsia-950/25 via-[#08091c] to-cyan-950/25 p-6 md:p-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-300">AI listing assistant</p>
        <h2 className="max-w-4xl text-3xl font-bold text-white md:text-5xl">Turn one product image into a complete, reviewable listing.</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
          This feature direction reduces repetitive seller work without publishing unverified AI output. It prepares the difficult fields, explains what may be missing, and gives the seller final approval.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {aiListingSteps.map(({ number, title, copy, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-[#090a18]/80 p-5">
              <div className="flex items-center justify-between text-fuchsia-300">
                <span className="text-xs font-bold tracking-widest">{number}</span>
                <Icon size={19} />
              </div>
              <h3 className="mt-7 font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">{copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Title", "Category", "Description", "Attributes", "Variations", "Search terms", "Price guidance", "Shipping details"].map((field) => (
            <span key={field} className="rounded-full border border-fuchsia-300/15 bg-fuchsia-400/[0.06] px-3 py-1.5 text-xs font-medium text-fuchsia-100">{field}</span>
          ))}
        </div>
      </section>

      <section>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Decision intelligence</p>
        <h2 className="max-w-4xl text-3xl font-bold text-white md:text-5xl">Give sellers an explanation and a next action.</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
          Reporting should not stop at charts. The product compares the signals behind a result, explains the strongest contributing factors, and recommends what the seller can do next.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {intelligenceFeatures.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="rounded-3xl border border-amber-300/10 bg-amber-950/10 p-7">
              <Icon className="text-amber-300" size={23} />
              <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-gray-400">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 text-purple-300">
          <BarChart3 size={20} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em]">Reports</p>
        </div>
        <h2 className="mt-5 max-w-3xl text-3xl font-bold text-white md:text-5xl">The information sellers need to understand the business.</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {reports.map(([title, copy], index) => (
            <article key={title} className="bg-[#09091b] p-6">
              <span className="text-xs font-bold text-purple-300">0{index + 1}</span>
              <h3 className="mt-5 text-lg font-semibold text-white">{title} report</h3>
              <p className="mt-3 leading-7 text-gray-400">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-3xl border border-cyan-300/15 bg-cyan-950/15 p-7">
          <Users className="text-cyan-300" size={22} />
          <h3 className="mt-5 text-xl font-semibold text-white">Buyer understanding</h3>
          <p className="mt-3 leading-7 text-gray-400">New versus returning customers, purchase frequency, leading cities, category interests, and retention patterns.</p>
        </div>
        <div className="rounded-3xl border border-cyan-300/15 bg-cyan-950/15 p-7">
          <FileText className="text-cyan-300" size={22} />
          <h3 className="mt-5 text-xl font-semibold text-white">Clear explanations</h3>
          <p className="mt-3 leading-7 text-gray-400">Every recommendation includes the signals behind it, so the seller can understand and challenge the reasoning.</p>
        </div>
        <div className="rounded-3xl border border-cyan-300/15 bg-cyan-950/15 p-7">
          <Check className="text-cyan-300" size={22} />
          <h3 className="mt-5 text-xl font-semibold text-white">Seller control</h3>
          <p className="mt-3 leading-7 text-gray-400">AI drafts and recommends. Pricing, stock movement, promotion changes, and publishing still require seller approval.</p>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">Research basis</p>
        <p className="mt-3 max-w-4xl leading-7 text-gray-400">
          The operational scope is grounded in documented Tokopedia seller capabilities, including real-time sales and operations, inventory, buyer analytics, TopAds, reporting, and the unified Tokopedia and TikTok Shop Seller Center. The image-to-listing and recommendation features are clearly presented as product direction.
        </p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
          <a className="text-cyan-300 hover:text-cyan-200" href="https://newsroom.tiktok.com/tokopedia-dan-tiktok-shop-seller-center-resmi-diluncurkan?lang=id-ID" target="_blank" rel="noreferrer">Unified Seller Center source ↗</a>
          <a className="text-cyan-300 hover:text-cyan-200" href="https://assets.tokopedia.net/asts/GOTO%20Laporan%20Tahunan%202022.pdf" target="_blank" rel="noreferrer">Seller features source ↗</a>
        </div>
      </section>
    </div>
  );
}
