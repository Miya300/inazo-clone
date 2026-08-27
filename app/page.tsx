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
type ClassData = {
  id: number;
  subject: string;
  teacher: string;
  gpa: number;

  a_plus: number;
  a: number;
  b: number;
  c: number;
  d: number;
};

export default function Home() {
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [keyword, setKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("high");
  

  useEffect(() => {
   
    async function loadData() {
      const { data, error } = await supabase
        .from("classes")
        .select("*");

        console.log("data:", JSON.stringify(data, null, 2));
console.log("error:", error);
      if (!error && data) {
        setClasses(data);
      }
    }

    loadData();
  }, []);

  const filtered = classes
  .filter(
    (c) =>
      c.subject.includes(keyword) ||
      c.teacher.includes(keyword)
  )
  .sort((a, b) =>
    sortOrder === "high"
      ? b.gpa - a.gpa
      : a.gpa - b.gpa
  );

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-6 text-blue-500">
        成績分布検索サービス
      </h1>

      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border p-3 w-full rounded"
        placeholder="講義名・教員名で検索"
      />
     

<div className="mt-4 flex gap-2">
  <button
    onClick={() => setSortOrder("high")}
    className="bg-blue-500 text-white px-4 py-2 rounded"
  >
    GPA高い順
  </button>

  <button
    onClick={() => setSortOrder("low")}
    className="bg-gray-500 text-white px-4 py-2 rounded"
  >
    GPA低い順
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

            <p>担当教員: {c.teacher}</p>

            <p>GPA: {c.gpa}</p>
            <BarChart
  width={300}
  height={160}
  data={[
    { grade: "A+", count: c.a_plus },
    { grade: "A", count: c.a },
    { grade: "B", count: c.b },
    { grade: "C", count: c.c },
    { grade: "D", count: c.d },
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
