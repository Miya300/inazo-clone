import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50 to-slate-200 p-8">

      <h1 className="text-6xl md:text-8xl font-black text-center text-blue-900 mb-4">
        NUSNAVI
      </h1>

      <p className="text-center text-2xl text-slate-700 mb-4">
        新・長崎大学生のための総合支援サイト
      </p>
      
      <p className="text-center text-slate-600 text-xl mb-10">
        Nagasaki University Student Navigation
      </p>
　　　　<section className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-blue-100 mb-10">

  <h2 className="text-4xl md:text-5xl font-black text-blue-800 text-center mb-8">
    NUSNAVIとは？
  </h2>

  <div className="space-y-6 text-slate-700 text-lg leading-8">

    <p>
      NUSNAVIは、長崎大学へ入学した学生が
      より充実した大学生活の
      スタートダッシュを切るための
      総合支援プラットフォームです。
    </p>

    <div className="bg-blue-50 rounded-2xl p-6">

      <p className="font-bold text-blue-800 mb-4">
        主なサポート内容
      </p>

      <ul className="space-y-3">
        <li>✅ 履修登録</li>
        <li>✅ 講義情報の収集</li>
        <li>✅ 学生生活に関する情報提供</li>
        <li>✅ 奨学金・学費支援制度案内</li>
      </ul>

    </div>

    <p>
      主に新入生から学部2年生を対象としていますが、
      すべての長崎大学生が活用できるサービスを目指しています。
    </p>

  </div>

</section>
      <div className="max-w-5xl mx-auto space-y-6">

        {/* 履修支援 */}
        <Link href="/risyu-support1" className="block">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all">

            <h2 className="text-4xl font-black text-slate-700">
              📅 履修支援
            </h2>

            <p className="text-slate-500 mt-2">
              履修登録をサポート
            </p>

          </div>
        </Link>
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

        {/* 学生生活支援情報 */}
        <Link href="/student-support" className="block">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all">

            <h2 className="text-4xl font-black text-slate-700">
              📝 学生生活支援情報
            </h2>

            <p className="text-slate-500 mt-2">
              奨学金・授業料免除制度など
            </p>

          </div>
        </Link>

      </div>

    </main>
  );
}