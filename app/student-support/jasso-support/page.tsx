import Link from "next/link";

export default function StudentSupportPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= HEADER ================= */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

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

          <Link
            href="/student-support"
            className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
          >
            ← 経済支援情報へ戻る
          </Link>

          <p className="mt-10 text-sm font-bold tracking-[0.3em] text-blue-200">
            NATIONAL SUPPORT
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            国（JASSO）からの支援
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
            日本学生支援機構（JASSO）の給付型・貸与型奨学金や、授業料・入学金の減免など、入学前から入学後まで利用できる国の経済支援制度について分かりやすく紹介します。
          </p>

        </div>
      </section>


      {/* ================= MAIN ================= */}
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">


        {/* ================= TITLE ================= */}
        <section className="rounded-3xl border-l-8 border-blue-700 bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            ECONOMIC SUPPORT
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-950 md:text-5xl">
            奨学金を知って、大学生活を安定させる
          </h2>

          <div className="mt-7 h-1 w-24 bg-blue-700" />

          <p className="mt-7 text-base leading-8 text-slate-600 md:text-lg">
            奨学金には、返済が不要な「給付型」と、
            卒業後などに返済する「貸与型」があります。
            また、奨学金とあわせて授業料・入学金の減免を受けられる制度もあります。
          </p>
          <p className="mt-7 text-base leading-8 text-red-600">
              たとえ、低所得でなくとも給付型奨学金＋授業料減免が受けられる可能性があります。是非1度チェックを!
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
        {/* ================= 給付型奨学金 ====================== */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-green-700">
            GRANT SCHOLARSHIP
          </p>

          <h2 className="mt-4 text-3xl font-black text-green-800 md:text-4xl">
            国（JASSO）の給付型奨学金＋授業料減免
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            返済不要の奨学金を受けながら、
            授業料・入学金の減免も受けられる制度です。
            学生生活に必要なお金を総合的に支援する仕組みになっています。
          </p>


          {/* 対象となる学生・家庭 */}
          <div className="mt-8 rounded-2xl border-2 border-green-200 bg-green-50 p-6">

            <h3 className="text-xl font-black text-green-900">
              対象となる学生・家庭
            </h3>

            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">

              <p>
                ・学力は「成績だけ」でなく、学ぶ意欲なども含めて判定
              </p>

              <p>
                ・両親（4人世帯モデル）の収入が一定範囲までの家庭が対象となる場合があります
              </p>

              <p>
                ・多子世帯（扶養する子どもが3人以上）の場合は、
                授業料等の支援が拡大されています
              </p>

              <p>
                ・災害、大きな支出、家計急変などによって、
                家計基準を満たす場合があります
              </p>

            </div>

          </div>


          {/* 家計条件 */}
          <div className="mt-6 rounded-2xl border-2 border-slate-200 bg-slate-50 p-6">

            <h3 className="text-xl font-black text-blue-900">
              【家計の条件】
            </h3>

            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">

              <p>
                ・家計の収入が一定範囲まで
              </p>

              <p>
                ・第Ⅰ区分は全額で、第Ⅱ～Ⅳ区分では支援額が段階的に小さくなる
              </p>

              <p>
                ・給付額と授業料等減免額は、世帯状況や区分によって異なる
              </p>

              <p>
                ・家計基準は収入だけではなく、資産等も含めて判定されます
              </p>
              <a
    href="https://www.jasso.go.jp/shogakukin/about/kyufu/kakei/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900"
  >
    給付奨学金の家計基準｜JASSO
  </a>

            </div>

          </div>


          {/* 支援内容 */}
          <div className="mt-6 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">

            <h3 className="text-xl font-black text-blue-900">
              支援内容は「2セット」
            </h3>

            <div className="mt-5 space-y-4">

              <div className="rounded-xl bg-white p-5">

                <p className="font-black text-green-700">
                  ① 給付型奨学金
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-700">
                  毎月、学生本人の口座に奨学金が振り込まれます。
                  返済は原則不要です。
                </p>

              </div>


              <div className="rounded-xl bg-white p-5">

                <p className="font-black text-blue-700">
                  ② 授業料・入学金の減免
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-700">
                  給付型奨学金と同時に、授業料・入学金の減免を受けられる場合があります。
                </p>

              </div>
              <a
  href="https://www.jasso.go.jp/news/1216189_1579.html"
  target="_blank"
  rel="noopener noreferrer"
  className="font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900"
>
  給付奨学金（授業料減免）説明用ショート動画を公開しました｜JASSO
</a>

            </div>

          </div>


          {/* 金額 */}
          <div className="mt-6 rounded-2xl bg-blue-950 p-7 text-white">

            <p className="text-sm font-bold tracking-[0.2em] text-blue-200">
              HOW MUCH?
            </p>

            <h3 className="mt-3 text-2xl font-black md:text-3xl">
              どのくらいもらえる？
            </h3>

            <p className="mt-4 text-sm leading-7 text-blue-100">
              国立大学・自宅外通学の場合の月額例です。
              実際の支援額は区分や世帯状況によって決まります。
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl bg-white text-slate-900">

              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-100 p-4 text-sm font-bold">
                <div>区分</div>
                <div>自宅</div>
                <div>自宅外</div>
              </div>

              <div className="grid grid-cols-3 border-b border-slate-200 p-4">
                <div className="font-bold">第Ⅰ区分</div>
                <div>29,200円</div>
                <div className="font-bold text-blue-700">66,700円</div>
              </div>

              <div className="grid grid-cols-3 border-b border-slate-200 p-4">
                <div className="font-bold">第Ⅱ区分</div>
                <div>19,500円</div>
                <div>44,500円</div>
              </div>

              <div className="grid grid-cols-3 border-b border-slate-200 p-4">
                <div className="font-bold">第Ⅲ区分</div>
                <div>9,800円</div>
                <div>22,300円</div>
              </div>

              <div className="grid grid-cols-3 p-4">
                <div className="font-bold">第Ⅳ区分</div>
                <div>7,300円</div>
                <div>16,700円</div>
              </div>

            </div>

            <div className="mt-6 rounded-xl bg-white/10 p-5">

              <p className="text-sm text-blue-200">
                例：第Ⅰ区分・自宅外
              </p>

              <p className="mt-2 text-3xl font-black">
                月66,700円
              </p>

              <p className="mt-2 text-sm text-blue-100">
                1年間では約80万円の給付になる計算です。
              </p>

            </div>
            <a
    href="https://www.jasso.go.jp/shogakukin/about/kyufu/kingaku.html"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900"
  >
    給付奨学金の支給額｜JASSO
  </a>

          </div>


          {/* 授業料減免 */}
          <div className="mt-6 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">

            <h3 className="text-2xl font-black text-blue-900">
              授業料・入学金の減免
            </h3>

            <div className="mt-4 grid gap-4 md:grid-cols-2">

              <div className="rounded-xl bg-white p-5">

                <p className="text-sm text-slate-500">
                  国立大学・入学金
                </p>

                <p className="mt-2 text-3xl font-black text-blue-900">
                  最大282,000円
                </p>

              </div>

              <div className="rounded-xl bg-white p-5">

                <p className="text-sm text-slate-500">
                  国立大学・授業料
                </p>

                <p className="mt-2 text-3xl font-black text-blue-900">
                  最大535,800円／年
                </p>

              </div>

            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              ※減免額は支援区分等によって異なります。
            </p>
            <a
    href="https://www.jasso.go.jp/shogakukin/about/kyufu/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900"
  >
    給付奨学金（返済不要）｜JASSO
  </a>

          </div>


          {/* 詳細リンク */}
{/* 詳細リンク */}
<Link
  href="https://www.jasso.go.jp/shogakukin/about/kyufu/index.html"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6 transition group-hover:-translate-y-1 group-hover:border-green-400 group-hover:shadow-md">
    <div className="flex items-center justify-between">
      
      {/* 左側 */}
      <div>
        <p className="text-sm font-bold tracking-[0.2em] text-green-700">
          MORE INFORMATION
        </p>

        <h3 className="mt-2 text-2xl font-black text-green-900">
          給付型奨学金の詳細を見る
        </h3>

        <p className="mt-2 text-sm text-slate-600">
          家計基準・学力基準・申込方法・継続条件など
        </p>
      </div>

      {/* 右側 */}
      <span className="ml-6 shrink-0 text-3xl text-green-700 transition group-hover:translate-x-1">
        →
      </span>

    </div>
  </div>
</Link>
          

        </section>


        {/* ===================================================== */}
        {/* ================= CONCRETE CASES ===================== */}
        {/* ===================================================== */}

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            CONCRETE EXAMPLES
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
            実際にどんな家庭が対象？
          </h2>

          <p className="mt-5 leading-8 text-slate-600 md:text-lg">
            世帯構成や保護者の収入によって、
            どの程度の支援になる可能性があるのかを具体例で紹介します。
          </p>
           <a
    href="https://shogakukin-simulator.jasso.go.jp/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900"
  >
    進学資金シミュレーター｜JASSO
  </a>

          {/* CASE 01 */}
          <div className="mt-8 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">

            <p className="text-sm font-bold tracking-[0.2em] text-blue-700">
              CASE 01
            </p>

            <h3 className="mt-3 text-2xl font-black text-blue-900">
              ひとり親 ＋ あなた
            </h3>

            <p className="mt-2 text-slate-600">
              親が会社員・国立大学・自宅外通学のモデル
            </p>

            <div className="mt-5 space-y-3">

              <div className="rounded-xl bg-white p-5">
                <p className="text-sm text-slate-500">
                  親の収入 約230万円
                </p>

                <p className="mt-2 text-2xl font-black text-blue-900">
                  月66,700円
                </p>

                <p className="mt-1 font-bold text-blue-800">
                  ＋ 学費 約54万円免除
                </p>
              </div>

              <div className="rounded-xl bg-white p-5">
                <p className="text-sm text-slate-500">
                  親の収入 約330万円
                </p>

                <p className="mt-2 text-2xl font-black text-blue-900">
                  月44,500円
                </p>

                <p className="mt-1 font-bold text-blue-800">
                  ＋ 学費 約38万円免除
                </p>
              </div>

              <div className="rounded-xl bg-white p-5">
                <p className="text-sm text-slate-500">
                  親の収入 約400万円
                </p>

                <p className="mt-2 text-2xl font-black text-blue-900">
                  月22,300円
                </p>

                <p className="mt-1 font-bold text-blue-800">
                  ＋ 学費 約18万円免除
                </p>
              </div>

              <div className="rounded-xl bg-white p-5">
                <p className="text-sm text-slate-500">
                  親の収入 約650万円
                </p>

                <p className="mt-2 text-2xl font-black text-blue-900">
                  月16,700円
                </p>

                <p className="mt-1 font-bold text-blue-800">
                  ＋ 学費 約13.5万円免除
                </p>
              </div>

            </div>
          </div>


          {/* CASE 02 */}
          <div className="mt-6 rounded-2xl border-2 border-slate-200 bg-slate-50 p-6">

            <p className="text-sm font-bold tracking-[0.2em] text-slate-500">
              CASE 02
            </p>

            <h3 className="mt-3 text-2xl font-black text-blue-900">
              父：会社員 ＋ 母：専業主婦 ＋ あなた
            </h3>

            <div className="mt-5 space-y-3">

              <div className="rounded-xl bg-white p-5">
                <p className="text-sm text-slate-500">
                  親の収入 約400万円
                </p>

                <p className="mt-2 text-2xl font-black text-blue-900">
                  月22,300円
                </p>

                <p className="mt-1 font-bold text-blue-800">
                  ＋ 学費 約18万円免除
                </p>
              </div>

              <div className="rounded-xl bg-white p-5">
                <p className="text-sm text-slate-500">
                  親の収入 約635万円
                </p>

                <p className="mt-2 text-2xl font-black text-blue-900">
                  月16,700円
                </p>

                <p className="mt-1 font-bold text-blue-800">
                  ＋ 学費 約13.5万円免除
                </p>
              </div>

            </div>
          </div>


          {/* CASE 03 */}
          <div className="mt-6 rounded-2xl border-2 border-slate-200 bg-slate-50 p-6">

            <p className="text-sm font-bold tracking-[0.2em] text-slate-500">
              CASE 03
            </p>

            <h3 className="mt-3 text-2xl font-black text-blue-900">
              父：会社員 ＋ 母：パート ＋ あなた
            </h3>

            <div className="mt-5 space-y-3">

              <div className="rounded-xl bg-white p-5">
                <p className="text-sm text-slate-500">
                  親の収入 約515万円
                </p>

                <p className="mt-2 text-2xl font-black text-blue-900">
                  月22,300円
                </p>

                <p className="mt-1 font-bold text-blue-800">
                  ＋ 学費 約18万円免除
                </p>
              </div>

              <div className="rounded-xl bg-white p-5">
                <p className="text-sm text-slate-500">
                  親の収入 約645万円
                </p>

                <p className="mt-2 text-2xl font-black text-blue-900">
                  月16,700円
                </p>

                <p className="mt-1 font-bold text-blue-800">
                  ＋ 学費 約13.5万円免除
                </p>
              </div>

            </div>
          </div>


          {/* CASE 04 */}
          <div className="mt-6 rounded-2xl border-2 border-green-200 bg-green-50 p-6">

            <p className="text-sm font-bold tracking-[0.2em] text-green-700">
              CASE 04
            </p>

            <h3 className="mt-3 text-2xl font-black text-green-900">
              父：会社員 ＋ 母：パート ＋ あなた ＋ 弟・妹
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              弟・妹が16歳以上の場合のモデル
            </p>

            <div className="mt-5 space-y-3">

              <div className="rounded-xl bg-white p-5">
                <p className="text-sm text-slate-500">
                  親の収入 約505万円
                </p>

                <p className="mt-2 text-2xl font-black text-green-900">
                  月44,500円
                </p>

                <p className="mt-1 font-bold text-green-800">
                  ＋ 学費 約38万円免除
                </p>
              </div>

              <div className="rounded-xl bg-white p-5">
                <p className="text-sm text-slate-500">
                  親の収入 約570万円
                </p>

                <p className="mt-2 text-2xl font-black text-green-900">
                  月22,300円
                </p>

                <p className="mt-1 font-bold text-green-800">
                  ＋ 学費 約18万円免除
                </p>
              </div>

              <div className="rounded-xl bg-white p-5">
                <p className="text-sm text-slate-500">
                  親の収入 約800万円
                </p>

                <p className="mt-2 text-2xl font-black text-green-900">
                  月16,700円
                </p>

                <p className="mt-1 font-bold text-green-800">
                  ＋ 学費 約13.5万円免除
                </p>
              </div>

            </div>
          </div>


          {/* CASE 05 */}
          <div className="mt-6 rounded-2xl border-2 border-blue-700 bg-blue-950 p-6 text-white">

            <p className="text-sm font-bold tracking-[0.2em] text-blue-200">
              CASE 05
            </p>

            <h3 className="mt-3 text-2xl font-black">
              父：会社員 ＋ 母：パート ＋ あなた ＋ 弟・妹2人
            </h3>

            <p className="mt-2 text-sm text-blue-200">
              弟・妹2人とも16歳以上の場合のモデル
            </p>

            <div className="mt-5 space-y-3">

              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-sm text-blue-200">
                  親の収入 約560万円
                </p>

                <p className="mt-2 text-2xl font-black">
                  月44,500円
                </p>

                <p className="mt-1 font-bold text-blue-100">
                  ＋ 学費 約54万円免除
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-sm text-blue-200">
                  親の収入 約630万円
                </p>

                <p className="mt-2 text-2xl font-black">
                  月22,300円
                </p>

                <p className="mt-1 font-bold text-blue-100">
                  ＋ 学費 約54万円免除
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-sm text-blue-200">
                  親の収入 約850万円
                </p>

                <p className="mt-2 text-2xl font-black">
                  月16,700円
                </p>

                <p className="mt-1 font-bold text-blue-100">
                  ＋ 学費 約54万円免除
                </p>
              </div>

            </div>
          </div>


          {/* NOTE */}
          <div className="mt-6 rounded-xl border border-yellow-300 bg-yellow-50 p-5">

            <p className="font-bold text-yellow-800">
              ⚠️ 具体例を見るときの注意
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-700">
              上記は資料に掲載された世帯モデルをもとにした例です。
              実際の判定では、各種控除、兄弟姉妹の年齢、世帯の状況などによって
              支援区分や支援額が変わる場合があります。
            </p>

          </div>

        </div>


        {/* ===================================================== */}
        {/* ================= 貸与型奨学金 ====================== */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            LOAN SCHOLARSHIP
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
            国（JASSO）の貸与型奨学金
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            貸与型奨学金は、卒業後などに返済するタイプの奨学金です。
            主に3種類があります。
          </p>


          {/* 家計条件 */}
          <div className="mt-8 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">

            <h3 className="text-xl font-black text-blue-900">
              【家計の条件】
            </h3>

            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">

              <p>
                ・家計の収入が一定範囲まで
              </p>

              <p>
                ・第一種と第二種では家計基準が異なります
              </p>

              <p>
                ・家計急変（失職・災害等・DV避難・親の死亡など）の場合は
                特別採用が行われる場合があります
              </p>

              <p className="font-bold text-red-600">
                ・審査中はローン等の申込みや金融機関への申請状況などにも注意が必要です
              </p>

            </div>

          </div>


          {/* 3種類 */}
          <div className="mt-8">

            <h3 className="text-2xl font-black text-blue-900">
              【種類は3つ】
            </h3>


            {/* 第一種 */}
            <div className="mt-5 rounded-2xl border-2 border-slate-200 p-6">

              <h4 className="text-2xl font-black text-blue-700">
                ① 第一種奨学金（無利子）
              </h4>

              <div className="mt-4 space-y-2 text-sm leading-7 text-slate-700">

                <p>・利子なし</p>

                <p>
                  ・月額は進学先・自宅／自宅外で変動
                </p>

                <p>
                  ・学力基準は第二種より厳しい
                </p>

                <p>
                  ・予約では評定平均3.5以上などの基準があります
                </p>

                <p>
                  ・返還方式は、卒業後の所得連動返還方式や定額返還方式から選択可能
                </p>

                <p>
                  ・JASSO給付型奨学金と併用できますが、支援額の調整があります
                </p>
                 <a
    href="https://www.jasso.go.jp/shogakukin/about/taiyo/taiyo_1shu/kakei/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900"
  >
    第一種奨学金の家計基準｜JASSO
  </a>

              </div>

            </div>


            {/* 第二種 */}
            <div className="mt-5 rounded-2xl border-2 border-slate-200 p-6">

              <h4 className="text-2xl font-black text-blue-700">
                ② 第二種奨学金（有利子）
              </h4>

              <div className="mt-4 space-y-2 text-sm leading-7 text-slate-700">

                <p>
                  ・利子あり（利率は毎年見直し、固定金利と変動金利を選択）
                </p>

                <p>
                  ・月額は3万円～12万円の範囲で選択
                </p>

                <p>
                  ・医学・歯学・薬学では16万円を選択できる場合があります
                </p>

                <p>
                  ・学力基準は第一種より緩やか
                </p>

                <p>
                  ・返還方式は定額返還方式
                </p>
                 <a
    href="https://www.jasso.go.jp/shogakukin/about/taiyo/taiyo_2shu/kakei/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900"
  >
    第二種奨学金の家計基準｜JASSO
  </a>

              </div>

            </div>


            {/* 入学時特別増額 */}
            <div className="mt-5 rounded-2xl border-2 border-slate-200 p-6">

              <h4 className="text-2xl font-black text-blue-700">
                ③ 入学時特別増額貸与奨学金（有利子）
              </h4>

              <div className="mt-4 space-y-2 text-sm leading-7 text-slate-700">

                <p>
                  ・入学時の一時金として追加で借りられる
                </p>

                <p>
                  ・返還は第二種と同様に利子あり
                </p>
                <a
    href="https://www.jasso.go.jp/shogakukin/about/taiyo/nyuzo/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900"
  >
    入学時特別増額貸与奨学金｜JASSO
  </a>

              </div>

            </div>

          </div>


          {/* 金額例 */}
          <div className="mt-8 rounded-2xl bg-slate-900 p-7 text-white">

            <p className="text-sm font-bold tracking-[0.2em] text-blue-300">
              AMOUNT EXAMPLES
            </p>

            <h3 className="mt-3 text-2xl font-black">
              貸与型奨学金の金額イメージ
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              <div className="rounded-xl bg-white/10 p-5">

                <p className="text-sm text-slate-300">
                  第一種・国公立大学・自宅外
                </p>

                <p className="mt-2 text-3xl font-black">
                  月51,000円
                </p>

                <p className="mt-2 text-sm text-slate-300">
                  6年間なら約367万円
                </p>

              </div>


              <div className="rounded-xl bg-white/10 p-5">

                <p className="text-sm text-slate-300">
                  第二種・医学・歯学・薬学
                </p>

                <p className="mt-2 text-3xl font-black">
                  月最大16万円
                </p>

                <p className="mt-2 text-sm text-slate-300">
                  ※有利子・返済が必要
                </p>

              </div>

            </div>

          </div>


          {/* 対象校 */}
          <div className="mt-6 rounded-2xl border-2 border-slate-200 p-6">

            <h3 className="text-xl font-black text-blue-900">
              対象校
            </h3>

            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-700">

              <p>
                ・国内の文部科学省認定の大学・短期大学・高等専門学校（4年次以上）・専修学校（専門課程）
              </p>

              <p>
                ・海外大学は第二種奨学金のみ利用可能な場合があります
              </p>
              <a
    href="https://www.mext.go.jp/kyufu/support/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900"
  >
    支援対象校一覧｜文部科学省
  </a>

            </div>

          </div>


          {/* 申込方法 */}
          <div className="mt-6 rounded-2xl border-2 border-slate-200 p-6">

            <h3 className="text-xl font-black text-blue-900">
              申込方法
            </h3>

            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-700">

              <p>
                ・予約採用（高校で申込）：
                進学前に高校を通じて申し込む方式
              </p>

              <p>
                ・在学採用（大学で申込）：
                進学後に大学を通じて申し込む方式
              </p>

              <p>
                ・募集は春・秋に行われる場合があります
              </p>

            </div>

          </div>


          {/* 家計基準 */}
          <div className="mt-6 rounded-2xl border-2 border-slate-200 p-6">

            <h3 className="text-xl font-black text-blue-900">
              家計基準
            </h3>

            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-700">

              <p>
                ・生計維持者（原則：父母）の所得で判定
              </p>

              <p>
                ・家計急変（失職・災害等）の場合は特別採用があります
              </p>

              <p>
                ・詳細は進学資金シミュレーターなどで確認
              </p>

            </div>

          </div>


          {/* 保証制度 */}
          <div className="mt-6 rounded-2xl border-2 border-slate-200 p-6">

            <h3 className="text-xl font-black text-blue-900">
              保証制度（必ず選択）
            </h3>

            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-700">

              <p>
                ・人的保証（親族2名）
              </p>

              <p>
                ・機関保証（保証料が必要）
              </p>

              <p>
                ・第一種で所得連動返還方式を選ぶ場合は機関保証のみ
              </p>
               <a
    href="https://www.jasso.go.jp/shogakukin/oyakudachi/document/kikan_hosho/links.html"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900"
  >
    保証制度について｜JASSO
  </a>

            </div>

          </div>


          {/* 返還 */}
          <div className="mt-6 rounded-2xl border-2 border-slate-200 p-6">

            <h3 className="text-xl font-black text-blue-900">
              返還（卒業後）
            </h3>

            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-700">

              <p>
                ・毎月の口座振替で返還
              </p>

              <p>
                ・返還期間は借入額に応じて10～20年程度
              </p>

              <p>
                ・返還困難時は期限を猶予、減額などの救済制度があります
              </p>
              <a
    href="https://www.jasso.go.jp/shogakukin/henkan/houhou/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900"
  >
    奨学金の返還について｜JASSO
  </a>

            </div>

          </div>


          {/* 注意点 */}
          <div className="mt-6 rounded-2xl border-2 border-red-200 bg-red-50 p-6">

            <h3 className="text-xl font-black text-red-700">
              注意点
            </h3>

            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-700">

              <p>
                ・借りすぎに注意（返還は本人の義務）
              </p>

              <p>
                ・給付型奨学金と併用すると、第一種の月額が調整される場合があります
              </p>

              <p>
                ・返還を延滞すると個人信用情報機関に登録される場合があります
              </p>

            </div>

          </div>


          {/* 詳細リンク */}
          <Link
            href="/student-support/jasso-support"
            className="group mt-8 block"
          >
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 transition group-hover:-translate-y-1 group-hover:border-blue-400 group-hover:shadow-md">

              <div className="flex items-center justify-between gap-4">

                <div>

                  <p className="text-sm font-bold tracking-[0.2em] text-blue-700">
                    MORE INFORMATION
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-blue-900">
                    貸与型奨学金の詳細を見る
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    第一種・第二種・入学時特別増額貸与など
                  </p>

                </div>

                <span className="text-3xl text-blue-700 transition group-hover:translate-x-1">
                  →
                </span>

              </div>

            </div>
          </Link>

        </section>


        {/* ===================================================== */}
        {/* ================= 学力基準 =========================== */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            ACADEMIC REQUIREMENTS
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
            学力の条件
          </h2>

          <div className="mt-8 space-y-5">

            <div className="rounded-2xl border-2 border-slate-200 p-6">

              <h3 className="text-xl font-black text-blue-700">
                高校の予約採用
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                <strong>・難易度が低い。</strong>
                評定平均3.5以上や学習意欲などによって判断されます。
              </p>

              <p className="mt-2 text-sm leading-7 text-red-600">
                ・もしくは、自ら学習計画書を提出し、学校の先生と面談で判断されます。
              </p>

            </div>


            <div className="rounded-2xl border-2 border-slate-200 p-6">

              <h3 className="text-xl font-black text-blue-700">
                大学入学1年次の在学採用
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                <strong>・難易度は中程度。</strong>高校時の評定平均3.5以上、
                もしくは入学試験上位1/2以上などの基準があります。
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-700">
                ・学習意欲でも判断される場合があります。
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-700">
                ・高等学校卒業程度認定試験の合格者も対象となる場合があります。
              </p>

            </div>


            <div className="rounded-2xl border-2 border-slate-200 p-6">

              <h3 className="text-xl font-black text-blue-700">
                大学入学2年次以降
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                <strong>・難易度は高い。</strong>学部内GPAが上位1/2以上などの基準があります。
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-700">
                ・修得単位数が標準単位数以上かつ学習意欲が必要です。
              </p>

            </div>
<div className="mt-4 space-y-2">
  <a
    href="https://www.jasso.go.jp/shogakukin/about/kyufu/gakuryoku/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="block font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900"
  >
    給付奨学金の学力基準｜JASSO
  </a>

  <a
    href="https://www.jasso.go.jp/shogakukin/about/kyufu/gakuryoku/zaigaku.html"
    target="_blank"
    rel="noopener noreferrer"
    className="block font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900"
  >
    進学後（在学採用）の給付奨学金の学力基準｜JASSO
  </a>
</div>


          </div>

        </section>


        {/* ===================================================== */}
        {/* ================= 補足 =============================== */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-slate-500">
            NOTES
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-900">
            申請前に確認しておきたいこと
          </h2>


          {/* 補足1 */}
          <div className="mt-8 rounded-2xl border border-slate-300 bg-slate-50 p-6">

            <h3 className="font-black text-blue-900">
              補足1：学習計画書
            </h3>

            <p className="mt-4 text-sm leading-8 text-slate-700">
              学習計画書の記入では、これまでの①学業上の障壁は解決したこと
              （アルバイトを大幅に減らす、自宅通学なら親族介護の代わりを他親族に協力してもらえるようになったなど）
              を具体的に、②日常はどのように頑張って成績成果をだすかを具体的に、
              ③学業でつまずいたらどのように迅速に解決するか
              （わからないところは先輩や教員に申し出て迅速に教えてもらうなど）
              を具体的に、④将来の職業像を具体的に記載します。
            </p>

          </div>


          {/* 補足2 */}
          <div className="mt-6 rounded-2xl border border-slate-300 bg-slate-50 p-6">

            <h3 className="font-black text-blue-900">
              補足2：家計情報の確認
            </h3>

            <p className="mt-4 text-sm leading-8 text-slate-700">
              父と母（生計維持者全員）の収入確認は口頭確認ではなく、
              書面確認で正確に行うことが重要です。
              適当に申告すると支給停止になる場合があります。
            </p>

            <p className="mt-3 text-sm leading-8 text-slate-700">
              正確に知るには、市役所などで課税証明書、非課税証明書などが必要となる場合があります。
              毎年4月に継続できるかの適格認定の手続きがあるため、
              3月末までに父と母の住民票所在地で課税証明書等を発行してもらうなど、
              登録済み本人と父母の金融資産で確認します。
            </p>

            <p className="mt-3 text-sm leading-8 text-slate-700">
              それをもとにJASSOのスカラネット・パーソナルに記入し申請します。
            </p>

          </div>

        </section>


        {/* ===================================================== */}
        {/* ================= 継続条件 =========================== */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            CONTINUATION
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
            継続の条件
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            奨学金は採用されたら永久に受け取れるわけではありません。
            毎年、学業成績や出席状況などについて確認されます。
          </p>


          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-300">

            <div className="grid grid-cols-[100px_1fr] border-b border-slate-300 bg-slate-50 p-4 font-bold">
              <div>区分</div>
              <div>内容</div>
            </div>


            <div className="grid grid-cols-[100px_1fr] border-b border-slate-300 p-4">

              <div className="font-black text-green-700">
                継続
              </div>

              <div className="text-sm leading-7">
                下記いずれの基準にも該当しない場合。
                支給が続きます。
              </div>

            </div>


            <div className="grid grid-cols-[100px_1fr] border-b border-slate-300 p-4">

              <div className="font-black text-yellow-700">
                警告
              </div>

              <div className="text-sm leading-7">
                修得単位数の合計が標準単位数の一定割合以下、
                年度のGPA等が学部等における下位4分の1に属する、
                出席率が低いなど、学習意欲が低いと判断される場合。
              </div>

            </div>


            <div className="grid grid-cols-[100px_1fr] border-b border-slate-300 p-4">

              <div className="font-black text-orange-700">
                停止
              </div>

              <div className="text-sm leading-7">
                2回連続で警告に該当し、2回目の警告の事由が
                「GPA等が下位4分の1」のみである場合など。
                振込が一時的に止まる場合があります。
              </div>

            </div>


            <div className="grid grid-cols-[100px_1fr] p-4">

              <div className="font-black text-red-700">
                廃止
              </div>

              <div className="text-sm leading-7">
                卒業延期が確定した場合、修得単位数の合計が一定割合以下、
                出席率が著しく低い場合、2回連続警告など。
                給付奨学生としての資格を失う場合があります。
              </div>

            </div>
            

          </div>
          <a
  href="https://www.jasso.go.jp/shogakukin/saiyochu/kyufu/tekikaku_gakuryoku.html"
  target="_blank"
  rel="noopener noreferrer"
  className="block font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900"
>
  適格認定（学業等）｜JASSO
</a>

        </section>


        {/* ===================================================== */}
        {/* ================= 申込の流れ ========================= */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            APPLICATION
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
            申込の流れ（初回のみ）
          </h2>

          <div className="mt-8 space-y-4">

            <div className="flex gap-4 rounded-2xl bg-blue-50 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-black text-white">
                1
              </div>

              <div>
                <p className="font-black text-blue-900">
                  予約採用または在学採用
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  高校または大学を通じて申込み
                </p>
              </div>

            </div>


            <div className="flex gap-4 rounded-2xl bg-slate-50 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-black text-white">
                2
              </div>

              <div>
                <p className="font-black text-blue-900">
                  家計基準・学力基準の審査
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  JASSOによる審査
                </p>
              </div>

            </div>


            <div className="flex gap-4 rounded-2xl bg-slate-50 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-black text-white">
                3
              </div>

              <div>
                <p className="font-black text-blue-900">
                  採用決定
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  支援区分・貸与額などが決定
                </p>
              </div>

            </div>


            <div className="flex gap-4 rounded-2xl bg-slate-50 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-black text-white">
                4
              </div>

              <div>
                <p className="font-black text-blue-900">
                  毎年の継続手続き
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  学業・家計等の確認
                </p>
              </div>

            </div>


            <div className="flex gap-4 rounded-2xl bg-green-50 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-700 font-black text-white">
                5
              </div>

              <div>
                <p className="font-black text-green-900">
                  毎月、奨学金が振り込まれる
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  給付型の場合は返済不要
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ===================================================== */}
        {/* ================= 注意点 ============================= */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl border-2 border-red-200 bg-red-50 p-8 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-red-600">
            IMPORTANT
          </p>

          <h2 className="mt-4 text-3xl font-black text-red-700 md:text-4xl">
            ※ 注意点
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-8 text-slate-700">

            <p>
              ・申請時のスカラネットと採用後のスカラネット・パーソナルは違います。
            </p>

            <p>
              ・給付型奨学金を受けると、
              JASSOの無利子貸与である第一種奨学金の上限額が減額される場合があります。
            </p>

            <p>
              ・単位不足、出席状況などによって支給停止の可能性があります。
            </p>

            <p>
              ・両親の資産確認では、
              預金総額、源泉徴収票や非課税証明書などを事前に準備し、
              正確に確認することが重要です。
            </p>

            <p>
              ・学生本人が世帯分離していても、
              原則として収入基準を満たしても適用外となる場合があります。
              ただし、養護施設出身者、家庭内DV等で単独生活者になり得る事情を満たせば
              適用される場合があります。
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
            申請前チェック
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-700">
                □ 生計維持者を確認した
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-700">
                □ 世帯の収入を確認した
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-700">
                □ 預貯金・資産を確認した
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-700">
                □ 成績・単位数を確認した
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-700">
                □ 兄弟姉妹の人数・年齢を確認した
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-700">
                □ 必要書類を準備した
              </p>
            </div>

          </div>

        </section>


        {/* ===================================================== */}
        {/* ================= DETAIL LINK ======================== */}
        {/* ===================================================== */}

        <Link
          href="/student-support/jasso-support"
          className="group mt-10 block"
        >
          <div className="rounded-3xl bg-blue-950 p-8 text-white shadow-lg transition group-hover:-translate-y-1 group-hover:shadow-xl md:p-10">

            <div className="flex items-center justify-between gap-6">

              <div>

                <p className="text-xs font-bold tracking-[0.3em] text-blue-300">
                  JASSO SUPPORT
                </p>

                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  JASSOの制度をさらに詳しく見る
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                  給付型・貸与型それぞれの制度、家計基準、
                  学力基準、申込方法などを詳しく確認できます。
                </p>

              </div>

              <div className="shrink-0 text-4xl transition group-hover:translate-x-2">
                →
              </div>

            </div>

          </div>
        </Link>


        {/* ===================================================== */}
        {/* ================= FINAL MESSAGE ====================== */}
        {/* ===================================================== */}

        <section className="mt-10 rounded-3xl bg-gradient-to-br from-blue-50 to-slate-100 p-8 ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            MESSAGE
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-950">
            「自分は対象外」と決めつけない
          </h2>

          <p className="mt-5 leading-8 text-slate-600 md:text-lg">
            奨学金や授業料等の減免は、
            世帯の収入だけで単純に決まるものではありません。
            世帯構成、扶養状況、資産、学業成績、学習意欲など、
            複数の条件によって判定されます。
          </p>

          <p className="mt-4 font-bold leading-8 text-blue-900 md:text-lg">
            「収入が多いから無理」「自分は対象外」と最初から決めつけず、
            一度制度を確認してみることが大切です。
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