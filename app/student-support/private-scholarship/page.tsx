import Link from "next/link";

export default function PrivateScholarshipPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= HEADER ================= */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-950 text-xl font-black text-white">
              N
            </div>

            <div>
              <p className="text-lg font-black tracking-tight text-blue-950">
                NUSNAVI
              </p>

              <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500">
                NAGASAKI UNIVERSITY STUDENT NAVIGATION
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">

            <Link
              href="/risyu-support1"
              className="text-slate-600 transition hover:text-blue-700"
            >
              履修支援
            </Link>

            <Link
              href="/nukyoyo-search"
              className="text-slate-600 transition hover:text-blue-700"
            >
              成績分布検索
            </Link>

            <Link
              href="/student-support"
              className="text-blue-700"
            >
              学生生活支援
            </Link>

            <Link
              href="/"
              className="text-slate-600 transition hover:text-blue-700"
            >
              MENU
            </Link>

          </nav>
        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          {/* Back */}
          <Link
            href="/student-support"
            className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
          >
            ← 経済支援情報へ戻る
          </Link>

          {/* Category */}
          <p className="mt-10 text-sm font-bold tracking-[0.3em] text-blue-200">
            PRIVATE SCHOLARSHIP SUPPORT
          </p>

          {/* Page title */}
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            民間団体等からの支援
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
            財団・企業・自治体などが募集する奨学金について、
            利用できる制度を分かりやすく紹介します。
          </p>

        </div>
      </section>


      {/* ================= MAIN ================= */}
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">


        {/* ===================================================== */}
        {/* ================= TITLE ============================== */}
        {/* ===================================================== */}

        <section className="rounded-3xl border-l-8 border-blue-700 bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            PRIVATE SCHOLARSHIP
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-950 md:text-5xl">
            奨学金を探してみよう
          </h2>

          <div className="mt-7 h-1 w-24 bg-blue-700" />

          <p className="mt-7 text-base leading-8 text-slate-600 md:text-lg">
            ここにページ全体の概要を入れます。
          </p>

        </section>


        {/* ===================================================== */}
        {/* ================= SEARCH ============================= */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            SCHOLARSHIP SEARCH
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
            奨学金を探す
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            ここに検索機能・検索条件などを入れます。
          </p>

          {/* 検索フォーム予定地 */}
          <div className="mt-8 rounded-2xl border-2 border-slate-200 bg-slate-50 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              
              <div className="h-12 rounded-xl bg-white border border-slate-200" />
              
              <div className="h-12 rounded-xl bg-white border border-slate-200" />

            </div>

            <div className="mt-4 h-12 rounded-xl bg-blue-100" />
          </div>

        </section>


        {/* ===================================================== */}
        {/* ================= CONDITIONS ========================= */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            REQUIREMENTS
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
            応募条件
          </h2>

          <div className="mt-8 space-y-5">

            {/* 条件1 */}
            <div className="rounded-2xl border-2 border-slate-200 p-6">
              <h3 className="text-xl font-black text-blue-700">
                専攻・分野
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                ここに内容を入れます。
              </p>
            </div>

            {/* 条件2 */}
            <div className="rounded-2xl border-2 border-slate-200 p-6">
              <h3 className="text-xl font-black text-blue-700">
                学年
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                ここに内容を入れます。
              </p>
            </div>

            {/* 条件3 */}
            <div className="rounded-2xl border-2 border-slate-200 p-6">
              <h3 className="text-xl font-black text-blue-700">
                成績・GPA
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                ここに内容を入れます。
              </p>
            </div>

            {/* 条件4 */}
            <div className="rounded-2xl border-2 border-slate-200 p-6">
              <h3 className="text-xl font-black text-blue-700">
                家計・年収
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                ここに内容を入れます。
              </p>
            </div>

          </div>

        </section>


        {/* ===================================================== */}
        {/* ================= SCHOLARSHIP LIST =================== */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            SCHOLARSHIP LIST
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
            奨学金一覧
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            ここに奨学金の一覧を表示します。
          </p>


          {/* 奨学金カード */}
          <div className="mt-8 space-y-4">

            <div className="rounded-2xl border-2 border-slate-200 p-6">
              <p className="text-sm font-bold tracking-[0.2em] text-blue-700">
                SCHOLARSHIP 01
              </p>

              <h3 className="mt-3 text-2xl font-black text-blue-900">
                奨学金名
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                ここに概要を入れます。
              </p>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">給付・貸与</p>
                  <p className="mt-1 font-bold">給付型</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">対象学年</p>
                  <p className="mt-1 font-bold">○年生</p>
                </div>
              </div>

            </div>


            {/* 追加カード */}
            <div className="rounded-2xl border-2 border-slate-200 p-6">
              奨学金カードを追加
            </div>

          </div>

        </section>


        {/* ===================================================== */}
        {/* ================= SEARCH RESULT ====================== */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            SEARCH RESULT
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
            あなたに合った奨学金
          </h2>

          <div className="mt-8 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">
            <p className="text-sm leading-7 text-slate-700">
              ここに検索結果を表示します。
            </p>
          </div>

        </section>


        {/* ===================================================== */}
        {/* ================= APPLICATION ======================== */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            APPLICATION
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
            申込の流れ
          </h2>

          <div className="mt-8 space-y-4">

            <div className="flex gap-4 rounded-2xl bg-blue-50 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-black text-white">
                1
              </div>

              <div>
                <p className="font-black text-blue-900">
                  募集内容を確認
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  ここに内容を入れます。
                </p>
              </div>
            </div>


            <div className="flex gap-4 rounded-2xl bg-slate-50 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-black text-white">
                2
              </div>

              <div>
                <p className="font-black text-blue-900">
                  必要書類を準備
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  ここに内容を入れます。
                </p>
              </div>
            </div>


            <div className="flex gap-4 rounded-2xl bg-slate-50 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-black text-white">
                3
              </div>

              <div>
                <p className="font-black text-blue-900">
                  申請
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  ここに内容を入れます。
                </p>
              </div>
            </div>

          </div>

        </section>


        {/* ===================================================== */}
        {/* ================= IMPORTANT ========================== */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl border-2 border-red-200 bg-red-50 p-8 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-red-600">
            IMPORTANT
          </p>

          <h2 className="mt-4 text-3xl font-black text-red-700 md:text-4xl">
            注意点
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-8 text-slate-700">

            <p>
              ・ここに注意事項を入れます。
            </p>

            <p>
              ・ここに注意事項を入れます。
            </p>

            <p>
              ・ここに注意事項を入れます。
            </p>

          </div>

        </section>


        {/* ===================================================== */}
        {/* ================= CHECKLIST ========================== */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            CHECKLIST
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
            奨学金申請前チェック
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-700">
                □ 応募条件を確認した
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-700">
                □ 成績条件を確認した
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-700">
                □ 家計条件を確認した
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-700">
                □ 必要書類を確認した
              </p>
            </div>

          </div>

        </section>


        {/* ===================================================== */}
        {/* ================= FINAL MESSAGE ====================== */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl bg-gradient-to-br from-blue-50 to-slate-100 p-8 ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            MESSAGE
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-950">
            自分に合った奨学金を探してみよう
          </h2>

          <p className="mt-5 leading-8 text-slate-600 md:text-lg">
            ここに最後のメッセージを入れます。
          </p>

        </section>


      </main>


      {/* ================= FOOTER ================= */}
      <footer className="mt-10 bg-blue-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-12">

          <div className="flex flex-col justify-between gap-8 md:flex-row">

            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-black text-blue-950">
                N
              </div>

              <div>
                <p className="text-lg font-black">
                  NUSNAVI
                </p>

                <p className="text-[10px] tracking-[0.2em] text-blue-300">
                  NAGASAKI UNIVERSITY STUDENT NAVIGATION
                </p>
              </div>

            </div>


            <div className="flex flex-wrap gap-6 text-sm text-blue-200">

              <Link
                href="/"
                className="transition hover:text-white"
              >
                ホーム
              </Link>

              <Link
                href="/risyu-support1"
                className="transition hover:text-white"
              >
                履修支援
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
                経済支援
              </Link>

            </div>

          </div>


          <div className="mt-10 border-t border-white/10 pt-6">

            <p className="text-xs text-blue-300">
              © 2026 NUSNAVI
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}