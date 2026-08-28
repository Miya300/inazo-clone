"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  ResponsiveContainer,
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
  year: string | null;
  semester: string | null;
};

export default function Home() {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [keyword, setKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("easy-high");
  const [semester, setSemester] = useState("all");

  useEffect(() => {
    async function loadData() {
      const { data, error } = await supabase
        .from("courses")
        .select("*");

      console.log("件数:", data?.length);
      console.log("エラー:", error);

      if (!error && data) {
        setCourses(data);
      }
    }

    loadData();
  }, []);

  const filtered = courses
    .filter((c) => {
      const search = keyword.toLowerCase();

      const matchKeyword =
        (c.subject ?? "")
          .toLowerCase()
          .includes(search) ||
        String(c.year ?? "")
          .toLowerCase()
          .includes(search);

      const matchSemester =
        semester === "all" ||
        c.semester === semester;

      return (
        matchKeyword &&
        matchSemester
      );
    })
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
      <div className="max-w-5xl mx-auto p-4 md:p-8">

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-400 text-center">
          稲蔵
        </h1>

        <p className="text-center text-xl font-semibold text-slate-300 mb-8">
          📚 登録科目数: {courses.length}
        </p>

        <div className="mb-6">
          <input
            value={keyword}
            onChange={(e) =>
              setKeyword(e.target.value)
            }
            className="
              w-full
              p-4
              text-lg
              rounded-2xl
              bg-slate-800
              border-2
              border-slate-600
              text-white
              placeholder-slate-400
              shadow-lg
              focus:outline-none
              focus:border-blue-500
              transition
            "
            placeholder="🔍 科目名・年度で検索..."
          />

          <p className="text-slate-400 mt-2 text-center">
            検索結果: {filtered.length}件
          </p>
        </div>

        {/* 学期フィルター */}

        <div className="grid grid-cols-2 md:grid-cols-7 gap-3 mb-6">

          <button
            onClick={() => setSemester("all")}
            className={`py-3 rounded-xl font-bold ${
              semester === "all"
                ? "bg-slate-500"
                : "bg-slate-700"
            }`}
          >
            全期間
          </button>

          <button
            onClick={() => setSemester("前期")}
            className={`py-3 rounded-xl font-bold ${
              semester === "前期"
                ? "bg-blue-400"
                : "bg-blue-600"
            }`}
          >
            前期
          </button>

          <button
            onClick={() => setSemester("後期")}
            className={`py-3 rounded-xl font-bold ${
              semester === "後期"
                ? "bg-purple-400"
                : "bg-purple-600"
            }`}
          >
            後期
          </button>

          <button
            onClick={() => setSemester("１Q")}
            className={`py-3 rounded-xl font-bold ${
              semester === "１Q"
                ? "bg-cyan-400"
                : "bg-cyan-600"
            }`}
          >
            １Q
          </button>

          <button
            onClick={() => setSemester("２Q")}
            className={`py-3 rounded-xl font-bold ${
              semester === "２Q"
                ? "bg-teal-400"
                : "bg-teal-600"
            }`}
          >
            ２Q
          </button>

          <button
            onClick={() => setSemester("３Q")}
            className={`py-3 rounded-xl font-bold ${
              semester === "３Q"
                ? "bg-orange-400"
                : "bg-orange-600"
            }`}
          >
            ３Q
          </button>

          <button
            onClick={() => setSemester("４Q")}
            className={`py-3 rounded-xl font-bold ${
              semester === "４Q"
                ? "bg-pink-400"
                : "bg-pink-600"
            }`}
          >
            ４Q
          </button>

        </div>

        {/* ソート */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">

          <button
            onClick={() =>
              setSortOrder("easy-high")
            }
            className="bg-green-500 text-white py-3 rounded-xl font-bold"
          >
            楽単率高い順
          </button>

          <button
            onClick={() =>
              setSortOrder("easy-low")
            }
            className="bg-red-500 text-white py-3 rounded-xl font-bold"
          >
            楽単率低い順
          </button>

          <button
            onClick={() =>
              setSortOrder("excellent-high")
            }
            className="bg-yellow-500 text-white py-3 rounded-xl font-bold"
          >
            優単率高い順
          </button>

        </div>

        <div className="space-y-4">

          {filtered.map((c) => (

            <div
              key={c.id}
              className="
                bg-slate-800/70
                backdrop-blur-sm
                border
                border-slate-700
                rounded-2xl
                p-5
                shadow-lg
              "
            >

              <h2 className="text-xl md:text-3xl font-bold mb-2 break-words">
                {c.subject}
              </h2>

              <div className="space-y-1">

                <p>
                  📅 年度：
                  {c.year ?? "未設定"}
                </p>

                <p>
                  🗓 学期：
                  <span className="font-bold text-cyan-300">
                    {c.semester ?? "未設定"}
                  </span>
                </p>

                <p>
                  ✅ 楽単率：
                  {(c.easy_rate * 100).toFixed(1)}%
                </p>

                <p>
                  🌟 優単率：
                  {(c.excellent_rate * 100).toFixed(1)}%
                </p>

              </div>

              <div className="mt-6 h-64">
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >
                  <BarChart
                    data={[
                      {
                        grade: "AA",
                        count: c.aa,
                      },
                      {
                        grade: "A",
                        count: c.a,
                      },
                      {
                        grade: "B",
                        count: c.b,
                      },
                      {
                        grade: "C",
                        count: c.c,
                      },
                      {
                        grade: "Fail",
                        count: c.fail,
                      },
                    ]}
                  >
                    <XAxis dataKey="grade" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="count"
                      fill="#3b82f6"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

            </div>

          ))}

        </div>
      </div>
    </main>
  );
}
