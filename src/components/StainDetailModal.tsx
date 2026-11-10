import React, { useEffect } from 'react';
import type { StainInfo } from '../data/laundryData';
import { StainIcon } from './StainIcons';

interface StainDetailModalProps {
  stain: StainInfo | null;
  onClose: () => void;
}

export const StainDetailModal: React.FC<StainDetailModalProps> = ({ stain, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (stain) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [stain, onClose]);

  if (!stain) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* 모달 헤더 */}
        <div className="modal-header" style={{ borderTop: `5px solid ${stain.colorTheme}` }}>
          <div className="modal-title-wrap">
            <div className="modal-icon-badge" style={{ backgroundColor: `${stain.colorTheme}15` }}>
              <StainIcon id={stain.id} color={stain.colorTheme} size={40} />
            </div>
            <div>
              <div className="modal-category" style={{ color: stain.colorTheme }}>
                {stain.category}
              </div>
              <h2 id="modal-title" className="modal-title">{stain.name} 얼룩 응급 처방법</h2>
            </div>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="닫기">
            ✕
          </button>
        </div>

        {/* 모달 바디 */}
        <div className="modal-body">
          {/* 핵심 요약 배너 */}
          <div className="modal-summary-banner" style={{ borderColor: `${stain.colorTheme}40` }}>
            <span className="banner-tag">핵심 포인트</span>
            <p className="banner-text">{stain.keyRule}</p>
          </div>

          <p className="modal-desc">{stain.shortDesc}</p>

          {/* 주요 가이드 스펙 */}
          <div className="modal-spec-grid">
            <div className="spec-card">
              <span className="spec-label">권장 물 온도</span>
              <strong className="spec-value">{stain.waterTemp}</strong>
            </div>
            <div className="spec-card">
              <span className="spec-label">추천 세제 / 용매</span>
              <strong className="spec-value">{stain.detergent}</strong>
            </div>
          </div>

          {/* 3단계 대처 절차 */}
          <div className="modal-section">
            <h3 className="section-subtitle">단계별 해결 순서</h3>
            <ol className="step-list">
              {stain.steps.map((step, idx) => (
                <li key={idx} className="step-item">
                  <span className="step-num" style={{ backgroundColor: stain.colorTheme }}>
                    {idx + 1}
                  </span>
                  <span className="step-content">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* 주의사항 (경고) */}
          <div className="modal-caution-box">
            <div className="caution-title">⚠️ 이것만은 절대 주의하세요</div>
            <p className="caution-text">{stain.caution}</p>
          </div>
        </div>

        {/* 모달 푸터 */}
        <div className="modal-footer">
          <button type="button" className="btn-confirm" onClick={onClose}>
            확인 완료
          </button>
        </div>
      </div>
    </div>
  );
};
