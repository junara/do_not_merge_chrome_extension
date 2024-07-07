# Do not merge chrome extension
![CleanShot 2024-07-08 at 01 06 05@2x](https://github.com/junara/do_not_merge_chrome_extension/assets/17272426/0db052ec-bbd6-44bc-8e86-c27f3750341a)

## プロジェクトの説明
Do not merge chrome extensionは、開発者たちが誤ってGitHubのマージボタンを押すのを防止するためのChrome拡張機能です。
24時までの設定時間範囲内でマージモードを無効にする力を持っています。
![CleanShot 2024-07-08 at 01 07 55@2x](https://github.com/junara/do_not_merge_chrome_extension/assets/17272426/73866eaa-8513-47c0-b323-77a0830fcade)

## セットアップ
Chrome webストアから当プラグインを検索・インストールしたら、以下の手順に従って設定します:

1. Chromeの設定から拡張機能へ移動し、そこで開発者モードをオンにします。
2. パッケージ化されていない拡張機能を読み込むをクリックし、当該拡張機能のフォルダを選択します。
3. 拡張機能が追加され、アイコンが表示されます。
4. `以下の時間から24時まではマージボタンを押せない`のチェックボックスにチェックを入れ、マージを禁止する開始時間を入力します。
5. 入力が完了したらSaveボタンをクリックします。

再起動後も設定は保存され、有効時間内にはマージボタンが無効化されます。

## ライセンス
このプロジェクトはMITのライセンスに従います。
詳細は[LICENSE](LICENSE)をご覧ください。
