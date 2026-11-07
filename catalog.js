/* Coder之影音沉浸世界｜預設作品清單
 * 這裡的作品直接放在網站資料夾內，會固定顯示在首頁。
 * 之後用管理員後台貼 IG / FB / YouTube 網址新增的作品，會和這些預設作品一起顯示。
 *
 * 新增一筆預設作品：複製下面任一筆、改欄位，檔案放進對應資料夾後重新部署即可。
 *   id          唯一代號（英數字與 - ，不可重複）
 *   category    anime（動畫）/ game（小遊戲）/ vr / music（音樂）
 *   contentUrl  檔案路徑（相對於 index.html，檔名請用小寫英數字與 -）
 *   thumbnail   封面圖路徑（選填）
 *   aspect      動畫影片比例：v916 直式 / h169 橫式（選填）
 *   linkOnly    true = 點擊後在新分頁開啟 contentUrl（適合無法嵌入的外部連結）
 * 同一個分類中，排在越上面的越先顯示。
 */
window.CODER_CATALOG = [
  /* ===== 動畫影片 ===== */
  { id: 'shen-mi-guo-du-ep01', category: 'anime', title: '神秘國度EP01', platform: 'mp4', aspect: 'v916',
    contentUrl: 'media/anime/shen-mi-guo-du-ep01.mp4', thumbnail: 'media/thumbs/shen-mi-guo-du-ep01.jpg' },
  { id: 'wo-xiang-fei', category: 'anime', title: '我想飛', platform: 'mp4', aspect: 'v916',
    contentUrl: 'media/anime/wo-xiang-fei.mp4', thumbnail: 'media/thumbs/wo-xiang-fei.jpg' },
  { id: 'a-guai-ben-pao', category: 'anime', title: '阿怪奔跑', platform: 'mp4', aspect: 'h169',
    contentUrl: 'media/anime/a-guai-ben-pao.mp4', thumbnail: 'media/thumbs/a-guai-ben-pao.jpg' },

  /* ===== 前端小遊戲 ===== */
  { id: 'breakout', category: 'game', title: '打磚塊遊戲', description: '經典打磚塊小遊戲', platform: 'web',
    contentUrl: 'games/breakout/index.html', thumbnail: 'media/thumbs/breakout.jpg' },
  { id: 'tennis', category: 'game', title: '網球小遊戲', description: '3D 黑貓網球挑戰賽', platform: 'web',
    contentUrl: 'games/tennis/index.html', thumbnail: 'media/thumbs/tennis.jpg' },

  /* ===== 虛擬實境（linkOnly = 點擊後在新分頁開啟外部連結，不嵌入） ===== */
  { id: 'ling-yang-xia-gu', category: 'vr', title: '羚羊峽谷', platform: 'web', subtype: 'webxr', linkOnly: true, linkLabel: 'Makar VR',
    description: '點擊後會嘗試開啟 Makar App 播放（建議用手機，並已安裝 Makar App）。',
    contentUrl: 'https://ssl-api-makar-v3-apps.miflyservice.com/Makar/deeplink?projectId=38868391-2a79-4546-8e22-ae883df86180&projectType=vr&url=mifly%3A%2F%2Fmakar%2F%3Fopenpage%3DProjectPlayPage',
    thumbnail: 'media/thumbs/ling-yang-xia-gu.jpg' },

  /* ===== 音樂（MV 影片，1:1） ===== */
  { id: 'xin-zheng-sheng-kai-zhe-hua', category: 'music', title: '心正盛開著花', platform: 'mp4',
    contentUrl: 'media/music/xin-zheng-sheng-kai-zhe-hua.mp4', thumbnail: 'media/thumbs/xin-zheng-sheng-kai-zhe-hua.jpg' },
  { id: 'ming-tian-zheng-xiang-wo-zou-lai', category: 'music', title: '明天正向我走來', platform: 'mp4',
    contentUrl: 'media/music/ming-tian-zheng-xiang-wo-zou-lai.mp4', thumbnail: 'media/thumbs/ming-tian-zheng-xiang-wo-zou-lai.jpg' },
  { id: 'hua-ban-luo-xia-de-shi-hou', category: 'music', title: '花瓣落下的時候', platform: 'mp4',
    contentUrl: 'media/music/hua-ban-luo-xia-de-shi-hou.mp4', thumbnail: 'media/thumbs/hua-ban-luo-xia-de-shi-hou.jpg' }
];
