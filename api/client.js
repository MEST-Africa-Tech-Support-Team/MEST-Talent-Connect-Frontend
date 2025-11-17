import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL 

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

// Automatically attach token for every request
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});


// Employer profile
export const fetchMyProfile = async () => {
  try {
    const { data } = await apiClient.get("/employers/me");
    return data;
  } catch (error) {
    console.error("Error fetching profile:", error.response?.data || error);
    throw error;
  }
};

// Hiring pipeline data
export const fetchHiringPipeline = async () => {
  try {
    const { data } = await apiClient.get("/employers/pipeline/general");
    return data?.pipeline || data || [];
  } catch (error) {
    console.error("Error fetching pipeline:", error.response?.data || error);
    return [];
  }
};

// Hiring statistics
export const fetchHiringStatistics = async () => {
  try {
    const { data } = await apiClient.get("/employer/hiring/statistics");
    return data?.stats || data || {};
  } catch (error) {
    console.error("Error fetching hiring stats:", error.response?.data || error);
    return {};
  }
};

// Total hired count
export const fetchTotalHired = async () => {
  try {
    const { data } = await apiClient.get("/employer/total/hired/allrequirement");
    return data;
  } catch (error) {
    console.error("Error fetching total hired:", error.response?.data || error);
    return { total: 0 };
  }
};

// Active candidates count
export const fetchActiveCandidates = async () => {
  try {
    const { data } = await apiClient.get("/talent/active/count");
    return data;
  } catch (error) {
    console.error("Error fetching active candidates:", error.response?.data || error);
    return { count: 0 };
  }
};

// Weekly new talent count
export const fetchNewTalent = async () => {
  try {
    const { data } = await apiClient.get("/talent/weekly/update");
    return data;
  } catch (error) {
    console.error("Error fetching new talent:", error.response?.data || error);
    return { count: 0 };
  }
};
