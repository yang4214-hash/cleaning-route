export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { origin, destination } = req.query;
  if (!origin || !destination) {
    return res.status(400).json({ error: 'origin, destination 파라미터 필요' });
  }

  const appKey = process.env.KAKAO_REST_API_KEY;
  if (!appKey) {
    return res.status(500).json({ error: 'API 키 없음' });
  }

  try {
    const url = `https://apis-navi.kakaomobility.com/v1/directions?origin=${origin}&destination=${destination}&priority=RECOMMEND`;
    const response = await fetch(url, {
      headers: { 'Authorization': `KakaoAK ${appKey}` }
    });
    const data = await response.json();
    return res.status(200).json(data);
  } catch(e) {
    return res.status(500).json({ error: e.message });
  }
}
