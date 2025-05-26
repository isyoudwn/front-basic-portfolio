"use client"

import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

interface GitHubCalendarProps {
  username: string
}

// 잔디 색상 정의
const CONTRIBUTION_COLORS = [
  "#161b22", // 0 contributions (base color)
  "#0e4429", // 1-9 contributions (level 1)
  "#006d32", // 10-19 contributions (level 2)
  "#26a641", // 20-29 contributions (level 3)
  "#39d353", // 30+ contributions (level 4)
]

export default function GitHubCalendar({ username }: GitHubCalendarProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 현재 년도 계산
  const currentYear = new Date().getFullYear()

  // 52주 x 7일 = 364일의 데이터 생성 (실제 데이터 대신 시각적 데모용)
  const generateDemoData = () => {
    const weeks = 52
    const days = 7
    const data = []

    for (let w = 0; w < weeks; w++) {
      const week = []
      for (let d = 0; d < days; d++) {
        // 랜덤한 기여도 생성 (0-4 레벨)
        // 실제 구현에서는 GitHub API에서 데이터를 가져와야 함
        const level = Math.floor(Math.random() * 5)
        week.push({
          level,
          color: CONTRIBUTION_COLORS[level],
          date: new Date(currentYear, 0, w * 7 + d + 1),
          count: level === 0 ? 0 : Math.floor(Math.random() * 10) * level,
        })
      }
      data.push(week)
    }

    return data
  }

  const [contributionData, setContributionData] = useState<any[][]>([])

  useEffect(() => {
    // 실제 구현에서는 GitHub API를 호출해야 함
    // 여기서는 데모 데이터로 대체
    setTimeout(() => {
      try {
        const demoData = generateDemoData()
        setContributionData(demoData)
        setLoading(false)
      } catch (err) {
        setError("GitHub 데이터를 불러오는 중 오류가 발생했습니다.")
        setLoading(false)
      }
    }, 1000) // 로딩 시뮬레이션
  }, [username])

  // 월 이름 배열
  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]

  // 현재 표시되는 월 계산
  const getVisibleMonths = () => {
    const visibleMonths = []
    for (let i = 0; i < 12; i++) {
      visibleMonths.push({
        name: months[i],
        position: (i * 100) / 12, // 상대적 위치 계산
      })
    }
    return visibleMonths
  }

  if (error) {
    return (
      <div className="text-center p-4 bg-gray-800 rounded-lg text-red-400">
        <p>{error}</p>
        <p className="text-sm mt-2">
          GitHub 프로필을 확인해 주세요:{" "}
          <a
            href={`https://github.com/${username}`}
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/{username}
          </a>
        </p>
      </div>
    )
  }

  return (
    <div className="github-contribution-calendar">
      {loading ? (
        <div className="space-y-3">
          <Skeleton className="h-4 w-full bg-gray-700" />
          <Skeleton className="h-24 w-full bg-gray-700" />
        </div>
      ) : (
        <div className="contribution-graph">
          {/* 월 표시 */}
          <div className="month-labels flex text-xs text-gray-400 mb-1 relative h-5">
            {getVisibleMonths().map((month, i) => (
              <div key={i} className="absolute" style={{ left: `${month.position}%` }}>
                {month.name}
              </div>
            ))}
          </div>

          {/* 요일 표시 */}
          <div className="flex">
            <div className="day-labels text-xs text-gray-400 pr-2 pt-2">
              <div className="h-[11px] leading-[11px]">월</div>
              <div className="h-[11px] mt-[2px] leading-[11px]"></div>
              <div className="h-[11px] mt-[2px] leading-[11px]">수</div>
              <div className="h-[11px] mt-[2px] leading-[11px]"></div>
              <div className="h-[11px] mt-[2px] leading-[11px]">금</div>
              <div className="h-[11px] mt-[2px] leading-[11px]"></div>
              <div className="h-[11px] mt-[2px] leading-[11px]">일</div>
            </div>

            {/* 잔디 그래프 */}
            <div className="contribution-grid flex">
              {contributionData.map((week, weekIndex) => (
                <div key={weekIndex} className="contribution-week">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className="contribution-day w-[11px] h-[11px] m-[2px] rounded-sm transition-all duration-200 hover:scale-125"
                      style={{
                        backgroundColor: day.color,
                        boxShadow: day.level > 0 ? `0 2px 5px rgba(0, 0, 0, 0.3)` : "none",
                      }}
                      title={`${day.date.toLocaleDateString()}: ${day.count} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* 범례 */}
          <div className="legend flex items-center justify-end mt-2 text-xs text-gray-400">
            <span className="mr-2">기여도:</span>
            <div className="flex items-center">
              {CONTRIBUTION_COLORS.map((color, i) => (
                <div
                  key={i}
                  className="w-[11px] h-[11px] mx-[2px] rounded-sm"
                  style={{
                    backgroundColor: color,
                    boxShadow: i > 0 ? `0 2px 5px rgba(0, 0, 0, 0.3)` : "none",
                  }}
                />
              ))}
            </div>
            <span className="ml-2">많음</span>
          </div>
        </div>
      )}
    </div>
  )
}
