export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { origin, destination } = req.query;

  if (!origin || !destination) {
    return res.status(400).json({ error: 'origin과 destination이 필요합니다.' });
  }

  try {
    const response = await fetch(
      `https://apis-navi.kakaomobility.com/v1/directions?origin=${origin}&destination=${destination}&summary=false`,
      {
        headers: {
          'Authorization': `KakaoAK ${process.env.KAKAO_REST_API_KEY}`
        }
      }
    );

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: '경로 조회 실패', detail: error.message });
  }
}
