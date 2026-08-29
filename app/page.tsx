import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50 to-slate-200 p-8">

      <h1 className="text-6xl md:text-8xl font-black text-center text-blue-900 mb-4">
        NUSNAVI
      </h1>

      <p className="text-center text-2xl text-slate-700 mb-4">
        長崎大学生のための総合支援サイト
      </p>

      <p className="text-center text-slate-600 text-xl mb-10">
        Nagasaki University Student Navigation
      </p>

      <div className="max-w-5xl mx-auto space-y-6">

        {/* NUKYOYO Search */}
        <Link href="/nukyoyo-search" className="block">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all">

            <h2 className="text-4xl font-black text-blue-800 mb-2">
              📚 NUKYOYO Search
            </h2>

            <p className="text-slate-700 text-xl">
              長崎大学教養教育 成績分布検索サービス
            </p>

            <p className="text-blue-500 mt-2">
              Nagasaki University Kyoyo Search
            </p>

          </div>
        </Link>

        {/* 履修支援 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
          <h2 className="text-4xl font-black text-slate-700">
            📝 履修支援
          </h2>

          <p className="text-slate-500 mt-2">
            準備中
          </p>
        </div>

        {/* 時間割作成 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
          <h2 className="text-4xl font-black text-slate-700">
            📅 時間割作成
          </h2>

          <p className="text-slate-500 mt-2">
            準備中
          </p>
        </div>

      </div>

    </main>
  );
}