export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { start, goal } = req.query;
  if (!start || !goal) {
    return res.status(400).json({ error: 'start, goal 파라미터 필요' });
  }

  const clientId = process.env.NAVER_CLIENT_ID;
  const clientSecret = process.env.NAVER_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).json({ error: 'API 키가 설정되지 않았습니다.' });
  }

  try {
    const url = `https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving?start=${start}&goal=${goal}&option=traoptimal`;

    const response = await fetch(url, {
      headers: {
        'X-NCP-APIGW-API-KEY-ID': clientId,
        'X-NCP-APIGW-API-KEY': clientSecret,
      }
    });

    const data = await response.json();
    return res.status(200).json(data);

  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
