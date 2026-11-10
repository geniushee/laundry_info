import { useState, useMemo } from 'react';
import { STAINS_DATA, FABRICS_DATA } from './data/laundryData';
import type { StainInfo, FabricInfo } from './data/laundryData';
import { StainIcon } from './components/StainIcons';
import { StainDetailModal } from './components/StainDetailModal';
import { FabricDetailModal } from './components/FabricDetailModal';
import './App.css';

export function App() {
  const [selectedStain, setSelectedStain] = useState<StainInfo | null>(null);
  const [selectedFabric, setSelectedFabric] = useState<FabricInfo | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // 검색 필터링
  const filteredStains = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return STAINS_DATA;
    return STAINS_DATA.filter(
      (stain) =>
        stain.name.toLowerCase().includes(query) ||
        stain.category.toLowerCase().includes(query) ||
        stain.shortDesc.toLowerCase().includes(query)
    );
  }, [searchTerm]);

  return (
    <div className="laundry-app">
      {/* 글로벌 상단 내비게이션 바 */}
      <header className="site-header">
        <div className="header-inner">
          <div className="logo-group">
            <span className="logo-icon" aria-hidden="true">🧺</span>
            <div className="logo-text-wrap">
              <span className="logo-title">세탁생활연구소</span>
              <span className="logo-badge">Laundry Info</span>
            </div>
          </div>
          <nav className="header-nav">
            <a href="#stains-section" className="nav-link active">오염물질 응급처치</a>
            <a href="#fabrics-section" className="nav-link">섬유별 세탁가이드</a>
          </nav>
        </div>
      </header>

      {/* 메인 히어로 섹션 */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-subheading">옷감 손상 없는 골든타임 얼룩 제거</span>
          <h1 className="hero-title">
            옷에 무엇이 묻었나요?<br />
            <span className="highlight-text">오염물질을 선택</span>하고 즉시 해결하세요.
          </h1>
          <p className="hero-desc">
            얼룩은 원인 물질의 성질(수용성·지용성·단백질·불용성)에 따라 세탁법이 완전히 달라집니다.<br />
            해당 아이콘을 클릭하여 올바른 물 온도와 맞춤 세제 솔루션을 확인해보세요.
          </p>

          {/* 간편 검색창 */}
          <div className="search-box-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="오염물질 검색 (예: 커피, 김치, 피, 기름 등)..."
              className="search-input"
              aria-label="오염물질 검색"
            />
            {searchTerm && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchTerm('')}
                aria-label="검색어 지우기"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 1. 핵심 섹션: 오염물질 3열 x행 정사각형 아이콘 그리드 */}
      <main id="stains-section" className="stains-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">주요 오염물질 응급처방</h2>
            <p className="section-caption">직관적인 3열 정사각형 카드를 클릭하면 상세 세탁법이 열립니다.</p>
          </div>
          <div className="stain-count-badge">총 {filteredStains.length}종 가이드</div>
        </div>

        {/* 3열 x행 정사각형 그리드 */}
        <div className="stains-grid">
          {filteredStains.map((stain) => (
            <button
              key={stain.id}
              type="button"
              className="stain-square-card"
              onClick={() => setSelectedStain(stain)}
              style={
                {
                  '--card-theme': stain.colorTheme,
                } as React.CSSProperties
              }
            >
              {/* 상단 카테고리 태그 */}
              <span className="card-category-tag">{stain.category}</span>

              {/* 중앙 원형 아이콘 영역 */}
              <div className="card-icon-wrapper">
                <StainIcon id={stain.id} color={stain.colorTheme} size={56} />
              </div>

              {/* 하단 요소 명칭 및 내용 */}
              <div className="card-info">
                <h3 className="card-stain-name">{stain.name}</h3>
                <span className="card-action-hint">처치법 보기 →</span>
              </div>
            </button>
          ))}
        </div>

        {filteredStains.length === 0 && (
          <div className="no-result-box">
            <p>"{searchTerm}"에 해당하는 오염물질을 찾지 못했습니다.</p>
            <button type="button" className="btn-secondary" onClick={() => setSearchTerm('')}>
              전체 목록 보기
            </button>
          </div>
        )}
      </main>

      {/* 2. 하단 섹션: 섬유별 특징 카드형 링크 */}
      <section id="fabrics-section" className="fabrics-section">
        <div className="section-header">
          <div>
            <span className="section-kicker">Fabric Guide</span>
            <h2 className="section-title">섬유별 특징 & 세탁 주의사항</h2>
            <p className="section-caption">
              오염을 지울 때 가장 중요한 것은 옷감의 섬유 소재입니다. 옷감의 성질을 미리 확인하세요.
            </p>
          </div>
        </div>

        {/* 섬유 카드형 링크 리스트 */}
        <div className="fabrics-card-grid">
          {FABRICS_DATA.map((fabric) => (
            <div
              key={fabric.id}
              className="fabric-card"
              role="button"
              tabIndex={0}
              onClick={() => setSelectedFabric(fabric)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedFabric(fabric);
                }
              }}
            >
              <div className="fabric-card-top">
                <span className="fabric-card-tag">{fabric.tag}</span>
                <span className="fabric-card-arrow" aria-hidden="true">↗</span>
              </div>

              <h3 className="fabric-card-name">{fabric.name}</h3>
              <p className="fabric-card-eng">{fabric.englishName}</p>

              <ul className="fabric-card-bullets">
                {fabric.characteristics.slice(0, 2).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="fabric-card-footer">
                <span className="wash-hint-label">추천 세탁:</span>
                <span className="wash-hint-val">{fabric.recommendedWash.split('/')[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 세탁 3대 황금 원칙 팁 배너 */}
      <section className="golden-rules-section">
        <div className="golden-rules-card">
          <h3 className="rules-title">💡 얼룩 제거 3대 황금 법칙</h3>
          <div className="rules-grid">
            <div className="rule-item">
              <span className="rule-badge">원칙 1</span>
              <h4>비비지 말고 두드리기</h4>
              <p>문지르면 얼룩이 섬유 조직 깊숙이 퍼집니다. 항상 톡톡 두드려 흡수시키세요.</p>
            </div>
            <div className="rule-item">
              <span className="rule-badge">원칙 2</span>
              <h4>단백질/피는 무조건 찬물</h4>
              <p>혈액, 우유, 계란 등은 따뜻한 물이 닿으면 단백질이 굳어 평생 지워지지 않습니다.</p>
            </div>
            <div className="rule-item">
              <span className="rule-badge">원칙 3</span>
              <h4>기름얼룩엔 물보다 주방세제</h4>
              <p>기름은 물을 튕겨냅니다. 마른 상태에서 계면활성제(주방세제)를 먼저 도포하세요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="site-footer">
        <div className="footer-inner">
          <p className="footer-title">세탁생활연구소 (Laundry Info)</p>
          <p className="footer-disclaimer">
            본 사이트의 세탁 가이드는 일반적인 섬유 및 오염 기준이며, 의류 안쪽에 부착된 <strong>세탁 취급 표시 라벨(케어라벨)</strong>이 항상 최우선 기준입니다.
          </p>
          <p className="footer-copy">© 2026 Laundry Info. All rights reserved.</p>
        </div>
      </footer>

      {/* 모달 창들 */}
      <StainDetailModal
        stain={selectedStain}
        onClose={() => setSelectedStain(null)}
      />
      <FabricDetailModal
        fabric={selectedFabric}
        onClose={() => setSelectedFabric(null)}
      />
    </div>
  );
}

export default App;
