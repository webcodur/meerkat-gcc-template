import { useMemo } from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const PAGES_PER_GROUP = 4;

    // 현재 페이지 그룹 계산
    const currentGroup = Math.floor((currentPage - 1) / PAGES_PER_GROUP);

    // 현재 그룹의 페이지 버튼들 계산
    const pageButtons = useMemo(() => {
        const start = currentGroup * PAGES_PER_GROUP + 1;
        const end = Math.min(start + PAGES_PER_GROUP - 1, totalPages);
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }, [currentGroup, totalPages]);

    const handleFirstGroup = () => onPageChange(1);
    const handleLastGroup = () => onPageChange(totalPages);

    const handlePrevGroup = () => {
        const prevPage = Math.max(1, pageButtons[0] - PAGES_PER_GROUP);
        onPageChange(prevPage);
    };
    const handleNextGroup = () => {
        const nextPage = Math.min(totalPages, pageButtons[pageButtons.length - 1] + 1);
        onPageChange(nextPage);
    };

    if (totalPages <= 1) return null;

    return (
        <div className="join">
            {/* 첫 페이지 그룹으로 이동 */}
            <button
                className="join-item btn btn-sm"
                onClick={handleFirstGroup}
                disabled={currentPage <= PAGES_PER_GROUP}
            >
                «
            </button>

            {/* 이전 그룹으로 이동 */}
            <button
                className="join-item btn btn-sm"
                onClick={handlePrevGroup}
                disabled={currentPage <= PAGES_PER_GROUP}
            >
                ‹
            </button>

            {/* 페이지 버튼들 */}
            {pageButtons.map((page) => (
                <button
                    key={page}
                    className={`join-item btn btn-sm ${currentPage === page ? 'btn-active' : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            {/* 다음 그룹으로 이동 */}
            <button
                className="join-item btn btn-sm"
                onClick={handleNextGroup}
                disabled={pageButtons[pageButtons.length - 1] >= totalPages}
            >
                ›
            </button>

            {/* 마지막 페이지 그룹으로 이동 */}
            <button
                className="join-item btn btn-sm"
                onClick={handleLastGroup}
                disabled={pageButtons[pageButtons.length - 1] >= totalPages}
            >
                »
            </button>
        </div>
    );
};

export default Pagination;
