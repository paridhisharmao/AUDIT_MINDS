export const users = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Admin",
    status: "Active",
    lastLogin: "2026-02-16 08:42 AM",
    accessScope: "Full System",
    mfaEnabled: true,
  },
  {
    id: 2,
    name: "Michael Torres",
    role: "Manager",
    status: "Active",
    lastLogin: "2026-02-16 07:15 AM",
    accessScope: "Department",
    mfaEnabled: true,
  },
  {
    id: 3,
    name: "Emily Wright",
    role: "Reviewer",
    status: "Active",
    lastLogin: "2026-02-15 04:33 PM",
    accessScope: "Review Only",
    mfaEnabled: true,
  },
  {
    id: 4,
    name: "James Park",
    role: "Analyst",
    status: "Active",
    lastLogin: "2026-02-16 06:22 AM",
    accessScope: "Read Only",
    mfaEnabled: false,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Analyst",
    status: "Inactive",
    lastLogin: "2026-02-10 02:18 PM",
    accessScope: "Read Only",
    mfaEnabled: true,
  },
];

export const roles = [
  {
    name: "Analyst",
    accessLevel: "Read Only",
    dataScope: "Assigned Cases",
    editRights: "None",
    approvalRights: "None",
  },
  {
    name: "Reviewer",
    accessLevel: "Review Access",
    dataScope: "Department Data",
    editRights: "Annotations",
    approvalRights: "Flag Items",
  },
  {
    name: "Manager",
    accessLevel: "Management",
    dataScope: "Department & Team",
    editRights: "Full Edit",
    approvalRights: "Approve Reports",
  },
  {
    name: "Admin",
    accessLevel: "Full Control",
    dataScope: "Global Access",
    editRights: "System Config",
    approvalRights: "All Actions",
  },
];

export const dataSources = [
  {
    id: 1,
    name: "KYC Data Warehouse",
    type: "KYC",
    status: "Connected",
    lastSync: "2026-02-16 08:30 AM",
    health: "Healthy",
  },
  {
    id: 2,
    name: "Transaction Monitor",
    type: "Transactions",
    status: "Connected",
    lastSync: "2026-02-16 08:28 AM",
    health: "Healthy",
  },
  {
    id: 3,
    name: "Alert System Feed",
    type: "Alerts",
    status: "Connected",
    lastSync: "2026-02-16 08:31 AM",
    health: "Healthy",
  },
  {
    id: 4,
    name: "Compliance Repository",
    type: "Documents",
    status: "Warning",
    lastSync: "2026-02-15 11:42 PM",
    health: "Degraded",
  },
];

export const integrations = [
  {
    name: "Storage",
    status: "Connected",
    latency: "12ms",
    lastCheck: "30s ago",
  },
  {
    name: "Database",
    status: "Connected",
    latency: "8ms",
    lastCheck: "15s ago",
  },
  {
    name: "Model API",
    status: "Connected",
    latency: "124ms",
    lastCheck: "45s ago",
  },
  {
    name: "Vector Store",
    status: "Connected",
    latency: "18ms",
    lastCheck: "20s ago",
  },
];
