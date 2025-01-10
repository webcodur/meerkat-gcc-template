'use client';

const Home = () => {
  return (
    <div className="absolute top-0 start-0 flex w-full h-full p-8 items-center justify-center">
      {/* 좌측 열 */}
      <div className="flex flex-col w-full h-full p-8 items-center justify-center">
        <div className="flex flex-col w-full h-full p-8 items-center justify-center">
          <div className="flex flex-col w-full h-full p-8 items-center justify-center">
            <>출입차량사진 및 정보</>
          </div>
          <div className="flex flex-col w-full h-full p-8 items-center justify-center">
            <>금일 입출차 현황</>
          </div>
        </div>
      </div>
      {/* 우측 열 */}
      <div className="flex flex-col w-full h-full p-8 items-center justify-center">
        <>차단기별 설정</>
      </div>
    </div>
  );
};
export default Home;
