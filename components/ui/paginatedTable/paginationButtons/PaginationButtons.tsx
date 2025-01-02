'use client'

import { GroupMoveDirection } from '../types'
import { themeStyles } from '@/components/ui/paginatedTable/themeStyles'

interface PaginationButtonsProps {
  theme: 'dark' | 'light'
  currentPage: number
  visibleButtonGroup: number[]
  onPageChange: (pageNumber: number) => void
  onGroupMove: (direction: GroupMoveDirection) => void
  className?: string
}

export const PaginationButtons = ({
  theme,
  currentPage,
  visibleButtonGroup,
  onPageChange,
  onGroupMove,
  className = ''
}: PaginationButtonsProps) => {
  const styles = themeStyles[theme]

  return (
    <div className={`flex justify-center gap-3 ${className}`}>
      {/* 첫 페이지/이전 페이지 버튼 그룹 */}
      <div className={`join ${styles.pagination.wrapper}`}>
        <button 
          className={styles.pagination.button}
          onClick={() => onGroupMove('first')}
        >
          «
        </button>
        <button 
          className={styles.pagination.button}
          onClick={() => onGroupMove('prev')}
        >
          ‹
        </button>
      </div>

      {/* 페이지 번호 버튼 그룹 */}
      <div className={`join ${styles.pagination.wrapper}`}>
        {visibleButtonGroup.map((pageNum) => (
          <button
            key={pageNum}
            className={`join-item btn w-[3rem] ${
              currentPage === pageNum 
                ? styles.pagination.activeButton
                : styles.pagination.button
            }`}
            onClick={() => onPageChange(pageNum)}
          >
            {pageNum}
          </button>
        ))}
      </div>

      {/* 다음 페이지/마지막 페이지 버튼 그룹 */}
      <div className={`join ${styles.pagination.wrapper}`}>
        <button 
          className={styles.pagination.button}
          onClick={() => onGroupMove('next')}
        >
          ›
        </button>
        <button 
          className={styles.pagination.button}
          onClick={() => onGroupMove('last')}
        >
          »
        </button>
      </div>
    </div>
  )
} 