
# DJS Support Bot
Discord.jsを使ったBOT開発に役立つBOTです。
MessageクラスやUserクラス等、デバッグする上で必要な情報を簡単に表示することができます。  

![プレビュー](https://cdn.discordapp.com/attachments/958791423161954445/1005697363626704896/unknown.png)  

# ✨Requirement
このBOTの動作には以下のnpmライブラリが必要です。

* discord.js@13.9.0
* dotenv@16.0.1

# 🔮Installation
① Release欄から最新バージョンのプログラムをダウンロードします。  
② ダウンロードしたフォルダでターミナルを開き、以下のコマンドを実行してライブラリをダウンロードします。(Node.jsが必要です)
```npm
npm i
```

# 💻Usage
このBOTを起動する前に、BOTのトークンを保存する`.env`とBOTの設定を保存する`config.json`の２つのファイルを用意する必要があります。

① `.env.sample`を開き、中に書いてある指示に従ってBOTのTOKENを入力し、保存します。  
その後、ファイル名を`.env`に変更します。  
(注意:tokenは漏洩するとサーバー荒らし等に使用される場合があるため、取り扱いには十分注意してください。)
```
BOT_TOKEN = ここにBOTのトークンを入力
```
② `config.json` を`index.js`と同じディレクトリに作成し、以下のコードを入力し、保存します。
```json
{
    "guildId": "976278385997266944",
    "guildCommand": true
}
```
`guildCommand`はスラッシュコマンドをGuildで登録するか否かをBooleanで、`guildId`には登録するサーバーのIDをStringで記入します。

③ 以上の設定が終わったら、ターミナルで `node .` と入力することでBOTの起動が可能です。