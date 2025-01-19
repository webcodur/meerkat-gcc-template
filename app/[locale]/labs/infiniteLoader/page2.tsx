'use client';

import React, { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Article } from '@/components/ui/paginatedTable/types';
import { articles } from '@/components/ui/paginatedTable/mockData';

const ITEMS_PER_PAGE = 10;

const fetchDummyArticles = async ({ pageParam = 0 }) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const HEAD = pageParam * ITEMS_PER_PAGE;
  const end = HEAD + ITEMS_PER_PAGE;
  const data = articles.slice(HEAD, end);
  return {
    data,
    nextPage: end < articles.length ? pageParam + 1 : undefined,
  };
};

const InfiniteLoader = () => {
  const observerRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['articles'],
    queryFn: fetchDummyArticles,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (status === 'pending') return <div>로딩 중...</div>;
  if (status === 'error') return <div>에러가 발생했습니다</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4">
        {data.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.data.map((article: Article) => (
              <div
                key={article.id}
                className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-gray-600">{article.content}</p>
                <div className="text-sm text-gray-500 mt-2">작성자: {article.name}</div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <div ref={observerRef} className="h-10 flex items-center justify-center">
        {isFetchingNextPage
          ? '로딩 중...'
          : hasNextPage
            ? '스크롤하여 더 보기'
            : '모든 데이터를 불러왔습니다'}
      </div>
    </div>
  );
};

export default InfiniteLoader;
