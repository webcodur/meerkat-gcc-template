/**
 * 메탈릭한 브러쉬 질감을 표현하는 패턴 컴포넌트
 * 그라데이션과 교차하는 선형 패턴으로 금속성 표면을 시각화
 * 
 * 스타일링 특징:
 * 1. 배경 그라데이션
 *    - bg-gradient-to-br: 우측 하단 방향(bottom-right)으로 그라데이션 적용
 *    - from-gray-300: 시작 색상 (#D1D5DB)
 *    - via-white: 중간 색상 (#FFFFFF)
 *    - to-gray-200: 종료 색상 (#E5E7EB)
 * 
 * 2. 브러쉬 패턴
 *    - repeating-linear-gradient: 45도/-45도 각도로 교차하는 반복 패턴
 *    - transparent에서 rgba(0,0,0,0.1)로 명암 변화
 *    - 2px 간격으로 패턴 반복하여 섬세한 금속 질감 표현
 *    - 추가적인 bottom-right 방향 그라데이션으로 입체감 강화
 * 
 * 3. 커스터마이징
 *    - className prop을 통해 크기, 모서리, 투명도 등 커스터마이징 가능
 */

interface MetallicPatternBrushedProps {
    /** 
     * 추가적인 스타일링을 위한 클래스명
     * - 크기 조정: w-[size] h-[size]
     * - 모서리 처리: rounded-{size}
     * - 투명도 조정: opacity-{value}
     */
    className?: string;
}

/**
 * MetallicPatternBrushed 컴포넌트
 * 메탈릭한 브러쉬 질감의 배경 패턴을 제공하는 순수 배경 컴포넌트
 * 
 * @example
 * ```tsx
 * <MetallicPatternBrushed className="w-full h-full opacity-90" />
 * ```
 */
const MetallicPatternBrushed = ({ className = '' }: MetallicPatternBrushedProps) => {
    return (
        <div
            className={`
                bg-gradient-to-br from-gray-300 via-white to-gray-200
                ${className}
            `.trim()}
            style={{
                backgroundImage: `
                    repeating-linear-gradient(45deg, transparent 0px, rgba(0,0,0,0.1) 2px),
                    repeating-linear-gradient(-45deg, transparent 0px, rgba(0,0,0,0.1) 2px),
                    linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(0,0,0,0.1))
                `
            }}
        />
    );
};

export default MetallicPatternBrushed;