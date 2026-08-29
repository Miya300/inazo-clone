import Link from "next/link";

export default function RisyuSupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50 to-slate-200 p-8">

      <div className="max-w-5xl mx-auto">

        {/* NUSNAVIへ戻る */}
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

        <h1 className="text-5xl md:text-7xl font-black text-center text-blue-900 mb-4">
          📅 履修支援
        </h1>

        <p className="text-center text-xl text-slate-700 mb-12">
          長崎大学生の履修登録をサポート
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 mb-8">
          <h2 className="text-3xl font-black text-blue-800 mb-4">
            履修支援とは？
          </h2>

          <p className="text-slate-700 text-lg leading-8">
            NUSNAVIの履修支援機能では、
            長崎大学の新入生や低学年の学生が
            スムーズに履修登録を行えるよう支援します。
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 mb-8">
          <h2 className="text-3xl font-black text-blue-800 mb-6">
            🚧 開発予定機能
          </h2>

          <ul className="space-y-4 text-xl text-slate-700">
            <li>✅ 履修登録ガイド</li>
            <li>✅ おすすめ履修モデル</li>
            <li>✅ 教養科目早見表</li>
            <li>✅ 卒業要件確認サポート</li>
            <li>✅ 履修Q&amp;A</li>
          </ul>
        </div>

        <div className="bg-yellow-50 rounded-3xl border-2 border-yellow-300 p-8">
          <h2 className="text-3xl font-black text-yellow-700 mb-4">
            現在の状況
          </h2>

          <p className="text-xl text-slate-700">
            この機能は現在開発中です。
            今後アップデートにより順次公開予定です。
          </p>
        </div>

      </div>

    </main>
  );
}