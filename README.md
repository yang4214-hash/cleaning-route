# 청소 동선 플래너

카카오 지도 API 기반 청소업 최적 동선 계산 웹앱

## 배포 방법

### 1단계 — GitHub에 올리기
1. https://github.com 가입 (구글 계정 연동 가능)
2. 우측 상단 + → "New repository" 클릭
3. Repository name: `cleaning-route`
4. Public 선택 → "Create repository"
5. "uploading an existing file" 클릭
6. 이 폴더 안의 파일들을 모두 드래그 앤 드롭
   - public/index.html
   - api/directions.js
   - vercel.json
7. "Commit changes" 클릭

### 2단계 — Vercel에 배포하기
1. https://vercel.com 가입 (GitHub 계정으로 로그인)
2. "Add New Project" → GitHub의 cleaning-route 선택
3. "Deploy" 클릭 (설정 변경 없이 그대로)
4. 배포 완료 후 Settings → Environment Variables 에서 아래 두 개 추가:
   - NAVER_CLIENT_ID = (네이버 클라우드 Client ID)
   - NAVER_CLIENT_SECRET = (네이버 클라우드 Client Secret)
5. Deployments 탭 → 최신 배포 우클릭 → "Redeploy"

### 3단계 — 네이버 클라우드 설정
배포 완료 후 Vercel이 제공한 URL (예: cleaning-route.vercel.app)을
네이버 클라우드 콘솔 → Application → 서비스 URL에 추가

## 사용 API
- 네이버 지도 Maps API (지도 표시, 지오코딩)
- 네이버 Directions 5 API (경로 계산)
