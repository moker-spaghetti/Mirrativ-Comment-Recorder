# Mirrativ Comment Recorder(Chrome Extension)
Mirrativ上のコメントをjson形式で保存するChromeの拡張機能です。  

## 導入方法
ダウンロードしたzipファイルを解凍し、生成されたフォルダをchrome://extensionsにドラッグ&ドロップしてください。

## 使い方
Mirrativの生放送画面上で、この拡張機能のアイコンをクリックし、表示されたポップアップのstartボタンをクリックしてください。  
生放送終了後、同じ画面にあるstopボタンを押すことで、jsonファイルがダウンロードされます。　　
　　
consoleを確認しながら利用することを推奨します。  
また、出力されるjsonファイルは可読性が低いので、別途整形手段を準備することをお勧めします。

## データ形式
jsonファイル内には、info,com0,com1,com2,・・・という風にデータが保存されています。
info内にはコメント記録の開始時刻が保存されています。
また各com内には、コメントのcnt（通し番号）、time（時刻）、user（ユーザー名）、comment（コメント内容）が記録されています。

## 作者
twitter:<https://twitter.com/moker_spaghetti>  
blog:<https://moker-minecraft.blogspot.jp/>

## LICENSE
このソフトウェアは、MITライセンスのもとで配布されています。  
詳しくは、LICENSEをご覧ください。
また、このソフトウェアはMITライセンスが適用されているjqueryを使用しています。
jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license
