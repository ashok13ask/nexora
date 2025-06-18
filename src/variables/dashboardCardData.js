import {
  FaBell,
  FaBullhorn,
  FaChartBar,
  FaChartLine,
  FaEnvelope,
  FaFile,
  FaInstagram,
  FaMailchimp,
  FaPlus,
  FaSyncAlt,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";

export const todayCard = [
  {
    name: "Active Users",
    value: 24,
    icon: FaBullhorn,
    iconColor: "#3B82F6",
    bgColor: "#DBEAFE",
  },
  {
    name: "New Users",
    value: 20,
    icon: FaSyncAlt,
    iconColor: "#B784F2",
    bgColor: "#F3E8FF",
  },
  {
    name: "Sent",
    value: "142,568",
    icon: FaUser,
    iconColor: "#63A54A",
    bgColor: "#DBFAE7",
  },
  {
    name: "Converted",
    value: 10,
    icon: FaChartLine,
    iconColor: "#E25615",
    bgColor: "#FCEDD5",
  },
];

export const monthData = [
  {
    title: "All users",
    value: 2400,
    change: 9.8,
    icon: FaBullhorn,
    iconColor: "#3B82F6",
    bgColor: "#DBEAFE",
    badegColor: "success",
  },
  {
    title: "New users",
    value: 2000,
    change: 8.2,
    icon: FaSyncAlt,
    iconColor: "#B784F2",
    bgColor: "#F3E8FF",
    badegColor: "success",
  },
  {
    title: "Sent",
    value: "1,450,567",
    change: 6.3,
    icon: FaUser,
    iconColor: "#63A54A",
    bgColor: "#DBFAE7",
    badegColor: "success",
  },
  {
    title: "Converted",
    value: 1000,
    change: 1.2,
    iconColor: "#E25615",
    bgColor: "#FCEDD5",
    icon: FaChartLine,
    badegColor: "danger",
  },
];
export const campaignsCard = [
  {
    title: "Summer Collection Launch",
    channel: "Email",
    status: "Scheduled",
    schedule: "Scheduled for June 15",
    icon: FaEnvelope,
    iconColor: "#3B82F6",
    bgColor: "#DBEAFE",
    badegColor: "#FEF9C3",
    badgeTextColor: "#874D0E",
  },
  {
    title: "Influencer Partnership",
    channel: "Social",
    status: "Active",
    schedule: "Running",
    icon: FaInstagram,
    iconColor: "#63A54A",
    bgColor: "#DBFAE7",
    badegColor: "#DBFAE7",
    badgeTextColor: "#63A54A",
  },
  {
    title: "Flash Sale Notification",
    channel: "Push",
    status: "Draft",
    schedule: "Draft",
    icon: FaBell,
    iconColor: "#B784F2",
    bgColor: "#F3E8FF",
    badegColor: "#F3F4F6",
    badgeTextColor: "#255493",
  },
  {
    title: "Abandoned Cart Recovery",
    channel: "Email",
    status: "Active",
    schedule: "Running",
    icon: FaEnvelope,
    iconColor: "#E25615",
    bgColor: "#FCEDD5",
    badegColor: "#FEF9C3",
    badegColor: "#DBFAE7",
    badgeTextColor: "#63A54A",
  },
];

export const dashboardGraphOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      align: "end",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 20,
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: true,
      text: "Campaign Performance",
      align: "start",
      font: {
        size: 18,
        weight: "bold",
      },
      color: "#333",
      padding: {
        bottom: 30,
      },
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 12,
        },
        color: "#666",
      },
    },
    y: {
      display: true,
      min: 0,
      max: 250,
      ticks: {
        stepSize: 50,
        font: {
          size: 12,
        },
        color: "#666",
      },
      grid: {
        color: "#e0e0e0",
        lineWidth: 1,
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
    point: {
      radius: 4,
      hoverRadius: 6,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
};

export const dashboardGraphLabels = ["Week 1", "Week 2", "Week 3", "Week 4"];

export const dashboardGraphData = {
  dashboardGraphLabels,
  datasets: [
    {
      label: "Email",
      data: [120, 130, 100, 130],
      borderColor: "#4285f4",
      backgroundColor: "rgba(66, 133, 244, 0.1)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Social",
      data: [150, 230, 200, 150],
      borderColor: "#fbbc04",
      backgroundColor: "rgba(251, 188, 4, 0.1)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Push",
      data: [220, 180, 180, 230],
      borderColor: "#34a853",
      backgroundColor: "rgba(52, 168, 83, 0.1)",
      fill: true,
      tension: 0.4,
    },
  ],
};

export const dashboardArcData = {
  labels: [
    "Loyal Customers",
    "New Subscribers",
    "High-Value Shoppers",
    "At-Risk Customers",
  ],
  datasets: [
    {
      data: [32, 28, 24, 16],
      backgroundColor: [
        "#00bcd4", // Cyan
        "#81c784", // Light Green
        "#ff7043", // Orange
        "#ffb74d", // Light Orange
      ],
      borderWidth: 0,
      cutout: "60%",
    },
  ],
};

export const dashboardArcOption = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Hide default legend
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: ${context.parsed}%`;
        },
      },
    },
  },
};

export const dashboardArcSegments = [
  { name: "Loyal Customers", color: "#00bcd4", percentage: 32 },
  { name: "New Subscribers", color: "#81c784", percentage: 28 },
  { name: "High-Value Shoppers", color: "#ff7043", percentage: 24 },
  { name: "At-Risk Customers", color: "#ffb74d", percentage: 16 },
];

export const quickActionData = [
  {
    title: "Create Campaign",
    icon: FaPlus,
    iconColor: "#3B82F6",
    bgColor: "#DBEAFE",
  },
  {
    title: "Create Segment",
    icon: FaUserPlus,
    iconColor: "#63A54A",
    bgColor: "#DBFAE7",
  },
  {
    title: "Create Template",
    icon: FaFile,
    iconColor: "#B784F2",
    bgColor: "#F3E8FF",
  },
  {
    title: "View Reports",
    icon: FaChartBar,
    iconColor: "#E25615",
    bgColor: "#FCEDD5",
  },
];
