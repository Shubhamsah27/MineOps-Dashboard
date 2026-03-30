import { supabase } from "./supabase";

// GET LOGS
export const getLogs = async () => {
    const { data, error } = await supabase
        .from("logs")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
};

// ADD LOG
export const addLog = async (message, severity = "low") => {
    const { error } = await supabase.from("logs").insert([
        { message, severity, status: "pending" },
    ]);

    if (error) throw error;
};

// UPDATE STATUS
export const updateLogStatus = async (id, status) => {
    const { error } = await supabase
        .from("logs")
        .update({ status })
        .eq("id", id);

    if (error) throw error;
};