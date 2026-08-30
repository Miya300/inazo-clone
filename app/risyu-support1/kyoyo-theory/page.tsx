import Link from "next/link";

export default function KyoyoTheoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-5 py-10">

        {/* 履修支援へ戻る */}
        <Link
          href="/risyu-support1"
          className="inline-block mb-8 px-5 py-3 bg-white text-blue-800 font-bold rounded-2xl border-2 border-blue-200 shadow-md hover:shadow-xl transition-all"
        >
          ← NUKYO REGI Suppoへ戻る
        </Link>

        {/* タイトル */}
        <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-4">
          📚 教養教育〈総論編〉
        </h1>

        <h2 className="text-2xl font-bold text-slate-700 mb-8">
          新入生向け・履修登録完全ガイド
        </h2>

        <p className="text-lg text-slate-600 mb-10">
          ―「何を取ればいい？」を解決するための教養教育の基本―
        </p>

        {/* 導入 */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <p className="text-slate-700 leading-8 mb-6">
            大学生活が始まって、最初に悩みやすいのが
            <strong>「履修登録」</strong>です。
          </p>

          <div className="bg-blue-50 rounded-2xl p-6 mb-6">
            <p className="font-bold text-blue-900 mb-3">
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

          <p className="text-slate-700 leading-8">
            このページでは、1・2年次の履修登録で知っておきたい
            教養教育の基本をまとめています。
          </p>
        </div>

        {/* このページについて */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-black text-blue-800 mb-6">
            📖 このページについて
          </h2>

          <p className="text-slate-700 leading-8 mb-6">
            本ページは、長崎大学
            <strong>「令和8年度 教養教育 学生便覧」</strong>
            をもとに作成した、教養教育の解説ページです。
          </p>

          <p className="text-slate-700 leading-8 mb-6">
            学生便覧に掲載されている教養教育の制度や履修に関する情報を、
            新入生にも分かりやすいように整理しています。
          </p>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
            <p className="font-black text-blue-800 mb-2">
              📌 参考資料
            </p>

            <p className="text-slate-700 leading-7 mb-5">
              長崎大学『令和8年度 教養教育 学生便覧』
            </p>

            <a
              href="/pdfs/handbook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-blue-700 text-white font-bold rounded-2xl shadow-md hover:bg-blue-800 hover:shadow-xl transition-all"
            >
              📖 学生便覧を開く
            </a>
          </div>

          <div className="mt-6 bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
            <p className="font-black text-yellow-800 mb-2">
              ⚠️ 重要
            </p>

            <p className="text-slate-700 leading-8">
              本ページは学生便覧を分かりやすく解説することを目的としています。
              実際に履修登録を行う際は、必ず最新の学生便覧・履修登録案内・
              時間割・シラバス等を確認してください。
            </p>
          </div>
        </div>

        {/* 履修登録の考え方 */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-black text-blue-800 mb-6">
            🎯 まず知っておきたい「履修登録」の考え方
          </h2>

          <p className="text-slate-700 leading-8 mb-6">
            履修登録では、単純に
            <strong>「面白そうな授業を選ぶ」</strong>
            だけではありません。
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <div className="font-bold text-xl text-blue-900">
              🎓 卒業に必要な単位
            </div>

            <div className="text-2xl my-2">↓</div>

            <div className="font-bold text-xl text-blue-900">
              📚 必修科目
            </div>

            <div className="text-2xl my-2">↓</div>

            <div className="font-bold text-xl text-blue-900">
              🔢 科目区分ごとの必要単位
            </div>

            <div className="text-2xl my-2">↓</div>

            <div className="font-bold text-xl text-blue-900">
              📖 1・2年次で履修する科目
            </div>

            <div className="text-2xl my-2">↓</div>

            <div className="font-bold text-xl text-blue-900">
              📅 実際の時間割
            </div>

            <div className="text-2xl my-2">↓</div>

            <div className="font-black text-xl text-green-700">
              ✅ 履修登録
            </div>
          </div>
        </div>

        {/* ① 必修科目 */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-black text-blue-800 mb-6">
            ① まず「必修科目」を確認する
          </h2>

          <p className="text-slate-700 leading-8 mb-6">
            新入生は、まず自分の
            <strong>学部・学科で指定されている必修科目</strong>
            を確認しましょう。
          </p>

          <p className="text-slate-700 leading-8 mb-6">
            教養教育には、例えば次のような科目があります。
          </p>

          <div className="grid md:grid-cols-2 gap-3 mb-8">
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
                className="bg-blue-50 border border-blue-100 rounded-xl p-4 font-bold text-slate-700"
              >
                📘 {item}
              </div>
            ))}
          </div>

          <p className="text-slate-700 leading-8 mb-6">
            ただし、すべての学生が同じ科目を必修として履修するわけではありません。
          </p>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 mb-8">
            <p className="font-black text-yellow-800 mb-3">
              学部・学科によって異なります
            </p>

            <ul className="space-y-2">
  <li>
    <span className="text-red-600 font-bold">🔴 必修科目</span>
  </li>

  <li>
    <span className="text-blue-600 font-bold">🔵 選択科目</span>
  </li>

  <li>
    <span className="text-green-600 font-bold">🟢 必要単位数</span>
  </li>
</ul>
          </div>

          {/* 必修科目画像 */}
          <img
            src="/images/kyoyo/handbook-minimum-credits.jpg"
            alt="令和8年度 教養教育 学生便覧・必修科目"
            className="w-full rounded-2xl shadow-md"
          />

          <p className="text-sm text-slate-500 mt-3">
            出典：長崎大学『令和8年度 教養教育 学生便覧』 p9
          </p>
        </div>

        {/* ② 最低修得単位数 */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-black text-blue-800 mb-6">
            ② 自分の学部の「最低修得単位数」を確認する
          </h2>

          <p className="text-slate-700 leading-8 mb-6">
            卒業までに必要となる教養教育の
            <strong>最低修得単位数</strong>
            を確認しましょう。
          </p>

          <p className="text-slate-700 leading-8 mb-6">
           教養教育基礎科目、プラネタリーヘルス科目、選択科目のそれぞれの小計より
           <br />
           多くの単位を取得する必要があります。
          </p>
　　　　　　<p className="text-red-600 leading-8 mb-6">
           ＜選択科目の最低修得単位に見られる〇～〇標記について＞
           <br />
           例えば工学部の生命・自然科学科目の２～４では、最低２単位を修得する必要があり、かつ４単位より多く修得しても選択科目の小計には４までしか算入されないという意味です。
          </p>


          {/* 最低修得単位数画像 */}
          <img
            src="/images/kyoyo/handbook-required.jpg"
            alt="最低修得単位数"
            className="w-full rounded-2xl shadow-md"
          />

          <p className="text-sm text-slate-500 mt-3">
            出典：長崎大学『令和8年度 教養教育 学生便覧』 p9
          </p>

          <div className="mt-6 bg-red-50 border-2 border-red-200 rounded-2xl p-6">
            <p className="font-black text-red-700 text-lg">
              ⚠️ 「必要単位の合計を満たせばOK」ではない！
            </p>

            <p className="mt-3 text-slate-700 leading-8">
              合計単位数だけでなく、
              <strong>科目区分ごとの必要単位数</strong>
              も確認しましょう。
            </p>
            
          </div>
        </div>

        {/* ③ 必修と選択 */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-black text-blue-800 mb-6">
            ③ 「必修」と「選択」を分けて考える
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-red-700 mb-4">
                🔴 必修科目
              </h3>

              <p className="text-slate-700 leading-8">
                卒業・進級のために指定されている科目です。
              </p>

              <p className="font-black text-red-700 mt-4">
                → 基本的に必ず履修します。
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-blue-700 mb-4">
                🔵 選択科目
              </h3>

              <p className="text-slate-700 leading-8">
                決められた科目区分・単位数の範囲から、
                自分で選んで履修します。
              </p>
            </div>

          </div>

          <div className="mt-8">
            <p className="font-bold text-slate-700 mb-4">
              選択科目には、例えば次のような区分があります。
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              {[
                "人文・社会科学",
                "生命・自然科学",
                "社会連携・キャリア教育関連",
                "言語・異文化理解",
                "留学支援コーディネート",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-slate-50 rounded-xl p-4 text-slate-700"
                >
                  🔵 {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-2xl p-6 text-center">
            <p className="font-black text-xl text-blue-900">
              必修 ＋ 選択
            </p>

            <p className="text-2xl my-2">↓</p>

            <p className="font-black text-xl text-green-700">
              🎯 卒業要件を満たす！
            </p>
          </div>
        </div>

        {/* ④ 指定曜日 */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-black text-blue-800 mb-6">
            ④ 1年生は「指定された曜日」に注意！
          </h2>

          <p className="text-slate-700 leading-8 mb-6">
            1年次の教養教育では、学部ごとに指定された曜日など、
            大学が示す履修上のルールを確認する必要があります。
          </p>
　　　　　
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 mb-8">
            <p className="font-black text-yellow-800 text-lg mb-3">
              ❌ よくある考え方
            </p>

            <p className="text-slate-700">
              「時間割が空いているから、この教養科目を入れよう！」
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6">
            <p className="font-black text-blue-900 mb-4">
              ⭕ 基本的な考え方
            </p>

            <div className="space-y-3 text-center font-bold">
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

        {/* ⑤ クォーター */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-black text-blue-800 mb-6">
            ⑤ 授業は「前期・後期」だけではない
          </h2>

          <p className="text-slate-700 leading-8 mb-6">
            教養教育では、授業の開講時期を確認することも重要です。
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              ["1Q", "前期前半"],
              ["2Q", "前期後半"],
              ["3Q", "後期前半"],
              ["4Q", "後期後半"],
            ].map(([q, label]) => (
              <div
                key={q}
                className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-5 text-center"
              >
                <p className="text-2xl font-black text-blue-800">{q}</p>
                <p className="text-slate-600 mt-2">{label}</p>
              </div>
            ))}
          </div>

          

          <div className="mt-8 grid md:grid-cols-2 gap-6">

            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-black text-green-700 mb-3">
                🟢 クォーター科目
              </h3>

              <p className="text-slate-700 leading-7">
                1つのクォーターで完結する科目です。
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <h3 className="text-xl font-black text-blue-700 mb-3">
                🔵 セメスター科目
              </h3>

              <p className="text-slate-700 leading-7">
                前期または後期を通して履修する科目です。
              </p>
            </div>

          </div>

          <div className="mt-6 bg-yellow-50 rounded-2xl p-6">
            <p className="font-black text-yellow-800">
              💡 「前期・後期」だけでなく、
              「1Q～4Qのどこで開講されるか」も確認しましょう。
            </p>
          </div>
        </div>

        {/* ⑥ 単位 */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-black text-blue-800 mb-6">
            ⑥ 「1単位＝1週間1コマ」とは限らない
          </h2>

          <p className="text-slate-700 leading-8 mb-6">
            授業によって、
            <strong>単位数・授業回数・開講期間</strong>
            の組み合わせが異なります。
          </p>

          <div className="bg-blue-50 rounded-2xl p-6">
            <p className="font-black text-blue-900 mb-5">
              授業を選ぶときは4項目をチェック！
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white rounded-xl p-4 text-center">
                📅
                <br />
                <strong>曜日</strong>
              </div>

              <div className="bg-white rounded-xl p-4 text-center">
                ⏰
                <br />
                <strong>時限</strong>
              </div>

              <div className="bg-white rounded-xl p-4 text-center">
                📆
                <br />
                <strong>開講時期</strong>
              </div>

              <div className="bg-white rounded-xl p-4 text-center">
                🔢
                <br />
                <strong>単位数</strong>
              </div>
            </div>
          </div>

          <p className="mt-6 text-slate-700 leading-8">
            そのため、
            <strong>単位数だけを見て時間割を組まない</strong>
            ことが重要です。
          </p>
        </div>

        {/* ⑦ 2年次 */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-black text-blue-800 mb-6">
            ⑦ 2年次の履修登録
          </h2>

          <h3 className="text-2xl font-black text-slate-800 mb-5">
            2年生になったら「1年次の結果」を確認！
          </h3>

          <p className="text-slate-700 leading-8 mb-6">
            2年次の履修登録では、まず
            <strong>1年次にどの科目を修得したか</strong>
            を確認しましょう。
          </p>

          <div className="space-y-3">
            {[
              "1年次に取得した単位",
              "未修得の必修科目",
              "不足している科目区分",
              "卒業までに必要な残りの単位",
            ].map((item, index) => (
              <div
                key={item}
                className="bg-blue-50 rounded-xl p-4 font-bold text-slate-700"
              >
                {index + 1}️⃣ {item}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-50 rounded-2xl p-6 text-center">
            <p className="font-bold">📊 1年次の成績を確認</p>
            <p className="my-2">↓</p>
            <p className="font-bold">🔢 取得単位を確認</p>
            <p className="my-2">↓</p>
            <p className="font-bold">❗ 未修得科目を確認</p>
            <p className="my-2">↓</p>
            <p className="font-bold">🔎 不足している科目区分を確認</p>
            <p className="my-2">↓</p>
            <p className="font-bold">📚 2年次の履修科目を決める</p>
            <p className="my-2">↓</p>
            <p className="font-black text-green-700">
              🎯 卒業要件に近づける！
            </p>
          </div>

          <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
            <p className="font-black text-yellow-800 mb-3">
              💡 2年次のポイント
            </p>

            <p className="text-slate-700 leading-8">
              「あと何単位必要か」だけでなく、
              <strong>
                「どの科目区分があと何単位必要なのか」
              </strong>
              まで確認しましょう。
            </p>
          </div>
        </div>

        {/* ⑧ 履修上限 */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-black text-blue-800 mb-6">
            ⑧ 履修登録には「上限」がある
          </h2>

          <p className="text-slate-700 leading-8 mb-6">
            履修登録では、一定期間に登録できる
            <strong>単位数に上限</strong>
            が設定されている場合があります。
          </p>

          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
            <p className="font-black text-yellow-800">
              ⚠️ 注意
            </p>

            <p className="text-slate-700 leading-8 mt-3">
              上限は、学部・学科や履修制度によって異なる場合があります。
              自分の所属学部の学生便覧・履修登録案内を確認しましょう。
            </p>
          </div>
        </div>

        {/* ⑨ オンライン */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-black text-blue-800 mb-6">
            ⑨ オンライン授業にも上限がある
          </h2>

          <p className="text-slate-700 leading-8 mb-6">
            オンライン授業について、卒業要件として修得できる
            単位数に上限があります。
            <br />
            しかし、通常は意識しなければ履修上限に達することはありません。
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
              <p className="text-3xl font-black text-blue-800">
                20単位まで
              </p>

              <p className="text-slate-700 mt-2">
                教養教育
              </p>
            </div>

            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 text-center">
              <p className="text-3xl font-black text-slate-800">
                40単位まで
              </p>

              <p className="text-slate-700 mt-2">
                専門教育
              </p>
            </div>
          </div>

          <div className="mt-6 bg-red-50 border-2 border-red-200 rounded-2xl p-6">
            <p className="font-black text-red-700">
              ⚠️ オンライン科目だけで教養教育の卒業要件をすべて満たすことはできません。
            </p>
          </div>
        </div>

        {/* 10 STEP */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-black text-blue-800 mb-8">
            📝 新入生が履修登録するときの「実際の手順」
          </h2>

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
              "NU-Web等で履修登録（教養教育＜実践編＞で詳しく解説）",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 bg-blue-50 rounded-2xl p-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <p className="font-bold text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* チェックリスト */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-black text-blue-800 mb-8">
            ✅ 登録前チェックリスト
          </h2>

          <div className="grid md:grid-cols-2 gap-3">
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
                className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 cursor-pointer hover:bg-blue-50 transition"
              >
                <input
                  type="checkbox"
                  className="mt-1 w-5 h-5"
                />

                <span className="text-slate-700">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* 4つのポイント */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-black text-blue-800 mb-6">
            🎯 履修登録で迷ったら
          </h2>

          <p className="text-slate-700 text-lg leading-8 mb-8">
            履修登録で大切なのは、
          </p>

          <p className="text-3xl font-black text-center text-blue-900 mb-8">
            「何単位取るか」だけではありません。
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6">
              <p className="text-2xl font-black text-blue-800 mb-3">
                ① 何を取るか
              </p>
              <p className="text-slate-700">
                必修？選択？
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <p className="text-2xl font-black text-blue-800 mb-3">
                ② どの科目区分か
              </p>
              <p className="text-slate-700">
                必要な区分の単位になっている？
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <p className="text-2xl font-black text-blue-800 mb-3">
                ③ いつ取るか
              </p>
              <p className="text-slate-700">
                1Q？2Q？3Q？4Q？
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <p className="text-2xl font-black text-blue-800 mb-3">
                ④ 何年次に取るか
              </p>
              <p className="text-slate-700">
                1年次？2年次？
              </p>
            </div>
          </div>
        </div>

        {/* 最終まとめ */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl md:text-4xl font-black mb-8">
            🌟 履修登録は「卒業から逆算」！
          </h2>

          <div className="space-y-4 text-center">
            <div className="bg-white/10 rounded-2xl p-4 font-bold">
              🎓 卒業に必要な単位
            </div>

            <div>↓</div>

            <div className="bg-white/10 rounded-2xl p-4 font-bold">
              📋 科目区分ごとの必要単位
            </div>

            <div>↓</div>

            <div className="bg-white/10 rounded-2xl p-4 font-bold">
              🔴 必修科目
            </div>

            <div>↓</div>

            <div className="bg-white/10 rounded-2xl p-4 font-bold">
              📚 1・2年次で履修する科目
            </div>

            <div>↓</div>

            <div className="bg-white/10 rounded-2xl p-4 font-bold">
              📅 実際の時間割
            </div>

            <div>↓</div>

            <div className="bg-white/10 rounded-2xl p-4 font-bold">
              💻 NU-Webで履修登録
            </div>

            <div>↓</div>

            <div className="bg-white rounded-2xl p-5 text-blue-900 font-black text-xl">
              ✅ 履修完了！
            </div>
          </div>
        </div>

        {/* 最後に */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-black text-blue-800 mb-6">
            📖 最後に
          </h2>

          <p className="text-slate-700 leading-8 mb-6">
            履修登録は、大学生活のスタート地点です。
          </p>

          <p className="text-slate-700 leading-8 mb-6">
            最初は複雑に感じますが、
          </p>

          <div className="bg-blue-50 rounded-2xl p-6 text-center font-bold leading-10">
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

          <p className="text-slate-700 leading-8 mt-6">
            という順番で考えれば、履修登録を整理しやすくなります。
          </p>

          <p className="text-slate-700 leading-8 mt-6">
            このページを履修登録前のチェックリストとして活用し、
            計画的に履修登録を行いましょう。
          </p>
        </div>

        {/* 出典 */}
        <div className="bg-slate-100 rounded-3xl p-8 mt-8 border border-slate-200">
          <h2 className="text-2xl font-black text-slate-800 mb-5">
            📌 出典・参考資料
          </h2>

          <p className="font-bold text-slate-700 leading-8">
            長崎大学『令和8年度 教養教育 学生便覧』
          </p>

          <p className="text-slate-600 leading-8 mt-4">
            本ページは上記学生便覧をもとに、新入生向けに
            教養教育・履修登録の考え方を整理したものです。
            学生便覧では、教養基礎科目、外国語科目、
            プラネタリーヘルス科目、選択科目等について説明されています。
          </p>

          <p className="text-sm text-slate-500 leading-7 mt-5">
            ※履修登録を行う際は、必ず大学が公開する最新の公式資料を確認してください。
          </p>
        </div>

      </div>
    </main>
  );
}