import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const data = [
    { time: "00:00", value: 1.45 },
    { time: "02:00", value: 1.02 },
    { time: "04:00", value: 1.48 },
    { time: "06:00", value: 0.78 },
    { time: "08:00", value: 1.10 },
    { time: "10:00", value: 1.12 },
    { time: "12:00", value: 1.20 },
];

export default function TelemetryChart() {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
            <h2 className="text-white mb-4 font-semibold">
                Telemetry Output
            </h2>

            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid stroke="rgba(255,255,255,0.05)" />

                    <XAxis dataKey="time" stroke="#888" />
                    <YAxis stroke="#888" />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#34d399"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}