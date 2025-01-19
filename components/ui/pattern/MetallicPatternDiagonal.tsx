/**
 * 대각선 패턴의 메탈릭 질감을 표현하는 패턴 컴포넌트
 * 대각선 그라데이션과 사선 패턴으로 금속성 표면을 시각화
 *
 * 스타일링 특징:
 * 1. 배경 그라데이션
 *    - bg-gradient-to-tr: 우측 상단 방향(top-right)으로 그라데이션 적용
 *    - from-gray-300: 시작 색상 (#D1D5DB)
 *    - via-white: 중간 색상 (#FFFFFF)
 *    - to-gray-200: 종료 색상 (#E5E7EB)
 *
 * 2. 대각선 패턴
 *    - repeating-linear-gradient: 135도 각도의 단일 방향 반복 패턴
 *    - transparent에서 rgba(0,0,0,0.12)로 명암 변화
 *    - 4px 간격으로 패턴 반복하여 사선 질감 표현
 *    - 추가적인 top-right 방향 그라데이션으로 입체감 강화
 *
 * 3. 커스터마이징
 *    - className prop을 통해 크기, 모서리, 투명도 등 커스터마이징 가능
 */

interface MetallicPatternDiagonalProps {
  /**
   * 추가적인 스타일링을 위한 클래스명
   * - 크기 조정: w-[size] h-[size]
   * - 모서리 처리: rounded-{size}
   * - 투명도 조정: opacity-{value}
   */
  className?: string;
}

/**
 * MetallicPatternDiagonal 컴포넌트
 * 대각선 패턴의 메탈릭 질감 배경 패턴을 제공하는 순수 배경 컴포넌트
 *
 * @example
 * ```tsx
 * <MetallicPatternDiagonal className="w-full h-full opacity-90" />
 * ```
 */
const MetallicPatternDiagonal = ({ className = '' }: MetallicPatternDiagonalProps) => {
  return (
    <div
      className={`
                bg-gradient-to-tr from-gray-300 via-white to-gray-200
                ${className}
            `.trim()}
      style={{
        backgroundImage: `
                    repeating-linear-gradient(135deg, transparent 0px, rgba(0,0,0,0.12) 4px),
                    linear-gradient(to top right, rgba(255,255,255,0.2), rgba(0,0,0,0.12))
                `,
      }}
    />
  );
};

export default MetallicPatternDiagonal;
