# 1. プロジェクトをビルド
Write-Host "--- Building the project... ---" -ForegroundColor Cyan
npm run build

# ビルドが失敗した場合は停止
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Exiting..." -ForegroundColor Red
    exit $LASTEXITCODE
}

# 2. live-server が入っているか確認し、なければインストール
if (-not (Get-Command live-server -ErrorAction SilentlyContinue)) {
    Write-Host "--- Installing live-server globally... ---" -ForegroundColor Yellow
    npm install -g live-server
}

# 3. サーバーを起動
Write-Host "--- Starting live-server... ---" -ForegroundColor Green
live-server dist --entry-file=404.html