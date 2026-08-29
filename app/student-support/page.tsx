
import Link from "next/link";

export default function StudentSupportPage() {
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
          📝 学生生活支援情報
        </h1>

        <p className="text-center text-xl text-slate-700 mb-12">
          長崎大学生の学生生活をサポート
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 mb-8">
          <h2 className="text-3xl font-black text-blue-800 mb-4">
            学生生活支援情報とは？
          </h2>

          <p className="text-slate-700 text-lg leading-8">
            奨学金、授業料免除、各種支援制度、
            学生生活に関する情報を分かりやすくまとめて提供します。
          </p>
        </div>

        <div className="bg-yellow-50 rounded-3xl border-2 border-yellow-300 p-8">
          <h2 className="text-3xl font-black text-yellow-700 mb-4">
            現在の状況
          </h2>

          <p className="text-xl text-slate-700">
            このページは現在準備中です。
            今後、学生生活に役立つ情報を順次追加予定です。
          </p>
        </div>

      </div>

    </main>
  );
}


