import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-950 text-white">
      <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 backdrop-blur">
        <LoaderCircle className="animate-spin" size={18} />
        <p className="text-sm font-medium tracking-wide">Loading portfolio...</p>
      </div>
    </div>
  );
}
