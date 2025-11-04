import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import HiringPipelineChart from "../components/HiringPipelineChart";
import SmallLineChart from "../components/SmallLineChart";
import GaugeChart from "../components/GaugeChart";
import { FiUsers, FiCheckSquare, FiClock, FiStar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
  apiClient,
  fetchHiringPipeline,
  fetchHiringStatistics,
  fetchTotalHired,
  fetchActiveCandidates,
  fetchNewTalent,
} from "../../api/client";

export default function Dashboard() {
  const navigate = useNavigate();

  // 🔹 State
  const [pipeline, setPipeline] = useState([]);
  const [stats, setStats] = useState({});
  const [hired, setHired] = useState(0);
  const [activeCandidates, setActiveCandidates] = useState(0);
  const [newTalent, setNewTalent] = useState(0);
  const [profile, setProfile] = useState({
    name: "",
    companyName: "",
    greetingMessage: "",
  });
  const [loading, setLoading] = useState(true);

  // Redirect if no token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  // Load employer profile
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await apiClient.get("/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = res.data;
        const profileData = data.profile || {};

        if (data.message?.includes("does not exist")) {
          setProfile({
            name: "Demo User",
            companyName: "Demo Company",
            greetingMessage: "Welcome to your Employer Dashboard!",
          });
          return;
        }

        setProfile({
          name: profileData.contactPerson || "User",
          companyName: profileData.companyName || "Your Company",
          greetingMessage: `Welcome back, ${profileData.contactPerson || "User"} from ${
            profileData.companyName || "Your Company"
          }!`,
        });
      } catch (error) {
        console.error("Error loading profile:", error);
        setProfile({
          name: "Demo User",
          companyName: "Demo Company",
          greetingMessage: "Welcome back to MEST!",
        });
      }
    };

    loadProfile();
  }, []);

  // Load dashboard data
  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [
          pipelineRes,
          statsRes,
          totalHiredRes,
          activeRes,
          newTalentRes,
        ] = await Promise.all([
          fetchHiringPipeline(),
          fetchHiringStatistics(),
          fetchTotalHired(),
          fetchActiveCandidates(),
          fetchNewTalent(),
        ]);

        // Handle object-based API structures
        if (pipelineRes?.talentStatusCounts) {
          const counts = pipelineRes.talentStatusCounts;
          const formatted = Object.keys(counts).map((key) => ({
            name: key,
            value: counts[key],
          }));
          setPipeline(formatted);
        } else {
          setPipeline(Array.isArray(pipelineRes) ? pipelineRes : []);
        }

        setStats(statsRes || {});
        setHired(totalHiredRes.totalHired || 0);
        setActiveCandidates(
          activeRes.activeCount || activeRes.count || activeRes.total || 0
        );
        setNewTalent(newTalentRes.weeklyNew || newTalentRes.count || 0);
      } catch (error) {
        console.error("Error loading dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading dashboard data...
      </div>
    );

  return (
    <div className="flex-1 flex flex-col">
      <Header profile={profile} />

      <main className="p-6 md:p-8 lg:p-10">
        {/*  Welcome Banner */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-xl p-6 md:p-8 mb-6 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {profile.greetingMessage}
          </h2>
          <p className="mt-2 text-sm opacity-90">
            You have {activeCandidates} active candidates and {hired} total
            hires. MEST has added {newTalent} new verified developers to the
            talent pool this week.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Active Candidates"
            value={activeCandidates}
            icon={<FiUsers />}
            accent="#C084FC"
          />
          <StatCard
            title="Successful Placements"
            value={hired}
            icon={<FiCheckSquare />}
            accent="#FF7A45"
          />
          <StatCard
            title="Pending Feedback"
            value={stats.pendingFeedback || 0}
            icon={<FiClock />}
            accent="#C084FC"
          />
          <StatCard
            title="New Talent Added"
            value={newTalent}
            icon={<FiStar />}
            accent="#FFB020"
          />
        </div>

        {/* Charts + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <HiringPipelineChart data={pipeline} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <SmallLineChart data={stats.trends || []} />
              <GaugeChart value={stats.performance || 0} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
              <h4 className="font-semibold mb-4">Quick Actions</h4>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg mb-3">
                🔍 Browse Talent
              </button>
              <button className="w-full border border-teal-600 text-teal-600 py-3 rounded-lg">
                + New Post
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
              <h4 className="font-semibold mb-4">Upcoming Events</h4>
              <div className="space-y-3">
                <div className="p-3 border border-gray-100 rounded-md">
                  <div className="font-medium">Tech Innovation Summit</div>
                  <div className="text-xs text-gray-400">
                    November 20, 2026 • 10:00 AM
                  </div>
                  <button className="text-sm text-teal-600 mt-2">
                    Join Event
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
