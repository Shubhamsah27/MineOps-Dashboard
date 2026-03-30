export default function Sidebar() {
    return (
        <div className="w-64 min-h-screen bg-[#020617] border-r border-white/10 flex flex-col justify-between">

            <div>
                {/* LOGO */}
                <div className="p-6">
                    <h1 className="text-xl font-bold text-emerald-400 tracking-wide">
                        MINEOPS
                    </h1>
                    <p className="text-xs text-gray-500">COMMAND CENTER</p>
                </div>

                {/* ACTIVE SESSION */}
                <div className="px-4">
                    <div className="bg-emerald-500/10 border border-emerald-400/20 px-3 py-2 rounded-lg flex justify-between items-center">
                        <span className="text-xs text-emerald-300">ACTIVE SESSION</span>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    </div>
                </div>

                {/* NAV */}
                <div className="mt-6 px-2 space-y-1">
                    <div className="bg-emerald-500/10 text-emerald-400 px-4 py-3 rounded-lg border-l-2 border-emerald-400">
                        Dashboard
                    </div>
                    <div className="px-4 py-3 text-gray-400 hover:text-white">Telemetry</div>
                    <div className="px-4 py-3 text-gray-400 hover:text-white">Sector Map</div>
                    <div className="px-4 py-3 text-gray-400 hover:text-white">Logs</div>
                    <div className="px-4 py-3 text-gray-400 hover:text-white">Settings</div>
                </div>
            </div>

            {/* USER */}
            <div className="p-4 border-t border-white/10">
                <p className="text-sm">Cmdr. Vance</p>
                <p className="text-xs text-gray-500">ID: 884-X</p>
            </div>
        </div>
    );
}