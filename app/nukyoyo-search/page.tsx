"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
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

  // グラフを開いている講義のID
  const [expandedCourses, setExpandedCourses] = useState<number[]>([]);

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

  // グラフの開閉
  const toggleGraph = (id: number) => {
    setExpandedCourses((prev) => {
      if (prev.includes(id)) {
        return prev.filter((courseId) => courseId !== id);
      }

      return [...prev, id];
    });
  };

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

      return matchKeyword && matchSemester;
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
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50 to-slate-200 text-slate-900">

      <div className="max-w-5xl mx-auto p-4 md:p-8">

        {/* =========================
            NUSNAVIへ戻る
        ========================= */}

        <Link
          href="/"
          className="
            inline-block
            mb-6
            px-6
            py-3
            bg-white
            text-blue-800
            font-bold
            rounded-2xl
            border-2
            border-blue-200
            shadow-lg
            hover:shadow-xl
            transition-all
          "
        >
          ← NUSNAVIへ戻る
        </Link>


        {/* =========================
            NUSNAVIタイトル
        ========================= */}

        <h1 className="text-5xl md:text-8xl font-black mb-4 text-blue-900 text-center drop-shadow-lg">
          NUSNAVI
        </h1>

        <p className="text-center text-xl text-slate-700 font-semibold mb-2">
          長崎大学生のための総合支援サイト
        </p>

        <p className="text-center text-slate-600 text-2xl mb-8">
          Nagasaki University Student Navigation
        </p>


        {/* =========================
            NUKYOYO Searchタイトル
        ========================= */}

        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8 border border-blue-100 text-center">

          <h2 className="text-5xl md:text-6xl font-black text-blue-800 mb-2">
            📚 NUKYOYO Search
          </h2>

          <p className="text-slate-700 text-lg">
            長崎大学教養教育 成績分布検索サービス
          </p>

          <p className="text-slate-500 text-sm mt-2">
            Nagasaki University Kyoyo Search
          </p>

        </div>


        {/* =========================
            登録講義数
        ========================= */}

        <p className="text-center text-xl font-semibold text-slate-700 mb-8">
          📚 登録講義数: {courses.length}
        </p>


        {/* =========================
            検索
        ========================= */}

        <div className="mb-6">

          <input
            value={keyword}
            onChange={(e) =>
              setKeyword(e.target.value)
            }
            className="
              w-full
              p-6
              text-2xl
              rounded-full
              bg-white
              border-2
              border-blue-200
              text-slate-700
              shadow-2xl
              focus:outline-none
              focus:border-blue-500
              placeholder-slate-400
              transition
            "
            placeholder="🔍 講義名・年度・学期で検索..."
          />

          <p className="text-slate-400 mt-2 text-center">
            検索結果: {filtered.length}件
          </p>

        </div>


        {/* =========================
            学期フィルター
        ========================= */}

        <div className="mb-3">

          {/* 全期間 */}

          <button
            onClick={() => setSemester("all")}
            className={`
              w-full
              py-6
              rounded-3xl
              font-black
              text-xl
              mb-4
              bg-white
              text-slate-800
              border-2
              border-blue-200
              shadow-2xl
              hover:shadow-blue-200
              transition-all
              ${
                semester === "all"
                  ? "ring-4 ring-blue-300"
                  : ""
              }
            `}
          >
            全期間
          </button>


          {/* 前期・後期・1Q～4Q */}

          <div className="grid grid-cols-2 gap-1">

            {/* 前期 */}

            <button
              onClick={() => setSemester("前期")}
              className={`
                py-6
                rounded-3xl
                font-black
                text-xl
                bg-white
                text-black
                border-4
                border-sky-400
                shadow-2xl
                hover:shadow-blue-200
                transition-all
                ${
                  semester === "前期"
                    ? "ring-4 ring-sky-300"
                    : ""
                }
              `}
            >
              前期
            </button>


            {/* 後期 */}

            <button
              onClick={() => setSemester("後期")}
              className={`
                py-6
                rounded-3xl
                font-black
                text-xl
                bg-white
                text-black
                border-4
                border-purple-300
                shadow-2xl
                hover:shadow-purple-200
                transition-all
                ${
                  semester === "後期"
                    ? "ring-4 ring-purple-300"
                    : ""
                }
              `}
            >
              後期
            </button>


            {/* 1Q */}

            <button
              onClick={() => setSemester("１Q")}
              className={`
                py-6
                rounded-3xl
                font-black
                text-xl
                bg-white
                text-black
                border-4
                border-cyan-300
                shadow-2xl
                hover:shadow-cyan-200
                transition-all
                ${
                  semester === "１Q"
                    ? "ring-4 ring-cyan-300"
                    : ""
                }
              `}
            >
              １Q
            </button>


            {/* 2Q */}

            <button
              onClick={() => setSemester("２Q")}
              className={`
                py-6
                rounded-3xl
                font-black
                text-xl
                bg-white
                text-black
                border-4
                border-teal-300
                shadow-2xl
                hover:shadow-teal-200
                transition-all
                ${
                  semester === "２Q"
                    ? "ring-4 ring-teal-300"
                    : ""
                }
              `}
            >
              ２Q
            </button>


            {/* 3Q */}

            <button
              onClick={() => setSemester("３Q")}
              className={`
                py-6
                rounded-3xl
                font-black
                text-xl
                bg-white
                text-black
                border-4
                border-orange-300
                shadow-2xl
                hover:shadow-orange-200
                transition-all
                ${
                  semester === "３Q"
                    ? "ring-4 ring-orange-300"
                    : ""
                }
              `}
            >
              ３Q
            </button>


            {/* 4Q */}

            <button
              onClick={() => setSemester("４Q")}
              className={`
                py-6
                rounded-3xl
                font-black
                text-xl
                bg-white
                text-black
                border-4
                border-pink-300
                shadow-2xl
                hover:shadow-pink-200
                transition-all
                ${
                  semester === "４Q"
                    ? "ring-4 ring-pink-300"
                    : ""
                }
              `}
            >
              ４Q
            </button>

          </div>

        </div>


        {/* =========================
            ソート
        ========================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">

          <button
            onClick={() =>
              setSortOrder("easy-high")
            }
            className="
              w-full
              py-4
              rounded-3xl
              font-black
              text-2xl
              bg-white
              text-slate-900
              border-4
              border-green-300
              shadow-xl
            "
          >
            楽単率高い順
          </button>


          <button
            onClick={() =>
              setSortOrder("easy-low")
            }
            className="
              w-full
              py-4
              rounded-3xl
              font-black
              text-2xl
              bg-white
              text-slate-900
              border-4
              border-red-300
              shadow-xl
            "
          >
            楽単率低い順
          </button>


          <button
            onClick={() =>
              setSortOrder("excellent-high")
            }
            className="
              w-full
              py-4
              rounded-3xl
              font-black
              text-2xl
              bg-white
              text-slate-900
              border-4
              border-amber-300
              shadow-xl
            "
          >
            優単率高い順
          </button>

        </div>


        {/* =========================
            講義一覧
        ========================= */}

        <div className="space-y-4">

          {filtered.map((c) => {

            const isExpanded =
              expandedCourses.includes(c.id);

            return (

              <div
                key={c.id}
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-xl
                  border
                  border-blue-100
                "
              >

                {/* 科目名 */}

                <h2 className="text-2xl md:text-3xl font-black mb-4 break-words text-slate-800">
                  {c.subject}
                </h2>


                {/* 基本情報 */}

                <div className="space-y-2 text-slate-700 text-lg">

                  <p>
                    📅 年度：
                    {c.year ?? "未設定"}
                  </p>

                  <p>
                    🗓 学期：
                    <span className="font-bold text-sky-600">
                      {c.semester ?? "未設定"}
                    </span>
                  </p>

                  <p className="text-green-600 font-bold">
                    ✅ 楽単率：
                    {(c.easy_rate * 100).toFixed(1)}%
                  </p>

                  <p className="text-amber-500 font-bold">
                    🌟 優単率：
                    {(c.excellent_rate * 100).toFixed(1)}%
                  </p>

                </div>


                {/* =========================
                    グラフ開閉ボタン
                ========================= */}

                {!isExpanded && (

                  <button
                    onClick={() => toggleGraph(c.id)}
                    className="
                      w-full
                      mt-6
                      py-4
                      bg-blue-600
                      text-white
                      rounded-2xl
                      font-black
                      text-xl
                      shadow-lg
                      hover:bg-blue-700
                      hover:shadow-xl
                      transition-all
                    "
                  >
                    📊 成績分布を見る
                  </button>

                )}


                {/* =========================
                    成績分布グラフ
                ========================= */}

                {isExpanded && (

                  <div className="mt-6">

                    <div className="flex justify-between items-center mb-3">

                      <p className="text-xl font-black text-blue-800">
                        📊 成績分布
                      </p>

                      <button
                        onClick={() => toggleGraph(c.id)}
                        className="
                          px-4
                          py-2
                          bg-slate-100
                          text-slate-700
                          rounded-xl
                          font-bold
                          border
                          border-slate-300
                          hover:bg-slate-200
                          transition
                        "
                      >
                        成績分布を閉じる
                      </button>

                    </div>


                    <div className="h-64">

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
                          margin={{
                            top: 30,
                            right: 10,
                            left: 0,
                            bottom: 5,
                          }}
                        >

                          <XAxis
                            dataKey="grade"
                          />

                          <YAxis
                            domain={[0, "dataMax + 5"]}
                          />

                          <Bar
                            dataKey="count"
                            fill="#3b82f6"
                            radius={[6, 6, 0, 0]}
                          >

                            {/* 棒グラフの上に人数を表示 */}

                            <LabelList
                              dataKey="count"
                              position="top"
                              fill="#1e293b"
                              fontSize={20}
                              fontWeight="bold"
                            />

                          </Bar>

                        </BarChart>

                      </ResponsiveContainer>

                    </div>

                  </div>

                )}

              </div>

            );
          })}

        </div>

      </div>

    </main>
  );
}