'use client';
import { useState, useMemo } from 'react';
import { PaginationProps, GroupMoveDirection } from './types';
import { articles } from './mockData';
import { DataTable } from './dataTable/DataTable';
import { PaginationButtons } from './paginationButtons/PaginationButtons';

const ARTICLES_PER_PAGE = 3; // 페이지당 표시할 아이템 수
const VISIBLE_BUTTON_COUNT = 5; // 한 번에 표시할 페이지 버튼 수

const PaginatedTable = ({ theme = 'dark' }: PaginationProps) => {
    // 현재 페이지 상태 관리
    const [activePageNumber, setActivePageNumber] = useState(1);

    // 현재 페이지에 표시할 아이템 범위 계산
    const lastArticleIndex = activePageNumber * ARTICLES_PER_PAGE;
    const firstArticleIndex = lastArticleIndex - ARTICLES_PER_PAGE;
    const displayedArticles = articles.slice(firstArticleIndex, lastArticleIndex);

    // 전체 페이지 수 계산
    const totalPageCount = Math.ceil(articles.length / ARTICLES_PER_PAGE);

    /**
     * 현재 표시할 페이지 버튼 그룹 계산
     *
     * VISIBLE_BUTTON_COUNT 단위로 페이지 버튼을 그룹화하여 표시
     * 예) VISIBLE_BUTTON_COUNT가 5일 때: [1,2,3,4,5], [6,7,8,9,10], ...
     */
    const displayedPageNumbers = useMemo(() => {
        const activeButtonGroupIndex = Math.ceil(activePageNumber / VISIBLE_BUTTON_COUNT);
        const startPage = (activeButtonGroupIndex - 1) * VISIBLE_BUTTON_COUNT + 1;
        const endPage = Math.min(startPage + VISIBLE_BUTTON_COUNT - 1, totalPageCount);

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    }, [activePageNumber, totalPageCount]);

    // 현재 버튼 그룹과 전체 그룹 수 계산
    const activeButtonGroupIndex = Math.ceil(activePageNumber / VISIBLE_BUTTON_COUNT);
    const totalButtonGroupCount = Math.ceil(totalPageCount / VISIBLE_BUTTON_COUNT);

    /**
     * 페이지 변경 핸들러
     * @param targetPageNumber 이동할 페이지 번호
     */
    const handlePageChange = (targetPageNumber: number) => {
        setActivePageNumber(targetPageNumber);
    };

    /**
     * 페이지 그룹 이동 핸들러
     * @param direction 이동 방향 ('first' | 'prev' | 'next' | 'last')
     *
     * - first: 첫 페이지로 이동
     * - prev: 이전 그룹의 첫 페이지로 이동
     * - next: 다음 그룹의 첫 페이지로 이동
     * - last: 마지막 그룹의 첫 페이지로 이동
     */
    const handleGroupMove = (direction: GroupMoveDirection) => {
        switch (direction) {
            case 'first':
                setActivePageNumber(1);
                break;
            case 'prev':
                const previousGroupFirstPage = Math.max(
                    (activeButtonGroupIndex - 2) * VISIBLE_BUTTON_COUNT + 1,
                    1
                );
                setActivePageNumber(previousGroupFirstPage);
                break;
            case 'next':
                const nextGroupFirstPage = Math.min(
                    activeButtonGroupIndex * VISIBLE_BUTTON_COUNT + 1,
                    totalPageCount
                );
                setActivePageNumber(nextGroupFirstPage);
                break;
            case 'last':
                const lastGroupFirstPage = (totalButtonGroupCount - 1) * VISIBLE_BUTTON_COUNT + 1;
                setActivePageNumber(lastGroupFirstPage);
                break;
        }
    };

    return (
        <div className="p-4">
            {/* 데이터 테이블 컴포넌트 */}
            <DataTable theme={theme} currentItems={displayedArticles} />

            {/* 페이지네이션 버튼 컴포넌트 */}
            <PaginationButtons
                className="mt-6"
                theme={theme}
                currentPage={activePageNumber}
                visibleButtonGroup={displayedPageNumbers}
                onPageChange={handlePageChange}
                onGroupMove={handleGroupMove}
            />
        </div>
    );
};

// 테마별 컴포넌트 익스포트
export const PaginatedTableDark = () => <PaginatedTable theme="dark" />;
export const PaginatedTableLight = () => <PaginatedTable theme="light" />;
export default PaginatedTableDark;
