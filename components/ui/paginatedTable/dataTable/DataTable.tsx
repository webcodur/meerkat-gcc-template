'use client'

import { Article, ColumnId, columns } from '@/components/ui/paginatedTable/types'
import { themeStyles } from '@/components/ui/paginatedTable/themeStyles'

interface DataTableProps {
  theme: 'dark' | 'light'
  currentItems: Article[]
}

// 타입 안전성을 위한 헬퍼 함수
const getColumnValue = (article: Article, columnId: ColumnId): string => {
  return String(article[columnId])
}

export const DataTable = ({ theme, currentItems }: DataTableProps) => {
  const styles = themeStyles[theme]

  return (
    <div className={styles.table.wrapper}>
      <table className="table w-full table-fixed">
        <thead>
          <tr className={styles.table.header}>
            {columns.map((column) => (
              <th 
                key={column.id}
                style={{ width: column.width }}
                className={`${styles.table.headerText} h-12 px-4 align-middle`}
              >
                <div className="truncate">
                  {column.label}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((article) => (
            <tr key={article.id} className={styles.table.row}>
              {columns.map((column) => (
                <td 
                  key={column.id}
                  style={{ width: column.width }}
                  className={`${styles.table.cell} h-16 px-4 align-middle`}
                  title={getColumnValue(article, column.id)}
                >
                  <div className="truncate">
                    {getColumnValue(article, column.id)}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 