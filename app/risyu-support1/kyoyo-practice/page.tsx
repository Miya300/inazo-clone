import Image from "next/image";
import Link from "next/link";

export default function KyoyoPracticePage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-slate-50 text-slate-900"
    >

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

        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">

          {/* NUKYO REGI Suppoへ戻る */}
          <Link
            href="/risyu-support1"
            className="mb-10 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            ← NUKYO REGI Suppoへ戻る
          </Link>


          <p className="mb-5 text-sm font-semibold tracking-[0.35em] text-blue-200">
            NUKYO REGI SUPPORT
          </p>


          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            教養教育〈実践編〉
          </h1>


          <p className="mt-5 text-xl font-semibold text-white md:text-2xl">
            新入生向け・科目選択＆履修登録ガイド
          </p>


          <p className="mt-3 text-base tracking-wide text-blue-200 md:text-lg">
            Nagasaki University Registration Support
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

            <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
              PRACTICAL GUIDE
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight text-blue-950 md:text-6xl">
              教養教育〈実践編〉
            </h1>

            <div className="mt-5 h-1 w-20 bg-blue-700"></div>

            <h2 className="mt-6 text-3xl font-black text-blue-900 md:text-5xl">
              新入生向け・科目選択＆履修登録ガイド
            </h2>

            <p className="mt-4 text-xl font-bold text-slate-700 md:text-2xl">
              「実際に何を選び、どう登録する？」を解決するページ
            </p>

          </div>

        </div>


        {/* =========================
            ヘッダー説明
        ========================= */}
        <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-slate-700 leading-8">
            大学生活が始まると、
            <br />
            ・具体的にどの科目を履修すればよいのか
            <br />
            ・選択科目はどのように選べばよいのか
            <br />
            ・履修登録はどこで行うのか
            <br />
            ・NU-Webはどのように使うのか
            <br />
            といった疑問を持つ人も多いでしょう。
          </p>

        </section>


        {/* =========================
            このページについて
        ========================= */}
        <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <h2 className="text-3xl font-black text-blue-900 md:text-4xl">
            このページについて
          </h2>

          <div className="mt-5 h-1 w-16 bg-blue-700"></div>

          <p className="mt-6 text-slate-700 leading-8 mb-5">
            教養教育〈総論編〉では、教養教育の制度や単位の考え方の基本を解説しました。
            このページでは、その知識をもとに実際の履修登録の方法や科目選択を解説します。
          </p>

          <div className="bg-slate-50 rounded-2xl p-5">

            <p className="font-bold text-slate-700 mb-3">
              本ページの作成に使用した情報
            </p>

            <ul className="space-y-2 text-slate-700">

              <li>
                <a
                  href="/pdfs/kyoyo-binran.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                >
                  📖 令和8年度 教養教育 学生便覧
                </a>
              </li>

              <li>
                <a
                  href="/pdfs/kyoyo-jikanwari.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                >
                  📅 令和8年度 教養教育 授業時間割
                </a>
              </li>

            </ul>


            {/* 関連サービス */}
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* NU-Web */}
              <a
                href="https://nuweb.nagasaki-u.ac.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 transition-all hover:bg-blue-100 hover:shadow-lg"
              >

                <p className="text-2xl font-black text-blue-800">
                  💻 NU-Web
                </p>

                <p className="mt-2 text-slate-600">
                  履修登録・成績確認・シラバス閲覧など
                </p>

                <p className="mt-4 font-bold text-blue-600">
                  ▶ NU-Webへ移動
                </p>

              </a>


              {/* NUKYOYO Search */}
              <Link
                href="/nukyoyo-search"
                className="block rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 transition-all hover:bg-blue-100 hover:shadow-lg"
              >

                <p className="text-2xl font-black text-blue-800">
                  🔍 NUKYOYO Search
                </p>

                <p className="mt-2 text-slate-600">
                  長崎大学教養教育の成績分布を検索
                </p>

                <p className="mt-4 font-bold text-blue-600">
                  ▶ NUKYOYO Searchへ移動
                </p>

              </Link>

            </div>

          </div>

        </section>


        {/* =========================
            ① NU-Webとは
        ========================= */}
        <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <h2 className="text-3xl font-black text-blue-900 md:text-4xl">
            ① NU-Webとは
          </h2>

          <div className="mt-5 h-1 w-16 bg-blue-700"></div>

          <p className="mt-6 mb-6 text-slate-700 leading-8">
            NU-Webは、長崎大学の学務情報サービスです。
            <br />
            学生生活のさまざまな場面で利用する重要なシステムです。
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {[
              "履修登録",
              "時間割確認",
              "成績確認",
              "シラバス閲覧",
              "休講・補講確認",
              "大学からのお知らせ確認",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-blue-100 bg-blue-50 p-5"
              >
                <p className="font-bold text-blue-800">
                  ✅ {item}
                </p>
              </div>

            ))}

          </div>

          <div className="mt-7 rounded-2xl border-2 border-yellow-200 bg-yellow-50 p-6">

            <p className="text-lg font-black text-yellow-800">
              💡 ポイント
            </p>

            <p className="mt-3 text-slate-700 leading-8">
              履修登録もNU-Web上で行います。
              新入生は、履修登録が始まる前に一度ログインして、
              基本的な操作方法を確認しておくと安心です。
            </p>

          </div>

        </section>


        {/* =========================
            ② 履修登録
        ========================= */}
        <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <h2 className="text-3xl font-black text-blue-900 md:text-4xl">
            ② NU-Webでの履修登録のやり方
          </h2>

          <div className="mt-5 h-1 w-16 bg-blue-700"></div>

          <p className="mt-6 mb-7 text-slate-700 leading-8">
            履修登録は、指定された期間内にNU-Web上で行います。
            登録期間については、必ず大学からの最新の案内を確認してください。
          </p>


          {/* 注意事項 */}
          <div className="mb-8 rounded-xl border-l-4 border-yellow-400 bg-yellow-50 p-5">

            <p className="mb-3 font-bold text-yellow-800">
              ⚠️ 履修登録前に確認しましょう
            </p>

            <ul className="space-y-2 text-slate-700">

              <li>
                ※ <strong>あらかじめ</strong>長崎大学『教養教育 授業時間割』で、
                登録したい科目を決めておくとスムーズです。
              </li>

              <li>
                ※ <strong>必修教養科目は、</strong>『教養教育 授業時間割』の指示に従って登録しましょう。
              </li>

            </ul>

          </div>


          {/* 履修登録日程 */}
          <div className="mb-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">

            <h3 className="mb-4 text-2xl font-bold text-blue-800">
              📅 令和8年度 履修登録スケジュール（例）
            </h3>

            <div className="space-y-5 text-slate-700">

              <div>

                <p className="mb-2 text-lg font-bold text-blue-700">
                  前期（第1・第2クォーター）
                </p>

                <ul className="space-y-1">

                  <li>
                    <strong>履修登録期間</strong>
                    <br />
                    3月23日（月）〜4月6日（月）
                  </li>

                  <li className="text-red-600">
                    ※選択科目は4月5日（日）まで
                  </li>

                  <li>
                    <strong>履修登録調整期間</strong>
                    <br />
                    4月7日（火）〜4月20日（月）
                  </li>

                  <li>
                    <strong>プラネタリーヘルスⅠ 科目テーマ選択申請期間</strong>
                    <br />
                    5月11日（月）〜5月18日（月）
                  </li>

                  <li>
                    <strong>プラネタリーヘルスⅠ 科目テーマ選択結果発表</strong>
                    <br />
                    6月15日（月）
                  </li>

                </ul>

              </div>


              <div>

                <p className="mb-2 text-lg font-bold text-blue-700">
                  後期（第3・第4クォーター）
                </p>

                <ul className="space-y-1">

                  <li>
                    <strong>履修登録期間</strong>
                    <br />
                    9月18日（金）〜9月27日（日）
                  </li>

                  <li className="text-red-600">
                    ※選択科目は9月25日（金）17:00まで
                  </li>

                  <li>
                    <strong>履修登録調整期間</strong>
                    <br />
                    9月28日（月）〜10月9日（金）
                  </li>

                </ul>

              </div>

            </div>

          </div>


          {/* STEP 1～5 */}
          <div className="space-y-4">

            <Step
              number="1"
              title="NU-Webへログイン"
              description={`長大IDとパスワードを入力してログインします。
              IDとパスワードは入学後に渡されます。`}
            />

            <ImageBox
              src="/images/kyoyo/rishu1.png"
              alt="NU-Webログイン画面"
            />

            <Arrow />

            <Step
              number="2"
              title="「履修」→「履修登録・登録状況照会」"
              description="履修メニューから「履修登録・登録状況照会」を選択します。"
            />

            <ImageBox
              src="/images/kyoyo/rishu2.png"
              alt="履修登録・登録状況照会画面"
            />

            <Arrow />

            <Step
              number="3"
              title="学期・クォーターを選択"
              description="登録する学期・クォーターを確認します。"
            />

            <p className="mt-3 mb-6 text-lg font-bold text-red-600">
              ※クォーター科目(1Q・2Q・3Q・4Q)とセメスター科目（前期・後期）は区別して確認しましょう。
            </p>

            <ImageBox
              src="/images/kyoyo/rishu3.png"
              alt="学期・クォーター選択画面"
            />

            <Arrow />

            <Step
              number="4"
              title="「未登録」をクリック"
              description="登録したい曜日・時限の「未登録」をクリックします。"
            />

            <ImageBox
              src="/images/kyoyo/rishu4.png"
              alt="「未登録」をクリックする画面"
            />

            <Arrow />

            <Step
              number="5"
              title="科目を選択"
              description="履修したい科目を選択します。"
            />

          </div>


          {/* 集中講義 */}
          <div className="mt-6 rounded-2xl border-2 border-purple-200 bg-purple-50 p-6">

            <p className="mb-3 text-lg font-black text-purple-800">
              📌 集中講義科目について
            </p>

            <p className="mb-3 text-slate-700 leading-7">
              一部の集中講義科目は、通常の曜日・時限とは別に
              「集中講義を登録」から登録します。
            </p>

            <ul className="space-y-1 text-slate-700">
              <li>・データサイエンス概論</li>
              <li>・統計学概論</li>
              <li>・キャリア入門</li>
              <li>・プラネタリーヘルス入門</li>
              <li>・キャリア実践</li>
            </ul>

          </div>


          {/* STEP 6・7 */}
          <div className="mt-6 space-y-4">

            <Arrow />

            <Step
              number="6"
              title="「登録」をクリック"
              description="選択した科目を確認し、「登録」をクリックします。"
            />

            <Arrow />

            <div className="rounded-2xl border-2 border-blue-300 bg-blue-50 p-6">

              <p className="text-sm font-black text-blue-700">
                STEP 7
              </p>

              <p className="mt-2 text-xl font-black text-blue-900">
                「登録完了」をクリック
              </p>

              <p className="mt-2 text-slate-700 leading-7">
                最後に「登録完了」をクリックします。
              </p>

            </div>

          </div>


          {/* 注意 */}
          <div className="mt-7 rounded-2xl border-2 border-red-200 bg-red-50 p-6">

            <p className="text-lg font-black text-red-700">
              ⚠️ 重要
            </p>

            <p className="mt-3 text-slate-700 leading-8">
              「登録完了」をクリックするところまで行い、
              最後に登録内容を確認しましょう。
            </p>

            <p className="mt-3 mb-6 text-lg font-bold text-red-600">
              ※このボタンを押さないと履修登録は完了しません
            </p>

          </div>

        </section>


        {/* =========================
            ③ 履修登録調整期間
        ========================= */}
        <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <h2 className="text-3xl font-black text-blue-900 md:text-4xl">
            ③ 履修登録調整期間とは
          </h2>

          <div className="mt-5 h-1 w-16 bg-blue-700"></div>

          <p className="mt-6 mb-6 text-slate-700 leading-8">
            履修登録調整期間は、授業開始後に履修科目の追加・削除などを調整するための期間です。
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <div className="rounded-2xl bg-blue-50 p-6">

              <p className="text-lg font-black text-blue-800">
                理由①
              </p>

              <h3 className="mt-2 mb-3 text-xl font-black text-black">
                授業を受けてから判断できる
              </h3>

              <p className="text-slate-700 leading-7">
                シラバスだけでは分からない授業の雰囲気や進め方などを、
                実際の授業を通して確認できます。
              </p>

            </div>


            <div className="rounded-2xl bg-orange-50 p-6">

              <p className="text-lg font-black text-orange-700">
                理由②
              </p>

              <h3 className="mt-2 mb-3 text-xl font-black text-black">
                抽選落選時の選択肢
              </h3>

              <p className="text-slate-700 leading-7">
                選択科目の抽選に落ちた場合などに、
                別の科目を検討する機会として活用できます。
              </p>

            </div>

          </div>

          <div className="mt-6 rounded-2xl border-2 border-yellow-200 bg-yellow-50 p-6">

            <p className="font-black text-yellow-800">
              💡 注意
            </p>

            <p className="mt-2 text-slate-700 leading-7">
              履修登録調整期間の日程や、追加・削除できる科目には
              条件がある場合があります。必ず最新の大学公式情報を確認してください。
            </p>

            <p className="font-bold text-red-700">
              令和８年度履修登録調整期間（例）
            </p>

            <p className="mb-2 text-slate-700">
              <strong>前期</strong>：4月7日（火）〜4月20日（月）
              <br />
              <strong>後期</strong>：9月28日（月）〜10月9日（金）
            </p>

          </div>

        </section>


        {/* =========================
            ④ 教養科目選択
        ========================= */}
        <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <h2 className="text-3xl font-black text-blue-900 md:text-4xl">
            ④ 教養科目選択のすすめ
          </h2>

          <div className="mt-5 h-1 w-16 bg-blue-700"></div>

          <p className="mt-6 mb-6 text-slate-700 leading-8">
            教養教育では、卒業要件を確認したうえで、
            自分の興味・関心や将来の目標に合った科目を選ぶことが大切です。
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div className="rounded-2xl bg-slate-50 p-5 font-bold text-black">
              📚 選択科目
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 font-bold text-black">
              🌍 プラネタリーヘルスⅠ科目
            </div>

          </div>

        </section>


        {/* =========================
            ⑤ 選択科目
        ========================= */}
        <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <h2 className="text-3xl font-black text-blue-900 md:text-4xl">
            ⑤ 選択科目について
          </h2>

          <div className="mt-5 h-1 w-16 bg-blue-700"></div>

          <p className="mt-6 mb-6 text-slate-700 leading-8">
            選択科目は、主に次の5つのカテゴリーに分類されます。
          </p>

          <div className="space-y-3">

            {[
              "人文・社会科学科目",
              "生命・自然科学科目",
              "社会連携・キャリア教育関連科目",
              "言語・異文化理解科目",
              "留学支援コーディネート科目",
            ].map((item, index) => (

              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl bg-blue-50 p-5"
              >

                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 font-black text-white">
                  {index + 1}
                </span>

                <p className="font-bold text-slate-800">
                  {item}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-7 rounded-2xl border-2 border-green-200 bg-green-50 p-6">

            <p className="text-lg font-black text-green-700">
              ✅ 履修するときのポイント
            </p>

            <p className="mt-3 text-slate-700 leading-8">
              学部によって条件は異なりますが、
              <strong>各カテゴリーの最低修得単位数</strong>と、
              <strong>選択科目全体の必要単位数</strong>の両方を確認する必要があります。
            </p>

          </div>

          <ImageBox
            src="/images/kyoyo/rishu8.png"
            alt="NU-Web画面"
          />

          <p className="text-slate-700 leading-8">
            「令和8年度 教養教育 学生便覧」p.９より
          </p>

        </section>


        {/* =========================
            ⑥ プラネタリーヘルス
        ========================= */}
        <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <h2 className="text-3xl font-black text-blue-900 md:text-4xl">
            ⑥ プラネタリーヘルスⅠ科目について
          </h2>

          <div className="mt-5 h-1 w-16 bg-blue-700"></div>

          <div className="mt-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6">

            <p className="mb-3 text-xl font-black text-emerald-800">
              🌍 1年後期に履修する選択型科目
            </p>

            <p className="text-slate-700 leading-8">
              テーマ選択期間中である5月11日（月）から5月18日（月）（例）に希望するテーマを選択し、
              そのテーマに沿った授業２科目を１年後期に履修します。
            </p>

          </div>

          <ImageBox
            src="/images/kyoyo/rishu9.png"
            alt="NU-Web画面"
          />

          <p className="text-slate-700 leading-8">
            「令和8年度 教養教育 学生便覧」p.31より
          </p>

        </section>


        {/* =========================
            ⑦ 実際の科目選択
        ========================= */}
        <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <h2 className="text-3xl font-black text-blue-900 md:text-4xl">
            ⑦ 実際の科目選択のやり方
          </h2>

          <div className="mt-5 h-1 w-16 bg-blue-700"></div>


          {/* STEP 1 */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <p className="font-black text-blue-700">
              STEP 1
            </p>

            <h3 className="mt-2 text-xl font-black text-slate-800">
              『教養教育 授業時間割』から探す
            </h3>

            <p className="mt-3 text-slate-700 leading-7">
              時間割から興味のある科目を探します。
              必修科目などとの時間の重複にも注意しましょう。
            </p>

          </div>

          <ImageBox
            src="/images/kyoyo/rishu15.png"
            alt="NU-Web画面"
          />


          <Arrow />


          {/* STEP 2 */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <p className="font-black text-blue-700">
              STEP 2
            </p>

            <h3 className="mt-2 text-xl font-black text-slate-800">
              NU-Webでシラバスを見る
            </h3>

            <p className="mt-3 text-slate-700 leading-7">
              次の項目を確認します。
            </p>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">

              <div className="rounded-xl bg-white p-4 text-center font-bold text-black">
                授業内容
              </div>

              <div className="rounded-xl bg-white p-4 text-center font-bold text-black">
                評価方法
              </div>

              <div className="rounded-xl bg-white p-4 text-center font-bold text-black">
                到達目標
              </div>

            </div>

          </div>

          <ImageBox
            src="/images/kyoyo/rishu11.png"
            alt="NU-Web画面"
          />

          <hr className="my-10 border-2 border-slate-300" />

          <ImageBox
            src="/images/kyoyo/rishu12.png"
            alt="NU-Web画面"
          />

          <hr className="my-10 border-2 border-slate-300" />

          <ImageBox
            src="/images/kyoyo/rishu13.png"
            alt="NU-Web画面"
          />


          <Arrow />


          {/* STEP 3 */}
          <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">

            <p className="font-black text-blue-700">
              STEP 3
            </p>

            <h3 className="mt-2 text-xl font-black text-blue-900">
              NUKYOYO Searchで確認
            </h3>

            <p className="mt-3 text-slate-700 leading-7">
              成績分布を確認し、科目選択の参考にします。
            </p>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">

              <div className="rounded-xl bg-white p-4 text-center font-bold text-black">
                楽単率
              </div>

              <div className="rounded-xl bg-white p-4 text-center font-bold text-black">
                優単率
              </div>

              <div className="rounded-xl bg-white p-4 text-center font-bold text-black">
                履修者数
              </div>

            </div>


            <Link
              href="/"
              className="mt-6 inline-block rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
            >
              🔍 NUKYOYO Searchを見る
            </Link>

          </div>

        </section>


        {/* =========================
            まとめ
        ========================= */}
        <section className="rounded-3xl bg-gradient-to-r from-blue-700 to-blue-900 p-7 text-white shadow-xl md:p-9">

          <h2 className="mb-7 text-3xl font-black">
            まとめ
          </h2>

          <p className="mb-6 leading-7 text-blue-100">
            教養教育の科目選択では、次の流れで確認するのがおすすめです。
          </p>

          <div className="space-y-3">

            {[
              "興味がある科目を探す",
              "シラバスを確認する",
              "NUKYOYO Searchで成績情報を確認する",
              "履修登録する",
            ].map((item, index) => (

              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl bg-white/10 p-5"
              >

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-black text-blue-800">
                  {index + 1}
                </span>

                <p className="text-lg font-bold">
                  {item}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-8 border-t border-blue-400 pt-6">

            <p className="leading-8 text-blue-100">
              教養教育の科目選択を上手に活用できるかどうかは、
              大学生活前半の充実度を大きく左右します。
              <br />
              制度やルールを理解したうえで、
              自分に合った履修計画を立て、
              充実した大学生活の第一歩を踏み出しましょう。 🚀
            </p>

          </div>

        </section>


        {/* =========================
            ページトップ
        ========================= */}
        <div className="mt-10 text-center">

          <a
            href="#top"
            className="inline-block rounded-2xl border-2 border-blue-200 bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
          >
            ↑ ページトップへ戻る
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="mt-0 bg-blue-950 text-white">

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


/* =========================
   STEPコンポーネント
========================= */

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

      <p className="text-sm font-black text-blue-700">
        STEP {number}
      </p>

      <h3 className="mt-2 text-xl font-black text-slate-800">
        {title}
      </h3>

      <p className="mt-2 whitespace-pre-line text-slate-700 leading-7">
        {description}
      </p>

    </div>
  );
}


/* =========================
   画像コンポーネント
========================= */

function ImageBox({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">

      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="h-auto w-full"
      />

    </div>
  );
}


/* =========================
   矢印
========================= */

function Arrow() {
  return (
    <div className="py-1 text-center text-2xl font-bold text-blue-400">
      ↓
    </div>
  );
}