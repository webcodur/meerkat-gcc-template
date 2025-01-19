'use client';

import React, { useState } from 'react';
import BasicAnimation from '@/components/view/labs/framerMotion/BasicAnimation';
import DragAnimation from '@/components/view/labs/framerMotion/DragAnimation';
import ScrollAnimation from '@/components/view/labs/framerMotion/ScrollAnimation';
import GestureAnimation from '@/components/view/labs/framerMotion/GestureAnimation';
import KeyframeAnimation from '@/components/view/labs/framerMotion/KeyframeAnimation';
import LayoutAnimation from '@/components/view/labs/framerMotion/LayoutAnimation';
import PathAnimation from '@/components/view/labs/framerMotion/PathAnimation';
import TransitionAnimation from '@/components/view/labs/framerMotion/TransitionAnimation';
import ViewportAnimation from '@/components/view/labs/framerMotion/ViewportAnimation';

// Framer Motion의 주요 기능별로 탭을 구성
const tabs = [
  {
    id: 'basic',
    label: '기본 애니메이션',
    component: BasicAnimation,
    description: '기본적인 모션 속성(x, y, scale, rotate)과 애니메이션 제어 방법을 설명합니다.',
  },
  {
    id: 'transition',
    label: '트랜지션',
    component: TransitionAnimation,
    description: '다양한 전환 효과(spring, tween, inertia)와 타이밍 함수를 소개합니다.',
  },
  {
    id: 'gesture',
    label: '제스처',
    component: GestureAnimation,
    description: 'hover, tap, pan 등 사용자 인터랙션에 반응하는 애니메이션을 구현합니다.',
  },
  {
    id: 'drag',
    label: '드래그',
    component: DragAnimation,
    description: '드래그 기능과 제약 조건, 드래그 영역 설정 방법을 설명합니다.',
  },
  {
    id: 'scroll',
    label: '스크롤',
    component: ScrollAnimation,
    description: '스크롤 위치에 따른 애니메이션과 시차 효과를 구현합니다.',
  },
  {
    id: 'viewport',
    label: '뷰포트',
    component: ViewportAnimation,
    description: '요소가 화면에 보일 때 실행되는 애니메이션을 설정합니다.',
  },
  {
    id: 'keyframe',
    label: '키프레임',
    component: KeyframeAnimation,
    description: '여러 단계의 연속적인 애니메이션을 정의하는 방법을 소개합니다.',
  },
  {
    id: 'path',
    label: '패스',
    component: PathAnimation,
    description: 'SVG 패스를 따라 움직이는 애니메이션을 구현합니다.',
  },
  {
    id: 'layout',
    label: '레이아웃',
    component: LayoutAnimation,
    description: '레이아웃 변경 시 자동으로 적용되는 애니메이션을 설정합니다.',
  },
];

const FramerMotionPage = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Framer Motion 가이드</h1>

      {/* 탭 네비게이션 */}
      <div className="tabs tabs-boxed">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 현재 탭에 대한 설명 */}
      {activeTabData && (
        <div className="bg-base-200 p-4 rounded-lg mb-4">
          <h2 className="text-xl font-semibold mb-2">{activeTabData.label}</h2>
          <p className="text-base-content/80">{activeTabData.description}</p>
        </div>
      )}

      {/* 선택된 탭의 컴포넌트 렌더링 */}
      <div className="mt-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="border rounded-lg p-4">
                <tab.component />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default FramerMotionPage;
