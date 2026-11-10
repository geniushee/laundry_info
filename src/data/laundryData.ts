export interface StainInfo {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  waterTemp: string;
  detergent: string;
  keyRule: string;
  steps: string[];
  caution: string;
  colorTheme: string;
}

export interface FabricInfo {
  id: string;
  name: string;
  englishName: string;
  tag: string;
  characteristics: string[];
  recommendedWash: string;
  warning: string;
}

export const STAINS_DATA: StainInfo[] = [
  {
    id: 'coffee',
    name: '커피',
    category: '즉시 처리 및 세탁',
    shortDesc: '수용성 타닌 색소 얼룩으로 시간이 지날수록 고착되므로 빠른 대처가 핵심입니다.',
    waterTemp: '미온수 (30~40℃)',
    detergent: '주방세제 + 식초 (1:1 희석) 또는 중성세제',
    keyRule: '마르기 전 탄산수나 미온수로 두드려 흡수',
    steps: [
      '마른 티슈나 손수건으로 문지르지 말고 꾹 눌러 커피 수분을 즉시 흡수합니다.',
      '미온수에 주방세제와 식초를 1:1로 섞은 세제액을 얼룩 부위에 묻혀 톡톡 두드립니다.',
      '뒷면에 마른 천을 덧대고 깨끗한 물티슈나 젖은 천으로 색소를 찍어내듯 헹궈냅니다.'
    ],
    caution: '뜨거운 물은 커피의 단백질/타닌 성분을 옷감에 완전히 고착시킬 수 있으니 피하세요.',
    colorTheme: '#8D6E63'
  },
  {
    id: 'wine',
    name: '와인',
    category: '색소 얼룩',
    shortDesc: '안토시아닌 적색 색소가 섬유에 깊게 침투하므로 산성/알칼리 중화가 필요합니다.',
    waterTemp: '미온수',
    detergent: '베이킹소다 + 식초 또는 과탄산소다 (흰옷 전용)',
    keyRule: '소금을 뿌려 흡수시키거나 탄산수로 즉시 두드림',
    steps: [
      '와인이 묻은 직후 마른 종이타월로 가볍게 눌러 번짐을 막습니다.',
      '탄산수를 얼룩 부위에 붓고 가볍게 두드려 기포와 함께 색소를 빼냅니다.',
      '얼룩이 남았다면 주방세제와 식초를 섞어 바른 후 10분 뒤 미온수로 헹굽니다.'
    ],
    caution: '레드와인 얼룩을 일반 알칼리 비누로 바로 문지르면 푸르스름하게 변색되어 지워지지 않습니다.',
    colorTheme: '#C2185B'
  },
  {
    id: 'kimchi',
    name: '김치',
    category: '양념 및 색소',
    shortDesc: '고춧가루 캡사이신 색소와 동물성/식물성 기름 양념이 결합된 복합 얼룩입니다.',
    waterTemp: '미온수',
    detergent: '주방세제 + 양파즙 또는 과탄산소다',
    keyRule: '주방세제로 유분 분해 후 햇빛에 바짝 말려 색소 분해',
    steps: [
      '주방세제(원액)를 얼룩에 직접 바르고 손끝으로 살살 문질러 양념 기름기를 녹여냅니다.',
      '따뜻한 물로 세제와 기름 잔여물을 헹궈냅니다.',
      '세탁 후 직사광선(햇볕)에 말리면 자외선에 의해 고추 색소(카로티노이드)가 자연 산화 소멸합니다.'
    ],
    caution: '찬물에 일반 세탁기만 바로 돌리면 붉은 기름 테두리가 영구적으로 남을 수 있습니다.',
    colorTheme: '#E53935'
  },
  {
    id: 'oil',
    name: '기름',
    category: '유분 제거',
    shortDesc: '삼겹살, 식용유, 참기름 등 소수성 유분으로 물만으로는 전혀 제거되지 않습니다.',
    waterTemp: '온수 (40~50℃)',
    detergent: '주방세제(강력 계면활성제) + 베이킹소다',
    keyRule: '물을 묻히기 전 주방세제 원액을 바로 도포',
    steps: [
      '물을 묻히기 전, 마른 상태의 얼룩에 베이킹소다나 밀가루를 뿌려 겉기름을 흡수시킵니다.',
      '주방세제 원액을 오염 부위에 넉넉히 발라 5~10분간 유분을 유화시킵니다.',
      '섬유가 견디는 한 가장 따뜻한 물로 주방세제를 충분히 비벼 헹궈냅니다.'
    ],
    caution: '물에 먼저 담그면 기름막이 섬유 전체로 번지므로 반드시 마른 상태에서 세제 처리를 시작하세요.',
    colorTheme: '#FFA000'
  },
  {
    id: 'blood',
    name: '혈액',
    category: '단백질 오염',
    shortDesc: '혈액 속 헤모글로빈과 알부민 단백질로 이루어져 열에 극도로 취약합니다.',
    waterTemp: '반드시 찬물 (30℃ 이하)',
    detergent: '과산화수소(소독용 에탄올 대안) 또는 효소 세제/소금물',
    keyRule: '절대 온수를 사용하지 말 것 (단백질 응고 방지)',
    steps: [
      '흐르는 찬물에 얼룩 부위를 대고 수압으로 혈액을 최대한 씻어냅니다.',
      '약국용 소독용 과산화수소를 화장솜에 묻혀 톡톡 두드리면 거품이 일며 혈색소가 분해됩니다.',
      '찬물에 소금을 푼 물에 20~30분 담갔다가 비누로 비벼 헹굽니다.'
    ],
    caution: '미온수나 뜨거운 물이 닿는 순간 단백질이 계란 프라이처럼 응고되어 영구 고착됩니다.',
    colorTheme: '#B71C1C'
  },
  {
    id: 'chocolate',
    name: '초콜릿',
    category: '복합오염',
    shortDesc: '카카오 버터(유분), 당분(수용성), 카카오 색소가 섞인 대표적 복합 오염입니다.',
    waterTemp: '미온수 (35℃ 안팎)',
    detergent: '주방세제 + 과탄산소다',
    keyRule: '먼저 겉 표면을 긁어낸 뒤 유분부터 단계적 용해',
    steps: [
      '굳은 초콜릿 덩어리를 숟가락이나 버터나이프로 조심스럽게 긁어냅니다.',
      '주방세제를 발라 5분간 두어 카카오 버터 지방 성분을 녹입니다.',
      '미온수에 산소계 표백제나 세탁세제를 풀어 10분간 담근 뒤 부드럽게 비벼 세탁합니다.'
    ],
    caution: '비비면서 닦으면 초콜릿이 섬유 올 사이로 깊숙이 박히므로 긁어낸 후 두드려 제거하세요.',
    colorTheme: '#5D4037'
  },
  {
    id: 'ink',
    name: '잉크',
    category: '잉크 종류별',
    shortDesc: '수성/유성/젤 잉크에 따라 용매가 다르며 마찰에 의해 번지기 쉽습니다.',
    waterTemp: '미온수',
    detergent: '소독용 알코올(에탄올) 또는 아세톤(폴리에스터 주의) / 주방세제',
    keyRule: '물 대신 알코올로 유성 용매를 먼저 용출',
    steps: [
      '얼룩 뒷면에 깨끗한 키친타월을 여러 겹 덧댑니다.',
      '화장솜이나 면봉에 소독용 에탄올이나 물파스를 묻혀 톡톡 찍어냅니다.',
      '색소가 아래 종이로 스며들면 주방세제를 소량 묻혀 잔여 색소를 미온수로 헹궈냅니다.'
    ],
    caution: '아세톤은 아세테이트나 일부 합성섬유를 녹이므로 사용 전 눈에 안 띄는 곳에 테스트하세요.',
    colorTheme: '#1565C0'
  },
  {
    id: 'cosmetics',
    name: '화장품',
    category: '유분 및 색소',
    shortDesc: '파운데이션, 립스틱 등 실리콘 오일과 인공 안료가 결합된 지용성 오염입니다.',
    waterTemp: '미온수',
    detergent: '클렌징 오일/워터 또는 면도 크림 / 주방세제',
    keyRule: '얼굴 화장 지우듯 클렌징 제형으로 유분 분해',
    steps: [
      '얼룩 부위에 클렌징 오일이나 주방세제를 살짝 도포합니다.',
      '화장솜으로 밖에서 안쪽으로 살살 굴리듯 문질러 색소를 떠오르게 합니다.',
      '미온수를 묻혀 유화(우윳빛)시킨 뒤 깨끗이 비벼 씻어냅니다.'
    ],
    caution: '물티슈로 세게 문지르면 오일 성분이 섬유 속 깊숙이 넓게 번질 수 있습니다.',
    colorTheme: '#D81B60'
  },
  {
    id: 'mud',
    name: '흙',
    category: '입자성 오염',
    shortDesc: '모래와 진흙은 물에 녹지 않는 불용성 미세 입자로, 젖은 채 비비면 악화됩니다.',
    waterTemp: '미온수',
    detergent: '일반 세탁비누 또는 베이킹소다',
    keyRule: '완전히 바짝 말린 뒤 털어내고 세탁 시작',
    steps: [
      '절대 젖은 상태에서 문지르지 말고, 드라이기 등으로 흙탕물을 완전히 바짝 말립니다.',
      '손이나 솔로 톡톡 털어 섬유 표면의 굳은 흙가루를 80% 이상 털어냅니다.',
      '남은 얼룩에 비누를 칠하고 미온수에서 솔로 부드럽게 결 방향으로 빗어내듯 세탁합니다.'
    ],
    caution: '젖어 있을 때 문지르면 진흙 미세입자가 섬유 실 틈새로 영구적으로 박히게 됩니다.',
    colorTheme: '#6D4C41'
  },
  {
    id: 'sweat',
    name: '땀',
    category: '황변 및 냄새관리',
    shortDesc: '피지(기름), 염분, 단백질이 복합 누적되어 산화되면 누런 황변과 냄새를 유발합니다.',
    waterTemp: '온수 (40~50℃)',
    detergent: '과탄산소다(산소계 표백제) + 중성세제 / 식초',
    keyRule: '과탄산소다 온수 침지로 산화 피지와 누런 색소 분해',
    steps: [
      '50℃ 정도의 온수에 과탄산소다 1큰술과 중성세제를 완전히 녹입니다.',
      '황변된 옷을 20~30분간 푹 담가 산소 방울로 찌든 때를 불려냅니다.',
      '마지막 헹굼물에 식초를 한 스푼 넣어 세제 잔여물을 중화하고 냄새를 완전히 잡습니다.'
    ],
    caution: '과탄산소다는 동물성 섬유(울, 실크)에 사용하면 옷감이 녹거나 손상되니 주의하세요.',
    colorTheme: '#00897B'
  }
];

export const FABRICS_DATA: FabricInfo[] = [
  {
    id: 'cotton',
    name: '면 (Cotton)',
    englishName: 'Natural Plant Fiber',
    tag: '기본 & 일상',
    characteristics: ['우수한 흡습성과 통기성', '열과 마찰에 강함', '잦은 세탁에 적합'],
    recommendedWash: '미온수 또는 40℃ 세탁 / 일반 세탁기 표준코스',
    warning: '고온 건조기 사용 시 수축(줄어듦)이 발생할 수 있습니다.'
  },
  {
    id: 'linen',
    name: '린넨 (Linen)',
    englishName: 'Natural Flax Fiber',
    tag: '여름 & 통기성',
    characteristics: ['땀 흡수와 건조가 매우 빠름', '시원한 감촉과 내구성', '자연스러운 구김'],
    recommendedWash: '30℃ 이하 미온수 / 울코스 또는 손세탁 / 중성세제',
    warning: '탈수를 강하게 하면 심한 구김과 섬유 꺾임이 생깁니다.'
  },
  {
    id: 'wool',
    name: '울 / 모 (Wool)',
    englishName: 'Animal Protein Fiber',
    tag: '보온 & 고급',
    characteristics: ['뛰어난 보온성과 탄력', '수분을 튕겨내는 특성', '단백질 섬유'],
    recommendedWash: '30℃ 미온수 / 울샴푸(중성세제) / 약한 손세탁 또는 드라이클리닝',
    warning: '알칼리성 세제(과탄산소다/비누) 및 온수 사용 시 펠트화(수축/뭉침) 발생.'
  },
  {
    id: 'silk',
    name: '실크 / 견 (Silk)',
    englishName: 'Natural Silk Protein',
    tag: '광택 & 민감',
    characteristics: ['은은한 천연 광택과 부드러움', '가볍고 피부 자극이 적음', '마찰에 약함'],
    recommendedWash: '찬물 / 실크 전용 중성세제 / 가볍게 흔들어 세탁 또는 드라이클리닝',
    warning: '직사광선에 황변되며, 물방울 얼룩(워터스팟)이 잘 생기니 즉시 건조 필수.'
  },
  {
    id: 'polyester',
    name: '합성섬유 (Polyester / Nylon)',
    englishName: 'Synthetic Fiber',
    tag: '구김 방지 & 스포츠',
    characteristics: ['구김이 잘 가지 않고 빠른 건조', '마찰과 당김에 매우 강함', '정전기 발생'],
    recommendedWash: '미온수 세탁 / 일반 액체세제 / 섬유유연제 사용 권장',
    warning: '기름때를 잘 흡착하므로 기름 얼룩 시 즉시 분리 세탁 필요.'
  },
  {
    id: 'down',
    name: '패딩 / 기능성 (Down & Functional)',
    englishName: 'Technical Outerwear',
    tag: '아웃도어 & 다운',
    characteristics: ['발수/방수 멤브레인', '다운 충전재 보온 공기층', '열과 마찰에 민감'],
    recommendedWash: '미온수 / 아웃도어 전용 중성세제 / 단독 단시간 세탁',
    warning: '섬유유연제, 표백제, 드라이클리닝 절대 금지 (발수 코팅 및 깃털 유분 파괴).'
  }
];

