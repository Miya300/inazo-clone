import Link from "next/link";

function ImageBox({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <img
        src={src}
        alt={alt}
        className="h-auto w-full"
      />
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xl font-black text-blue-700">
        ↓
      </div>
    </div>
  );
}

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
            奨学金をさがし、大学生活を安定させる
          </h2>

          <div className="mt-7 h-1 w-24 bg-blue-700" />

          <p className="mt-7 text-base leading-8 text-slate-600 md:text-lg">
            財団・企業・自治体などが募集する奨学金は、さまざまな条件のもとに多くあります。
            主に<strong>低所得世帯向け</strong>のものが多いですが、
            学業成績や研究活動、地域貢献活動、特定の専攻分野を対象とした奨学金など、
            多様な支援制度があります。
          </p>

          <p className="mt-7 text-base leading-8 text-slate-600 md:text-lg">
            こうした奨学金を活用することで、
            <span className="font-bold text-blue-800">
              経済的な負担を軽減し、学生生活を支える選択肢
            </span>
            を増やすことができます。
          </p>

        </section>
        {/* ===================================================== */}
{/* ================= REFERENCE MATERIALS =============== */}
{/* ===================================================== */}

<section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

  <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
    REFERENCE MATERIALS
  </p>

  <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
    このページについて
  </h2>

  <div className="mt-5 h-1 w-16 bg-blue-700"></div>

  <p className="mt-7 text-base leading-8 text-slate-600 md:text-lg">
    奨学金制度についてさらに詳しく知りたい場合は、
    日本学生支援機構（JASSO）の公式サイトも参考にしてください。
    奨学金の種類や申込資格、返還などについて詳しく確認できます。
  </p>


  {/* ================= REFERENCE ================= */}

  <div className="mt-8 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 md:p-8">

    <p className="text-xl font-black text-blue-900">
      📌 参考資料
    </p>


    {/* 給付奨学金 */}

    <a
      href="https://www.jasso.go.jp/shogakukin/about/kyufu/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 block rounded-xl bg-white p-5 ring-1 ring-blue-200 transition hover:-translate-y-0.5 hover:ring-blue-400"
    >

      <p className="text-sm font-bold text-blue-700">
        🎓 給付奨学金
      </p>

      <p className="mt-2 text-lg font-black text-blue-900">
        給付奨学金（返済不要）｜JASSO
      </p>

      <p className="mt-2 text-sm leading-7 text-slate-600">
        返済を必要としない給付型奨学金について、
        申込資格・学力基準・家計基準・支給額などを確認できます。
      </p>

      <div className="mt-4 flex items-center justify-between">

        <span className="text-sm font-bold text-blue-700">
          JASSO公式サイトで確認する
        </span>

        <span className="text-xl font-black text-blue-700">
          ↗
        </span>

      </div>

    </a>


    {/* 貸与奨学金 */}

    <a
      href="https://www.jasso.go.jp/shogakukin/about/taiyo/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 block rounded-xl bg-white p-5 ring-1 ring-blue-200 transition hover:-translate-y-0.5 hover:ring-blue-400"
    >

      <p className="text-sm font-bold text-blue-700">
        💴 貸与奨学金
      </p>

      <p className="mt-2 text-lg font-black text-blue-900">
        貸与奨学金（返済必要）｜JASSO
      </p>

      <p className="mt-2 text-sm leading-7 text-slate-600">
        返済が必要な貸与型奨学金について、
        第一種奨学金（無利子）・第二種奨学金（有利子）などを確認できます。
      </p>

      <div className="mt-4 flex items-center justify-between">

        <span className="text-sm font-bold text-blue-700">
          JASSO公式サイトで確認する
        </span>

        <span className="text-xl font-black text-blue-700">
          ↗
        </span>

      </div>

    </a>

  </div>


  {/* 注意 */}

  <div className="mt-6 rounded-xl border border-yellow-300 bg-yellow-50 p-5">

    <p className="font-bold text-yellow-800">
      ⚠️ 奨学金を申し込む前に
    </p>

    <p className="mt-3 text-sm leading-7 text-slate-700">
      奨学金には、それぞれ申込資格・学力基準・家計基準・
      返還条件などがあります。
      実際に申し込む際は、必ずJASSOや各団体の
      最新の募集要項を確認してください。
    </p>

  </div>

</section>


        {/* ===================================================== */}
        {/* ============== LOW INCOME IS A CHANCE ================ */}
        {/* ===================================================== */}

        <div className="mt-8 rounded-3xl bg-blue-950 p-8 text-white md:p-10">

          <p className="text-sm font-bold tracking-[0.25em] text-blue-200">
            LOW INCOME × SCHOLARSHIP
          </p>

          <h3 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
            低所得であることは、
            <br />
            奨学金を探すうえでの「チャンス」です。
          </h3>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            奨学金では、成績や専門分野だけでなく、
            <span className="font-black text-white">
              世帯収入や家計状況そのものが応募条件
            </span>
            になる制度があります。
          </p>

          <p className="mt-4 text-lg leading-8 text-blue-100">
            つまり、
            <span className="font-black text-white">
              「収入が低いから奨学金をもらえない」のではありません。
            </span>
            むしろ、経済的な支援を必要としている学生だからこそ、
            <span className="font-black text-white">
              応募できる奨学金が見つかる可能性があります。
            </span>
          </p>


          {/* DATA */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
              <p className="text-sm font-bold text-blue-200">
                2026年度・8月21日時点
              </p>

              <p className="mt-2 text-4xl font-black">
                219件
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-100">
                長崎大学が公開するJASSO以外の
                民間財団・企業・自治体等の奨学金
              </p>
            </div>


            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
              <p className="text-sm font-bold text-blue-200">
                家計・所得条件あり
              </p>

              <p className="mt-2 text-4xl font-black">
                約60～80件
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-100">
                219件の一覧をもとにした概算。
                所得・家計状況を条件とする制度があります。
              </p>
            </div>


            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
              <p className="text-sm font-bold text-blue-200">
                所得条件の例
              </p>

              <p className="mt-2 text-4xl font-black">
                300万円以下
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-100">
                世帯所得300万円以下を条件とする
                奨学金も確認されています。
              </p>
            </div>

          </div>


          {/* STRONG MESSAGE */}
          <div className="mt-8 rounded-2xl bg-white p-6 text-blue-950 md:p-8">

            <p className="text-xl font-black md:text-2xl">
              💡 低所得の学生こそ、調べる価値があります。
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              例えば、世帯収入が低い場合、
              「経済的に修学が困難」「学費の支弁が困難」
              といった条件に該当する可能性があります。
              さらに、GPA・学年・専門分野などの条件も満たせば、
              <span className="font-black text-blue-900">
                給付型奨学金を受け取れる可能性があります。
              </span>
            </p>

            <div className="mt-5 rounded-xl border-2 border-blue-200 bg-blue-50 p-5">

              <p className="font-black text-blue-900">
                「低所得 ＝ 不利」ではありません。
              </p>

              <p className="mt-2 font-bold leading-7 text-blue-800">
                「低所得 ＝ 経済的支援の対象になる可能性がある」
              </p>

            </div>

          </div>

        </div>


        {/* ===================================================== */}
        {/* ================= FINAL CTA ========================== */}
        {/* ===================================================== */}

        <div className="mt-8 rounded-3xl bg-gradient-to-br from-blue-950 to-blue-800 p-8 text-center text-white md:p-10">

          <p className="text-2xl font-black md:text-3xl">
            だから、最初から諦めないでください。
          </p>

          <p className="mt-4 leading-7 text-blue-100">
            専門分野・学年・GPA・所得・地域・就職条件から、
            自分に該当する可能性のある奨学金を探してみましょう。
          </p>

        </div>


        {/* ===================================================== */}
        {/* ========== 2026 SCHOLARSHIP INTRODUCTION ============ */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            2026 SCHOLARSHIP GUIDE
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
            2026年度、こんな奨学金があります
          </h2>

          <div className="mt-8 h-1 w-24 bg-blue-700" />

          <p className="mt-8 text-lg leading-9 text-slate-600">
            長崎大学では、2026年度も日本学生支援機構（JASSO）以外に、
            民間財団・企業・地方公共団体などによるさまざまな
            奨学金・返還支援制度が案内されています。
          </p>

          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-6">

            <p className="font-black text-blue-900">
              📅 2026年8月21日時点
            </p>

            <p className="mt-3 leading-8 text-slate-700">
              学業成績を重視するもの、家計状況を重視するもの、
              特定の専攻・学年を対象とするもの、
              卒業後の就職先や居住地域に条件があるものなど、
              さまざまな制度があります。
            </p>

          </div>


          {/* ================= CATEGORY 01 ================= */}

          <div className="mt-10">

            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">

              <p className="text-sm font-bold tracking-[0.2em] text-blue-700">
                CATEGORY 01
              </p>

              <h3 className="mt-3 text-2xl font-black text-blue-900 md:text-3xl">
                📚 成績を活かしたい人へ
              </h3>

              <p className="mt-3 text-lg font-bold text-blue-800">
                成績優秀者向け奨学金
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                学業成績や学修意欲が重視される奨学金です。
              </p>

            </div>


            <div className="mt-5 grid gap-4 md:grid-cols-3">

              {/* KANSO */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <p className="text-xs font-bold tracking-[0.2em] text-blue-700">
                  SCHOLARSHIP 01
                </p>

                <h4 className="mt-3 text-xl font-black text-blue-900">
                  KANSO奨学金
                </h4>

                <div className="mt-5 space-y-2 text-sm leading-7 text-slate-600">

                  <p>
                    <span className="font-bold text-slate-900">対象：</span>
                    経済系学部3年生
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">GPA：</span>
                    3.0以上が目安
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">支給額：</span>
                    年額48万円
                  </p>

                  <p className="font-bold text-blue-800">
                    給付型（返済不要）
                  </p>

                </div>

              </div>


              {/* 深川真マリモ */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <p className="text-xs font-bold tracking-[0.2em] text-blue-700">
                  SCHOLARSHIP 02
                </p>

                <h4 className="mt-3 text-xl font-black text-blue-900">
                  深川真マリモ奨学財団
                </h4>

                <div className="mt-5 space-y-2 text-sm leading-7 text-slate-600">

                  <p>
                    <span className="font-bold text-slate-900">対象：</span>
                    経済系学部3年生
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">GPA：</span>
                    3.0以上が目安
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">支給額：</span>
                    年額48万円
                  </p>

                  <p className="font-bold text-blue-800">
                    給付型（返済不要）
                  </p>

                </div>

              </div>


              {/* 丹下大未来 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <p className="text-xs font-bold tracking-[0.2em] text-blue-700">
                  SCHOLARSHIP 03
                </p>

                <h4 className="mt-3 text-xl font-black text-blue-900">
                  丹下大未来創造育英財団
                </h4>

                <div className="mt-5 space-y-2 text-sm leading-7 text-slate-600">

                  <p>
                    <span className="font-bold text-slate-900">対象：</span>
                    理工系学部3年生
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">GPA：</span>
                    3.0以上が目安
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">支給額：</span>
                    年額48万円
                  </p>

                  <p className="font-bold text-blue-800">
                    給付型（返済不要）
                  </p>

                </div>

              </div>

            </div>
          </div>


          {/* ================= CATEGORY 02 ================= */}

          <div className="mt-10">

            <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6">

              <p className="text-sm font-bold tracking-[0.2em] text-green-700">
                CATEGORY 02
              </p>

              <h3 className="mt-3 text-2xl font-black text-green-900 md:text-3xl">
                💰 経済的な支援を必要とする人へ
              </h3>

              <p className="mt-3 text-lg font-bold text-green-800">
                家計状況を重視する奨学金
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                世帯収入・所得など、経済的な状況を重視する奨学金です。
              </p>

            </div>


            <div className="mt-5 grid gap-4 md:grid-cols-3">

              {/* DYM */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <p className="text-xs font-bold tracking-[0.2em] text-green-700">
                  SCHOLARSHIP 04
                </p>

                <h4 className="mt-3 text-xl font-black text-blue-900">
                  DYM健康医療財団
                </h4>

                <div className="mt-5 space-y-2 text-sm leading-7 text-slate-600">

                  <p>
                    <span className="font-bold text-slate-900">対象：</span>
                    看護学科3年生
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">GPA：</span>
                    3.0以上が目安
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">家計：</span>
                    世帯収入要件あり
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">支給額：</span>
                    年額48万円 × 2年間
                  </p>

                </div>

              </div>


              {/* 再チャレンジ */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <p className="text-xs font-bold tracking-[0.2em] text-green-700">
                  SCHOLARSHIP 05
                </p>

                <h4 className="mt-3 text-xl font-black text-blue-900">
                  再チャレンジ奨学金
                </h4>

                <div className="mt-5 space-y-2 text-sm leading-7 text-slate-600">

                  <p>
                    <span className="font-bold text-slate-900">対象：</span>
                    医療・福祉・看護分野へ再進学する学生
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">所得：</span>
                    給与所得500万円以内が目安
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">支給額：</span>
                    月額5万円
                  </p>

                  <p className="font-bold text-green-800">
                    給付型
                  </p>

                </div>

              </div>


              {/* 平石 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <p className="text-xs font-bold tracking-[0.2em] text-green-700">
                  SCHOLARSHIP 06
                </p>

                <h4 className="mt-3 text-xl font-black text-blue-900">
                  平石教育財団
                </h4>

                <div className="mt-5 space-y-2 text-sm leading-7 text-slate-600">

                  <p>
                    <span className="font-bold text-slate-900">対象：</span>
                    大学1年生
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">所得：</span>
                    世帯所得300万円以下
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">支給額：</span>
                    年額36万円
                  </p>

                  <p className="font-bold text-green-800">
                    給付型
                  </p>

                </div>

              </div>

            </div>
          </div>


          {/* ================= CATEGORY 03 ================= */}

          <div className="mt-10">

            <div className="rounded-2xl border-2 border-purple-200 bg-purple-50 p-6">

              <p className="text-sm font-bold tracking-[0.2em] text-purple-700">
                CATEGORY 03
              </p>

              <h3 className="mt-3 text-2xl font-black text-purple-900 md:text-3xl">
                🌏 将来の進路や地域貢献を考える人へ
              </h3>

              <p className="mt-3 text-lg font-bold text-purple-800">
                返還支援・地域定着型の奨学金
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                特定の地域での就職・定住などを条件として、
                奨学金の返還を支援する制度もあります。
              </p>

            </div>


            <div className="mt-5 grid gap-4 md:grid-cols-3">

              {/* 長崎県 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <p className="text-xs font-bold tracking-[0.2em] text-purple-700">
                  SCHOLARSHIP 07
                </p>

                <h4 className="mt-3 text-xl font-black text-blue-900">
                  長崎県産業人材育成
                  <br />
                  奨学金返済アシスト事業
                </h4>

                <div className="mt-5 space-y-2 text-sm leading-7 text-slate-600">

                  <p>
                    <span className="font-bold text-slate-900">対象：</span>
                    長崎県内就職・定住希望者
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">内容：</span>
                    奨学金返還額の一部を補助
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">支援額：</span>
                    最大150万円助成
                  </p>

                </div>

              </div>


              {/* 山口県 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <p className="text-xs font-bold tracking-[0.2em] text-purple-700">
                  SCHOLARSHIP 08
                </p>

                <h4 className="mt-3 text-xl font-black text-blue-900">
                  山口県奨学金返還補助制度
                </h4>

                <div className="mt-5 space-y-2 text-sm leading-7 text-slate-600">

                  <p>
                    <span className="font-bold text-slate-900">対象：</span>
                    理系大学院生・薬学部生
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">地域：</span>
                    山口県内就職希望者
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">支援額：</span>
                    最大211.2万円補助
                  </p>

                </div>

              </div>


              {/* 石川県 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <p className="text-xs font-bold tracking-[0.2em] text-purple-700">
                  SCHOLARSHIP 09
                </p>

                <h4 className="mt-3 text-xl font-black text-blue-900">
                  いしかわ就職応援奨学金
                  <br />
                  返還助成制度
                </h4>

                <div className="mt-5 space-y-2 text-sm leading-7 text-slate-600">

                  <p>
                    <span className="font-bold text-slate-900">対象：</span>
                    石川県内就職希望者
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">内容：</span>
                    奨学金返還を助成
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">支援額：</span>
                    最大200万円助成
                  </p>

                </div>

              </div>

            </div>
          </div>


          {/* ===================================================== */}
          {/* ============== SCHOLARSHIP DISTRIBUTION ============== */}
          {/* ===================================================== */}

          <div className="mt-10 rounded-3xl bg-white p-0">

            <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
              SCHOLARSHIP DISTRIBUTION
            </p>

            <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
              奨学金の応募条件には、どんな傾向がある？
            </h2>

            <p className="mt-5 leading-8 text-slate-600 md:text-lg">
              2026年度に長崎大学で募集された日本学生支援機構以外の
              奨学金をもとに、応募条件の傾向をおおまかに整理しました。
              奨学金によって条件は大きく異なるため、
              あくまで目安として確認してください。
            </p>


            {/* ================= GPA ================= */}

            <div className="mt-10 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 md:p-8">

              <p className="text-sm font-bold tracking-[0.2em] text-blue-700">
                01 / GPA
              </p>

              <h3 className="mt-3 text-2xl font-black text-blue-900 md:text-3xl">
                GPA条件の分布
              </h3>

              <p className="mt-4 text-slate-600">
                GPAを応募条件として設定している奨学金もあります。
                特に「GPA3.0以上」を目安とする財団が多く見られます。
              </p>

              <div className="mt-6 space-y-3">

                <div className="flex items-center justify-between rounded-xl bg-white p-4">
                  <span className="font-bold text-slate-700">
                    GPA 3.0以上
                  </span>
                  <span className="font-black text-blue-900">
                    約35～45件
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white p-4">
                  <span className="font-bold text-slate-700">
                    GPA 2.8以上
                  </span>
                  <span className="font-black text-blue-900">
                    約3件
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white p-4">
                  <span className="font-bold text-slate-700">
                    GPA 2.5以上
                  </span>
                  <span className="font-black text-blue-900">
                    約5件
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white p-4">
                  <span className="font-bold text-slate-700">
                    GPA 2.4以上
                  </span>
                  <span className="font-black text-blue-900">
                    約5件
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white p-4">
                  <span className="font-bold text-slate-700">
                    GPA不要
                  </span>
                  <span className="font-black text-blue-900">
                    約150件
                  </span>
                </div>

              </div>

              <div className="mt-6 rounded-xl border border-blue-200 bg-white p-5">

                <p className="font-bold text-blue-900">
                  POINT
                </p>

                <p className="mt-2 leading-7 text-slate-700">
                  多くの財団で、
                  <span className="font-black text-blue-700">
                    「GPA3.0以上」が目安
                  </span>
                  として設定されています。
                  一方で、GPAを応募条件として明記していない奨学金も多数あります。
                </p>

              </div>

            </div>


            {/* ================= FIELD ================= */}

            <div className="mt-6 rounded-2xl border-2 border-slate-200 bg-slate-50 p-6 md:p-8">

              <p className="text-sm font-bold tracking-[0.2em] text-slate-500">
                02 / FIELD
              </p>

              <h3 className="mt-3 text-2xl font-black text-blue-900 md:text-3xl">
                学部・専門分野の分布
              </h3>

              <p className="mt-4 text-slate-600">
                奨学金によっては、対象となる学部・学科・専門分野が
                細かく指定されています。
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                {[
                  ["全学部", "約80件"],
                  ["理工系", "約25件"],
                  ["経済系", "約15件"],
                  ["医学系", "約15件"],
                  ["看護系", "約5件"],
                  ["薬学系", "約8件"],
                  ["教育系", "約5件"],
                  ["建築系", "約3件"],
                  ["情報系", "約5件"],
                  ["化学系", "約3件"],
                  ["水産系", "約2件"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl bg-white p-4"
                  >
                    <p className="text-sm text-slate-500">
                      {label}
                    </p>
                    <p className="mt-1 text-xl font-black text-blue-900">
                      {value}
                    </p>
                  </div>
                ))}

              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">

                <p className="font-bold text-blue-900">
                  POINT
                </p>

                <p className="mt-2 leading-7 text-slate-700">
                  特に
                  <span className="font-black text-blue-700">
                    理工系・経済系
                  </span>
                  を対象とする奨学金が比較的多く見られます。
                  一方、全学部を対象とする奨学金も多くあります。
                </p>

              </div>

            </div>


            {/* ================= HOUSEHOLD ================= */}

            <div className="mt-6 rounded-2xl border-2 border-green-200 bg-green-50 p-6 md:p-8">

              <p className="text-sm font-bold tracking-[0.2em] text-green-700">
                03 / HOUSEHOLD INCOME
              </p>

              <h3 className="mt-3 text-2xl font-black text-green-900 md:text-3xl">
                家計条件の分布
              </h3>

              <p className="mt-4 text-slate-600">
                世帯収入や所得、学費の支弁が困難であることを
                応募条件としている奨学金もあります。
              </p>

              <div className="mt-6 space-y-3">

                {[
                  ["家計条件あり", "約60～80件"],
                  ["収入500万円以下目安", "約15件"],
                  ["世帯年収300万円以下", "約5件"],
                  ["所得制限のみ記載", "約20件"],
                  ["家計条件なし", "約120件"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-xl bg-white p-4"
                  >
                    <span className="font-bold text-slate-700">
                      {label}
                    </span>

                    <span className="font-black text-green-900">
                      {value}
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-6 rounded-xl border border-green-200 bg-white p-5">

                <p className="font-bold text-green-900">
                  POINT
                </p>

                <p className="mt-2 leading-7 text-slate-700">
                  かなりの財団が
                  <span className="font-black text-green-700">
                    「学費の支弁が困難」
                  </span>
                  であることを応募条件の一つとしています。
                  経済的に厳しい家庭の学生は、
                  自分が対象になる奨学金がないか積極的に探すことが重要です。
                </p>

              </div>

            </div>


            {/* ================= GRADE ================= */}

            <div className="mt-6 rounded-2xl border-2 border-slate-200 bg-slate-50 p-6 md:p-8">

              <p className="text-sm font-bold tracking-[0.2em] text-slate-500">
                04 / SCHOOL YEAR
              </p>

              <h3 className="mt-3 text-2xl font-black text-blue-900 md:text-3xl">
                学年分布
              </h3>

              <p className="mt-4 text-slate-600">
                奨学金によって、応募できる学年が指定されている場合があります。
                2026年度の募集一覧では、特に学部3年生を対象とする制度が
                比較的多く見られます。
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                {[
                  ["学部1年", "約20件"],
                  ["学部2年", "約15件"],
                  ["学部3年", "約45件"],
                  ["学部4年", "約10件"],
                  ["医学部5年", "約5件"],
                  ["大学院", "約30件"],
                  ["全学年", "約80件"],
                ].map(([label, value], index) => (
                  <div
                    key={label}
                    className={`rounded-xl bg-white p-4 ${
                      index === 6 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <p className="text-sm text-slate-500">
                      {label}
                    </p>

                    <p className="mt-1 text-xl font-black text-blue-900">
                      {value}
                    </p>
                  </div>
                ))}

              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">

                <p className="font-bold text-blue-900">
                  POINT
                </p>

                <p className="mt-2 leading-7 text-slate-700">
                  <span className="font-black text-blue-700">
                    学部3年生向けの奨学金が比較的多い
                  </span>
                  ことが特徴です。
                  一方で、1・2年生や4年生、医学部5年生、
                  大学院生、全学年を対象とする制度もあります。
                </p>

              </div>

            </div>


            {/* ================= IMPORTANT ================= */}

            <div className="mt-8 rounded-2xl border-2 border-blue-700 bg-blue-950 p-6 text-white md:p-8">

              <p className="text-sm font-bold tracking-[0.2em] text-blue-200">
                IMPORTANT POINTS
              </p>

              <h3 className="mt-3 text-2xl font-black md:text-3xl">
                奨学金を探すとき、特に確認したい4つ
              </h3>

              <div className="mt-6 grid gap-4 md:grid-cols-2">

                <div className="rounded-xl bg-white/10 p-5">
                  <p className="text-sm font-bold text-blue-200">
                    01
                  </p>

                  <p className="mt-2 text-xl font-black">
                    専門分野
                  </p>

                  <p className="mt-2 text-sm leading-6 text-blue-100">
                    自分の学部・学科・専攻が対象になっているか。
                  </p>
                </div>


                <div className="rounded-xl bg-white/10 p-5">
                  <p className="text-sm font-bold text-blue-200">
                    02
                  </p>

                  <p className="mt-2 text-xl font-black">
                    GPA・学業成績
                  </p>

                  <p className="mt-2 text-sm leading-6 text-blue-100">
                    GPA3.0以上などの成績条件があるか。
                  </p>
                </div>


                <div className="rounded-xl bg-white/10 p-5">
                  <p className="text-sm font-bold text-blue-200">
                    03
                  </p>

                  <p className="mt-2 text-xl font-black">
                    所得・家計状況
                  </p>

                  <p className="mt-2 text-sm leading-6 text-blue-100">
                    世帯年収や所得、経済的困難に関する条件があるか。
                  </p>
                </div>


                <div className="rounded-xl bg-white/10 p-5">
                  <p className="text-sm font-bold text-blue-200">
                    04
                  </p>

                  <p className="mt-2 text-xl font-black">
                    学年
                  </p>

                  <p className="mt-2 text-sm leading-6 text-blue-100">
                    1年生・3年生・大学院など、
                    対象学年に該当するか。
                  </p>
                </div>

              </div>


              <div className="mt-6 rounded-xl bg-white p-5 text-slate-900">

                <p className="font-black text-blue-900">
                  重要なのは「自分に合った奨学金」を探すこと
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-700">
                  奨学金は、すべての学生が同じ条件で応募するものではありません。
                  <span className="font-bold">
                    専門分野・学年・GPA・所得
                  </span>
                  など、自分の条件に合う制度を探すことで、
                  利用できる支援が見つかる可能性があります。
                </p>

              </div>

            </div>


            {/* ================= NOTE ================= */}

            <div className="mt-6 rounded-xl border border-yellow-300 bg-yellow-50 p-5">

              <p className="font-bold text-yellow-800">
                ⚠️ この分布について
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                上記の件数は、2026年度の長崎大学における
                日本学生支援機構以外の奨学金募集一覧をもとにした
                <span className="font-bold">
                  概算
                </span>
                です。
                1つの奨学金が複数の条件に該当する場合があるため、
                各項目の件数を合計しても219件とは一致しません。
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                また、「GPA不要」「家計条件なし」は、
                募集要項にその条件が明記されていないものを
                おおまかに分類したものです。
                実際の応募資格・採用基準・支援額については、
                必ず各財団・自治体等の最新の募集要項を確認してください。
              </p>

            </div>

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
            申請の流れ
          </h2>

          <div className="mt-5 h-1 w-16 bg-blue-700"></div>


          {/* ===================================================== */}
          {/* STEP 1 */}
          {/* ===================================================== */}

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <p className="font-black text-blue-700">
              STEP 1
            </p>

            <h3 className="mt-2 text-xl font-black text-slate-800">
              募集内容を確認する
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              まず、長崎大学ホームページから現在募集されている
              民間財団・地方公共団体などの奨学金を確認します。
            </p>

            <div className="mt-5 rounded-xl bg-white p-5 ring-1 ring-slate-200">

              <p className="font-black text-slate-800">
                長崎大学ホームページで確認する場所
              </p>

              <div className="mt-4 space-y-2 text-sm leading-7 text-slate-700">

                <p>
                  <span className="font-bold text-blue-700">①</span>{" "}
                  長崎大学ホームページ
                </p>

                <p className="pl-5 text-slate-500">↓</p>

                <p>
                  <span className="font-bold text-blue-700">②</span>{" "}
                  在学生
                </p>

                <p className="pl-5 text-slate-500">↓</p>

                <p>
                  <span className="font-bold text-blue-700">③</span>{" "}
                  トピックス一覧
                </p>

                <p className="pl-5 text-slate-500">↓</p>

                <p>
                  <span className="font-bold text-blue-700">④</span>{" "}
                  民間財団等の奨学金情報更新のお知らせ
                </p>

                <p className="pl-5 text-slate-500">↓</p>

                <p>
                  <span className="font-bold text-blue-700">⑤</span>{" "}
                  2026年度 奨学金募集について
                </p>

              </div>

            </div>

          </div>


          <ImageBox
            src="/images/private-scholarship/step1-1.png"
            alt="長崎大学ホームページ 民間財団等の奨学金情報更新のお知らせ"
          />
          <Arrow />
          <ImageBox
            src="/images/private-scholarship/step1-2.png"
            alt="長崎大学ホームページ 民間財団等の奨学金情報更新のお知らせ"
          />
          <ImageBox
            src="/images/private-scholarship/step1-3.png"
            alt="長崎大学ホームページ 民間財団等の奨学金情報更新のお知らせ"
          />
          <Arrow /><ImageBox
            src="/images/private-scholarship/step1-4.png"
            alt="長崎大学ホームページ 民間財団等の奨学金情報更新のお知らせ"
          />
          <Arrow /><ImageBox
            src="/images/private-scholarship/step1-5.png"
            alt="長崎大学ホームページ 民間財団等の奨学金情報更新のお知らせ"
          />
          <Arrow /><ImageBox
            src="/images/private-scholarship/step1-6.png"
            alt="長崎大学ホームページ 民間財団等の奨学金情報更新のお知らせ"
          />
          
          <p className="mt-3 text-sm leading-7 text-slate-500">
            長崎大学公式サイトでは、民間財団等の奨学金募集情報が
            掲載・更新されています。最新の募集内容を確認しましょう。
          </p>

          <a
            href="https://www.nagasaki-u.ac.jp/ja/campuslife/topics/life798.html"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-between rounded-xl bg-blue-700 px-6 py-4 font-bold text-white transition hover:bg-blue-800"
          >
            <div>
              <p className="text-xs font-bold tracking-[0.15em] text-blue-200">
                OFFICIAL WEBSITE
              </p>
              <p className="mt-1">
                長崎大学「民間財団等の奨学金情報更新のお知らせ」
              </p>
            </div>
            <span className="ml-4 text-xl">↗</span>
          </a>

          <Arrow />


          {/* ===================================================== */}
          {/* STEP 2 */}
          {/* ===================================================== */}

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <p className="font-black text-blue-700">
              STEP 2
            </p>

            <h3 className="mt-2 text-xl font-black text-slate-800">
              該当する奨学金を探し、申請の準備をする
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              募集一覧から、自分の条件に合う奨学金を探します。
              奨学金によって応募条件が異なるため、次の項目を確認しましょう。
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

              <div className="rounded-xl bg-white p-4 text-center font-bold text-slate-800 ring-1 ring-slate-200">
                専攻・学部
              </div>
              <div className="rounded-xl bg-white p-4 text-center font-bold text-slate-800 ring-1 ring-slate-200">
                学年
              </div>
              <div className="rounded-xl bg-white p-4 text-center font-bold text-slate-800 ring-1 ring-slate-200">
                GPA・成績
              </div>
              <div className="rounded-xl bg-white p-4 text-center font-bold text-slate-800 ring-1 ring-slate-200">
                所得・家計状況
              </div>
              <div className="rounded-xl bg-white p-4 text-center font-bold text-slate-800 ring-1 ring-slate-200">
                地域条件
              </div>
              <div className="rounded-xl bg-white p-4 text-center font-bold text-slate-800 ring-1 ring-slate-200">
                就職条件
              </div>

            </div>

            <div className="mt-6 rounded-xl border-2 border-blue-200 bg-white p-5">
              <p className="font-black text-blue-900">
                次に、文教キャンパス 学生支援センターへ
              </p>
              <p className="mt-3 leading-7 text-slate-700">
                該当する奨学金に応募したい旨を伝え、必要書類を受け取ります。
                書類の内容を確認し、必要事項を記入しましょう。
              </p>
              <p className="mt-3 text-sm font-bold text-red-600">
                ※申請書類の記入例・見本は後ほど掲載します。
              </p>
            </div>

          </div>

          <ImageBox
            src="/images/private-scholarship/step2-1.png"
            alt="2026年度 奨学金募集一覧"
          />

          

          <Arrow />


          {/* ===================================================== */}
          {/* STEP 3 */}
          {/* ===================================================== */}

          <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">

            <p className="font-black text-blue-700">
              STEP 3
            </p>

            <h3 className="mt-2 text-xl font-black text-blue-900">
              申請方法・期限を確認する
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              奨学金によって申請方法や提出期限が異なります。
              「どこに申し込むのか」と「いつまでに申し込むのか」を
              必ず確認しましょう。
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">

              <div className="rounded-xl bg-white p-5 text-center ring-1 ring-slate-200">
                <p className="text-sm font-bold text-blue-700">①</p>
                <p className="mt-2 font-black text-blue-900">大学を通して申請</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">学内選考あり</p>
              </div>

              <div className="rounded-xl bg-white p-5 text-center ring-1 ring-slate-200">
                <p className="text-sm font-bold text-blue-700">②</p>
                <p className="mt-2 font-black text-blue-900">大学を通して申請</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">学内選考なし</p>
              </div>

              <div className="rounded-xl bg-white p-5 text-center ring-1 ring-slate-200">
                <p className="text-sm font-bold text-blue-700">③</p>
                <p className="mt-2 font-black text-blue-900">直接申請</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">財団等へ直接提出</p>
              </div>

            </div>

            <div className="mt-6 rounded-xl border border-yellow-300 bg-yellow-50 p-5">
              <p className="font-bold text-yellow-800">⚠️ 締切に注意</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                大学を通して申請する場合と、財団等へ直接申請する場合では、
                提出先や締切が異なることがあります。
                時間に余裕をもって準備しましょう。
              </p>
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
              ・奨学金ごとに応募条件・締切・必要書類が異なります。
            </p>

            <p>
              ・GPAや所得の条件を満たしていても、必ず採用されるとは限りません。
            </p>

            <p>
              ・地域条件や卒業後の就職条件など、
              将来の進路に関わる条件が設定されている場合があります。
            </p>

            <p>
              ・募集内容や支援額は変更される場合があるため、
              最新の募集要項を確認してください。
            </p>

            <p>
              ・検索結果は「応募条件に該当する可能性」を示すものであり、
              最終的な応募資格を保証するものではありません。
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
                □ 対象学年・専門分野を確認した
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-700">
                □ 成績・GPA条件を確認した
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-700">
                □ 家計・所得条件を確認した
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-700">
                □ 地域・就職条件を確認した
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-700">
                □ 必要書類・申込期限を確認した
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

          <h2 className="mt-4 text-3xl font-black text-blue-950 md:text-4xl">
            自分に合った奨学金を探してみよう
          </h2>

          <p className="mt-5 leading-8 text-slate-600 md:text-lg">
            奨学金は、低所得世帯向けの制度だけではありません。
            成績、専門分野、学年、地域、将来の進路など、
            さまざまな条件に応じた制度があります。
          </p>

          <p className="mt-4 leading-8 text-slate-600 md:text-lg">
            「自分には無理」と最初から決めつけず、
            自分の条件に合う制度がないか探してみましょう。
          </p>

          <div className="mt-6 rounded-2xl bg-blue-950 p-6 text-white">

            <p className="text-xl font-black">
              奨学金は「探すこと」から始まります。
            </p>

            <p className="mt-3 text-sm leading-7 text-blue-100">
              専門分野・学年・GPA・所得・地域・就職条件を確認して、
              自分に合った支援を見つけましょう。
            </p>

          </div>

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