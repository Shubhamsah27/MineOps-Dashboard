import Layout from "./layout/Layout";
import Header from "./components/Header";
import KpiCard from "./components/KpiCard";
import TelemetryChart from "./components/dashboard/TelemetryChart";
import SubsystemPanel from "./components/dashboard/SubsystemPanel";
import LogsTable from "./components/dashboard/LogsTable";

export default function App() {
  return (
    <Layout>

      <Header />

      {/* KPI */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <KpiCard title="DRILL VELOCITY" value="84.2" unit="m/s" variant="green" />
        <KpiCard title="EFFICIENCY" value="92" unit="%" variant="yellow" />
        <KpiCard title="SAFETY INDEX" value="9.8" unit="/10" variant="teal" />
        <KpiCard title="CRITICAL NODE" value="G14" unit="" variant="red" />
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2 space-y-6">
          <TelemetryChart />
          <LogsTable />
        </div>

        <SubsystemPanel />

      </div>

    </Layout>
  );
}