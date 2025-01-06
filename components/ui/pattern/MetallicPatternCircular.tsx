/**
 * 원형 패턴의 메탈릭 질감을 표현하는 패턴 컴포넌트
 * 방사형 그라데이션과 동심원 패턴으로 금속성 표면을 시각화
 * 
 * 스타일링 특징:
 * 1. 배경 그라데이션
 *    - bg-[radial]: 방사형 그라데이션 적용
 *    - from-white: 중심부 색상 (#FFFFFF)
 *    - via-gray-200: 중간 색상 (#E5E7EB)
 *    - to-gray-300: 외곽 색상 (#D1D5DB)
 * 
 * 2. 원형 패턴
 *    - repeating-radial-gradient: 동심원 형태의 반복 패턴
 *    - transparent에서 rgba(0,0,0,0.1)로 명암 변화
 *    - 3px 간격으로 패턴 반복하여 동심원 질감 표현
 *    - 추가적인 radial 그라데이션으로 입체감 강화
 * 
 * 3. 커스터마이징
 *    - className prop을 통해 크기, 모서리, 투명도 등 커스터마이징 가능
 */

interface MetallicPatternCircularProps {
    /** 
     * 추가적인 스타일링을 위한 클래스명
     * - 크기 조정: w-[size] h-[size]
     * - 모서리 처리: rounded-{size}
     * - 투명도 조정: opacity-{value}
     */
    className?: string;
}

/**
 * MetallicPatternCircular 컴포넌트
 * 원형 패턴의 메탈릭 질감 배경 패턴을 제공하는 순수 배경 컴포넌트
 * 
 * @example
 * ```tsx
 * <MetallicPatternCircular className="w-full h-full opacity-90" />
 * ```
 */
const MetallicPatternCircular = ({ className = '' }: MetallicPatternCircularProps) => {
    return (
        <div
            className={`
                bg-gradient-radial from-white via-gray-200 to-gray-300
                ${className}
            `.trim()}
            style={{
                backgroundImage: `
                    repeating-radial-gradient(circle at center, transparent 0px, rgba(0,0,0,0.1) 3px),
                    radial-gradient(circle at center, rgba(255,255,255,0.2), rgba(0,0,0,0.1))
                `
            }}
        />
    );
};

export default MetallicPatternCircular; 