'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

type LayoutType = 'grid' | 'list' | 'masonry' | 'carousel';

const LayoutAnimation = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [layoutType, setLayoutType] = useState<LayoutType>('grid');

  const items = [
    { id: '1', title: '카드 1', color: 'bg-primary', height: 'h-48' },
    { id: '2', title: '카드 2', color: 'bg-secondary', height: 'h-64' },
    { id: '3', title: '카드 3', color: 'bg-accent', height: 'h-56' },
    { id: '4', title: '카드 4', color: 'bg-info', height: 'h-72' },
    { id: '5', title: '카드 5', color: 'bg-success', height: 'h-48' },
    { id: '6', title: '카드 6', color: 'bg-warning', height: 'h-64' },
  ];

  const getLayoutClass = () => {
    switch (layoutType) {
      case 'grid':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
      case 'list':
        return 'flex flex-col gap-4';
      case 'masonry':
        return 'columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4';
      case 'carousel':
        return 'flex gap-4 overflow-x-auto snap-x snap-mandatory';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 gap-4';
    }
  };

  const getItemClass = (item: (typeof items)[0]) => {
    const baseClass = `card ${item.color} text-primary-content cursor-pointer`;
    if (layoutType === 'carousel') {
      return `${baseClass} min-w-[300px] snap-center`;
    }
    if (layoutType === 'list') {
      return `${baseClass} flex-none`;
    }
    if (layoutType === 'masonry') {
      return `${baseClass} break-inside-avoid ${item.height}`;
    }
    return baseClass;
  };

  const layoutDescriptions = {
    grid: {
      title: '그리드',
      description: '카드가 격자 형태로 배치되며, 화면 크기에 따라 1~3열로 반응형 조정됩니다.',
    },
    list: {
      title: '리스트',
      description: '카드가 세로로 쌓이는 형태로, 각 항목이 전체 너비를 사용합니다.',
    },
    masonry: {
      title: '매스리',
      description:
        '핀터레스트 스타일의 타일형 레이아웃으로, 각 카드의 높이가 다르더라도 자연스럽게 배치됩니다.',
    },
    carousel: {
      title: '캐러셀',
      description: '카드를 가로로 스크롤할 수 있으며, 스크롤 시 카드 단위로 스냅됩니다.',
    },
  };

  return (
    <div className="space-y-6">
      <div className="prose">
        <h3>레이아웃 애니메이션</h3>
        <p>
          요소의 크기나 위치가 변경될 때 자동으로 애니메이션이 적용됩니다. 다양한 레이아웃 간의
          전환을 확인해보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {(Object.keys(layoutDescriptions) as LayoutType[]).map((type) => (
          <div key={type} className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title flex gap-2">
                {layoutDescriptions[type].title}
                <div
                  className={`badge ${
                    layoutType === type ? 'badge-primary' : 'badge-ghost'
                  } badge-sm`}
                >
                  {layoutType === type ? '현재 선택됨' : '클릭하여 변경'}
                </div>
              </h3>
              <p className="text-sm">{layoutDescriptions[type].description}</p>
              <div className="card-actions justify-end">
                <button
                  className={`btn btn-sm ${layoutType === type ? 'btn-primary' : 'btn-ghost'}`}
                  onClick={() => setLayoutType(type)}
                >
                  이 레이아웃으로 보기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-2">
        <button
          className={`btn btn-sm ${layoutType === 'grid' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setLayoutType('grid')}
        >
          그리드
        </button>
        <button
          className={`btn btn-sm ${layoutType === 'list' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setLayoutType('list')}
        >
          리스트
        </button>
        <button
          className={`btn btn-sm ${layoutType === 'masonry' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setLayoutType('masonry')}
        >
          매스리
        </button>
        <button
          className={`btn btn-sm ${layoutType === 'carousel' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setLayoutType('carousel')}
        >
          캐러셀
        </button>
      </div>

      <motion.div className={getLayoutClass()} layout>
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            className={getItemClass(item)}
            onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
          >
            <motion.div className="card-body" layout="position">
              <h2 className="card-title">{item.title}</h2>
              {selectedId === item.id && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  이것은 확장된 카드의 추가 내용입니다. 카드를 다시 클릭하면 닫힙니다.
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <div className="prose">
        <h4>주요 속성 설명</h4>
        <ul>
          <li>
            <code>layout</code>: 자동 레이아웃 애니메이션 활성화
          </li>
          <li>
            <code>layoutId</code>: 요소 간 전환 애니메이션을 위한 고유 ID
          </li>
          <li>
            <code>layout=&quot;position&quot;</code>: 위치만 애니메이션
          </li>
          <li>
            <code>layout=&quot;size&quot;</code>: 크기만 애니메이션
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LayoutAnimation;
