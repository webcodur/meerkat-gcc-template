import React, { memo } from 'react'
import { PaginatedTableDark, PaginatedTableLight } from '@/components/ui/paginatedTable/PaginatedTable'

// 테이블 컴포넌트를 메모이제이션
const MemoizedDarkTable = memo(PaginatedTableDark)
const MemoizedLightTable = memo(PaginatedTableLight)

const PaginationPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">다크 모드</h2>
        <div className="bg-gray-900 rounded-xl p-4">
          <MemoizedDarkTable />
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">라이트 모드</h2>
        <div className="bg-gray-300 rounded-xl p-4">
          <MemoizedLightTable />
        </div>
      </div>
    </div>
  )
}

export default memo(PaginationPage)
