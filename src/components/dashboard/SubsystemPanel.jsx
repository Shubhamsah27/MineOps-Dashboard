import { Wind, Droplet, Zap, AlertTriangle } from "lucide-react";

const subsystems = [
    {
        name: "Ventilation",
        status: "Airflow Nominal",
        value: "100%",
        color: "text-green-400",
        icon: Wind,
    },
    {
        name: "Coolant Pumps",
        status: "Pressure Drop",
        value: "76%",
        color: "text-yellow-400",
        icon: Droplet,
    },
    {
        name: "Power Grid",
        status: "Generator Active",
        value: "98%",
        color: "text-green-400",
        icon: Zap,
    },
    {
        name: "Seismic Sensors",
        status: "Offline Node D4",
        value: "ERR",
        color: "text-red-400",
        icon: AlertTriangle,
    },
];

export default function SubsystemPanel() {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
            <h2 className="text-white mb-4 font-semibold">Subsystems</h2>

            <div className="space-y-3">
                {subsystems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
                        >
                            <div className="flex items-center gap-3">
                                <Icon className={`w-5 h-5 ${item.color}`} />

                                <div>
                                    <p className="text-white text-sm font-medium">
                                        {item.name}
                                    </p>
                                    <p className="text-gray-400 text-xs">
                                        {item.status}
                                    </p>
                                </div>
                            </div>

                            <span className={`font-semibold ${item.color}`}>
                                {item.value}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}