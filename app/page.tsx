
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= HEADER ================= */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-950 text-2xl font-bold text-white">
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

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/risyu-support1"
              className="text-sm font-medium text-slate-600 hover:text-blue-800"
            >
              履修登録
            </Link>

            <Link
              href="/nukyoyo-search"
              className="text-sm font-medium text-slate-600 hover:text-blue-800"
            >
              成績分布
            </Link>

            <Link
              href="/student-support"
              className="text-sm font-medium text-slate-600 hover:text-blue-800"
            >
              学生生活
            </Link>

            <span className="rounded-full border border-slate-300 px-4 py-2 text-sm">
              MENU
            </span>
          </nav>
        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">

        <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">

          <p className="mb-6 text-sm font-semibold tracking-[0.35em] text-blue-200">
            NAGASAKI UNIVERSITY
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            長崎大学 新入生のための
            <br />
            総合支援サイト
          </h1>

          <p className="mt-6 text-lg text-blue-100 md:text-xl">
            NUSNAVI
          </p>

          <p className="mt-2 text-sm tracking-[0.2em] text-blue-200">
            Nagasaki University Student Navigation
          </p>

          <p className="mt-8 max-w-2xl leading-8 text-blue-100">
            <strong>大学生活のスタートを、もっとスマートに</strong>
            <br />
            履修登録から学生生活まで、長崎大学生に必要な情報をまとめています
          </p>
          <p className="mt-8 max-w-2xl leading-8 text-blue-100">
            <strong>成績を味方に、大学生活をもっと安心に</strong>
            <br />
            GPAや成績だけでなく、奨学金や授業料等の減免など、学生生活や経済面に関わる重要な制度も、早い段階から知っておくことが大切です
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/risyu-support1"
              className="rounded-full bg-white px-7 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
            >
              履修登録をサポート →
            </Link>

            <Link
              href="/nukyoyo-search"
              className="rounded-full border border-white/40 px-7 py-3 font-semibold transition hover:bg-white/10"
            >
              成績を探す →
            </Link>

          </div>

        </div>
      </section>


      {/* ================= NUSNAVIとは ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">

          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
              ABOUT NUSNAVI
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              NUSNAVIとは？
            </h2>
          </div>

          <div>

            <p className="text-lg leading-9 text-slate-700">
              NUSNAVIは、長崎大学へ入学した学生がより充実した大学生活の
              <span className="font-bold text-blue-900">
                スタートダッシュ
              </span>
              を切るための総合支援プラットフォームです。
            </p>

            <div className="mt-10">

              <h3 className="text-lg font-bold">
                主なサポート内容
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                {[
                  "履修登録",
                  "講義情報の収集",
                  "学生生活に関する情報提供",
                  "奨学金・学費支援制度案内",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <span className="mr-2">✅</span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}

              </div>

            </div>

            <p className="mt-8 leading-8 text-slate-600">
              主に新入生から学部2年生を対象としていますが、
              <br className="hidden md:block" />
              すべての長崎大学生が活用できるサービスを目指しています。
            </p>

          </div>
        </div>
      </section>


      {/* ================= PICK UP ================= */}
      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            PICK UP
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            NUSNAVIの主なサービス
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">


            {/* NUKYO REGI */}
            <Link
              href="/risyu-support1"
              className="group rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="text-3xl"></div>

              <p className="mt-6 text-xs font-bold tracking-[0.2em] text-blue-700">
                NUKYO REGI SUPPORT
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                長崎大学 履修登録支援サービス
              </h3>

              <p className="mt-4 text-sm tracking-wide text-slate-500">
                Nagasaki University Registration Support
              </p>

              <p className="mt-6 leading-7 text-slate-600">
                履修登録に必要な情報を整理し、
                長崎大学生の履修登録をサポートします。
              </p>

              <p className="mt-8 font-semibold text-blue-700">
                サービスを見る →
              </p>

            </Link>


            {/* NUKYOYO */}
            <Link
              href="/nukyoyo-search"
              className="group rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="text-3xl"></div>

              <p className="mt-6 text-xs font-bold tracking-[0.2em] text-blue-700">
                NUKYOYO SEARCH
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                長崎大学教養教育
                <br />
                成績分布検索サービス
              </h3>

              <p className="mt-4 text-sm tracking-wide text-slate-500">
                Nagasaki University Kyoyo Search
              </p>

              <p className="mt-6 leading-7 text-slate-600">
                長崎大学の教養教育科目について、
                成績分布を検索・比較できます。
              </p>

              <p className="mt-8 font-semibold text-blue-700">
                科目を探す →
              </p>

            </Link>


            {/* 学生生活支援 */}
            <Link
              href="/student-support"
              className="group rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="text-3xl"></div>

              <p className="mt-6 text-xs font-bold tracking-[0.2em] text-blue-700">
                STUDENT SUPPORT
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                学生生活支援情報
              </h3>

              <p className="mt-4 text-sm tracking-wide text-slate-500">
                Scholarship & Student Support
              </p>

              <p className="mt-6 leading-7 text-slate-600">
                奨学金・授業料免除制度など、
                学生生活に関する支援情報をまとめています。
              </p>

              <p className="mt-8 font-semibold text-blue-700">
                支援情報を見る →
              </p>

            </Link>

          </div>
        </div>
      </section>


      {/* ================= QUICK ACCESS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
          QUICK ACCESS
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          よく使う情報
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">

          {[
            ["履修登録", "/risyu-support1"],
            ["成績分布", "/nukyoyo-search"],
            ["学生生活支援", "/student-support"],
            ["教養教育", "/risyu-support1/kyoyo-theory"],
            ["奨学金・学費", "/student-support"],
            ["NUSNAVIについて", "/"],
          ].map(([title, href]) => (

            <Link
              key={title}
              href={href}
              className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold transition hover:border-blue-300 hover:bg-blue-50"
            >
              {title}

              <span className="float-right text-blue-700">
                →
              </span>
            </Link>

          ))}

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-blue-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="flex flex-col justify-between gap-10 md:flex-row">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-bold text-blue-950">
                  N
                </div>

                <span className="text-2xl font-bold">
                  NUSNAVI
                </span>

              </div>

              <p className="mt-4 text-sm text-blue-200">
                長崎大学 新入生のための総合支援サイト
              </p>

              <p className="mt-2 text-xs tracking-wider text-blue-300">
                Nagasaki University Student Navigation
              </p>

            </div>

            <div className="text-sm leading-8 text-blue-200">
              <p>長崎大学生のための学生情報ポータル</p>
              <p>主に新入生から学部2年生を対象</p>
              <p className="mt-3 text-blue-400">
                © 2026 NUSNAVI
              </p>
            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}