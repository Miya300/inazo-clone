
"use client";

import Link from "next/link";

export default function KyoyoTheoryPage() {
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
              className="text-sm font-semibold text-blue-800"
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
              className="text-sm font-medium text-slate-600 transition hover:text-blue-800"
            >
              学生生活
            </Link>

            <span className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600">
              MENU
            </span>

          </nav>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          {/* 履修支援へ戻る */}
          <Link
            href="/risyu-support1"
            className="mb-10 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            ← NUKYO REGI Suppoへ戻る
          </Link>

          <p className="mb-5 text-sm font-semibold tracking-[0.35em] text-blue-200">
            NUKYO REGI SUPPORT
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            教養教育〈総論編〉
          </h1>

          <p className="mt-5 text-xl font-semibold text-white md:text-2xl">
            新入生向け・履修登録完全ガイド
          </p>

          <p className="mt-3 text-base tracking-wide text-blue-200 md:text-lg">
            「何を取ればいい？」を解決するための教養教育の基本
          </p>

        </div>

      </section>


      {/* ================= MAIN CONTENT ================= */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">


        {/* =========================
            INTRO
        ========================= */}
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <div className="border-l-8 border-blue-700 pl-6">

            <p className="text-sm font-bold tracking-[0.3em] text-blue-700">
              INTRODUCTION
            </p>

            <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
              履修登録を始める前に
            </h2>

          </div>

          <p className="mt-8 text-slate-700 leading-8">
            大学生活が始まって、最初に悩みやすいのが
            <strong>「履修登録」</strong>です。
          </p>


          <div className="mt-6 rounded-2xl bg-blue-50 p-6">

            <p className="mb-4 font-black text-blue-900">
              こんな疑問はありませんか？
            </p>

            <ul className="space-y-2 text-slate-700">
              <li>「何を取ればいいの？」</li>
              <li>「必修ってどれ？」</li>
              <li>「選択科目はどう選ぶの？」</li>
              <li>「1年生と2年生で何が違うの？」</li>
              <li>「単位ってどう考えればいいの？」</li>
            </ul>

          </div>


          <p className="mt-6 leading-8 text-slate-700">
            このページでは、1・2年次の履修登録で知っておきたい
            教養教育の基本をまとめています。
          </p>

        </div>


        {/* =========================
            このページについて
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            ABOUT THIS PAGE
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-900 md:text-4xl">
            このページについて
          </h2>


          <p className="mt-6 leading-8 text-slate-700">
            本ページは、長崎大学
            <strong>「令和8年度 教養教育 学生便覧」</strong>
            をもとに作成した、教養教育の解説ページです。
          </p>


          <p className="mt-5 leading-8 text-slate-700">
            学生便覧に掲載されている教養教育の制度や履修に関する情報を、
            新入生にも分かりやすいように整理しています。
          </p>


          <div className="mt-6 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">

            <p className="mb-3 font-black text-blue-800">
              📌 参考資料
            </p>

            <a
              href="/pdfs/kyoyo-binran.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
            >
              📖 長崎大学『令和8年度 教養教育 学生便覧』
            </a>

          </div>


          <div className="mt-6 rounded-2xl border-2 border-yellow-300 bg-yellow-50 p-6">

            <p className="mb-2 font-black text-yellow-800">
              ⚠️ 重要
            </p>

            <p className="leading-8 text-slate-700">
              本ページは学生便覧を分かりやすく解説することを目的としています。
              実際に履修登録を行う際は、必ず最新の学生便覧・履修登録案内・
              時間割・シラバス等を確認してください。
            </p>

          </div>

        </div>


        {/* =========================
            履修登録の考え方
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            BASIC CONCEPT
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-900 md:text-4xl">
            まず知っておきたい「履修登録」の考え方
          </h2>


          <p className="mt-6 leading-8 text-slate-700">
            履修登録では、単純に
            <strong>「面白そうな授業を選ぶ」</strong>
            だけではありません。
          </p>


          <div className="mt-8 rounded-2xl bg-blue-50 p-8 text-center">

            <div className="font-bold text-xl text-blue-900">
              🎓 卒業に必要な単位
            </div>

            <div className="my-2 text-2xl">↓</div>

            <div className="font-bold text-xl text-blue-900">
              📚 必修科目
            </div>

            <div className="my-2 text-2xl">↓</div>

            <div className="font-bold text-xl text-blue-900">
              🔢 科目区分ごとの必要単位
            </div>

            <div className="my-2 text-2xl">↓</div>

            <div className="font-bold text-xl text-blue-900">
              📖 1・2年次で履修する科目
            </div>

            <div className="my-2 text-2xl">↓</div>

            <div className="font-bold text-xl text-blue-900">
              📅 実際の時間割
            </div>

            <div className="my-2 text-2xl">↓</div>

            <div className="font-black text-xl text-green-700">
              ✅ 履修登録
            </div>

          </div>

        </div>


        {/* =========================
            ① 必修科目
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            STEP 01
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-900 md:text-4xl">
            ① まず「必修科目」を確認する
          </h2>


          <p className="mt-6 leading-8 text-slate-700">
            新入生は、まず自分の
            <strong>学部・学科で指定されている必修科目</strong>
            を確認しましょう。
          </p>


          <p className="mt-5 leading-8 text-slate-700">
            教養教育には、例えば次のような科目があります。
          </p>


          <div className="mt-6 grid gap-3 md:grid-cols-2">

            {[
              "初年次セミナー",
              "情報リテラシー入門",
              "応用情報処理",
              "データサイエンス概論",
              "統計学概論",
              "健康科学",
              "キャリア入門",
              "キャリア実践",
              "英語科目",
              "プラネタリーヘルス科目",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-blue-100 bg-blue-50 p-4 font-bold text-slate-700"
              >
                📘 {item}
              </div>
            ))}

          </div>


          <p className="mt-6 leading-8 text-slate-700">
            ただし、すべての学生が同じ科目を必修として履修するわけではありません。
          </p>


          <div className="mt-6 rounded-2xl border-2 border-yellow-200 bg-yellow-50 p-6">

            <p className="mb-3 font-black text-yellow-800">
              学部・学科によって異なります
            </p>

            <ul className="space-y-2">
              <li className="font-bold text-red-600">
                🔴 必修科目
              </li>

              <li className="font-bold text-blue-600">
                🔵 選択科目
              </li>

              <li className="font-bold text-green-600">
                🟢 必要単位数
              </li>
            </ul>

          </div>


          <img
            src="/images/kyoyo/handbook-minimum-credits.jpg"
            alt="令和8年度 教養教育 学生便覧・必修科目"
            className="mt-8 w-full rounded-2xl shadow-md"
          />

          <p className="mt-3 text-sm text-slate-500">
            出典：長崎大学『令和8年度 教養教育 学生便覧』 p9
          </p>

        </div>


        {/* =========================
            ② 最低修得単位数
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            STEP 02
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-900 md:text-4xl">
            ② 自分の学部の「最低修得単位数」を確認する
          </h2>


          <p className="mt-6 leading-8 text-slate-700">
            卒業までに必要となる教養教育の
            <strong>最低修得単位数</strong>
            を確認しましょう。
          </p>


          <p className="mt-5 leading-8 text-slate-700">
            教養教育基礎科目、プラネタリーヘルス科目、選択科目のそれぞれの小計より
            <br />
            多くの単位を取得する必要があります。
          </p>


          <p className="mt-5 leading-8 text-red-600">
            ＜選択科目の最低修得単位に見られる〇～〇標記について＞
            <br />
            例えば工学部の生命・自然科学科目の２～４では、最低２単位を修得する必要があり、
            かつ４単位より多く修得しても選択科目の小計には４までしか算入されないという意味です。
          </p>


          <img
            src="/images/kyoyo/handbook-required.jpg"
            alt="最低修得単位数"
            className="mt-8 w-full rounded-2xl shadow-md"
          />

          <p className="mt-3 text-sm text-slate-500">
            出典：長崎大学『令和8年度 教養教育 学生便覧』 p9
          </p>


          <div className="mt-6 rounded-2xl border-2 border-red-200 bg-red-50 p-6">

            <p className="text-lg font-black text-red-700">
              ⚠️ 「必要単位の合計を満たせばOK」ではない！
            </p>

            <p className="mt-3 leading-8 text-slate-700">
              合計単位数だけでなく、
              <strong>科目区分ごとの必要単位数</strong>
              も確認しましょう。
            </p>

          </div>

        </div>


        {/* =========================
            ③ 必修と選択
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            STEP 03
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-900 md:text-4xl">
            ③ 「必修」と「選択」を分けて考える
          </h2>


          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">

              <h3 className="mb-4 text-2xl font-black text-red-700">
                🔴 必修科目
              </h3>

              <p className="leading-8 text-slate-700">
                卒業・進級のために指定されている科目です。
              </p>

              <p className="mt-4 font-black text-red-700">
                → 基本的に必ず履修します。
              </p>

            </div>


            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">

              <h3 className="mb-4 text-2xl font-black text-blue-700">
                🔵 選択科目
              </h3>

              <p className="leading-8 text-slate-700">
                決められた科目区分・単位数の範囲から、
                自分で選んで履修します。
              </p>

            </div>

          </div>


          <div className="mt-8">

            <p className="mb-4 font-bold text-slate-700">
              選択科目には、例えば次のような区分があります。
            </p>

            <div className="grid gap-3 md:grid-cols-2">

              {[
                "人文・社会科学",
                "生命・自然科学",
                "社会連携・キャリア教育関連",
                "言語・異文化理解",
                "留学支援コーディネート",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-slate-50 p-4 text-slate-700"
                >
                  🔵 {item}
                </div>
              ))}

            </div>

          </div>


          <div className="mt-8 rounded-2xl bg-blue-50 p-6 text-center">

            <p className="text-xl font-black text-blue-900">
              必修 ＋ 選択
            </p>

            <p className="my-2 text-2xl">↓</p>

            <p className="text-xl font-black text-green-700">
              🎯 卒業要件を満たす！
            </p>

          </div>

        </div>


        {/* =========================
            ④ 指定曜日
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            STEP 04
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-900 md:text-4xl">
            ④ 1年生は「指定された曜日」に注意！
          </h2>


          <p className="mt-6 leading-8 text-slate-700">
            1年次の教養教育では、学部ごとに指定された曜日など、
            大学が示す履修上のルールを確認する必要があります。
          </p>


          <div className="mt-6 rounded-2xl border-2 border-yellow-300 bg-yellow-50 p-6">

            <p className="mb-3 text-lg font-black text-yellow-800">
              ❌ よくある考え方
            </p>

            <p className="text-slate-700">
              「時間割が空いているから、この教養科目を入れよう！」
            </p>

          </div>


          <div className="mt-6 rounded-2xl bg-blue-50 p-6">

            <p className="mb-4 font-black text-blue-900">
              ⭕ 基本的な考え方
            </p>

            <div className="mx-auto max-w-md space-y-6 text-center text-xl font-bold text-slate-800">

              <div>📅 学部の指定曜日</div>
              <div>↓</div>
              <div>📚 その曜日の開講科目</div>
              <div>↓</div>
              <div>🔴 必修科目</div>
              <div>↓</div>
              <div>🔢 必要単位</div>
              <div>↓</div>
              <div>🔵 選択科目</div>

            </div>

          </div>

        </div>


        {/* =========================
            ⑤ クォーター
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            STEP 05
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-900 md:text-4xl">
            ⑤ 授業は「前期・後期」だけではない
          </h2>


          <p className="mt-6 leading-8 text-slate-700">
            教養教育では、授業の開講時期を確認することも重要です。
          </p>


          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">

            {[
              ["1Q", "前期前半"],
              ["2Q", "前期後半"],
              ["3Q", "後期前半"],
              ["4Q", "後期後半"],
            ].map(([q, label]) => (
              <div
                key={q}
                className="rounded-2xl border-2 border-blue-100 bg-blue-50 p-5 text-center"
              >
                <p className="text-2xl font-black text-blue-800">
                  {q}
                </p>

                <p className="mt-2 text-slate-600">
                  {label}
                </p>
              </div>
            ))}

          </div>


          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6">

              <h3 className="mb-3 text-xl font-black text-green-700">
                🟢 クォーター科目
              </h3>

              <p className="leading-7 text-slate-700">
                1つのクォーターで完結する科目です。
              </p>

            </div>


            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">

              <h3 className="mb-3 text-xl font-black text-blue-700">
                🔵 セメスター科目
              </h3>

              <p className="leading-7 text-slate-700">
                前期または後期を通して履修する科目です。
              </p>

            </div>

          </div>


          <div className="mt-6 rounded-2xl bg-yellow-50 p-6">

            <p className="font-black text-yellow-800">
              💡 「前期・後期」だけでなく、
              「1Q～4Qのどこで開講されるか」も確認しましょう。
            </p>

          </div>

        </div>


        {/* =========================
            ⑥ 単位
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            STEP 06
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-900 md:text-4xl">
            ⑥ 「1単位＝1週間1コマ」とは限らない
          </h2>


          <p className="mt-6 leading-8 text-slate-700">
            授業によって、
            <strong>単位数・授業回数・開講期間</strong>
            の組み合わせが異なります。
          </p>


          <div className="mt-6 rounded-2xl bg-blue-50 p-6">

            <p className="mb-5 font-black text-blue-900">
              授業を選ぶときは4項目をチェック！
            </p>


            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">

              <div className="rounded-xl bg-white p-4 text-center text-black">
                📅
                <br />
                <strong>曜日</strong>
              </div>

              <div className="rounded-xl bg-white p-4 text-center text-black">
                ⏰
                <br />
                <strong>時限</strong>
              </div>

              <div className="rounded-xl bg-white p-4 text-center text-black">
                📆
                <br />
                <strong>開講時期</strong>
              </div>

              <div className="rounded-xl bg-white p-4 text-center text-black">
                🔢
                <br />
                <strong>単位数</strong>
              </div>

            </div>

          </div>


          <p className="mt-6 leading-8 text-slate-700">
            そのため、
            <strong>単位数だけを見て時間割を組まない</strong>
            ことが重要です。
          </p>

        </div>


        {/* =========================
            ⑦ 2年次
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            STEP 07
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-900 md:text-4xl">
            ⑦ 2年次の履修登録
          </h2>


          <h3 className="mt-8 text-2xl font-black text-slate-800">
            2年生になったら「1年次の結果」を確認！
          </h3>


          <p className="mt-5 leading-8 text-slate-700">
            2年次の履修登録では、まず
            <strong>1年次にどの科目を修得したか</strong>
            を確認しましょう。
          </p>


          <div className="mt-6 space-y-3">

            {[
              "1年次に取得した単位",
              "未修得の必修科目",
              "不足している科目区分",
              "卒業までに必要な残りの単位",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-xl bg-blue-50 p-4 font-bold text-slate-700"
              >
                {index + 1}️⃣ {item}
              </div>
            ))}

          </div>


          <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-center text-black">

            <p className="font-bold">
              📊 1年次の成績を確認
            </p>

            <p className="my-2">↓</p>

            <p className="font-bold">
              🔢 取得単位を確認
            </p>

            <p className="my-2">↓</p>

            <p className="font-bold">
              ❗ 未修得科目を確認
            </p>

            <p className="my-2">↓</p>

            <p className="font-bold">
              🔎 不足している科目区分を確認
            </p>

            <p className="my-2">↓</p>

            <p className="font-bold">
              📚 2年次の履修科目を決める
            </p>

            <p className="my-2">↓</p>

            <p className="font-black text-green-700">
              🎯 卒業要件に近づける！
            </p>

          </div>


          <div className="mt-8 rounded-2xl border-2 border-yellow-200 bg-yellow-50 p-6">

            <p className="mb-3 font-black text-yellow-800">
              💡 2年次のポイント
            </p>

            <p className="leading-8 text-slate-700">
              「あと何単位必要か」だけでなく、
              <strong>
                「どの科目区分があと何単位必要なのか」
              </strong>
              まで確認しましょう。
            </p>

          </div>

        </div>


        {/* =========================
            ⑧ 履修上限
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            STEP 08
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-900 md:text-4xl">
            ⑧ 履修登録には「上限」がある
          </h2>


          <p className="mt-6 leading-8 text-slate-700">
            履修登録では、一定期間に登録できる
            <strong>単位数に上限</strong>
            が設定されている場合があります。
          </p>


          <div className="mt-6 rounded-2xl border-2 border-yellow-300 bg-yellow-50 p-6">

            <p className="font-black text-yellow-800">
              ⚠️ 注意
            </p>

            <p className="mt-3 leading-8 text-slate-700">
              上限は、学部・学科や履修制度によって異なる場合があります。
              自分の所属学部の学生便覧・履修登録案内を確認しましょう。
            </p>

          </div>

        </div>


        {/* =========================
            ⑨ オンライン
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            STEP 09
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-900 md:text-4xl">
            ⑨ オンライン授業にも上限がある
          </h2>


          <p className="mt-6 leading-8 text-slate-700">
            オンライン授業について、卒業要件として修得できる
            単位数に上限があります。
            <br />
            しかし、通常は意識しなければ履修上限に達することはありません。
          </p>


          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 text-center">

              <p className="text-3xl font-black text-blue-800">
                20単位まで
              </p>

              <p className="mt-2 text-slate-700">
                教養教育
              </p>

            </div>


            <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-6 text-center">

              <p className="text-3xl font-black text-slate-800">
                40単位まで
              </p>

              <p className="mt-2 text-slate-700">
                専門教育
              </p>

            </div>

          </div>


          <div className="mt-6 rounded-2xl border-2 border-red-200 bg-red-50 p-6">

            <p className="font-black text-red-700">
              ⚠️ オンライン科目だけで教養教育の卒業要件をすべて満たすことはできません。
            </p>

          </div>

        </div>


        {/* =========================
            ⑩ 実際の手順
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            STEP 10
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-900 md:text-4xl">
            新入生が履修登録するときの「実際の手順」
          </h2>


          <div className="mt-8 space-y-3">

            {[
              "自分の学部・学科を確認",
              "「最低修得単位数」を確認",
              "必修科目をすべて確認",
              "1年次の教養教育の指定曜日を確認",
              "1Q・2Q・3Q・4Qの開講時期を確認",
              "必修科目を時間割に配置",
              "不足する単位区分を確認",
              "選択科目を追加",
              "履修上限を超えていないか確認",
              "NU-Web等で履修登録（教養教育＜実践編＞で詳しく解説）",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl bg-blue-50 p-4"
              >

                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 font-black text-white">
                  {index + 1}
                </div>

                <p className="font-bold text-slate-700">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>


        {/* =========================
            チェックリスト
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            CHECKLIST
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-900 md:text-4xl">
            登録前チェックリスト
          </h2>


          <div className="mt-8 grid gap-3 md:grid-cols-2">

            {[
              "自分の学部・学科を確認した",
              "最低修得単位数を確認した",
              "必修科目を確認した",
              "必修科目を時間割に入れた",
              "指定曜日を確認した",
              "1Q～4Qの開講時期を確認した",
              "曜日・時限の重複がないか確認した",
              "単位数を確認した",
              "科目区分ごとの必要単位数を確認した",
              "不足している科目区分を確認した",
              "選択科目を追加した",
              "履修上限を確認した",
              "オンライン授業の上限を確認した",
              "2年次の場合、1年次の取得単位を確認した",
              "NU-Web等で登録を完了した",
            ].map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-start gap-3 rounded-xl bg-slate-50 p-4 transition hover:bg-blue-50"
              >

                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5"
                />

                <span className="text-slate-700">
                  {item}
                </span>

              </label>
            ))}

          </div>

        </div>


        {/* =========================
            4つのポイント
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            FOUR POINTS
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-900 md:text-4xl">
            履修登録で迷ったら
          </h2>


          <p className="mt-6 text-lg leading-8 text-slate-700">
            履修登録で大切なのは、
          </p>


          <p className="mt-4 text-center text-3xl font-black text-blue-900">
            「何単位取るか」だけではありません。
          </p>


          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl bg-blue-50 p-6">

              <p className="mb-3 text-2xl font-black text-blue-800">
                ① 何を取るか
              </p>

              <p className="text-slate-700">
                必修？選択？
              </p>

            </div>


            <div className="rounded-2xl bg-blue-50 p-6">

              <p className="mb-3 text-2xl font-black text-blue-800">
                ② どの科目区分か
              </p>

              <p className="text-slate-700">
                必要な区分の単位になっている？
              </p>

            </div>


            <div className="rounded-2xl bg-blue-50 p-6">

              <p className="mb-3 text-2xl font-black text-blue-800">
                ③ いつ取るか
              </p>

              <p className="text-slate-700">
                1Q？2Q？3Q？4Q？
              </p>

            </div>


            <div className="rounded-2xl bg-blue-50 p-6">

              <p className="mb-3 text-2xl font-black text-blue-800">
                ④ 何年次に取るか
              </p>

              <p className="text-slate-700">
                1年次？2年次？
              </p>

            </div>

          </div>

        </div>


        {/* =========================
            最終まとめ
        ========================= */}
        <div className="mt-8 rounded-3xl bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-white shadow-xl md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-200">
            SUMMARY
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            🌟 履修登録は「卒業から逆算」！
          </h2>


          <div className="mt-8 space-y-4 text-center">

            <div className="rounded-2xl bg-white/10 p-4 font-bold">
              🎓 卒業に必要な単位
            </div>

            <div>↓</div>

            <div className="rounded-2xl bg-white/10 p-4 font-bold">
              📋 科目区分ごとの必要単位
            </div>

            <div>↓</div>

            <div className="rounded-2xl bg-white/10 p-4 font-bold">
              🔴 必修科目
            </div>

            <div>↓</div>

            <div className="rounded-2xl bg-white/10 p-4 font-bold">
              📚 1・2年次で履修する科目
            </div>

            <div>↓</div>

            <div className="rounded-2xl bg-white/10 p-4 font-bold">
              📅 実際の時間割
            </div>

            <div>↓</div>

            <div className="rounded-2xl bg-white/10 p-4 font-bold">
              💻 NU-Webで履修登録
            </div>

            <div>↓</div>

            <div className="rounded-2xl bg-white p-5 text-xl font-black text-blue-900">
              ✅ 履修完了！
            </div>

          </div>

        </div>


        {/* =========================
            最後に
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            CONCLUSION
          </p>

          <h2 className="mt-3 text-3xl font-black text-blue-900 md:text-4xl">
            📖 最後に
          </h2>


          <p className="mt-6 leading-8 text-slate-700">
            履修登録は、大学生活のスタート地点です。
          </p>


          <p className="mt-5 leading-8 text-slate-700">
            最初は複雑に感じますが、
          </p>


          <div className="mt-6 rounded-2xl bg-blue-50 p-6 text-center font-bold leading-10 text-black">

            「卒業に必要なものを確認する」
            <br />
            ↓
            <br />
            「必修を入れる」
            <br />
            ↓
            <br />
            「不足する科目区分を確認する」
            <br />
            ↓
            <br />
            「選択科目を選ぶ」
            <br />
            ↓
            <br />
            「時間割を完成させる」

          </div>


          <p className="mt-6 leading-8 text-slate-700">
            という順番で考えれば、履修登録を整理しやすくなります。
          </p>


          <p className="mt-6 leading-8 text-slate-700">
            このページを履修登録前のチェックリストとして活用し、
            計画的に履修登録を行いましょう。
          </p>

        </div>


        {/* =========================
            出典
        ========================= */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-100 p-8 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-slate-500">
            REFERENCES
          </p>

          <h2 className="mt-3 text-2xl font-black text-slate-800 md:text-3xl">
            📌 出典・参考資料
          </h2>


          <p className="mt-6 font-bold leading-8 text-slate-700">
            長崎大学『令和8年度 教養教育 学生便覧』
          </p>


          <p className="mt-4 leading-8 text-slate-600">
            本ページは上記学生便覧をもとに、新入生向けに
            教養教育・履修登録の考え方を整理したものです。
            学生便覧では、教養基礎科目、外国語科目、
            プラネタリーヘルス科目、選択科目等について説明されています。
          </p>


          <p className="mt-5 text-sm leading-7 text-slate-500">
            ※履修登録を行う際は、必ず大学が公開する最新の公式資料を確認してください。
          </p>

        </div>


        {/* =========================
            ページトップへ戻る
        ========================= */}
        <div className="mt-10 text-center">

          <a
            href="#top"
            className="inline-flex items-center rounded-full border border-blue-200 bg-white px-8 py-4 font-bold text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md"
          >
            ↑ ページのトップへ戻る
          </a>

        </div>


      </section>


      {/* ================= FOOTER ================= */}
      <footer className="mt-10 bg-blue-950 text-white">

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
                学生生活支援情報
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

