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
  target_grade: string | null;
  course_type: string | null;
};

export default function Home() {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [keyword, setKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("easy-high");
  const [semester, setSemester] = useState("all");

  // グラフを開いている講義のID
  const [expandedCourses, setExpandedCourses] = useState<number[]>([]);

  // =========================
  // Supabaseからデータ取得
  // =========================
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

  // =========================
  // グラフの開閉
  // =========================
  const toggleGraph = (id: number) => {
    setExpandedCourses((prev) => {
      if (prev.includes(id)) {
        return prev.filter((courseId) => courseId !== id);
      }

      return [...prev, id];
    });
  };

  // =========================
  // 検索・フィルター・ソート
  // =========================
  const filtered = courses
    .filter((c) => {
      const search = keyword.toLowerCase();

      const matchKeyword =
        (c.subject ?? "")
          .toLowerCase()
          .includes(search) ||
        String(c.year ?? "")
          .toLowerCase()
          .includes(search) ||
        (c.target_grade ?? "")
          .toLowerCase()
          .includes(search) ||
        (c.course_type ?? "")
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
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= HEADER ================= */}
      <header className="border-b border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* NUSNAVI Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-blue-950
                text-2xl
                font-bold
                text-white
              "
            >
              N
            </div>

            <div>

              <p className="text-xl font-bold tracking-wide">
                NUSNAVI
              </p>

              <p className="text-[10px] tracking-[0.2em] text-slate-500">
                NAGASAKI UNIVERSITY STUDENT NAVIGATION
              </p>

            </div>

          </Link>


          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="/risyu-support1"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-800"
            >
              履修登録
            </Link>

            <Link
              href="/nukyoyo-search"
              className="text-sm font-semibold text-blue-800"
            >
              成績分布
            </Link>

            <Link
              href="/student-support"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-800"
            >
              学生生活
            </Link>

            <span
              className="
                rounded-full
                border
                border-slate-300
                px-4
                py-2
                text-sm
                text-slate-600
              "
            >
              MENU
            </span>

          </nav>

        </div>

      </header>


      {/* ================= HERO ================= */}
      <section
        className="
          bg-gradient-to-br
          from-blue-950
          via-blue-900
          to-blue-800
          text-white
        "
      >

        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">

          {/* NUSNAVIへ戻る */}
          <Link
            href="/"
            className="
              mb-10
              inline-flex
              items-center
              rounded-full
              border
              border-white/30
              bg-white/10
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              backdrop-blur-sm
              transition
              hover:bg-white/20
            "
          >
            ← NUSNAVIへ戻る
          </Link>


          <p
            className="
              mb-5
              text-sm
              font-semibold
              tracking-[0.35em]
              text-blue-200
            "
          >
            NAGASAKI UNIVERSITY
          </p>


          {/* NUSNAVIタイトル */}
          <h1
            className="
              text-5xl
              font-black
              tracking-tight
              md:text-7xl
            "
          >
            NUSNAVI
          </h1>


          {/* サイト説明 */}
          <p
            className="
              mt-5
              text-xl
              font-semibold
              text-white
              md:text-2xl
            "
          >
            長崎大学生のための総合支援サイト
          </p>


          {/* 英語タイトル */}
          <p
            className="
              mt-3
              text-base
              tracking-wide
              text-blue-200
              md:text-lg
            "
          >
            Nagasaki University Student Navigation
          </p>

        </div>

      </section>


      {/* ================= MAIN CONTENT ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">


        {/* =========================
            ページタイトル
        ========================= */}
        <div
          className="
            mb-12
            rounded-3xl
            bg-white
            p-8
            shadow-sm
            ring-1
            ring-slate-200
            md:p-10
          "
        >

          <div className="border-l-8 border-blue-700 pl-6">

            {/* TITLE */}
            <p
              className="
                text-sm
                font-bold
                tracking-[0.35em]
                text-blue-700
              "
            >
              NUKYOYO SEARCH
            </p>


            {/* ページタイトル */}
            <h1
              className="
                mt-3
                text-4xl
                font-black
                tracking-tight
                text-blue-950
                md:text-6xl
              "
            >
              成績分布検索
            </h1>


            {/* アクセントライン */}
            <div className="mt-5 h-1 w-20 bg-blue-700"></div>


            {/* サービス名 */}
            <h2
              className="
                mt-6
                text-3xl
                font-black
                text-blue-900
                md:text-5xl
              "
            >
              NUKYOYO Search
            </h2>


            {/* 日本語説明 */}
            <p
              className="
                mt-4
                text-xl
                font-bold
                text-slate-700
                md:text-2xl
              "
            >
              長崎大学教養教育 成績分布検索サービス
            </p>


            {/* 英語説明 */}
            <p
              className="
                mt-2
                text-base
                text-slate-500
                md:text-lg
              "
            >
              Nagasaki University Kyoyo Search
            </p>

          </div>

        </div>


        {/* =========================
            登録講義数
        ========================= */}
        <div
          className="
            mb-8
            rounded-3xl
            bg-white
            p-6
            text-center
            shadow-sm
            ring-1
            ring-slate-200
          "
        >

          <p className="text-sm font-semibold text-slate-500">
            現在登録されている講義
          </p>

          <p
            className="
              mt-2
              text-4xl
              font-black
              text-blue-900
            "
          >
            {courses.length}
            <span className="ml-1 text-xl">
              講義
            </span>
          </p>

        </div>


        {/* =========================
            検索
        ========================= */}
        <div
          className="
            mb-8
            rounded-3xl
            bg-white
            p-6
            shadow-sm
            ring-1
            ring-slate-200
            md:p-8
          "
        >

          <div className="mb-4">

            <p
              className="
                text-xs
                font-bold
                tracking-[0.3em]
                text-blue-700
              "
            >
              SEARCH
            </p>

            <h2
              className="
                mt-2
                text-2xl
                font-black
                text-blue-950
              "
            >
              講義を検索
            </h2>

          </div>


          <input
            value={keyword}
            onChange={(e) =>
              setKeyword(e.target.value)
            }
            className="
              w-full
              rounded-2xl
              border
              border-slate-300
              bg-slate-50
              px-5
              py-5
              text-lg
              text-slate-700
              shadow-sm
              transition
              placeholder-slate-400
              focus:border-blue-600
              focus:bg-white
              focus:outline-none
              focus:ring-2
              focus:ring-blue-100
            "
            placeholder="🔍 講義名・年度・対象学年・科目種類で検索..."
          />


          <p className="mt-3 text-center text-sm text-slate-500">
            検索結果: {filtered.length}件
          </p>

        </div>


        {/* =========================
            学期フィルター
        ========================= */}
        <div
          className="
            mb-8
            rounded-3xl
            bg-white
            p-6
            shadow-sm
            ring-1
            ring-slate-200
            md:p-8
          "
        >

          <p
            className="
              text-xs
              font-bold
              tracking-[0.3em]
              text-blue-700
            "
          >
            SEMESTER
          </p>

          <h2
            className="
              mt-2
              mb-5
              text-2xl
              font-black
              text-blue-950
            "
          >
            学期から探す
          </h2>


          {/* 全期間 */}
          <button
            onClick={() => setSemester("all")}
            className={`
              mb-3
              w-full
              rounded-2xl
              border-2
              border-blue-200
              bg-white
              py-4
              text-lg
              font-black
              text-slate-800
              shadow-sm
              transition-all
              hover:border-blue-400
              hover:bg-blue-50
              ${
                semester === "all"
                  ? "ring-4 ring-blue-100"
                  : ""
              }
            `}
          >
            全期間
          </button>


          {/* 前期・後期・1Q～4Q */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">

            {/* 前期 */}
            <button
              onClick={() => setSemester("前期")}
              className={`
                rounded-2xl
                border-2
                border-sky-300
                bg-white
                py-4
                text-lg
                font-black
                text-slate-800
                shadow-sm
                transition-all
                hover:bg-sky-50
                ${
                  semester === "前期"
                    ? "ring-4 ring-sky-100"
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
                rounded-2xl
                border-2
                border-purple-300
                bg-white
                py-4
                text-lg
                font-black
                text-slate-800
                shadow-sm
                transition-all
                hover:bg-purple-50
                ${
                  semester === "後期"
                    ? "ring-4 ring-purple-100"
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
                rounded-2xl
                border-2
                border-cyan-300
                bg-white
                py-4
                text-lg
                font-black
                text-slate-800
                shadow-sm
                transition-all
                hover:bg-cyan-50
                ${
                  semester === "１Q"
                    ? "ring-4 ring-cyan-100"
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
                rounded-2xl
                border-2
                border-teal-300
                bg-white
                py-4
                text-lg
                font-black
                text-slate-800
                shadow-sm
                transition-all
                hover:bg-teal-50
                ${
                  semester === "２Q"
                    ? "ring-4 ring-teal-100"
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
                rounded-2xl
                border-2
                border-orange-300
                bg-white
                py-4
                text-lg
                font-black
                text-slate-800
                shadow-sm
                transition-all
                hover:bg-orange-50
                ${
                  semester === "３Q"
                    ? "ring-4 ring-orange-100"
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
                rounded-2xl
                border-2
                border-pink-300
                bg-white
                py-4
                text-lg
                font-black
                text-slate-800
                shadow-sm
                transition-all
                hover:bg-pink-50
                ${
                  semester === "４Q"
                    ? "ring-4 ring-pink-100"
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
        <div
          className="
            mb-10
            rounded-3xl
            bg-white
            p-6
            shadow-sm
            ring-1
            ring-slate-200
            md:p-8
          "
        >

          <p
            className="
              text-xs
              font-bold
              tracking-[0.3em]
              text-blue-700
            "
          >
            SORT
          </p>

          <h2
            className="
              mt-2
              mb-5
              text-2xl
              font-black
              text-blue-950
            "
          >
            並び替え
          </h2>


          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">

            {/* 楽単率 高い順 */}
            <button
              onClick={() =>
                setSortOrder("easy-high")
              }
              className={`
                rounded-2xl
                border-2
                border-green-300
                bg-white
                py-4
                text-lg
                font-black
                text-slate-800
                shadow-sm
                transition-all
                hover:bg-green-50
                ${
                  sortOrder === "easy-high"
                    ? "ring-4 ring-green-100"
                    : ""
                }
              `}
            >
              楽単率 高い順
            </button>


            {/* 楽単率 低い順 */}
            <button
              onClick={() =>
                setSortOrder("easy-low")
              }
              className={`
                rounded-2xl
                border-2
                border-red-300
                bg-white
                py-4
                text-lg
                font-black
                text-slate-800
                shadow-sm
                transition-all
                hover:bg-red-50
                ${
                  sortOrder === "easy-low"
                    ? "ring-4 ring-red-100"
                    : ""
                }
              `}
            >
              楽単率 低い順
            </button>


            {/* 優単率 高い順 */}
            <button
              onClick={() =>
                setSortOrder("excellent-high")
              }
              className={`
                rounded-2xl
                border-2
                border-amber-300
                bg-white
                py-4
                text-lg
                font-black
                text-slate-800
                shadow-sm
                transition-all
                hover:bg-amber-50
                ${
                  sortOrder === "excellent-high"
                    ? "ring-4 ring-amber-100"
                    : ""
                }
              `}
            >
              優単率 高い順
            </button>

          </div>

        </div>


        {/* =========================
            講義一覧
        ========================= */}
        <div className="space-y-6">

          {filtered.map((c) => {

            const isExpanded =
              expandedCourses.includes(c.id);

            return (

              <div
                key={c.id}
                className="
                  rounded-3xl
                  bg-white
                  p-6
                  shadow-sm
                  ring-1
                  ring-slate-200
                  transition-all
                  hover:shadow-md
                  md:p-8
                "
              >

                {/* =========================
                    科目名
                ========================= */}
                <div className="mb-6">

                  <p
                    className="
                      text-xs
                      font-bold
                      tracking-[0.25em]
                      text-blue-600
                    "
                  >
                    COURSE
                  </p>

                  <h2
                    className="
                      mt-2
                      break-words
                      text-2xl
                      font-black
                      text-blue-950
                      md:text-3xl
                    "
                  >
                    {c.subject}
                  </h2>

                </div>


                {/* =========================
                    基本情報
                ========================= */}
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">


                  {/* 年度 */}
                  <div
                    className="
                      rounded-2xl
                      bg-slate-50
                      p-5
                      ring-1
                      ring-slate-100
                    "
                  >

                    <p className="mb-1 text-sm text-slate-500">
                      📅 年度
                    </p>

                    <p className="text-lg font-bold text-slate-800">
                      {c.year ?? "未設定"}
                    </p>

                  </div>


                  {/* 学期 */}
                  <div
                    className="
                      rounded-2xl
                      bg-slate-50
                      p-5
                      ring-1
                      ring-slate-100
                    "
                  >

                    <p className="mb-1 text-sm text-slate-500">
                      🗓 学期
                    </p>

                    <p className="text-lg font-bold text-sky-600">
                      {c.semester ?? "未設定"}
                    </p>

                  </div>


                  {/* 対象学年 */}
                  <div
                    className="
                      rounded-2xl
                      bg-slate-50
                      p-5
                      ring-1
                      ring-slate-100
                    "
                  >

                    <p className="mb-1 text-sm text-slate-500">
                      🎓 対象学年
                    </p>

                    <p className="text-lg font-bold text-purple-600">
                      {c.target_grade ?? "未設定"}
                    </p>

                  </div>


                  {/* 科目種類 */}
                  <div
                    className="
                      rounded-2xl
                      bg-slate-50
                      p-5
                      ring-1
                      ring-slate-100
                    "
                  >

                    <p className="mb-1 text-sm text-slate-500">
                      📚 科目種類
                    </p>

                    <p
                      className="
                        break-words
                        text-base
                        font-bold
                        text-blue-600
                      "
                    >
                      {c.course_type ?? "未設定"}
                    </p>

                  </div>


                  {/* 楽単率 */}
                  <div
                    className="
                      rounded-2xl
                      bg-slate-50
                      p-5
                      ring-1
                      ring-slate-100
                    "
                  >

                    <p className="mb-1 text-sm text-slate-500">
                      ✅ 楽単率
                    </p>

                    <p className="text-xl font-black text-green-600">
                      {(c.easy_rate * 100).toFixed(1)}%
                    </p>

                  </div>


                  {/* 優単率 */}
                  <div
                    className="
                      rounded-2xl
                      bg-slate-50
                      p-5
                      ring-1
                      ring-slate-100
                    "
                  >

                    <p className="mb-1 text-sm text-slate-500">
                      🌟 優単率
                    </p>

                    <p className="text-xl font-black text-amber-500">
                      {(c.excellent_rate * 100).toFixed(1)}%
                    </p>

                  </div>

                </div>


                {/* =========================
                    グラフ開閉ボタン
                ========================= */}
                {!isExpanded && (

                  <button
                    onClick={() =>
                      toggleGraph(c.id)
                    }
                    className="
                      mt-6
                      w-full
                      rounded-2xl
                      bg-blue-700
                      py-4
                      text-lg
                      font-black
                      text-white
                      shadow-sm
                      transition-all
                      hover:bg-blue-800
                      hover:shadow-md
                    "
                  >
                    📊 成績分布を見る
                  </button>

                )}


                {/* =========================
                    成績分布グラフ
                ========================= */}
                {isExpanded && (

                  <div className="mt-8 border-t border-slate-200 pt-6">

                    <div
                      className="
                        mb-4
                        flex
                        items-center
                        justify-between
                        gap-4
                      "
                    >

                      <div>

                        <p
                          className="
                            text-xs
                            font-bold
                            tracking-[0.25em]
                            text-blue-600
                          "
                        >
                          GRADE DISTRIBUTION
                        </p>

                        <p className="mt-1 text-xl font-black text-blue-950">
                          📊 成績分布
                        </p>

                      </div>


                      <button
                        onClick={() =>
                          toggleGraph(c.id)
                        }
                        className="
                          rounded-xl
                          border
                          border-slate-300
                          bg-slate-50
                          px-4
                          py-2
                          text-sm
                          font-bold
                          text-slate-700
                          transition
                          hover:bg-slate-100
                        "
                      >
                        閉じる
                      </button>

                    </div>


                    <div className="h-72">

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
                            domain={[
                              0,
                              "dataMax + 5",
                            ]}
                          />

                          <Bar
                            dataKey="count"
                            fill="#1d4ed8"
                            radius={[
                              6,
                              6,
                              0,
                              0,
                            ]}
                          >

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


        {/* =========================
            検索結果なし
        ========================= */}
        {filtered.length === 0 && (

          <div
            className="
              rounded-3xl
              bg-white
              p-12
              text-center
              shadow-sm
              ring-1
              ring-slate-200
            "
          >

            <p className="text-4xl">
              🔍
            </p>

            <h2
              className="
                mt-4
                text-2xl
                font-black
                text-blue-950
              "
            >
              講義が見つかりません
            </h2>

            <p className="mt-3 text-slate-500">
              検索条件や学期を変更してお試しください。
            </p>

          </div>

        )}

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-blue-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-14">

          <div
            className="
              flex
              flex-col
              justify-between
              gap-10
              md:flex-row
            "
          >

            {/* Logo */}
            <div>

              <Link
                href="/"
                className="flex items-center gap-3"
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    text-xl
                    font-bold
                    text-blue-950
                  "
                >
                  N
                </div>

                <span className="text-2xl font-bold">
                  NUSNAVI
                </span>

              </Link>


              <p className="mt-4 text-sm text-blue-200">
                長崎大学生のための総合支援サイト
              </p>

              <p className="mt-2 text-xs tracking-wider text-blue-300">
                Nagasaki University Student Navigation
              </p>

            </div>


            {/* Footer Navigation */}
            <div
              className="
                flex
                flex-col
                gap-3
                text-sm
                text-blue-200
              "
            >

              <Link
                href="/"
                className="transition hover:text-white"
              >
                NUSNAVIトップ
              </Link>

              <Link
                href="/risyu-support1"
                className="transition hover:text-white"
              >
                履修登録支援
              </Link>

              <Link
                href="/nukyoyo-search"
                className="transition hover:text-white"
              >
                成績分布検索
              </Link>

              <Link
                href="/student-support"
                className="transition hover:text-white"
              >
                学生生活支援情報
              </Link>

            </div>

          </div>


          {/* Copyright */}
          <div
            className="
              mt-12
              border-t
              border-blue-800
              pt-6
              text-xs
              text-blue-400
            "
          >
            © 2026 NUSNAVI
          </div>

        </div>

      </footer>

    </main>
  );
}