"use client";
import { useRouter } from "next/navigation";
import {
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import { Table } from "antd";

// import Header from "../components/header/page";

const keywords = ["All", "Nutrition", "Fitness", "Medicine", "Mental Health"];

const dataSource = [
  {
    rank: "#1",
    influencer: "Dr. John Doe",
    category: "Medicine",
    trust_score: "9.5",
    trend: "up",
    followers: "1.2M+",
    verified_claims: 203,
    key: "1",
  },
  {
    rank: "#1",
    influencer: "Dr. John Doe",
    category: "Medicine",
    trust_score: "9.5",
    trend: "up",
    followers: "1.2M+",
    verified_claims: 203,
    key: "2",
  },
  {
    rank: "#1",
    influencer: "Dr. John Doe",
    category: "Medicine",
    trust_score: "9.5",
    trend: "up",
    followers: "1.2M+",
    verified_claims: 203,
    key: "3",
  },
  {
    rank: "#1",
    influencer: "Dr. John Doe",
    category: "Medicine",
    trust_score: "9.5",
    trend: "up",
    followers: "1.2M+",
    verified_claims: 203,
    key: "4",
  },
];

const columns = [
  {
    title: "RANK",
    dataIndex: "rank",
    key: "rank",
  },
  {
    title: "INFLUENCER",
    dataIndex: "influencer",
    key: "influencer",
    render: (text: string) => (
      <div className="flex items-center gap-2">
        <UsergroupAddOutlined />
        <p>{text}</p>
      </div>
    ),
  },
  {
    title: "CATEGORY",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "TRUST SCORE",
    dataIndex: "trust_score",
    key: "trust_score",
  },
  {
    title: "TREND",
    dataIndex: "trend",
    key: "trend",
    render: (text: string) => (
      <>
        {text === "up" ? <UsergroupAddOutlined /> : <UsergroupDeleteOutlined />}
      </>
    ),
  },
  {
    title: "FOLLOWERS",
    dataIndex: "followers",
    key: "followers",
  },
  {
    title: "VERIFIED CLAIMS",
    dataIndex: "verified_claims",
    key: "verified_claims",
  },
];

export default function LeaderBoard() {
  const router = useRouter();

  const handleRowClick = (record: {
    rank?: string;
    influencer?: string;
    category?: string;
    trust_score?: string;
    trend?: string;
    followers?: string;
    verified_claims?: number;
    key?: string;
  }) => {
    router.push(`/influencer/${record.key}`);
    console.log(record);
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="space-y-4">
        <p className="text-3xl">Influencer Trust Leaderboard</p>
        <p>
          Real time rankings of health influencers based on scientific accuracy,
          credibility and transparency. Updated daily using AI-powered analysis
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-md p-8 gap-4 flex items-center border border-white/30 bg-slate-800">
            <UsergroupAddOutlined className="text-3xl" />
            <div>
              <p className="text-xl">1,234</p>
              <p>Active Influencers</p>
            </div>
          </div>
          <div className="rounded-md p-8 gap-4 flex items-center border border-white/30 bg-slate-800">
            <UsergroupAddOutlined className="text-3xl" />
            <div>
              <p className="text-xl">25,431</p>
              <p>Claims Verified</p>
            </div>
          </div>
          <div className="rounded-md p-8 gap-4 flex items-center border border-white/30 bg-slate-800">
            <UsergroupAddOutlined className="text-3xl" />
            <div>
              <p className="text-xl">85.7%</p>
              <p>Average Trust Score</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <div className="space-x-2 flex flex-wrap">
            {keywords.map((keyword, index) => (
              <div
                key={index}
                className="px-5 py-2 border border-white rounded-2xl mb-2"
              >
                {keyword}
              </div>
            ))}
          </div>
          <div className="flex items-center px-4 py-2 bg-slate-800 rounded-md mt-2 md:mt-0">
            <UsergroupAddOutlined />
            <p>Highest First</p>
          </div>
        </div>
        <Table
          dataSource={dataSource}
          columns={columns}
          className="bg-slate-700 cursor-pointer"
          pagination={false}
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
          })}
        />
      </div>
    </div>
  );
}
