"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import {
  RiseOutlined,
  SearchOutlined,
  DownOutlined,
  CalendarOutlined,
  UploadOutlined,
  OpenAIOutlined,
} from "@ant-design/icons";
import { Tabs, TabsProps, Dropdown } from "antd";
import type { MenuProps } from "antd";

const dataSource = [
  {
    key: "1",
    influencer: "Dr. John Doe1",
    category: "Medicine",
    trust_score: "89%",
    revenue: "$5.0M",
    followers: "1.2M+",
    products: "1",
    description:
      "Stanford Professor of Neurobiology and Ophthalmology, focusing on neural devleopment, brain plasticity, and",
  },
  {
    key: "2",
    influencer: "Dr. John Doe2",
    category: "Medicine",
    trust_score: "89%",
    revenue: "$5.0M",
    followers: "1.2M+",
    products: "1",
    description:
      "Stanford Professor of Neurobiology and Ophthalmology, focusing on neural devleopment, brain plasticity, and",
  },
  {
    key: "3",
    influencer: "Dr. John Doe3",
    category: "Medicine",
    trust_score: "89%",
    revenue: "$5.0M",
    followers: "1.2M+",
    products: "1",
    description:
      "Stanford Professor of Neurobiology and Ophthalmology, focusing on neural devleopment, brain plasticity, and",
  },
  {
    key: "4",
    influencer: "Dr. John Doe4",
    category: "Medicine",
    trust_score: "89%",
    revenue: "$5.0M",
    followers: "1.2M+",
    products: "1",
    description:
      "Stanford Professor of Neurobiology and Ophthalmology, focusing on neural devleopment, brain plasticity, and",
  },
];

const skills = [
  "Neuroscience",
  "Sleep",
  "Performance",
  "Hormones",
  "Stress Management",
];

const categroies = [
  "Neuroscience",
  "Sleep",
  "Performance",
  "Hormones",
  "Stress Management",
];

const verification_status = [
  "All Statuses",
  "Verified",
  "Questionable",
  "Debunked",
];

const menus: MenuProps["items"] = [
  {
    label: "Date",
    key: "0",
  },
  {
    label: "Trust Score",
    key: "1",
  },
];

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Claims Analysis",
    children: (
      <>
        <div className="flex flex-col justify-between border border-slate-500 bg-slate-800 p-5 rounded-md">
          <div className="flex border border-slate-500 p-1 rounded-md">
            <SearchOutlined className="h-8 w-8 text-slate-500 justify-center" />
            <input
              className="bg-transparent border-none outline-none text-slate-300"
              placeholder="Search claims..."
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <p className="text-slate-300">Categories</p>
            <div className="flex gap-1 flex-wrap">
              {categroies.map((item) => (
                <div
                  key={item}
                  className="flex rounded-2xl px-3 py-1 text-slate-300 bg-slate-900 gap-2"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div className="flex flex-col gap-2 mt-5">
              <p className="text-slate-300">Verification Status</p>
              <div className="flex gap-1 flex-wrap">
                {verification_status.map((item) => (
                  <div
                    key={item}
                    className="flex rounded-lg px-3 py-1 text-slate-300 bg-slate-900 gap-2"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <p className="text-slate-300">Sort By</p>
              <Dropdown menu={{ items: menus }} trigger={["click"]}>
                <div className="flex rounded-lg justify-between px-3 py-1 text-slate-300 bg-slate-900 gap-2">
                  <div>Date</div>
                  <DownOutlined />
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    key: "2",
    label: "Recommeded Products",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Monetization",
    children: "Content of Tab Pane 3",
  },
];
const InfluencerDetails = () => {
  const params = useParams();
  const detailInfo = dataSource.find((item) => item.key === params.key);
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex gap-5">
        <Image
          src="/vercel.svg"
          alt="avatar"
          width={100}
          height={100}
          className="rounded-full items-center"
        />
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-[30px]">{detailInfo?.influencer}</h3>
          <div className="flex gap-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="py-1 px-3 rounded-2xl bg-slate-800 text-slate-200 text-[15px]"
              >
                {skill}
              </div>
            ))}
          </div>
          <p className="text-slate-300 text-[15px]">
            {detailInfo?.description}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
        <div className="flex flex-col justify-between border border-slate-500 bg-slate-800 p-5 rounded-md">
          <div className="flex flex-row justify-between py-3">
            <h5 className="font-bold text-[20px]">Trust Score</h5>
            <RiseOutlined className="h-5 w-5 text-green-500" />
          </div>
          <div className="font-bold text-[30px] text-green-500">
            {detailInfo?.trust_score}
          </div>
          <p className="text-slate-300 text-[12px]">
            Based on 127 verified claims
          </p>
        </div>
        <div className="flex flex-col border border-slate-500 bg-slate-800 p-5 rounded-md">
          <div className="flex flex-row justify-between py-3">
            <h5 className="font-bold text-[20px]">Trust Score</h5>
            <RiseOutlined className="h-5 w-5 text-green-500" />
          </div>
          <div className="font-bold text-[30px] text-green-500">
            {detailInfo?.revenue}
          </div>
          <p className="text-slate-300 text-[12px]">Estimated earnings</p>
        </div>
        <div className="flex flex-col border border-slate-500 bg-slate-800 p-5 rounded-md">
          <div className="flex flex-row justify-between py-3">
            <h5 className="font-bold text-[20px]">Trust Score</h5>
            <RiseOutlined className="h-5 w-5 text-green-500" />
          </div>
          <div className="font-bold text-[30px] text-green-500">
            {detailInfo?.products}
          </div>
          <p className="text-slate-300 text-[12px]">Recommend products</p>
        </div>
        <div className="flex flex-col border border-slate-500 bg-slate-800 p-5 rounded-md">
          <div className="flex flex-row justify-between py-3">
            <h5 className="font-bold text-[20px]">Trust Score</h5>
            <RiseOutlined className="h-5 w-5 text-green-500" />
          </div>
          <div className="font-bold text-[30px] text-green-500">
            {detailInfo?.followers}
          </div>
          <p className="text-slate-300 text-[12px]">Total following</p>
        </div>
      </div>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        className="text-slate-500"
      />
      <div className="flex flex-col">
        <p className="text-slate-500 text-sm py-5">Showing 10 claims</p>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <div className="p-1 rounded-lg bg-slate-800 w-4 h-1"></div>
                <div className="px-2 py-1 rounded-lg bg-green-900 bg-opacity-20 text-green-500 text-sm">
                  verified
                </div>
                <div className="flex gap-1 text-slate-500">
                  <CalendarOutlined />
                  <span className="text-sm">14/01/2024</span>
                </div>
              </div>
              <p className="text-sm">
                Viewing sunlight within 30~60 minutes of waking enhances
                cortisol release
              </p>
            </div>
            <div className="flex flex-col">
              <div className="text-green-500 text-[15px] font-semibold text-right">
                92%
              </div>
              <div className="text-sm text-slate-500 text-right">
                Trust Score
              </div>
            </div>
          </div>
          <a href="#" className="flex text-sm text-green-500 gap-1">
            <span>View Source</span>
            <UploadOutlined />
          </a>
          <div className="flex flex-col p-5 gap-3">
            <div className="flex text-sm gap-2">
              <OpenAIOutlined className="text-green-500" />
              <span>AI Analysis</span>
            </div>
            <p className="text-sm text-slate-500">
              Multiple studies confirm light exposure affects cortisol rhythms.
              Timing window supported by research.
            </p>
            <a href="#" className="flex text-sm text-green-500 gap-1">
              <span>View Research</span>
              <UploadOutlined />
            </a>
          </div>
        </div>
        <hr className="mb-5 opacity-20" />
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <div className="p-1 rounded-lg bg-slate-800 w-4 h-1"></div>
                <div className="px-2 py-1 rounded-lg bg-green-900 bg-opacity-20 text-green-500 text-sm">
                  verified
                </div>
                <div className="flex gap-1 text-slate-500">
                  <CalendarOutlined />
                  <span className="text-sm">09/12/2023</span>
                </div>
              </div>
              <p className="text-sm">
                Non-sleep deep rest (NSDR) protocols can accelerate learning and
                recovery
              </p>
            </div>
            <div className="flex flex-col">
              <div className="text-green-500 text-[15px] font-semibold text-right">
                92%
              </div>
              <div className="text-sm text-slate-500 text-right">
                Trust Score
              </div>
            </div>
          </div>
          <a href="#" className="flex text-sm text-green-500 gap-1">
            <span>View Source</span>
            <UploadOutlined />
          </a>
          <div className="flex flex-col p-5 gap-3">
            <div className="flex text-sm gap-2">
              <OpenAIOutlined className="text-green-500" />
              <span>AI Analysis</span>
            </div>
            <p className="text-sm text-slate-500">
              Multiple studies confirm light exposure affects cortisol rhythms.
              Timing window supported by research.
            </p>
            <a href="#" className="flex text-sm text-green-500 gap-1">
              <span>View Research</span>
              <UploadOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDetails;
