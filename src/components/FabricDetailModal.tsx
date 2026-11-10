import React, { useEffect } from 'react';
import type { FabricInfo } from '../data/laundryData';

interface FabricDetailModalProps {
  fabric: FabricInfo | null;
  onClose: () => void;
}

export const FabricDetailModal: React.FC<FabricDetailModalProps> = ({ fabric, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (fabric) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [fabric, onClose]);

  if (!fabric) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="fabric-modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="fabric-pill">{fabric.tag}</span>
            <h2 id="fabric-modal-title" className="modal-title" style={{ marginTop: '6px' }}>
              {fabric.name}
            </h2>
            <span style={{ fontSize: '13px', color: '#6b7280' }}>{fabric.englishName}</span>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="닫기">
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3 className="section-subtitle">주요 섬유 특징</h3>
            <ul className="fabric-feature-list">
              {fabric.characteristics.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>

          <div className="modal-spec-grid" style={{ marginTop: '16px' }}>
            <div className="spec-card">
              <span className="spec-label">권장 세탁 코스 & 물</span>
              <strong className="spec-value">{fabric.recommendedWash}</strong>
            </div>
          </div>

          <div className="modal-caution-box" style={{ marginTop: '16px' }}>
            <div className="caution-title">⚠️ 관리 시 특별 주의사항</div>
            <p className="caution-text">{fabric.warning}</p>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-confirm" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
