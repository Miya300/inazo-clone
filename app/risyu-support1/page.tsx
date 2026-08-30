import Link from "next/link";

export default function RisyuSupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50 to-slate-200 p-8">

      <div className="max-w-5xl mx-auto">

        {/* NUSNAVIへ戻る */}
        <Link
          href="/"
          className="inline-block mb-6 px-6 py-3 bg-white text-blue-800 font-bold rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all"
        >
          ← NUSNAVIへ戻る
        </Link>

        {/* タイトル */}
        <h1 className="text-5xl md:text-6xl font-black text-blue-900 mb-8">
          📅 履修支援
        </h1>

        {/* 教養教育〈理論編〉 */}
        <Link
          href="/risyu-support1/kyoyo-theory"
          className="block"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all">

            <h2 className="text-3xl font-black text-blue-800 mb-3">
              📚 教養教育〈理論編〉
            </h2>

            <p className="text-xl font-semibold text-slate-700 mb-3">
              新入生向け・履修登録完全ガイド
            </p>

            <p className="text-slate-600 leading-7">
              履修登録の考え方、必修科目、必要単位数などを
              新入生にも分かりやすく解説します。
            </p>

            <p className="mt-5 font-bold text-blue-600">
              ▶ 記事を読む
            </p>

          </div>
        </Link>

        {/* 今後追加する履修支援コンテンツ */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 mt-8">

          <h2 className="text-3xl font-black text-blue-800 mb-4">
            🚧 その他の履修支援
          </h2>

          <p className="text-slate-600 leading-7">
            今後、履修登録に役立つコンテンツを順次追加予定です。
          </p>

        </div>

      </div>

    </main>
  );
}