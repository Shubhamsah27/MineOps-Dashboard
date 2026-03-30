export default function KpiCard({ title, value, unit, variant }) {
    const styles = {
        green: "glow-green",
        yellow: "glow-yellow",
        teal: "glow-teal",
        red: "glow-red",
    };

    return (
        <div className={`p-5 rounded-2xl ${styles[variant]} glow-shadow`}>
            <p className="text-xs text-gray-400">{title}</p>

            <h2 className="text-3xl font-bold mt-2">
                {value} <span className="text-sm text-gray-400">{unit}</span>
            </h2>

            <div className="mt-4 h-1 bg-white/10 rounded-full">
                <div className="h-1 w-2/3 bg-emerald-400 rounded-full"></div>
            </div>
        </div>
    );
}