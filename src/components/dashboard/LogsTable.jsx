import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LogsTable() {
    const [logs, setLogs] = useState([]);

    // FETCH LOGS
    const fetchLogs = async () => {
        const { data, error } = await supabase
            .from("logs")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Fetch error:", error);
        } else {
            setLogs(data || []);
        }
    };

    // UPDATE STATUS
    const updateStatus = async (id, status) => {
        const newStatus =
            status === "pending"
                ? "acknowledged"
                : status === "acknowledged"
                    ? "resolved"
                    : "resolved";

        const { error } = await supabase
            .from("logs")
            .update({ status: newStatus })
            .eq("id", id);

        if (error) console.error(error);
    };

    useEffect(() => {
        fetchLogs();

        // REALTIME SUBSCRIPTION
        const channel = supabase
            .channel("logs-realtime")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "logs" },
                () => {
                    fetchLogs();
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
            <h2 className="text-white mb-4 font-semibold">System Logs</h2>

            {logs.length === 0 ? (
                <p className="text-gray-400">No logs found</p>
            ) : (
                <div className="space-y-3">
                    {logs.map((log) => (
                        <div
                            key={log.id}
                            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
                        >
                            {/* LEFT */}
                            <div>
                                <p className="text-gray-200 text-sm">{log.message}</p>
                                <p className="text-gray-500 text-xs">
                                    {new Date(log.created_at).toLocaleTimeString()}
                                </p>
                            </div>

                            {/* RIGHT */}
                            <div className="flex items-center gap-3">
                                {/* STATUS BADGE */}
                                <span
                                    className={`text-xs px-2 py-1 rounded-full ${log.status === "pending"
                                        ? "bg-yellow-500/20 text-yellow-400"
                                        : log.status === "acknowledged"
                                            ? "bg-blue-500/20 text-blue-400"
                                            : "bg-green-500/20 text-green-400"
                                        }`}
                                >
                                    {log.status}
                                </span>

                                {/* ACTION BUTTON */}
                                {log.status !== "resolved" && (
                                    <button
                                        onClick={() => updateStatus(log.id, log.status)}
                                        className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg text-white"
                                    >
                                        {log.status === "pending"
                                            ? "Acknowledge"
                                            : "Resolve"}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}