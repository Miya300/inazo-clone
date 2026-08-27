"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type CourseData = {
  id: number;
  subject: string;

  aa: number;
  a: number;
  b: number;
  c: number;
  fail: number;

  easy_rate: number;
  excellent_rate: number;
  year: string;
};

export default function Home() {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [keyword, setKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("easy-high");

  useEffect(() => {
    async function loadData() {
      const { data, error } = await supabase
        .from("courses")
        .select("*");

      console.log("件数:", data?.length);
      console.log("データ:", data);
      console.log("エラー:", error);

      if (!error && data) {
        setCourses(data);
      }
    }

    loadData();
  }, []);

  const filtered = courses
    .filter((c) =>
      c.subject.includes(keyword)
    )
    .sort((a, b) => {
      switch (sortOrder) {
        case "easy-high":
          return b.easy_rate - a.easy_rate;

        case "easy-low":
          return a.easy_rate - b.easy_rate;

        case "excellent-high":
          return (
            b.excellent_rate -
            a.excellent_rate
          );

        default:
          return 0;
      }
    });

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-6xl font-extrabold mb-8 text-blue-400 text-center">
          稲蔵
        </h1>

        <p className="text-center text-slate-400 mb-6">
          登録科目数: {courses.length}
        </p>

        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border border-slate-600 bg-slate-800 p-3 w-full rounded text-white"
          placeholder="科目名で検索"
        />

        <div className="mt-4 flex gap-2 justify-center flex-wrap">
          <button
            onClick={() => setSortOrder("easy-high")}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            楽単率高い順
          </button>

          <button
            onClick={() => setSortOrder("easy-low")}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            楽単率低い順
          </button>

          <button
            onClick={() => setSortOrder("excellent-high")}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            優単率高い順
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <h2 className="text-3xl font-bold mb-2">
                {c.subject}
              </h2>

              <p>
                楽単率: {(c.easy_rate * 100).toFixed(1)}%
              </p>

              <p>
                優単率: {(c.excellent_rate * 100).toFixed(1)}%
              </p>

              <p>
                年度: {c.year}
              </p>

              <div className="mt-4">
                <BarChart
                  width={400}
                  height={220}
                  data={[
                    { grade: "AA", count: c.aa },
                    { grade: "A", count: c.a },
                    { grade: "B", count: c.b },
                    { grade: "C", count: c.c },
                    { grade: "Fail", count: c.fail },
                  ]}
                >
                  <XAxis dataKey="grade" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="count"
                    fill="#3b82f6"
                  />
                </BarChart>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}