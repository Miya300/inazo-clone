
import Link from "next/link";

export default function RisyuSupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50 to-slate-200 p-8">

      <div className="max-w-5xl mx-auto">

        {/* NUSNAVIへ戻る */}
        <Link
          href="/"
          className="inline-block mb-8 px-6 py-3 bg-white text-blue-800 font-bold rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all"
        >
          ← NUSNAVIへ戻る
        </Link>

        {/* NUSNAVIタイトル */}
        <h1 className="text-5xl md:text-8xl font-black mb-4 text-blue-900 text-center drop-shadow-lg">
          NUSNAVI
        </h1>

        {/* サイト説明 */}
        <p className="text-center text-xl text-slate-700 font-semibold mb-2">
          長崎大学生のための総合支援サイト
        </p>

        {/* 英語タイトル */}
        <p className="text-center text-slate-600 text-2xl mb-8">
          Nagasaki University Student Navigation
        </p>

        {/* NUKYO REGI Support */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8 border border-blue-100 text-center">

          <h2 className="text-5xl md:text-6xl font-black text-blue-800 mb-2">
            📅 NUKYO REGI Support
          </h2>

          <p className="text-slate-700 text-lg">
            長崎大学 履修登録支援サービス
          </p>

          <p className="text-slate-500 text-sm mt-2">
            Nagasaki University Registration Support
          </p>

        </div>


        {/* =========================
            教養教育〈総論編〉
        ========================= */}
        <Link
          href="/risyu-support1/kyoyo-theory"
          className="block"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all">

            <h2 className="text-3xl font-black text-blue-800 mb-3">
              📚 教養教育〈総論編〉
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


        {/* =========================
            教養教育〈実践編〉
        ========================= */}
        <Link
          href="/risyu-support1/kyoyo-practice"
          className="block mt-8"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all">

            <h2 className="text-3xl font-black text-blue-800 mb-3">
              📝 教養教育〈実践編〉
            </h2>

            <p className="text-xl font-semibold text-slate-700 mb-3">
              新入生向け・科目選択＆履修登録ガイド
            </p>

            <p className="text-slate-600 leading-7">
              実際にどの科目を選び、どのように履修登録するのかを
              新入生にも分かりやすく解説します。
            </p>

            <p className="mt-5 font-bold text-blue-600">
              ▶ 記事を読む
            </p>

          </div>
        </Link>


        {/* =========================
            その他の履修支援
        ========================= */}
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