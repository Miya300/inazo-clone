import Link from "next/link";

export default function KyoyoTheoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-slate-100 text-slate-800">

      {/* =========================
          HERO
      ========================== */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">

          <div className="mb-5 inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
            📚 教養教育
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            教養教育
            <span className="block text-blue-100">
              ＜理論編＞
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
            新入生向け・履修登録完全ガイド
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">
            「何を取ればいい？」を解決するための
            <br className="hidden sm:block" />
            教養教育と履修登録の基本を分かりやすく解説します。
          </p>

        </div>
      </section>


      {/* =========================
          CONTENT
      ========================== */}
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:py-14">

        {/* =========================
            ABOUT
        ========================== */}
        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

          <div className="mb-6">
            <span className="text-sm font-bold text-blue-600">
              ABOUT THIS PAGE
            </span>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              📖 このページについて
            </h2>
          </div>

          <p className="leading-8">
            本ページは、
            <strong>
              長崎大学『令和8年度 教養教育 学生便覧』
            </strong>
            をもとに作成した、教養教育の解説ページです。
          </p>

          <p className="mt-4 leading-8">
            学生便覧に掲載されている教養教育の制度や履修に関する情報を、
            新入生にも分かりやすいように整理しています。
          </p>

          <div className="mt-6 rounded-2xl bg-blue-50 p-5">
            <p className="font-bold text-blue-900">
              📌 参考資料
            </p>

            <p className="mt-2 leading-7">
              長崎大学
              <br />
              『令和8年度 教養教育 学生便覧』
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-bold text-amber-900">
              ⚠️ 重要
            </p>

            <p className="mt-2 text-sm leading-7 text-amber-900">
              本ページは学生便覧を分かりやすく解説することを目的としています。
              実際に履修登録を行う際は、必ず最新の学生便覧・履修登録案内・
              時間割・シラバス等を確認してください。
            </p>
          </div>

          <div className="mt-5 rounded-2xl bg-slate-100 p-5 text-sm leading-7 text-slate-600">
            ※本ページの作成にあたっては、大学から許可を得て学生便覧の一部を掲載しています。
          </div>

        </section>


        {/* =========================
            TABLE OF CONTENTS
        ========================== */}
        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

          <h2 className="text-2xl font-black">
            📑 このページの内容
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            {[
              ["①", "まず「必修科目」を確認する", "#section-1"],
              ["②", "最低修得単位数を確認する", "#section-2"],
              ["③", "必修と選択を分けて考える", "#section-3"],
              ["④", "1年生は指定曜日に注意", "#section-4"],
              ["⑤", "1Q～4Qを理解する", "#section-5"],
              ["⑥", "単位の考え方", "#section-6"],
              ["⑦", "2年次の履修登録", "#section-7"],
              ["⑧", "履修登録の上限", "#section-8"],
              ["⑨", "オンライン授業の上限", "#section-9"],
              ["⑩", "履修登録STEP1～10", "#section-10"],
            ].map(([number, title, href]) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 font-bold transition hover:bg-blue-50 hover:text-blue-700"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                  {number}
                </span>

                <span>{title}</span>
              </a>
            ))}

          </div>
        </section>


        {/* =========================
            CONCEPT
        ========================== */}
        <section className="mt-10">

          <SectionTitle
            eyebrow="BASIC CONCEPT"
            title="🎯 まず知っておきたい「履修登録」の考え方"
          />

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

            <p className="leading-8">
              履修登録では、単純に
              <strong>「面白そうな授業を選ぶ」</strong>
              だけではありません。
            </p>

            <p className="mt-5 font-bold">
              基本は次の順番で考えます。
            </p>

            <FlowList
              items={[
                "🎓 卒業に必要な単位",
                "📚 必修科目",
                "🔢 科目区分ごとの必要単位",
                "📖 1・2年次で履修する科目",
                "📅 実際の時間割",
                "✅ 履修登録",
              ]}
            />

            <OriginalDiagram title="履修登録は「卒業から逆算」！">
              <div className="space-y-3">
                {[
                  "🎓 卒業要件",
                  "📚 必修科目",
                  "🔢 必要単位",
                  "📖 履修科目",
                  "📅 時間割",
                  "✅ 履修登録",
                ].map((item, index) => (
                  <div key={item}>
                    <div className="rounded-xl bg-white px-5 py-4 text-center font-bold shadow-sm">
                      {item}
                    </div>

                    {index < 5 && (
                      <div className="py-1 text-center text-xl text-blue-500">
                        ↓
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </OriginalDiagram>

          </div>
        </section>


        {/* =========================
            1
        ========================== */}
        <section id="section-1" className="scroll-mt-24">

          <SectionTitle
            number="①"
            eyebrow="FIRST STEP"
            title="まず「必修科目」を確認する"
          />

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

            <p className="leading-8">
              新入生は、まず自分の
              <strong>学部・学科で指定されている必修科目</strong>
              を確認しましょう。
            </p>

            <h3 className="mt-8 text-xl font-black">
              教養教育には、例えば次のような科目があります。
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
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
                  className="rounded-xl bg-slate-50 p-4 font-semibold"
                >
                  ✓ {item}
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl bg-blue-50 p-5 leading-7">
              学生便覧では、教養ゼミナール、情報・データサイエンス、
              健康・スポーツ科学、キャリア教育、外国語などの科目区分が
              整理されています。
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-black text-lg">
                ⚠️ 学部・学科によって違います
              </h3>

              <p className="mt-3 leading-7">
                すべての学生が同じ科目を必修として履修するわけではありません。
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <InfoCard title="必修科目" />
                <InfoCard title="選択科目" />
                <InfoCard title="必要単位数" />
              </div>

              <p className="mt-4 leading-7">
                これらは学部・学科によって異なります。
              </p>
            </div>

            <StudentHandbookImage
              title="令和8年度 教養教育 学生便覧：該当ページ"
              src="/images/kyoyo/handbook-required.jpg"
              alt="令和8年度教養教育学生便覧の必修科目に関するページ"
            />

          </div>
        </section>


        {/* =========================
            2
        ========================== */}
        <section id="section-2" className="mt-12 scroll-mt-24">

          <SectionTitle
            number="②"
            eyebrow="CREDITS"
            title="自分の学部の「最低修得単位数」を確認する"
          />

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

            <p className="leading-8">
              卒業までに、教養教育で定められた
              <strong>最低修得単位数</strong>
              を修得する必要があります。
            </p>

            <div className="mt-6 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-center text-white">
              <p className="text-sm font-bold tracking-wider">
                DENTISTRY
              </p>

              <p className="mt-2 text-5xl font-black">
                27
                <span className="ml-2 text-2xl">単位</span>
              </p>

              <p className="mt-2">
                歯学部の教養教育合計
              </p>
            </div>

            <StudentHandbookImage
              title="最低修得単位数の表"
              src="/images/kyoyo/handbook-minimum-credits.jpg"
              alt="令和8年度教養教育学生便覧の最低修得単位数の表"
              highlight="歯学部：27単位"
            />

            <div className="mt-6 rounded-2xl border-2 border-red-100 bg-red-50 p-6">
              <h3 className="text-xl font-black text-red-700">
                ⚠️ 「27単位取ればOK」ではない！
              </h3>

              <p className="mt-4 leading-8">
                好きな授業を合計27単位取ればいい、という意味ではありません。
              </p>

              <p className="mt-3 leading-8">
                教養教育では、
                <strong>科目区分ごとに必要な単位数</strong>
                が設定されています。
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6 text-center">
                <p className="text-sm font-bold text-slate-500">
                  CHECK 01
                </p>
                <p className="mt-2 text-lg font-black">
                  合計何単位取ったか
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-6 text-center">
                <p className="text-sm font-bold text-blue-600">
                  CHECK 02
                </p>
                <p className="mt-2 text-lg font-black">
                  どの科目区分を取ったか
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* =========================
            3
        ========================== */}
        <section id="section-3" className="mt-12 scroll-mt-24">

          <SectionTitle
            number="③"
            eyebrow="REQUIRED / ELECTIVE"
            title="「必修」と「選択」を分けて考える"
          />

          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-red-100">
              <div className="text-4xl">🔴</div>

              <h3 className="mt-4 text-2xl font-black">
                必修科目
              </h3>

              <p className="mt-4 leading-8">
                卒業・進級のために指定されている科目です。
              </p>

              <div className="mt-5 rounded-xl bg-red-50 p-4 text-center font-black text-red-700">
                基本的に必ず履修する
              </div>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-blue-100">
              <div className="text-4xl">🔵</div>

              <h3 className="mt-4 text-2xl font-black">
                選択科目
              </h3>

              <p className="mt-4 leading-8">
                決められた科目区分・単位数の範囲から、
                自分で選んで履修します。
              </p>
            </div>

          </div>

          <div className="mt-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

            <h3 className="text-xl font-black">
              選択科目の例
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "人文・社会科学",
                "生命・自然科学",
                "社会連携・キャリア教育関連",
                "言語・異文化理解",
                "留学支援コーディネート",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-slate-50 p-4 font-semibold"
                >
                  🔵 {item}
                </div>
              ))}
            </div>

            <OriginalDiagram title="必修と選択の違い">
              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl bg-red-50 p-6 text-center">
                  <div className="text-4xl">🔴</div>
                  <p className="mt-3 text-xl font-black">
                    必修
                  </p>
                  <p className="mt-2 text-sm">
                    指定されているので履修する
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-6 text-center">
                  <div className="text-4xl">🔵</div>
                  <p className="mt-3 text-xl font-black">
                    選択
                  </p>
                  <p className="mt-2 text-sm">
                    必要な科目区分から自分で選ぶ
                  </p>
                </div>

              </div>

              <div className="mt-5 text-center text-lg font-black text-blue-700">
                🎯 両方を組み合わせて卒業要件を満たす！
              </div>
            </OriginalDiagram>

          </div>
        </section>


        {/* =========================
            4
        ========================== */}
        <section id="section-4" className="mt-12 scroll-mt-24">

          <SectionTitle
            number="④"
            eyebrow="FIRST YEAR"
            title="1年生は「指定された曜日」に注意！"
          />

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-black text-amber-800">
                ⚠️ 新入生が特に注意したいポイント
              </p>
            </div>

            <p className="mt-6 leading-8">
              1年次の教養教育では、学部ごとに指定された曜日など、
              大学が示す履修上のルールを確認する必要があります。
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-6">
              <p className="font-bold">
                ❌ よくある考え方
              </p>

              <p className="mt-2 text-lg font-bold">
                「時間割が空いているから、この教養科目を入れよう！」
              </p>
            </div>

            <div className="mt-5">
              <p className="font-bold text-blue-700">
                ⭕ 基本的な考え方
              </p>

              <FlowList
                items={[
                  "📅 学部の指定曜日",
                  "📖 その曜日の開講科目",
                  "🔴 必修科目",
                  "🔢 必要単位",
                  "🔵 選択科目",
                ]}
              />
            </div>

            <OriginalDiagram title="1年次の履修登録">

              <FlowList
                items={[
                  "📅 指定曜日を確認",
                  "🔴 必修科目を配置",
                  "🔢 必要単位を確認",
                  "🔵 選択科目を追加",
                  "📅 時間割を確認",
                  "✅ 履修登録",
                ]}
              />

            </OriginalDiagram>

          </div>
        </section>


        {/* =========================
            5
        ========================== */}
        <section id="section-5" className="mt-12 scroll-mt-24">

          <SectionTitle
            number="⑤"
            eyebrow="QUARTER SYSTEM"
            title="授業は「前期・後期」だけではない"
          />

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

            <p className="leading-8">
              教養教育では、授業の開講時期を確認することも重要です。
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-4">

              {[
                ["1Q", "前期前半"],
                ["2Q", "前期後半"],
                ["3Q", "後期前半"],
                ["4Q", "後期後半"],
              ].map(([q, period]) => (
                <div
                  key={q}
                  className="rounded-2xl bg-blue-50 p-6 text-center"
                >
                  <p className="text-3xl font-black text-blue-700">
                    {q}
                  </p>
                  <p className="mt-2 font-semibold">
                    {period}
                  </p>
                </div>
              ))}

            </div>

            <OriginalDiagram title="4つのクォーター">

              <div className="grid gap-3 sm:grid-cols-4">

                {[
                  ["1Q", "前期前半"],
                  ["2Q", "前期後半"],
                  ["3Q", "後期前半"],
                  ["4Q", "後期後半"],
                ].map(([q, period]) => (
                  <div
                    key={q}
                    className="rounded-xl bg-white p-5 text-center shadow-sm"
                  >
                    <p className="text-2xl font-black">
                      {q}
                    </p>
                    <p className="mt-2 text-sm">
                      {period}
                    </p>
                  </div>
                ))}

              </div>

            </OriginalDiagram>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                <p className="text-2xl">🟢</p>
                <h3 className="mt-3 text-xl font-black">
                  クォーター科目
                </h3>
                <p className="mt-3 leading-7">
                  1つのクォーターで完結する科目です。
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <p className="text-2xl">🔵</p>
                <h3 className="mt-3 text-xl font-black">
                  セメスター科目
                </h3>
                <p className="mt-3 leading-7">
                  前期または後期を通して履修する科目です。
                </p>
              </div>

            </div>

            <div className="mt-6 rounded-2xl bg-indigo-50 p-6">
              <p className="font-black text-indigo-900">
                💡 POINT
              </p>

              <p className="mt-3 leading-8">
                「前期・後期」だけでなく、
                <strong>「1Q～4Qのどこで開講されるか」</strong>
                も確認しましょう。
              </p>
            </div>

          </div>
        </section>


        {/* =========================
            6
        ========================== */}
        <section id="section-6" className="mt-12 scroll-mt-24">

          <SectionTitle
            number="⑥"
            eyebrow="CREDITS"
            title="「1単位＝1週間1コマ」とは限らない"
          />

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

            <p className="leading-8">
              授業によって、
              <strong>
                単位数・授業回数・開講期間
              </strong>
              の組み合わせが異なります。
            </p>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-xl font-black text-amber-800">
                ⚠️ 単位数だけを見て時間割を組まない！
              </p>
            </div>

            <h3 className="mt-8 text-xl font-black">
              履修登録前に確認する4項目
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-4">

              {[
                ["📅", "曜日"],
                ["⏰", "時限"],
                ["📆", "開講時期"],
                ["🔢", "単位数"],
              ].map(([icon, title]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-slate-50 p-6 text-center"
                >
                  <div className="text-3xl">{icon}</div>
                  <p className="mt-3 font-black">{title}</p>
                </div>
              ))}

            </div>

            <div className="mt-6 text-center text-lg font-black text-blue-700">
              ↓
              <br />
              ✅ 時間割に入れられるか確認！
            </div>

          </div>
        </section>


        {/* =========================
            7
        ========================== */}
        <section id="section-7" className="mt-12 scroll-mt-24">

          <SectionTitle
            number="⑦"
            eyebrow="SECOND YEAR"
            title="2年次の履修登録"
          />

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

            <div className="rounded-2xl bg-blue-50 p-6">
              <p className="text-xl font-black text-blue-800">
                📊 2年生になったら「1年次の結果」を確認！
              </p>
            </div>

            <p className="mt-6 leading-8">
              2年次の履修登録では、まず
              <strong>1年次にどの科目を修得したか</strong>
              を確認しましょう。
            </p>

            <OriginalDiagram title="2年次の履修計画">

              <FlowList
                items={[
                  "📊 1年次の成績を確認",
                  "🔢 取得単位を確認",
                  "❗ 未修得科目を確認",
                  "🔎 不足している科目区分を確認",
                  "📚 2年次の履修科目を決める",
                  "🎯 卒業要件に近づける！",
                ]}
              />

            </OriginalDiagram>

            <h3 className="mt-8 text-xl font-black">
              2年次に確認すること
            </h3>

            <div className="mt-5 space-y-3">

              {[
                "① 1年次に取得した単位",
                "② 未修得の必修科目",
                "③ 不足している科目区分",
                "④ 卒業までに必要な残りの単位",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-slate-50 p-4 font-bold"
                >
                  {item}
                </div>
              ))}

            </div>

            <div className="mt-7 rounded-2xl bg-indigo-50 p-6">
              <p className="font-black text-indigo-900">
                💡 2年次のポイント
              </p>

              <p className="mt-3 leading-8">
                「あと何単位必要か」だけではなく、
                <strong>
                  「どの科目区分があと何単位必要なのか」
                </strong>
                まで確認しましょう。
              </p>
            </div>

          </div>
        </section>


        {/* =========================
            8
        ========================== */}
        <section id="section-8" className="mt-12 scroll-mt-24">

          <SectionTitle
            number="⑧"
            eyebrow="LIMIT"
            title="履修登録には「上限」がある"
          />

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

            <p className="leading-8">
              履修登録では、一定期間に登録できる
              <strong>単位数に上限</strong>
              が設定されている場合があります。
            </p>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="font-black text-amber-900">
                ⚠️ 注意
              </p>

              <p className="mt-3 leading-7 text-amber-900">
                この上限は、学部・学科や履修制度によって異なる場合があります。
                自分の所属学部の学生便覧・履修登録案内を確認しましょう。
              </p>
            </div>

            <OriginalDiagram title="登録前に上限を確認！">

              <div className="flex flex-col items-center gap-3">
                {[
                  "📚 履修したい科目",
                  "📚 履修したい科目",
                  "📚 履修したい科目",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-full rounded-xl bg-white p-4 text-center font-bold shadow-sm"
                  >
                    {item}
                  </div>
                ))}

                <div className="text-2xl">↓</div>

                <div className="w-full rounded-xl bg-amber-100 p-5 text-center font-black text-amber-800">
                  ⚠️ 登録上限を確認！
                </div>
              </div>

            </OriginalDiagram>

          </div>
        </section>


        {/* =========================
            9
        ========================== */}
        <section id="section-9" className="mt-12 scroll-mt-24">

          <SectionTitle
            number="⑨"
            eyebrow="ONLINE"
            title="オンライン授業にも上限がある"
          />

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

            <p className="leading-8">
              オンライン授業についても、
              卒業要件として修得できる単位数に上限があります。
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">

              <div className="rounded-3xl bg-blue-50 p-7 text-center">
                <p className="font-bold text-blue-600">
                  教養教育
                </p>

                <p className="mt-2 text-5xl font-black text-blue-700">
                  20
                </p>

                <p className="font-bold">
                  単位まで
                </p>
              </div>

              <div className="rounded-3xl bg-indigo-50 p-7 text-center">
                <p className="font-bold text-indigo-600">
                  専門教育
                </p>

                <p className="mt-2 text-5xl font-black text-indigo-700">
                  40
                </p>

                <p className="font-bold">
                  単位まで
                </p>
              </div>

            </div>

            <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-6">
              <p className="font-black text-red-700">
                ⚠️ オンライン科目だけで教養教育の卒業要件をすべて満たすことはできません。
              </p>

              <p className="mt-3 leading-7">
                オンライン科目を履修する場合も、
                卒業要件との関係を確認しましょう。
              </p>
            </div>

          </div>
        </section>


        {/* =========================
            10
        ========================== */}
        <section id="section-10" className="mt-12 scroll-mt-24">

          <SectionTitle
            number="⑩"
            eyebrow="REGISTRATION FLOW"
            title="新入生が履修登録するときの実際の手順"
          />

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

            <div className="space-y-3">

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
                "NU-Web等で履修登録",
              ].map((item, index) => (

                <div key={item}>

                  <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 sm:p-5">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                      {index + 1}
                    </div>

                    <p className="font-bold">
                      {item}
                    </p>

                  </div>

                  {index < 9 && (
                    <div className="py-1 text-center text-lg text-blue-400">
                      ↓
                    </div>
                  )}

                </div>

              ))}

            </div>

          </div>
        </section>


        {/* =========================
            CHECKLIST
        ========================== */}
        <section className="mt-12">

          <SectionTitle
            eyebrow="CHECK LIST"
            title="✅ 登録前チェックリスト"
          />

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

            <p className="leading-8">
              履修登録を確定する前に、もう一度確認しましょう。
            </p>

            <ChecklistGroup
              title="基本情報"
              items={[
                "自分の学部・学科を確認した",
                "最低修得単位数を確認した",
                "必修科目を確認した",
              ]}
            />

            <ChecklistGroup
              title="時間割"
              items={[
                "指定曜日を確認した",
                "1Q～4Qの開講時期を確認した",
                "曜日・時限の重複がないか確認した",
                "単位数を確認した",
              ]}
            />

            <ChecklistGroup
              title="卒業要件"
              items={[
                "科目区分ごとの必要単位数を確認した",
                "不足している科目区分を確認した",
                "選択科目を追加した",
              ]}
            />

            <ChecklistGroup
              title="登録"
              items={[
                "履修上限を確認した",
                "オンライン授業の上限を確認した",
                "2年次の場合、1年次の取得単位を確認した",
                "NU-Web等で登録を完了した",
              ]}
            />

          </div>
        </section>


        {/* =========================
            SUMMARY
        ========================== */}
        <section className="mt-12">

          <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-700 p-7 text-white shadow-lg sm:p-10">

            <p className="text-sm font-bold tracking-widest text-blue-100">
              SUMMARY
            </p>

            <h2 className="mt-2 text-3xl font-black">
              🎯 履修登録で迷ったら
            </h2>

            <p className="mt-5 leading-8 text-blue-50">
              履修登録で大切なのは、
              <strong>「何単位取るか」だけではありません。</strong>
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">

              {[
                ["①", "何を取るか", "必修？選択？"],
                ["②", "どの科目区分か", "必要な区分の単位になっている？"],
                ["③", "いつ取るか", "1Q？2Q？3Q？4Q？"],
                ["④", "何年次に取るか", "1年次？2年次？"],
              ].map(([number, title, text]) => (

                <div
                  key={number}
                  className="rounded-2xl bg-white/10 p-5 backdrop-blur"
                >
                  <p className="text-sm font-bold text-blue-100">
                    {number}
                  </p>

                  <p className="mt-1 text-xl font-black">
                    {title}
                  </p>

                  <p className="mt-2 text-sm text-blue-100">
                    {text}
                  </p>
                </div>

              ))}

            </div>

          </div>
        </section>


        {/* =========================
            FINAL FLOW
        ========================== */}
        <section className="mt-12">

          <div className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200 sm:p-10">

            <h2 className="text-3xl font-black">
              🌟 履修登録は「卒業から逆算」！
            </h2>

            <div className="mx-auto mt-8 max-w-xl space-y-3">

              {[
                "🎓 卒業に必要な単位",
                "📋 科目区分ごとの必要単位",
                "🔴 必修科目",
                "📚 1・2年次で履修する科目",
                "📅 実際の時間割",
                "💻 NU-Webで履修登録",
                "✅ 履修完了！",
              ].map((item, index) => (

                <div key={item}>

                  <div className="rounded-2xl bg-blue-50 p-4 font-black text-blue-900">
                    {item}
                  </div>

                  {index < 6 && (
                    <div className="py-1 text-blue-400">
                      ↓
                    </div>
                  )}

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =========================
            LAST MESSAGE
        ========================== */}
        <section className="mt-12">

          <div className="rounded-3xl bg-slate-900 p-7 text-white sm:p-10">

            <h2 className="text-2xl font-black">
              📖 最後に
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              履修登録は、大学生活のスタート地点です。
              最初は複雑に感じますが、
            </p>

            <div className="mt-6 space-y-2">

              {[
                "卒業に必要なものを確認する",
                "必修を入れる",
                "不足する科目区分を確認する",
                "選択科目を選ぶ",
                "時間割を完成させる",
              ].map((item, index) => (

                <div
                  key={item}
                  className="rounded-xl bg-white/10 p-4"
                >
                  <span className="mr-3 font-black text-blue-300">
                    {index + 1}.
                  </span>
                  {item}
                </div>

              ))}

            </div>

            <p className="mt-7 leading-8 text-slate-300">
              このページを履修登録前のチェックリストとして活用し、
              計画的に履修登録を行いましょう。
            </p>

          </div>

        </section>


        {/* =========================
            SOURCE
        ========================== */}
        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">

          <h2 className="text-xl font-black">
            📌 出典・参考資料
          </h2>

          <p className="mt-4 font-bold">
            長崎大学『令和8年度 教養教育 学生便覧』
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            本ページは上記学生便覧をもとに、新入生向けに教養教育・
            履修登録の考え方を整理したものです。
          </p>

          <div className="mt-5 rounded-2xl bg-amber-50 p-5 text-sm leading-7 text-amber-900">
            ※履修登録を行う際は、必ず大学が公開する最新の公式資料を確認してください。
          </div>

        </section>


        {/* =========================
            BACK
        ========================== */}
        <div className="mt-10 text-center">

          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-slate-800 px-6 py-3 font-bold text-white transition hover:bg-slate-700"
          >
            ← NUSNAVIトップへ戻る
          </Link>

        </div>

      </div>
    </main>
  );
}


/* =========================================================
   COMPONENTS
========================================================= */

function SectionTitle({
  number,
  eyebrow,
  title,
}: {
  number?: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-5">

      <p className="text-sm font-black tracking-widest text-blue-600">
        {number && `${number} `}
        {eyebrow}
      </p>

      <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
        {title}
      </h2>

    </div>
  );
}


function FlowList({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="mt-5 space-y-2">

      {items.map((item, index) => (

        <div key={`${item}-${index}`}>

          <div className="rounded-xl bg-white p-4 text-center font-bold shadow-sm ring-1 ring-slate-200">
            {item}
          </div>

          {index < items.length - 1 && (
            <div className="py-1 text-center text-lg font-bold text-blue-500">
              ↓
            </div>
          )}

        </div>

      ))}

    </div>
  );
}


function OriginalDiagram({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-5 sm:p-7">

      <div className="mb-5 flex items-center gap-2">

        <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-black text-white">
          NUSNAVI ORIGINAL
        </span>

        <h3 className="font-black">
          {title}
        </h3>

      </div>

      {children}

    </div>
  );
}


function StudentHandbookImage({
  title,
  src,
  alt,
  highlight,
}: {
  title: string;
  src: string;
  alt: string;
  highlight?: string;
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">

      <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">

        <p className="text-sm font-black text-blue-700">
          📖 STUDENT HANDBOOK
        </p>

        <p className="mt-1 font-bold">
          {title}
        </p>

      </div>

      <div className="p-4 sm:p-6">

        {/* 
          学生便覧の画像をここに配置。
          public/images/kyoyo/ に画像を保存してください。
        */}

        <div className="overflow-hidden rounded-2xl bg-slate-100">

          <img
            src={src}
            alt={alt}
            className="h-auto w-full"
          />

        </div>

        {highlight && (
          <div className="mt-4 rounded-xl bg-blue-600 p-4 text-center font-black text-white">
            ⭐ {highlight}
          </div>
        )}

        <p className="mt-4 text-xs leading-6 text-slate-500">
          出典：長崎大学『令和8年度 教養教育 学生便覧』
        </p>

      </div>

    </div>
  );
}


function InfoCard({
  title,
}: {
  title: string;
}) {
  return (
    <div className="rounded-xl bg-white p-4 text-center font-bold shadow-sm ring-1 ring-slate-200">
      {title}
    </div>
  );
}


function ChecklistGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mt-7">

      <h3 className="font-black text-lg">
        {title}
      </h3>

      <div className="mt-3 space-y-2">

        {items.map((item) => (
          <label
            key={item}
            className="flex cursor-pointer items-start gap-3 rounded-xl bg-slate-50 p-4 transition hover:bg-blue-50"
          >

            <input
              type="checkbox"
              className="mt-1 h-5 w-5 rounded border-slate-300"
            />

            <span className="font-medium">
              {item}
            </span>

          </label>
        ))}

      </div>

    </div>
  );
}