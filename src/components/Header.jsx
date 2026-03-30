export default function Header() {
  return (
    <div className="flex justify-between items-center mb-6">

      <div>
        <h1 className="text-2xl font-semibold">Main Dashboard</h1>
        <p className="text-gray-400 text-sm">
          Sector G14 - Deep Core Mining Operations
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs tracking-wide">
          ● SYSTEM NOMINAL
        </div>

        <div className="w-10 h-10 bg-white/10 rounded-full"></div>

      </div>

    </div>
  );
}