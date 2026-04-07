#!/bin/bash
# 実行されたファイルの場所（プロジェクトフォルダ）に移動
cd "$(dirname "$0")"

echo "🎸 Wake Up! Starting Rock Spirits Dev Server... 🔥"

# サーバー起動
npm run dev