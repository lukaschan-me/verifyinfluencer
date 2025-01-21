"use client";
import { useState } from "react";

import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, Switch } from "antd";
import { Cog6ToothIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const journals = [
  "PubMed Central",
  "Nature",
  "Science",
  "Ceil",
  "The Lancet",
  "New England Journal of Medicine",
  "JAMA Network",
];

export default function Admin() {
  const [query, setQuery] = useState({
    searchType: "specific",
    timeRange: "all_time",
    influencerName: "",
    claimCount: 49,
    productCount: 9,
    isIncludeRevenueAnalyze: false,
    isVerifyWithJournals: true,
    journals: [],
    notes: "",
  });

  const handleSearchTypeChange = (value: string) => {
    setQuery({
      ...query,
      searchType: value,
    });
  };
  const handleTimeRangeChange = (value: string) => {
    setQuery({
      ...query,
      timeRange: value,
    });
  };
  const handleInfluencerNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuery({
      ...query,
      influencerName: e.target.value,
    });
  };
  const handleClaimCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({
      ...query,
      claimCount: parseInt(e.target.value),
    });
  };
  const handleProductCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({
      ...query,
      productCount: parseInt(e.target.value),
    });
  };
  const handleIsIncludeRevenueAnalyzeChange = (value: boolean) => {
    setQuery({
      ...query,
      isIncludeRevenueAnalyze: value,
    });
  };
  const handleIsVerifyWithJournalsChange = (value: boolean) => {
    setQuery({
      ...query,
      isVerifyWithJournals: value,
    });
  };
  const handleJournalsChange = (value: string[]) => {
    setQuery({
      ...query,
      journals: value,
    });
  };
  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery({
      ...query,
      notes: e.target.value,
    });
  };

  const [selectedJournals, setSelectedJournals] = useState<string[]>([]);

  const toggleJournal = (journal: string) => {
    setSelectedJournals((prev) =>
      prev.includes(journal)
        ? prev.filter((j) => j !== journal)
        : [...prev, journal]
    );
  };

  const _renderResearchConfigurationForm = () => {
    return (
      <>
        <div className="mt-8 space-y-8">
          <div className="p-6 bg-slate-800 space-y-4 rounded-md">
            <div className="flex flex-row flex-start gap-4">
              <Cog6ToothIcon className="size-6 text-slate-500" />
              <h3 className="font-semibold">Research Configuration</h3>
            </div>
            <div>{_renderInfluencerTypeSelector()}</div>
            <div>{_renderClaimConfig()}</div>
            <div className="space-y-3">{_renderJournalSelector()}</div>
            <div className="mt-6 space-y-2">
              {_renderNoteForResearchAssistant()}
              <div className="flex justify-end">
                <Button
                  className="bg-green-600 border-none text-white"
                  icon={<PlusOutlined />}
                >
                  Start Research
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const _renderInfluencerTypeSelector = () => {
    return (
      <div className="flex flex-row w-full gap-4">
        <button
          onClick={() => handleSearchTypeChange("specific")}
          className={clsx(
            "p-4 w-1/2 text-center border-2 border-white rounded-md hover:bg-green-700 hover:border-green-900 hover:cursor-pointer",
            query.searchType === "specific" &&
              "bg-green-900/50 border-green-500/50"
          )}
        >
          <h4>Specific Influencer</h4>
          <h6>Research a known health influencer by name</h6>
        </button>
        <button
          onClick={() => handleSearchTypeChange("discover")}
          className={clsx(
            "p-4 w-1/2 text-center border-2 border-white rounded-md hover:bg-green-700 hover:border-green-900 hover:cursor-pointer",
            query.searchType === "discover" &&
              "bg-green-900/50 border-green-500/50"
          )}
        >
          <h4>Discover New</h4>
          <h6>Find and analyze new health influencers</h6>
        </button>
      </div>
    );
  };
  const _renderClaimConfig = () => {
    return (
      <>
        <div className="block md:flex gap-4">
          <div className="w-full md:w-[1/2] space-y-4">
            <div>
              <h5>Time Range</h5>
              <div className="grid grid-cols-2 gap-2 text-center">
                <button
                  onClick={() => handleTimeRangeChange("last_week")}
                  className={clsx(
                    "p-2 w-[1/2] text-center border-2 border-white rounded-md hover:bg-green-700 hover:border-green-900 hover:cursor-pointer",
                    query.timeRange === "last_week" &&
                      "bg-green-900/50 border-green-500/50"
                  )}
                >
                  Last Week
                </button>
                <button
                  onClick={() => handleTimeRangeChange("last_month")}
                  className={clsx(
                    "p-2 w-[1/2] text-center border-2 border-white rounded-md hover:bg-green-700 hover:border-green-900 hover:cursor-pointer",
                    query.timeRange === "last_month" &&
                      "bg-green-900/50 border-green-500/50"
                  )}
                >
                  Last Month
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center">
              <button
                onClick={() => handleTimeRangeChange("last_year")}
                className={clsx(
                  "p-2 w-[1/2] text-center border-2 border-white rounded-md hover:bg-green-700 hover:border-green-900 hover:cursor-pointer",
                  query.timeRange === "last_year" &&
                    "bg-green-900/50 border-green-500/50"
                )}
              >
                Last Year
              </button>
              <button
                onClick={() => handleTimeRangeChange("all_time")}
                className={clsx(
                  "p-2 w-[1/2] text-center border-2 border-white rounded-md hover:bg-green-700 hover:border-green-900 hover:cursor-pointer",
                  query.timeRange === "all_time" &&
                    "bg-green-900/50 border-green-500/50"
                )}
              >
                All Time
              </button>
            </div>
            <div className="space-y-2">
              <h5>Influencer Name</h5>
              <Input
                onChange={handleInfluencerNameChange}
                className="bg-transparent"
                size="large"
                placeholder="Enter influnecer name"
                prefix={<SearchOutlined style={{ color: "white" }} />}
                value={query.influencerName}
              />
            </div>
            <div className="space-y-2">
              <h5>Claims to Analyze Per Influencer</h5>
              <Input
                onChange={handleClaimCountChange}
                size="large"
                placeholder="Enter influnecer name"
                style={{ backgroundColor: "transparent", color: "white" }}
                value={query.claimCount}
              />
              <h6>Recommended: 50-100 claims for comprehensive analysis</h6>
            </div>
          </div>
          <div className="w-full md:w-[1/2] space-y-4">
            <div className="space-y-2">
              <h5>Products to Find Per Influencer</h5>
              <Input
                onChange={handleProductCountChange}
                size="large"
                className="w-full bg-transparent text-white"
                defaultValue={10}
                value={query.productCount}
              />
              <h6>Set to 0 to skip product research</h6>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h5>Inclue Revenue Analysis</h5>
                <h6>Analyze monetization methods and estimate earnings</h6>
              </div>
              <Switch
                checked={query.isIncludeRevenueAnalyze}
                onChange={handleIsIncludeRevenueAnalyzeChange}
              />
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h5>Verify with Scientific Journals</h5>
                <h6>Cross-reference claims with scientific literature</h6>
              </div>
              <Switch
                checked={query.isVerifyWithJournals}
                onChange={handleIsVerifyWithJournalsChange}
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  const _renderJournalSelector = () => {
    return (
      <>
        <div className="flex items-center justify-between">
          <h5>Scientific Journals</h5>
          <div>Select All | Deselect All</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {journals.map((journal, index) => (
            <div
              key={index}
              onClick={() => toggleJournal(journal)}
              className="border border-white rounded-md p-4 hover:bg-green-900 hover:border-green-900 hover:cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <p>{journal}</p>
                <div
                  className={`rounded-full w-5 h-5 min-w-5 min-h-5 ${
                    selectedJournals.includes(journal)
                      ? "bg-green-600"
                      : "bg-transparent border-2 border-white"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center text-green-500 gap-2">
          <PlusOutlined />
          <p>Add New Journal</p>
        </div>
      </>
    );
  };
  const _renderNoteForResearchAssistant = () => {
    return (
      <div>
        <p>Note for research assistant</p>
        <textarea
          onChange={handleNotesChange}
          className="w-full bg-transparent border border-white rounded-md"
          rows={4}
          value={query.notes}
          placeholder="Add any specific instructions"
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-full py-8">
      <div className="flex flex-row gap-4 items-center">
        <div className="flex flex-row gap-2">
          <ArrowLeftIcon className="size-6 text-green-400" />
          <h3 className="font-bold text-green-400">Back to Dashboard</h3>
        </div>
        <h1 className="font-bold text-white text-2xl">Research Tasks</h1>
      </div>
      <div>{_renderResearchConfigurationForm()}</div>
    </div>
  );
}
