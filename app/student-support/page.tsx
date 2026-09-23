import Link from "next/link";

export default function StudentSupportPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= HEADER ================= */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* NUSNAVI Logo */}
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
              className="text-sm font-medium text-slate-600 transition hover:text-blue-800"
            >
              成績分布
            </Link>

            <Link
              href="/student-support"
              className="text-sm font-semibold text-blue-800"
            >
              経済支援
            </Link>

            <span className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600">
              MENU
            </span>

          </nav>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">

        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">

          {/* NUSNAVIへ戻る */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            ← NUSNAVIへ戻る
          </Link>


          <p className="mb-5 text-sm font-semibold tracking-[0.35em] text-blue-200">
            NAGASAKI UNIVERSITY
          </p>


          {/* NUSNAVIタイトル */}
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            NUSNAVI
          </h1>


          {/* サイト説明 */}
          <p className="mt-5 text-xl font-semibold text-white md:text-2xl">
            長崎大学 新入生のための総合支援サイト
          </p>


          {/* 英語タイトル */}
          <p className="mt-3 text-base tracking-wide text-blue-200 md:text-lg">
            Nagasaki University Student Navigation
          </p>

        </div>

      </section>


      {/* ================= MAIN CONTENT ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">


        {/* =========================
            ページタイトル
        ========================= */}
        <div className="mb-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <div className="border-l-8 border-blue-700 pl-6">

            {/* TITLE */}
            <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
              FINANCIAL SUPPORT
            </p>


            {/* ページタイトル */}
            <h1 className="mt-3 text-4xl font-black tracking-tight text-blue-950 md:text-6xl">
              経済支援情報
            </h1>


            {/* アクセントライン */}
            <div className="mt-5 h-1 w-20 bg-blue-700"></div>


            {/* サービス名 */}
            <h2 className="mt-6 text-3xl font-black text-blue-900 md:text-5xl">
              Financial Support Information
            </h2>


            {/* 日本語説明 */}
            <p className="mt-4 text-xl font-bold text-slate-700 md:text-2xl">
              奨学金・授業料免除・各種経済支援
            </p>


            {/* 英語説明 */}
            <p className="mt-2 text-base text-slate-500 md:text-lg">
              Scholarship & Financial Support
            </p>

          </div>

        </div>


        {/* =========================
            経済支援情報とは？
        ========================= */}
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            ABOUT FINANCIAL SUPPORT
          </p>


          <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
            経済支援情報とは？
          </h2>


          <p className="mt-6 max-w-4xl leading-8 text-slate-600 md:text-lg">
            奨学金や授業料・入学金の減免、家計が急変した場合の支援など、
            大学生活に必要な費用を支えるさまざまな制度を紹介しています。
          </p>


          <p className="mt-6 max-w-4xl leading-8 text-slate-600 md:text-lg">

            <span className="font-bold text-blue-800">
              「収入が多いから対象外」とは限りません。
            </span>

            中程度以上の所得世帯でも、世帯構成や扶養状況などによって
            給付型奨学金や授業料等の支援を受けられる可能性があります。

          </p>


          <p className="mt-6 max-w-4xl leading-8 text-slate-600 md:text-lg">
            利用できる制度を知り、経済的な負担を減らしながら
            安心して学業に取り組みましょう。
          </p>

        </div>


        {/* =========================
    国（JASSO）からの支援
========================= */}
<Link
  href="/student-support/jasso-support"
  className="group mt-8 block"
>
  <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">

    <div className="flex items-start justify-between gap-6">

      <div>

        <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
          NATIONAL SUPPORT
        </p>

        <div className="mt-4 flex items-center gap-6">
  <h2 className="text-3xl font-black text-blue-900 md:text-4xl">
    国（JASSO）からの支援
  </h2>

  <span
  className="
    inline-flex
    max-w-full
    shrink-0
    rounded-2xl
    bg-red-50
    px-4
    py-2
    text-lg
    font-bold
    leading-tight
    tracking-wide
    text-red-700
    ring-1
    ring-red-200

    sm:px-5
    sm:py-2
    sm:text-xl

    md:px-6
    md:py-3
    md:text-2xl
  "
>
  【高校生・新入生向け】
</span>
</div>

        <p className="mt-5 text-xl font-semibold text-slate-700 md:text-2xl">
          入学前から入学後まで利用できる奨学金・学費減免
        </p>

      </div>

      {/* 矢印 */}
      <span className="hidden text-3xl text-blue-700 transition-transform duration-300 group-hover:translate-x-2 md:block">
        →
      </span>

    </div>

    <p className="mt-6 max-w-4xl leading-8 text-slate-600 md:text-lg">
      日本学生支援機構（JASSO）の給付型・貸与型奨学金や、
      授業料・入学金の減免など、入学前から入学後まで利用できる
      国の経済支援制度について分かりやすく紹介します。
    </p>

    <p className="mt-7 font-bold text-blue-600">
      ▶ 記事を読む
    </p>

  </div>
</Link>
{/* =========================
    日本学生支援機構以外の団体等からの支援
========================= */}
<Link
  href="/student-support/private-scholarship"
  className="group mt-8 block"
>
  <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">

    <div className="flex items-start justify-between gap-6">

      <div>

        <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
          PRIVATE SCHOLARSHIP SUPPORT
        </p>

        <div className="mt-4 flex items-center gap-6">
  <h2 className="text-3xl font-black text-blue-900 md:text-4xl">
    財団・企業・自治体による奨学金
  </h2>

  <span
  className="
    inline-flex
    max-w-full
    shrink-0
    rounded-2xl
    bg-blue-50
    px-4
    py-2
    text-lg
    font-bold
    leading-tight
    tracking-wide
    text-blue-700
    ring-1
    ring-blue-200

    sm:px-5
    sm:py-2
    sm:text-xl

    md:px-6
    md:py-3
    md:text-2xl
  "
>
  【新入生・在学生向け】
</span>
</div>

        <p className="mt-5 text-xl font-semibold text-slate-700 md:text-2xl">
          民間財団、企業、自治体などが募集する給付型・貸与型奨学金について紹介します。
        </p>
        

      </div>

      {/* 矢印 */}
      <span className="hidden text-3xl text-blue-700 transition-transform duration-300 group-hover:translate-x-2 md:block">
        →
      </span>

    </div>

    <p className="mt-6 max-w-4xl leading-8 text-slate-600 md:text-lg">
      財団・企業・自治体による奨学金
      民間財団、企業、自治体などが募集する
      給付型・貸与型奨学金について紹介します。
      <strong>また、このような奨学金がうけられる可能性についてもお話しします。</strong>
    </p>

    <p className="mt-7 font-bold text-blue-600">
      ▶ 記事を読む
    </p>

  </div>
</Link>


        


      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-blue-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-14">

          <div className="flex flex-col justify-between gap-10 md:flex-row">


            {/* Logo */}
            <div>

              <Link
                href="/"
                className="flex items-center gap-3"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-bold text-blue-950">
                  N
                </div>

                <span className="text-2xl font-bold">
                  NUSNAVI
                </span>

              </Link>


              <p className="mt-4 text-sm text-blue-200">
                長崎大学 新入生のための総合支援サイト
              </p>


              <p className="mt-2 text-xs tracking-wider text-blue-300">
                Nagasaki University Student Navigation
              </p>

            </div>


            {/* Footer Navigation */}
            <div className="flex flex-col gap-3 text-sm text-blue-200">

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
                経済支援情報
              </Link>

            </div>

          </div>


          {/* Copyright */}
          <div className="mt-12 border-t border-blue-800 pt-6 text-xs text-blue-400">
            © 2026 NUSNAVI
          </div>

        </div>

      </footer>

    </main>
  );
}