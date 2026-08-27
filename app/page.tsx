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
  const [sortOrder, setSortOrder] = useState("high");

  useEffect(() => {
    async function loadData() {
      const { data, error } = await supabase
        .from("courses")
        .select("*");

        console.log(data);

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
    .sort((a, b) =>
      sortOrder === "high"
        ? b.easy_rate - a.easy_rate
        : a.easy_rate - b.easy_rate
    );

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-6 text-blue-500">
        稲蔵
      </h1>

      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border p-3 w-full rounded"
        placeholder="科目名で検索"
      />

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setSortOrder("high")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          楽単率高い順
        </button>

        <button
          onClick={() => setSortOrder("low")}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          楽単率低い順
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {filtered.map((c) => (
          <div
            key={c.id}
            className="border rounded-xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold">
              {c.subject}
            </h2>

            <p>
              楽単率:
              {" "}
              {(c.easy_rate * 100).toFixed(1)}%
            </p>

            <p>
              優単率:
              {" "}
              {(c.excellent_rate * 100).toFixed(1)}%
            </p>

            <p>
              年度:
              {" "}
              {c.year}
            </p>

            <BarChart
              width={350}
              height={180}
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
                fill="#2563eb"
              />
            </BarChart>
          </div>
        ))}
      </div>
    </main>
  );
}
